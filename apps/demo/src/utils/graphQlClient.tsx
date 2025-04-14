import { LinkField, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from '../temp/config';

import * as R from 'ramda';

export const getGraphQlClient = (): GraphQLRequestClient => {
  const apiKey = getGraphQlKey();

  return new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: apiKey,
  });
};

export const getGraphQlKey = (): string => {
  return process.env.GRAPH_QL_CLIENT_API_KEY ?? config.sitecoreApiKey;
};

/**
 * Retrieves the value of the given property from the given GraphQL object.
 * If no property is defined, the whole value object will be retrieved
 * @param obj Object to find the value of
 * @param valueProp optional name of the property to retrieve the value of. If null, will return the whole value object
 * @returns the value of the given property or whole value object
 */
export const getValue = (
  obj: GqlField<unknown> | undefined | null,
  valueProp?: string | null
): string | number | boolean | Field => {
  if (!obj) return '';
  if (valueProp) {
    return (
      (R.path(['jsonValue', 'value', valueProp], obj) as string | number | boolean | Field) || ''
    );
  } else {
    return (R.path(['jsonValue', 'value'], obj) as string | number | boolean | Field) || '';
  }
};

export type GqlField<T> = {
  jsonValue: T;
};

/**
 * WARNING Link languages are not correct GraphQL links. Use "languageLinksUtils"
 */
export type GqlLink = GqlField<LinkField>;

export type GqlFieldString = GqlField<Field<string>>;
export type GqlFieldBoolean = GqlField<Field<boolean>>;
export type GqlFieldNumber = GqlField<Field<number>>;

export type GqlImage = GqlField<ImageField>;

export const GraphQLOperators = {
  Contains: 'CONTAINS',
  Equal: 'EQ',
  NotEqual: 'NEQ',
  NotContains: 'NCONTAINS',
  LessThan: 'LT',
  LessThanEquals: 'LTE',
  GreaterThan: 'GT',
  GreaterThanEquals: 'GTE',
};
