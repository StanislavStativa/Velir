import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Container4060Props } from '@/components/container/container-4060/container-4060.props';
import {
  getContainerPlaceholderProps,
  isContainerPlaceholderEmpty,
} from '@/components/container/container.util';
import PlaceholderBase, { PlaceholderBaseProps } from '@/dataUiIntegration/PlaceholderBase';
import { Flex, FlexItem } from '@/components/flex/Flex.dev';
import { cn } from '@/lib/utils';

export const Default: React.FC<Container4060Props> = (props) => {
  const { rendering, componentFactory, left, right } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const leftPlaceholders = getContainerPlaceholderProps('container-forty-left', props.params);
  const rightPlaceholders = getContainerPlaceholderProps('container-sixty-right', props.params);

  const isEmptyPlaceholder =
    isContainerPlaceholderEmpty(rendering, leftPlaceholders, left) &&
    isContainerPlaceholderEmpty(rendering, rightPlaceholders, right);

  if (isEmptyPlaceholder && !isPageEditing) {
    return null;
  }

  const placeholderLeftProps: PlaceholderBaseProps = {
    placeholder: {
      name: leftPlaceholders.dynamicKey,
      rendering,
      componentFactory,
    },
    children: left,
  };

  const placeholderRightProps: PlaceholderBaseProps = {
    placeholder: {
      name: rightPlaceholders.dynamicKey,
      rendering,
      componentFactory,
    },
    children: right,
  };

  const excludeTopMargin = props?.params?.excludeTopMargin === '1' ? true : false;

  return (
    <section
      data-component="Container4060"
      data-class-change
      className={cn({
        'mt-4': !excludeTopMargin,
        'mt-0': excludeTopMargin,
        [props.params.styles]: props?.params?.styles,
      })}
    >
      <Flex wrap="nowrap">
        <FlexItem as="div" basis="4/10">
          <PlaceholderBase {...placeholderLeftProps} />
        </FlexItem>
        <FlexItem as="div" basis="6/10">
          <PlaceholderBase {...placeholderRightProps} />
        </FlexItem>
      </Flex>
    </section>
  );
};
