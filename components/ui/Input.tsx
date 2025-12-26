import "./input.css";

type InputProps = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
};

export default function Input({
  label,
  type = "text",
  name,
  placeholder,
}: InputProps) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
