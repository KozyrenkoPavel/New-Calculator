function Input(props) {
  return (
    <div className="values">
      <input
        type="text"
        value={props.output}
        onChange={props.changeOutput}
        readOnly
        placeholder="0"
      />
    </div>
  );
}

export default Input;
