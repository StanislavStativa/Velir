export type RenderType =
  | 'video'
  | 'image'
  | 'link'
  | 'text'
  | 'rich-text'
  | 'eyebrow'
  | 'title'
  | 'subtitle';

export interface ComponentField {
  name: string;
  machineName: string;
  fieldType: string;
  required: boolean;
  defaultValue: string | null;
  type: string;
  renderType: RenderType;
}

export interface JiraFeatureData {
  id: string;
  key: string;
  fields: {
    summary: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: any;
    componentDataSourceFields: ComponentField[];
    domain: string;
  };
}

export interface TicketInfo {
  ticketKey: string;
  domain: string;
}
