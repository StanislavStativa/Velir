import { ComponentBuilderPlugin, ComponentBuilderPluginConfig } from '..';
import { getComponentList } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Provides custom components configuration
 */
class ComponentsPlugin implements ComponentBuilderPlugin {
  order = 0;

  exec(config: ComponentBuilderPluginConfig) {
    /**
     * You can specify components which you want to import using custom path in format:
     * {
     *   path: string; // path to component
     *   moduleName: string; // module name to import
     *   componentName: 'component name'; // component rendering name
     * }
     *
     * Or you can register all components from a path using the below approach:
     * import { getComponentList } from '@sitecore-jss/sitecore-jss-dev-tools';
     * ...
     * const componentsPath = 'src/extra';
     * config.components = getComponentList(componentsPath);
     */
    const filesToExclude = [
      'index',
      '.dev',
      '.d',
      '.base',
      '.stories',
      '.props',
      '.types',
      '.type',
      '.mock',
      '.mocks',
      '.test',
      '.query',
      '.constants',
      '.enum',
      '.context',
      '.util',
      '.string',
      '.styles',
      '.dictionary',
      '.render',
      '.init',
    ];

    config.components = getComponentList('src/components').filter((c) => {
      return (
        !filesToExclude.some((v) => c.componentName?.includes(v)) &&
        !c.path.includes('/ui/') &&
        !c.path.includes('/sxa/')
      );
    }, []);

    return config;
  }
}

export const componentsPlugin = new ComponentsPlugin();
