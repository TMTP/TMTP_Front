import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function UploadImg() {
  const [img, setImg] = useState("");
  const formSubmit = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    axios
      .post("이미지 요청 주소", formData)
      .then((res) => {
        setImg(res.data.location);
        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
  };

  return (
    <div>
      <div>
        <Image src={img} alt="img" />
        <input
          type="file"
          accept="image/*"
          id="img"
          onChange={formSubmit}
        ></input>
      </div>
    </div>
  );
}
