import React from "react";

type BadgeVariant = "primary" | "success" | "warning" | "error" | "info" | "neutral";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
    primary: "bg-blue-100 text-blue-800 ",
    success: "bg-green-100 text-green-800 ",
    warning: "bg-orange-100 text-orange-800 ",
    error: "bg-red-200 text-red-800 ",
    info: "bg-gray-100 text-gray-800 ",
    neutral: ""
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Badge: React.FC<BadgeProps> = ({ text, variant = "neutral" }) => {
  return (
    <span
      className={classNames(
        "inline-block px-3 py-1 rounded-full text-sm font-medium",
        variantClasses[variant]
      )}
    >
      {text}
    </span>
  );
};

const Badges: React.FC = () => {
  return (
    <div className="p-8 space-y-4 bg-white text-black ">
      <h1 className="text-xl font-bold">Badges</h1>
      <div className="space-x-3 ">
        <Badge text="Primary" variant="primary" />
        <Badge text="Success" variant="success" />
        <Badge text="Warning" variant="warning" />
        <Badge text="Error" variant="error" />
        <Badge text="Info" variant="info" />
      </div>
    </div>
  );
};

export default Badges;
