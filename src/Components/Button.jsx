function Button(props) {
  return (
    <>
      <button
        className="btn"
        name="btn"
        onClick={props.changeOutput}
        value={props.value}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
