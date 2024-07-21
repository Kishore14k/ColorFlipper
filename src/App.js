import { useState } from "react";
import "./App.css";
import Box from "./Box";
import InputColor from "./InputColor";
import ToggleColor from "./ToggleColor";

function App() {
  const [colorval, setcolorval] = useState("");
  const [hex, sethex] = useState("");
  const [isblack, setisblack] = useState(true);
  return (
    <div className="outer">
      <Box colorval={colorval} isblack={isblack} hex={hex} />
      <InputColor
        colorval={colorval}
        setcolorval={setcolorval}
        hex={hex}
        sethex={sethex}
      />
      <ToggleColor isblack={isblack} setisblack={setisblack} />
    </div>
  );
}

export default App;
