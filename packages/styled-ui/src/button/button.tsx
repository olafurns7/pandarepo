import { styled } from 'styled-system/jsx';
import { cva, RecipeVariantProps } from 'styled-system/css';
import { Slot, SlotProps } from '@radix-ui/react-slot';

const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  variants: {
    size: {
      small: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        padding: '0.25rem 0.5rem'
      },
      medium: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        padding: '0.5rem 1rem'
      }
    },
    intent: {
      primary: {
        color: 'white',
        backgroundColor: 'rgb(59 130 246)',
        border: 'transparent',
        _hover: {
          backgroundColor: 'rgb(37 99 235)'
        }
      },
      secondary: {
        backgroundColor: 'white',
        color: 'rgb(31 41 55)',
        borderColor: 'rgb(156 163 175)',
        _hover: {
          backgroundColor: 'rgb(243 244 246)'
        }
      }
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

type ButtonRecipeProps = RecipeVariantProps<typeof buttonStyle>;

type Props = {
  size?: 'small' | 'medium';
  intent?: 'primary' | 'secondary';
  label?: string;
} & SlotProps & {
    asChild?: boolean;
  };

export function Button({ label = 'Button', asChild, ...props }: Props) {
  const Comp = asChild ? styled(Slot, buttonStyle) : styled('button', buttonStyle);
  return <Comp {...props}>{props.children ? props.children : label}</Comp>;
}
