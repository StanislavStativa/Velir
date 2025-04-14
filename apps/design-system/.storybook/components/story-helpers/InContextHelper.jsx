import React from 'react';
import { deepmerge } from 'deepmerge-ts';
import { node, shape, string } from 'prop-types';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth.tsx';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed.tsx';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { defaultMockData as containerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { sampleText } from '@/variables/global';
import { BackgroundColor } from '@/enumerations/BackgroundColor.enum';

const propTypes = {
  children: node,
  context: shape({
    parameters: shape({
      withInContext: Boolean || string, // expected values: true || 'both', 'above', 'below'
      noContainer: Boolean,
      bleedContainer: Boolean,
      inset: Boolean,
      backgroundColor: BackgroundColor,
      excludeTopMargin: Boolean,
    })
  })
};

const InContextHelper = (props) => {
  const component = props.children;
  const { parameters } = props.context;

  const contextAbove = parameters.withInContext === 'above' || parameters.withInContext === 'both' || parameters.withInContext === true;
  const contextBelow = parameters.withInContext === 'below' || parameters.withInContext === 'both' || parameters.withInContext === true;
  const noContainer = parameters.noContainer ?? false;
  const bleedContainer = parameters.bleedContainer ?? false;
  const inset = parameters.inset ? "1" : "0";
  const excludeTopMargin = parameters.excludeTopMargin ? "1" : "0";
  const bleedBackgroundColor = parameters.backgroundColor ?? null;


  const fullBleedColorParams = bleedBackgroundColor ? {
    params: {
      backgroundColor: bleedBackgroundColor,
    },
  } : {};

  const fullBleedInsetParams = inset ? {
    params: {
      inset: inset,
    },
  } : {};

  const marginParams = excludeTopMargin ? {
    params: {
      excludeTopMargin: excludeTopMargin,
    },
  } : {};
  
  const fullbleedMockData = deepmerge(
    containerFullBleedMockData,
    fullBleedColorParams,
    fullBleedInsetParams,
    marginParams
  );

  const fullwidthMockData = deepmerge(
    containerFullWidthMockData,
    marginParams
  );
 
  return (
    <>
      {contextAbove && (
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
      )}
      {!noContainer && !bleedContainer && <ContainerFullWidth {...fullwidthMockData}>{component}</ContainerFullWidth>}
      {!noContainer && bleedContainer && <ContainerFullBleed {...fullbleedMockData}>{component}</ContainerFullBleed>}
      {noContainer && component}
      {contextBelow && (
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
      )}
    </>
  )
}

InContextHelper.propTypes = propTypes;
export default InContextHelper;