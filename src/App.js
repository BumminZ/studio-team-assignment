import { useState } from "react";
import { SketchPicker } from "react-color";
import "./App.css";

function App() {
  const [pathColor, setPathColor] = useState({
    1: {
      color: "",
      changed: false,
    },
    2: {
      color: "",
      changed: false,
    },
    3: {
      color: "",
      changed: false,
    },
    4: {
      color: "",
      changed: false,
    },
    5: {
      color: "",
      changed: false,
    },
    6: {
      color: "",
      changed: false,
    },
    7: {
      color: "",
      changed: false,
    },
    8: {
      color: "",
      changed: false,
    },
    9: {
      color: "",
      changed: false,
    },
    10: {
      color: "",
      changed: false,
    },
    11: {
      color: "",
      changed: false,
    },
  });
  const [numberRef, setNumberRef] = useState(0);
  const [colorPickerState, setColorPickerState] = useState(false);
  const [changedColor, setChangedColor] = useState("");

  const openColorPicker = (path, color) => {
    setColorPickerState(true);
    setNumberRef(path);
    setChangedColor(color);
    return;
  };

  const changeColor = (color) => {
    let changed = pathColor;
    changed[numberRef] = {
      color: color,
      changed: true,
    };
    setPathColor(changed);
    setChangedColor(color);
    setColorPickerState(false);
    return;
  };

  return (
    <>
      {colorPickerState && (
        <div>
          <SketchPicker
            onChange={(color) => {
              changeColor(color.hex);
            }}
            color={changedColor}
          />
        </div>
      )}

      <div className="App">
        <svg
          width="949"
          height="329"
          viewBox="0 0 949 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M751.044 83.618V158.971C771.852 158.971 788.721 142.103 788.721 121.295C788.721 100.486 771.852 83.618 751.044 83.618Z"
            fill={pathColor[1].changed ? pathColor[1].color : "#FCDD03"}
            onClick={() =>
              openColorPicker(
                1,
                pathColor[1].changed ? pathColor[1].color : "#FCDD03"
              )
            }
          />
          <path
            d="M738.895 149.552C738.895 154.754 734.678 158.971 729.476 158.971C724.274 158.971 720.057 154.754 720.057 149.552C720.057 144.35 724.274 140.133 729.476 140.133C734.678 140.133 738.895 144.35 738.895 149.552Z"
            fill={pathColor[2].changed ? pathColor[2].color : "#5ABA00"}
            onClick={() =>
              openColorPicker(
                2,
                pathColor[2].changed ? pathColor[2].color : "#5ABA00"
              )
            }
          />
          <path
            d="M663.542 158.972V83.619H738.895L663.542 158.972Z"
            fill={pathColor[3].changed ? pathColor[3].color : "#5ABA00"}
            onClick={() =>
              openColorPicker(
                3,
                pathColor[3].changed ? pathColor[3].color : "#5ABA00"
              )
            }
          />
          <path
            d="M751.044 171.028V192.625C757.303 195.279 761.693 201.479 761.693 208.705C761.693 215.93 757.303 222.131 751.044 224.784V246.381C771.852 246.381 788.721 229.513 788.721 208.705C788.721 187.896 771.852 171.028 751.044 171.028Z"
            fill={pathColor[4].changed ? pathColor[4].color : "#FE2C05"}
            onClick={() =>
              openColorPicker(
                4,
                pathColor[4].changed ? pathColor[4].color : "#FE2C05"
              )
            }
          />
          <path
            d="M726.779 208.705C726.779 200.89 731.915 194.276 738.994 192.05V171.028H663.641V246.382H738.994V225.36C731.915 223.134 726.779 216.52 726.779 208.705Z"
            fill={pathColor[5].changed ? pathColor[5].color : "#6E3ECC"}
            onClick={() =>
              openColorPicker(
                5,
                pathColor[5].changed ? pathColor[5].color : "#6E3ECC"
              )
            }
          />
          <path
            d="M148.519 146.224V89.959H124.85V243.598H148.519V226.988C155.993 236.954 169.489 245.466 188.382 245.466C218.487 245.466 242.156 221.175 242.156 185.879C242.156 150.584 218.695 127.331 188.382 127.331C170.319 127.331 155.993 135.843 148.519 146.224ZM218.072 185.879C218.072 210.586 201.047 224.912 183.192 224.912C165.544 224.912 148.519 211.001 148.519 186.295C148.519 161.795 165.544 147.885 183.192 147.885C201.047 147.885 218.072 161.173 218.072 185.879Z"
            fill={pathColor[6].changed ? pathColor[6].color : "black"}
            onClick={() =>
              openColorPicker(
                6,
                pathColor[6].changed ? pathColor[6].color : "black"
              )
            }
          />
          <path
            d="M288.04 183.388C288.04 159.096 298.836 151.83 316.276 151.83H322.297V127.331C306.103 127.331 294.683 134.39 288.04 145.809V129.199H264.371V243.598H288.04V183.388Z"
            fill={pathColor[7].changed ? pathColor[7].color : "black"}
            onClick={() =>
              openColorPicker(
                7,
                pathColor[7].changed ? pathColor[7].color : "black"
              )
            }
          />
          <path
            d="M342.851 243.598H366.52V129.199H342.851V243.598ZM354.893 114.043C363.198 114.043 369.842 107.399 369.842 98.887C369.842 90.374 363.198 83.73 354.893 83.73C346.381 83.73 339.737 90.374 339.737 98.887C339.737 107.399 346.381 114.043 354.893 114.043Z"
            fill={pathColor[8].changed ? pathColor[8].color : "black"}
            onClick={() =>
              openColorPicker(
                8,
                pathColor[8].changed ? pathColor[8].color : "black"
              )
            }
          />
          <path
            d="M396.417 243.598H420.086V194.392L462.44 243.598H494.414L441.678 186.502L494.414 129.199H461.61L420.086 179.235V89.959H396.417V243.598Z"
            fill={pathColor[9].changed ? pathColor[9].color : "black"}
            onClick={() =>
              openColorPicker(
                9,
                pathColor[9].changed ? pathColor[9].color : "black"
              )
            }
          />
          <path
            d="M510.193 243.598H533.862V89.959H510.193V243.598Z"
            fill={pathColor[10].changed ? pathColor[10].color : "black"}
            onClick={() =>
              openColorPicker(
                10,
                pathColor[10].changed ? pathColor[10].color : "black"
              )
            }
          />
          <path
            d="M730.109 162.891H733.672V166.453H730.109V162.891Z"
            fill={pathColor[11].changed ? pathColor[11].color : "#FCDD03"}
            onClick={() =>
              openColorPicker(
                11,
                pathColor[11].changed ? pathColor[11].color : "#FCDD03"
              )
            }
          />
        </svg>
      </div>
    </>
  );
}

export default App;
