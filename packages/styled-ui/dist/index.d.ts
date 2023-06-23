import * as react_jsx_runtime from 'react/jsx-runtime';
import { SlotProps } from '@radix-ui/react-slot';

type Props = {
    size?: 'small' | 'medium';
    intent?: 'primary' | 'secondary';
    label?: string;
} & SlotProps & {
    asChild?: boolean;
};
declare function Button({ label, asChild, ...props }: Props): react_jsx_runtime.JSX.Element;

export { Button };
