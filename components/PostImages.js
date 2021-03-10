import React, { useCallback, useState } from "react";

import ImagesZoom from "./ImagesZoom";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  });
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  });
  return (
    <>
      <div>
        <img src={images[0].src} width="50%" onClick={onZoom} />
        <div
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          See next {images.length - 1} photos.
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

export default PostImages;
