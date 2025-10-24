import React from "react";

interface TextAreaProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  value,
  onChange,
  placeholder = "",
  rows = 5,
  required = false,
  error = "",
  className = "",
}) => (
  <textarea
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    rows={rows}
    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
      error ? "border-red-500" : "border-gray-300"
    } ${className}`}
  />
);

export default TextArea;
