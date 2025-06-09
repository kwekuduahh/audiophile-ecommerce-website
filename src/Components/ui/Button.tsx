import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonVariants {
    variant: 'Solid' | 'Outline' | 'Ghost';
    action: string,
    className?: string,
    children?: ReactNode
}

export const Button: React.FC<ButtonVariants> = ({ variant, action, className, children }) => {

    const variantOpt = {
        Solid: "text-pureWhite px-[1.97rem] py-[0.94rem] bg-darkOrange  hover:bg-fadedOrange subtitle duration-300",
        Outline: "text-pureBlack px-[1.97rem] py-[0.94rem] border border-[1px] border-pureBlack hover:bg-pureBlack hover:text-pureWhite subtitle duration-300",
        Ghost: "text-pureBlack/50 hover:text-darkOrange subtitle duration-300"
    }

    return (
        <button className={cn(variantOpt[variant], className)}>{action}{` `}{children}</button>
    )
} 