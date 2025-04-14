import React from 'react';
import { bool, node, array } from 'prop-types';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed.tsx';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth.tsx';
import { Default as Container3070 } from '@/components/container/container-3070/Container3070.tsx';
import { Default as Container4060 } from '@/components/container/container-4060/Container4060.tsx';
import { Default as Container5050 } from '@/components/container/container-5050/Container5050.tsx';
import { Default as Container6040 } from '@/components/container/container-6040/Container6040.tsx';
import { Default as Container7030 } from '@/components/container/container-7030/Container7030.tsx';
import { Default as Container303030 } from '@/components/container/container-303030/Container303030.tsx';
import Placeholder from '../placeholder/PlaceholderSize.tsx';

import { defaultMockData as containerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { defaultMockData as container5050MockData } from '@/components/container/container-5050/container-5050.mock';
import { defaultMockData as container6040MockData } from '@/components/container/container-6040/container-6040.mock';
import { defaultMockData as container4060MockData } from '@/components/container/container-4060/container-4060.mock';
import { defaultMockData as container7030MockData } from '@/components/container/container-7030/container-7030.mock';
import { defaultMockData as container3070MockData } from '@/components/container/container-3070/container-3070.mock';
import { defaultMockData as container303030MockData } from '@/components/container/container-303030/container-303030.mock';

const propTypes = {
  excludeTopMargin: bool,
  containerSizes: array,
  children: node,
};

const ContainerSizesHelper = (props) => {
  const { excludeTopMargin, containerSizes } = props;

  const component = props.children;

  const containersMap = {
    ContainerFullBleed,
    ContainerFullWidth,
    ContainerFullWidthInFullBleed: () => (
      <ContainerFullBleed {...containerFullBleedMockData} excludeTopMargin={excludeTopMargin}>
        <ContainerFullWidth {...containerFullWidthMockData} excludeTopMargin={true}>
          {component}
        </ContainerFullWidth>
      </ContainerFullBleed>
    ),
    Container30: Container3070,
    Container40: Container4060,
    Container60: Container6040,
    Container70: Container7030,
    Container50: Container5050,
    Container30Left: Container303030,
  };

  const getContainerProps = (containerSize) =>
    containerSize === 'Container50'
      ? {
          ...container5050MockData,
          left: component,
          right: <Placeholder>Container 50</Placeholder>,
        }
      : containerSize === 'Container60'
        ? {
            ...container6040MockData,
            left: component,
            right: <Placeholder>Container 40</Placeholder>,
          }
        : containerSize === 'Container40'
          ? {
              ...container4060MockData,
              left: component,
              right: <Placeholder>Container 60</Placeholder>,
            }
          : containerSize === 'Container30'
            ? {
                ...container3070MockData,
                left: component,
                right: <Placeholder>Container 70</Placeholder>,
              }
            : containerSize === 'Container70'
              ? {
                  ...container7030MockData,
                  left: component,
                  right: <Placeholder>Container 30</Placeholder>,
                }
              : containerSize === 'Container30Left'
                ? {
                    ...container303030MockData,
                    left: component,
                    center: <Placeholder>Container 30</Placeholder>,
                    right: <Placeholder>Container 30</Placeholder>,
                  }
                : containerSize === 'ContainerFullBleed'
                  ? {
                      ...containerFullBleedMockData,
                      children: component,
                    }
                  : {
                      ...containerFullWidthMockData,
                      children: component,
                    };

  return (
    <>
      {containerSizes.map((size, index) => (
        <React.Fragment key={index}>
          {containersMap[size]({
            ...getContainerProps(size),
            excludeTopMargin: excludeTopMargin,
            key: index,
          })}
        </React.Fragment>
      ))}
    </>
  );
};

ContainerSizesHelper.propTypes = propTypes;
export default ContainerSizesHelper;

