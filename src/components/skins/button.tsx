import React from "react"
import { ButtonProps, com } from "@qbit.design/shell";


const ButtonSkin: com.qbit.Skin<ButtonProps> = (props: com.qbit.SkinProps<ButtonProps>) => {
  const { value, disabled, tabIndex, testId, onClick, className } = props;

  return (
    <button
      className={`py-2 px-4 rounded-lg bg-blue-300 font-medium text-blue-800 ${className} ${disabled ? 'opacity-60' : 'hover:bg-green-600'}`}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {value}
    </button>
  );
};

export default ButtonSkin;
