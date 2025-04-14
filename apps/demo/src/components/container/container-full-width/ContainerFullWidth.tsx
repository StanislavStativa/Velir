import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ContainerFullWidthProps } from '@/components/container/container-full-width/container-full-width.props';
import PlaceholderBase, { PlaceholderBaseProps } from '@/dataUiIntegration/PlaceholderBase';
import { Flex, FlexItem } from '@/components/flex/Flex.dev';
import { cn } from '@/lib/utils';

export const Default: React.FC<ContainerFullWidthProps> = (props) => {
  const { rendering, componentFactory, children } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;
  const PLACEHOLDER_FRAGMENT = 'container-fullwidth';
  const PLACEHOLDER_NAME = `${PLACEHOLDER_FRAGMENT}-${props.params.DynamicPlaceholderId}`;
  const isEmptyPlaceholder =
    !(
      rendering?.placeholders?.[PLACEHOLDER_NAME] ||
      rendering?.placeholders?.[`${PLACEHOLDER_FRAGMENT}-{*}`]
    ) && !children;

  if (isEmptyPlaceholder && !isPageEditing) {
    return null;
  }

  const placeholderProps: PlaceholderBaseProps = {
    placeholder: {
      name: PLACEHOLDER_NAME,
      rendering,
      componentFactory,
    },
    children,
  };

  const excludeTopMargin = props?.params?.excludeTopMargin === '1' ? true : false;

  return (
    <section
      data-component="ContainerFullWidth"
      data-class-change
      className={cn(
        { '@container container--full-width group': true },
        {
          'mt-4': !excludeTopMargin,
          'mt-0': excludeTopMargin,
          [props.params.styles]: props?.params?.styles,
        }
      )}
    >
      <Flex className="group-[.is-inset]:p-0">
        <FlexItem basis="full">
          <PlaceholderBase {...placeholderProps} />
        </FlexItem>
      </Flex>
    </section>
  );
};
