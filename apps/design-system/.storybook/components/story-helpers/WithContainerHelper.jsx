import React from 'react';
import { bool, node, oneOf, shape } from 'prop-types';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed.tsx';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth.tsx';
import { defaultMockData as containerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

const propTypes = {
  excludeTopMargin: bool,
  children: node,
  context: shape({
      parameters: shape({
        withContainer: oneOf(["fullwidth", "bleed"]).isRequired,
      })
    })
};

const WithContainerHelper = (props) => {
  const component = props.children;
  const { parameters } = props.context;

  const bleedContainer = parameters.withContainer === "bleed" ? true : false;

  return (
      <>
        {!bleedContainer && <ContainerFullWidth {...containerFullWidthMockData}>{component}</ContainerFullWidth>}
        {bleedContainer && <ContainerFullBleed {...containerFullBleedMockData}>{component}</ContainerFullBleed>}
      </>
    );
  };
  
  WithContainerHelper.propTypes = propTypes;
  export default WithContainerHelper;