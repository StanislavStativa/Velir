import React from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Badge } from '@/components/ui/badge';
export type BackgroundThumbailProps = { children: React.ReactElement };
import { cn } from '@/lib/utils';

export const Default: React.FC<BackgroundThumbailProps> = (props) => {
  const { children } = props;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  return isPageEditing ? (
    <div
      className={cn(
        'bg-primary absolute bottom-4 right-4 rounded-md opacity-50 ring-4 ring-offset-2 hover:opacity-100'
      )}
    >
      <Badge className="nowrap hover:bg-primary absolute bottom-4 left-2/4 -translate-x-2/4 whitespace-nowrap">
        Update Background
      </Badge>
      {children}
    </div>
  ) : null;
};
