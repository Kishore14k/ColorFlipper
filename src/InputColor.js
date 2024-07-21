import colornames from "colornames";

const InputColor = ({ colorval, setcolorval, hex, sethex }) => {
  return (
    <div>
      <input
        autoFocus
        className="inputbox"
        type="text"
        placeholder="Add color name"
        required
        value={colorval}
        onChange={(e) => {
          setcolorval(e.target.value);
          sethex(colornames(e.target.value));
        }}
      />
    </div>
  );
};

export default InputColor