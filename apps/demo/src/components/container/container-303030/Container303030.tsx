import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Container303030Props } from '@/components/container/container-303030/container-303030.props';
import {
  getContainerPlaceholderProps,
  isContainerPlaceholderEmpty,
} from '@/components/container/container.util';
import PlaceholderBase, { PlaceholderBaseProps } from '@/dataUiIntegration/PlaceholderBase';
import { Flex, FlexItem } from '@/components/flex/Flex.dev';
import { cn } from '@/lib/utils';

export const Default: React.FC<Container303030Props> = (props) => {
  const { rendering, componentFactory, left, center, right } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const leftPlaceholder = getContainerPlaceholderProps('container-thirty-left', props.params);
  const centerPlaceholder = getContainerPlaceholderProps('container-thirty-center', props.params);
  const rightPlaceholder = getContainerPlaceholderProps('container-thirty-right', props.params);

  const isEmptyPlaceholder =
    isContainerPlaceholderEmpty(rendering, leftPlaceholder, left) &&
    isContainerPlaceholderEmpty(rendering, centerPlaceholder, center) &&
    isContainerPlaceholderEmpty(rendering, rightPlaceholder, right);

  if (isEmptyPlaceholder && !isPageEditing) {
    return null;
  }

  const placeholderLeftProps: PlaceholderBaseProps = {
    placeholder: {
      name: leftPlaceholder.dynamicKey,
      rendering,
      componentFactory,
    },
    children: left,
  };

  const placeholderCenterProps: PlaceholderBaseProps = {
    placeholder: {
      name: centerPlaceholder.dynamicKey,
      rendering,
      componentFactory,
    },
    children: center,
  };

  const placeholderRightProps: PlaceholderBaseProps = {
    placeholder: {
      name: rightPlaceholder.dynamicKey,
      rendering,
      componentFactory,
    },
    children: right,
  };

  const excludeTopMargin = props?.params?.excludeTopMargin === '1' ? true : false;

  return (
    <section
      data-component="Container303030"
      data-class-change
      className={cn({
        'mt-4': !excludeTopMargin,
        'mt-0': excludeTopMargin,
        [props.params.styles]: props?.params?.styles,
      })}
    >
      <Flex wrap="nowrap">
        <FlexItem as="div" basis="1/3">
          <PlaceholderBase {...placeholderLeftProps} />
        </FlexItem>
        <FlexItem as="div" basis="1/3">
          <PlaceholderBase {...placeholderCenterProps} />
        </FlexItem>
        <FlexItem as="div" basis="1/3">
          <PlaceholderBase {...placeholderRightProps} />
        </FlexItem>
      </Flex>
    </section>
  );
};
