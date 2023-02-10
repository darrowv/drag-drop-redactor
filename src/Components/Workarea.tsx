import { ReactElement, useState } from "react";
import Image from "./Image";

export default function Workarea() {
  const [editorElements, setEditorElements] = useState<ReactElement[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    switch (data) {
      case "text":
        setEditorElements([
          ...editorElements,
          <textarea className="workarea-text" />,
        ]);
        break;
      case "image":
        setEditorElements([...editorElements, <Image />]);
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="workarea"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {editorElements}
    </section>
  );
}
