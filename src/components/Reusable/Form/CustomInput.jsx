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

    const numberProps =
      type === "number-string"
        ? {
            inputMode: "numeric",
            pattern: "[0-9]*",
            onKeyDown: (e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "ArrowUp",
                  "ArrowDown",
                ].includes(e.key)
              ) {
                e.preventDefault();
              }
            },
          }
        : {};

    return type === "textarea" ? (
      <textarea {...commonProps} rows={4} />
    ) : (
      <input
        type={type}
        {...commonProps}
        {...numberProps}
        style={
          type === "number-string"
            ? {
                appearance: "none",
                MozAppearance: "textfield",
                WebkitAppearance: "none",
              }
            : {}
        }
        onWheel={(e) => type === "number-string" && e.target.blur()} // Prevent scroll wheel for number inputs
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
