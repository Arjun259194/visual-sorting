import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant, className, children, ...props }) => {
  variant = variant || "primary"
  return (
    <button
      className={`
      active:scale-90 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none
      rounded-lg border-2 py-1 px-3  capitalize transition-all duration-75 hover:brightness-110 font-semibold ${variant === "primary" ? "border-violet-600 bg-violet-600 text-violet-50" : "border-violet-600 bg-transparent text-violet-600"
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
