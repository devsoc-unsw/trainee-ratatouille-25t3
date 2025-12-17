type InputProp = {
  text?: string;
  type?: string;
};
  
const Input = (props: InputProp) => {
  return (
    <>
      <input 
        type={props.type || "text"} 
        placeholder={props.text}
      />
    </>
  );
};

export { Input };