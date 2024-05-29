import { tv } from 'tailwind-variants';

export const baseButton = tv({
    base: /*tw*/ `text-gray-900 text-center relative font-semibold whitespace-nowrap align-middle 
        outline-none inline-flex items-center justify-center select-none overflow-hidden `,
    variants: {
        size: {
            xs: 'text-xs py-1 px-2',
            md: 'text-sm py-2 px-4',
            lg: 'text-base py-3 px-6',
            xl: 'text-lg py-4 px-8',
            xxl: 'text-xl py-5 px-10',
            square_xs: 'text-xs h-4 w-4 p-1',
            square_sm: 'text-sm h-6 w-6 p-1',
            square_md: 'text-base h-8 w-8 p-1',
            square_lg: 'text-lg h-10 w-10 p-1',
            square_xl: 'text-xl h-12 w-12 p-1'
        },
        vPadding: {
            xs: 'py-[4px]',
            sm: 'py-[8px]',
            md: 'py-[12px]',
            lg: 'py-[16px]'
        },
        vSpace: {
            xs: 'my-1',
            sm: 'my-2',
            md: 'my-4',
            lg: 'my-6'
        },
        HSpace: {
            xs: 'mx-1',
            sm: 'mx-2',
            md: 'mx-4',
            lg: 'mx-6'
        },
        align: {
            center: 'mx-auto',
            right: 'ml-auto',
            left: 'mr-auto',
            top: 'mb-auto',
            bottom: 'mt-auto'
        },
        rounded: {
            none: 'rounded-none',
            xs: 'rounded-[2px]',
            sm: 'rounded-[4px]',
            normal: 'rounded-[8px]',
            lg: 'rounded-[12px]',
            full: 'rounded-full'
        },
        behavior: {
            block: 'w-full'
        },
        color: {
            filled: 'text-white bg-blue-600',
            text: 'text-blue-600',
            outlined:
                "text-primary bg-transparent border-primary after:content-[''] after:absolute after:rotate-[25deg] after:top-[-100%] after:left-[-190%] after:bg-primary after:w-[150%] after:pt-[150%] after:transition-[left] after:duration-300 after:ease-linear after:z-[-1] hover:after:left-[-30%] hover:text-white hover:ring-2",
            ghost: ''
        }
    }
});

export const filledButton = tv({
    extend: baseButton,
    variants: {
        color: 'filled'
    }
});
export const textButton = tv({
    extend: baseButton,
    variants: {
        color: 'text'
    }
});
export const outlinedButton = tv({
    extend: baseButton,
    base: 'ring-1',
    variants: {
        color: 'outlined'
    }
});
export const ghostButton = tv({
    extend: baseButton,
    variants: {
        color: 'ghost'
    }
});
