interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
        {...props}
      >
        {props.label ? props.label : 'Label'}
      </button>
    </>
  );
};

export default Button;
