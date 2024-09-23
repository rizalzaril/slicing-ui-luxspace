const InputLogin = (props) => {
  const { type, placeholder, name, className } = props;

  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </>
  );
};

export default InputLogin;
