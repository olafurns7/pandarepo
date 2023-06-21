import { Slot, SlotProps } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

import styles from './button.module.css';

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary
    },
    size: {
      small: styles.small,
      medium: styles.medium
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', className: styles.primaryMedium }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

export interface ButtonProps extends VariantProps<typeof button>, SlotProps {
  asChild?: boolean;
  label?: string;
}

export function Button({ asChild, className, intent, label = 'Button', size, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={button({ intent, size, className })} {...props}>
      {props.children ? props.children : label}
    </Comp>
  );
}
