import React from "react";
import Input from "@atoms/Input";
import Text from "@atoms/Text";

interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2">
        <Text variant="span" className="font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Text>
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={error ? "border-red-500" : ""}
      />
      {error && (
        <Text variant="span" className="text-red-500 text-sm mt-1 block">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormField;
