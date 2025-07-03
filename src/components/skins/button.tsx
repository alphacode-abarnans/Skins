import { ButtonProps, com } from "@qbit.design/shell";


const ButtonSkin: com.qbit.Skin<ButtonProps> = (props: com.qbit.SkinProps<ButtonProps>) => {
  const { value, disabled, tabIndex, testId, onClick } = props;

  return (
    <button
      className={`py-2 px-4 rounded-md !bg-blue-300 font-medium !text-gray-800 ${disabled ? 'opacity-60' : 'hover:!bg-gray-300'}`}
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
