import { CardProps } from './card.props';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Default as Icon } from '@/components/icon/Icon';
import { IconName } from '@/enumerations/Icon.enum';
import { Default as ImageWrapper } from '@/components/image/ImageWrapper.dev';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { cn } from '@/lib/utils';

/**
 * Card
 * @param props The UI data coming from the parent component
 * @returns
 */
export const Default: React.FC<CardProps> = (props) => {
  const { image, heading, description, link, className, icon, editable } = props;

  return (
    <Card className={cn('flex flex-col overflow-hidden', className)}>
      <ImageWrapper image={image} className="aspect-video w-full object-cover" />
      <CardHeader>
        <CardTitle>
          <Text field={heading} />
        </CardTitle>
        <RichText field={description} />
      </CardHeader>
      {link && (
        <CardFooter>
          <Button asChild>
            <Link editable={editable} field={link}>
              {editable && (
                <>
                  {link?.value?.text} <Icon iconName={icon ? icon : IconName.INTERNAL} />
                </>
              )}
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
