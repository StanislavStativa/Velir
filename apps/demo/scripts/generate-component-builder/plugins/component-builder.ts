import { generateComponentBuilder } from '@sitecore-jss/sitecore-jss-dev-tools/nextjs';
import {
  ComponentBuilderPluginConfig,
  ComponentBuilderPlugin as ComponentBuilderPluginType,
} from '..';

// import { pascalCase } from 'change-case';
/**
 * Generates the component builder file.
 */
class ComponentBuilderPlugin implements ComponentBuilderPluginType {
  order = 9999;

  exec(config: ComponentBuilderPluginConfig) {
    generateComponentBuilder({
      components: config.components,
      packages: config.packages,
      watch: config.watch,
      componentRootPath: 'src/components/sxa',
    });

    return config;
  }
}

export const componentBuilderPlugin = new ComponentBuilderPlugin();
