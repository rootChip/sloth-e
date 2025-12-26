type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

import "./button.css";

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
