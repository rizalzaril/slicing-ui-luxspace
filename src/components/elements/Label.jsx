const LabelLogin = (props) => {
  const { htmlFor, children, name } = props;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-white text-sm font-bold mb-2"
      >
        {children}
      </label>
    </div>
  );
};

export default LabelLogin;
