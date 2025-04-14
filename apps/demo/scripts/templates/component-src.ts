import { kebabCase } from 'change-case';
/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ${componentName}Props } from './${kebabCase(componentName)}.props';
import { get${componentName}UiProps, getStaticPropsFor${componentName} } from './${kebabCase(componentName)}.util';
import { ButtonBase as Button } from '@/components/button-component/ButtonComponent';

const ${componentName} = (props: ${componentName}Props): JSX.Element => {
 
  const { fields, params } = props;
  const { titleOptional, descriptionRequired, primaryLinkOptional } = fields ?? {};


  return (
    <div>
      {titleOptional && <Text tag="h2" field={titleOptional} />}
      <Text tag="p" field={descriptionRequired} />
      {primaryLinkOptional && <Button buttonLink={primaryLinkOptional}/>}
    </div>
  );
};

/**
 * "Data" developer method
 * TODO_SCAFFOLD_BE: If "getStaticProps" was deleted remove "useComponentProps". They work together.
 * TODO_SCAFFOLD_BE: Populate if needed, remove if not
 * Will be called during SSG.  Do NOT return null.
 * @param {ComponentRendering} _rendering
 * @param {LayoutServiceData} _layoutData
 * @param {GetStaticPropsContext} _context
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsFor${componentName}(_rendering, _layoutData);
};

export default ${componentName};
`;
}

export default generateComponentSrc;
