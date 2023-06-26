import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function NavLink({
    active,
    ...props
}: InertiaLinkProps & {
    active?: boolean;
}) {
    return (
        <Link
            {...props}
            className={cn(
                active ? 'text-primary' : 'text-muted-foreground',
                'px-2 text-sm font-medium transition-colors hover:text-primary'
            )}
        />
    );
}
