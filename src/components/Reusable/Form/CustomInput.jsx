import { forwardRef } from "react";

const CustomInput = forwardRef(
  ({ name, placeholder, required = false, type = "text" }, ref) => {
    const commonProps = {
      name,
      placeholder,
      required,
      ref,
      className:
        "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
    };

    return type === "textarea" ? (
      <textarea {...commonProps} rows={4} />
    ) : (
      <input type={type} {...commonProps} />
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
