import { useRef, useState } from "react";
import placeholder from "../assets/placeholder-image.png";

export default function Image() {
  const [imageUrl, setImageUrl] = useState<string>();
  let fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files ? event.target.files[0] : null;
    if (!file) return;
    let reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {imageUrl ? (
        <img className="workarea-img" src={imageUrl} alt="Uploaded Image" />
      ) : (
        <div
          className="workarea-img"
          onClick={() => fileInputRef.current?.click()}
        >
          <img
            className="workarea-img"
            src={placeholder}
            alt="image placeholder"
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
}
