import { kebabCase, capitalCase } from 'change-case';

interface ComponentName {
  componentName: string;
}

const NoDataFallback = (props: ComponentName): JSX.Element => {
  const { componentName } = props;

  return (
    <div className={`component ${kebabCase(componentName)}`}>
      <div className="component-content">
        <span className="is-empty-hint">
          {capitalCase(componentName)} requires a datasource item assigned. Please assign a
          datasource item to edit the content.
        </span>
      </div>
    </div>
  );
};

export { NoDataFallback };
