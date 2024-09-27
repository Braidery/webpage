import { ButtonHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "rounded-full px-4 py-2 md:px-6 md:py-3 bg-[#ECAB88] hover:bg-[#E09A77] text-white transition-all hover:scale-105",
          "sm:text-sm",
          "lg:text-lg",
          "xl:text-xl",
          "2xl:text-2xl",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
