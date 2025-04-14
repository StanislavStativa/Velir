import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import theme from 'tailwindcss/defaultTheme';

function Width() {
  return (
    <Table>
      <TableBody>
        {Object.entries(theme.spacing)
          .sort(([a], [b]) => {
            if (a === '0') return -1;
            if (b === '0') return 1;
            if (a === 'px') return -1;
            if (b === 'px') return 1;
            return a.localeCompare(b, undefined, { numeric: true });
          })
          .map(([key, value]) => (
            <TableRow key={key}>
              <TableCell className="p-1">{key}</TableCell>
              <TableCell className="p-1">{value}</TableCell>
              <TableCell className="p-1">
                <div className={cn(`bg-primary h-4 rounded-md`, `w-${key}`)} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default {
  title: 'Design System/Width',
  component: Width,
  tags: ['autodocs'],
};

export const width = {};
