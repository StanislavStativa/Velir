import { cn } from '@/lib/utils';
function Blur() {
  return (
    <div className="flex flex-wrap gap-7">
      <div className="bg-primary max-w-screen-xs w-full p-4"></div>
      <div className="bg-primary max-w-screen-xs w-full p-4"></div>
      <div className="bg-primary max-w-screen-xs w-full p-4"></div>
      <div className="bg-primary max-w-screen-xs w-full p-4"></div>
    </div>
  );
}
export default {
  title: 'Design System/Max Width',
  component: Blur,
  tags: ['autodocs'],
};

export const blur = {};
