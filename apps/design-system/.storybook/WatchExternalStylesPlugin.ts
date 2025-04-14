import { Compiler } from 'webpack';
import * as chokidar from 'chokidar';
import WebSocket from 'ws';

interface WatchExternalStylesPluginOptions {
  path: string; // Directory to watch
  wsPort: number; // Port for the WebSocket server
}

class WatchExternalStylesPlugin {
  private watchedDirectory: string;
  private watcher?: chokidar.FSWatcher;
  private wsServer?: WebSocket.Server;

  constructor(options: WatchExternalStylesPluginOptions) {
    if (!options || !options.path || !options.wsPort) {
      throw new Error("WatchExternalStylesPlugin: 'path' and 'wsPort' options are required.");
    }
    this.watchedDirectory = options.path;
    this.wsServer = new WebSocket.Server({ port: options.wsPort });
  }

  apply(compiler: Compiler): void {
    compiler.hooks.afterCompile.tapAsync('WatchExternalStylesPlugin', (compilation, callback) => {
      // Add watched directory to Webpack's context dependencies
      compilation.contextDependencies.add(this.watchedDirectory);
      callback();
    });

    compiler.hooks.watchRun.tap('WatchExternalStylesPlugin', (compiler) => {
      if (!compiler.watchMode) return; // Only in watch mode

      if (!this.watcher) {
        this.watcher = chokidar
          .watch(this.watchedDirectory, {
            ignoreInitial: true,
            usePolling: true, // Useful in some environments
          })
          .on('all', (event, filePath) => {
            console.log(`[WatchExternalStylesPlugin] Detected ${event}: ${filePath}`);
          });

        this.watcher.on('all', (event, filePath) => {
          console.log(`[WatchExternalStylesPlugin] File ${event}: ${filePath}`);
          compiler.watching?.invalidate(() => {
            console.log('[WatchExternalStylesPlugin] Recompilation triggered.');
          });
        });
      }
    });

    compiler.hooks.shutdown.tap('WatchExternalStylesPlugin', () => {
      if (this.watcher) {
        this.watcher.close();
        console.log('[WatchExternalStylesPlugin] Watcher closed.');
      }
      if (this.wsServer) {
        this.wsServer.close();
        console.log('[WatchExternalStylesPlugin] WebSocket server closed.');
      }
    });

    compiler.hooks.afterEmit.tapAsync('ReloadStorybook', (compilation, callback) => {
      console.log('CSS file has changed, triggering refresh in Storybook.');

      // Notify connected WebSocket clients to refresh
      if (this.wsServer) {
        this.wsServer.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'storybook/refresh' }));
          }
        });
      }

      callback();
    });
  }
}

export default WatchExternalStylesPlugin;
