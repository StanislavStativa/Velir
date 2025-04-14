import { cn } from '@/lib/utils';
import theme from 'tailwindcss/defaultTheme';

function Shadows() {
  return (
    <div className="flex flex-wrap gap-7 text-xs font-medium">
      {Object.entries(theme.boxShadow).map(([key]) => (
        <div key={key} className="flex flex-col gap-1.5">
          <div
            className={cn(
              `h-12 w-28 rounded-md bg-border`,
              key === 'DEFAULT' ? 'shadow' : `shadow-${key}`
            )}
          />
          <div className="flex items-center justify-between gap-2">
            <span>{key}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default {
  title: 'Design System/Shadow',
  component: Shadows,
  tags: ['autodocs'],
};

export const Shadow = {};
