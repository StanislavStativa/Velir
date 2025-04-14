import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Container70Props } from '@/components/container/container-70/container-70.props';
import PlaceholderBase, { PlaceholderBaseProps } from '@/dataUiIntegration/PlaceholderBase';
import { Flex, FlexItem } from '@/components/flex/Flex.dev';
import { cn } from '@/lib/utils';

export const Default: React.FC<Container70Props> = (props) => {
  const { rendering, componentFactory, children } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const PLACEHOLDER_FRAGMENT = 'container-seventy';
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
      data-component="Container70"
      data-class-change
      className={cn({
        'mt-4': !excludeTopMargin,
        'mt-0': excludeTopMargin,
        [props.params.styles]: props?.params?.styles,
      })}
    >
      <Flex className="group-[.is-inset]:p-0">
        <FlexItem basis="full">
          <div className="mx-auto md:max-w-[70%]">
            <PlaceholderBase {...placeholderProps} />
          </div>
        </FlexItem>
      </Flex>
    </section>
  );
};
