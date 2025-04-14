import { RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextBlockProps } from './rich-text-block.props';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';

export const Default: React.FC<RichTextBlockProps> = (props) => {
  const { fields, params } = props;
  const text = fields ? (
    <JssRichText field={fields.text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = params?.RenderingIdentifier;

  if (fields) {
    return (
      <div
        className={cn('prose', {[props?.params?.styles]: props?.params?.styles,})}
        id={id ? id : undefined}
        data-component-name="rich-text-block"
      >
        {text}
      </div>
    );
  }
  return <NoDataFallback componentName="Rich Text Block" />;
};
