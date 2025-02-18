import { forwardRef } from "react";

const CustomInput = forwardRef(
  ({ name, placeholder, required = false, type = "text" }, ref) => {
    return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        ref={ref}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
