import * as changeCase from 'change-case';
import { ArgTypes } from '@storybook/types';

/** Learn more about custom storybook controls:
 *  https://storybook.js.org/docs/essentials/controls#annotation
 */

export type ControlTypeTypes =
  | 'select'
  | 'color'
  | 'radio'
  | 'boolean'
  | 'text'
  | 'number'
  | 'range'
  | 'object'
  | 'file'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'multi-select'
  | 'date';
export interface ArgPropType {
  prop: string;
  typeSummary: string;
  controlType: ControlTypeTypes;
  controlOptions: object | undefined;
  options: string[] | undefined;
}

/**
 * Converts a string to a readable string format.
 */
const toReadableString = (str: string, title = false) => {
  if (title) {
    return changeCase.capitalCase(str);
  } else {
    return changeCase.noCase(str);
  }
};

/**
 * Generates an argument type object.
 *
 * usage:
 * const ASPECT_RATIOS = makeArgType({
 *  prop: "aspectRatio",
 *  typeSummary: "Select aspect ratio",
 *  controlType: "select",
 *  controlOptions: undefined,
 *  options: [
 *    "ratio-1x1",
 *    "ratio-4x3",
 *    "ratio-16x9",
 *  ]
 * );
 *
 *
 * const HEADING_ARGS = makeArgType({
 *  prop: "some.heading.prop",
 *  typeSummary: "Heading value",
 *  controlType: "text",
 *  controlOptions: undefined,
 *  options: undefined
 * });
 */
export const makeArgType = (args: ArgPropType): ArgTypes => {
  const { prop, typeSummary, options, controlType, controlOptions } = args;
  return {
    [`${prop}`]: {
      name: `${toReadableString(prop, true)}`,
      description: `Select ${toReadableString(prop, false)} option`,
      table: {
        type: { summary: typeSummary },
      },
      ...(options && { options: options }),
      control: {
        type: controlType,
        ...(controlOptions && { ...controlOptions }),
      },
    },
  };
};

/**
 * Disables control for a given property.
 * @param {string} prop - The property to disable control for.
 * @returns {Object} - The disabled control object.
 */
export const disableControl = (prop: string) => ({
  [prop]: {
    control: false,
    table: {
      disable: true,
    },
  },
});

/**
 * Disables controls for an array of properties.
 * @param {string[]} props - The properties to disable controls for.
 * @returns {Object} - The disabled controls object.
 */
export const disableControls = (props: string[]) =>
  props.reduce(
    (acc, prop) => ({
      ...acc,
      ...disableControl(prop),
    }),
    {}
  );
