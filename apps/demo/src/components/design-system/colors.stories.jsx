function ShadCnColors() {
  return (
    <div className="flex flex-wrap items-center gap-8 text-xs font-medium">
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-background" />
        <span>background</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-foreground" />
        <span>foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-muted" />
        <span>muted</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-muted-foreground" />
        <span>muted-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-card" />
        <span>card</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-card-foreground" />
        <span>card-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-popover" />
        <span>popover</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-popover-foreground" />
        <span>popover-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-border" />
        <span>border</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-input" />
        <span>input</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-primary" />
        <span>primary</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-primary-foreground" />
        <span>primary-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-secondary" />
        <span>secondary</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-secondary-foreground" />
        <span>secondary-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-accent" />
        <span>accent</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-accent-foreground" />
        <span>accent-foreground</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-destructive" />
        <span>destructive</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-12 w-36 shrink-0 rounded border bg-destructive-foreground" />
        <span>destructive-foreground</span>
      </div>
    </div>
  );
}

function TailwindColors() {
  const colors = [
    'Accent',
    'Slate',
    'Gray',
    'Zinc',
    'Neutral',
    'Stone',
    'Red',
    'Orange',
    'Amber',
    'Yellow',
    'Lime',
    'Green',
    'Emerald',
    'Teal',
    'Cyan',
    'Sky',
    'Blue',
    'Indigo',
    'Violet',
    'Purple',
    'Fuchsia',
    'Pink',
    'Rose',
  ];
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="flex flex-col gap-8 text-xs font-medium">
      {colors.map((color) => (
        <div key={color} className="flex flex-wrap items-center gap-4">
          {shades.map((shade) => (
            <div key={`${color}-${shade}`} className="flex flex-col gap-1.5">
              <div
                className={`h-12 w-24 shrink-0 rounded border bg-${color.toLowerCase()}-${shade}`}
              />
              <span>{`${color.toLowerCase()}-${shade}`}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default {
  title: 'Design System/Colors',
  component: ShadCnColors,
  tags: ['autodocs'],
};

export const shadcn = {
  render: () => (
    <>
      <ShadCnColors />
    </>
  ),
};
export const tailwind = {
  render: () => (
    <>
      <TailwindColors />
    </>
  ),
};
