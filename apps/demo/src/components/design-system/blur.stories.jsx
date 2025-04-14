import { cn } from '@/lib/utils';
function Blur() {
  return (
    <div className="flex flex-wrap gap-7 text-xs font-medium">
      Add blurs here
      <div className={cn(`bg-border h-12 w-28 rounded-md blur-md`)} />
      <div className="flex items-center justify-between gap-2">
        <span>blur</span>
        <span>md</span>
      </div>
    </div>
  );
}
export default {
  title: 'Design System/Blur',
  component: Blur,
  tags: ['autodocs'],
};

export const blur = {};
