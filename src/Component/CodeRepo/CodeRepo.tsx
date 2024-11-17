import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeRepo.css";

const filePath = ["Code/_.cpp", "Code/___.cpp", "Code/README.md"];

const defaultFile = 1;

const CodeRepo = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultFile);
  const [selectedCode, setSelectedCode] = useState<string>("");

  const getCode = async (index: number) => {
    try {
      const file = await fetch(filePath[index - 1]);
      if (!file.ok) {
        throw new Error();
      }
      const text = await file.text();
      setSelectedCode(text);
    } catch (error) {
      setSelectedCode("Error Fetching File Data");
    }
  };

  useEffect(() => {
    getCode(defaultFile);
  }, []);

  const updateSelection = (index: number) => {
    setSelectedIndex(index);
    getCode(index);
  };

  return (
    <>
      <div className="repo">
        <div className="file-manager">
          <div className="folder">
            <img src="logo/folder.png" /> HelloWorld
          </div>

          <div className="folder-content">
            <div
              className={"file " + (selectedIndex === 1 ? " selected " : "")}
              onClick={() => updateSelection(1)}
            >
              <img src="logo/file.png" /> _.cpp
            </div>

            <div
              className={"file " + (selectedIndex === 2 ? " selected " : "")}
              onClick={() => updateSelection(2)}
            >
              <img src="logo/file.png" /> ___.cpp
            </div>

            <div
              className={"file " + (selectedIndex === 3 ? " selected " : "")}
              onClick={() => updateSelection(3)}
            >
              <img src="logo/file.png" /> README.md
            </div>
          </div>
        </div>
        <div className="code">
          <div className="code-name">
            CODE:{" "}
            {filePath[selectedIndex - 1].substring(
              filePath[selectedIndex - 1].lastIndexOf("/") + 1
            )}
          </div>
          <SyntaxHighlighter
            language="cpp"
            style={codeStyle}
            className="coding"
          >
            {selectedCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default CodeRepo;
