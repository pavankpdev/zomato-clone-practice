import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Viewer from "react-viewer";

const MenuCard = ({ images, category }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="w-5/12 md:w-56">
        <div className="w-full h-36 md:h-56">
          <img
            src={images[0]}
            alt={`${category} Menu`}
            className="w-full h-full object-cover rounded-md"
            onClick={() => setVisible(true)}
          />
        </div>
        <h3 className="font-semibold md:text-xl">{category} Menu</h3>
        <small>{images.length} Pages</small>
      </div>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={images.map((image, index) => ({ src: image, alt: index }))}
      />
    </>
  );
};

export default MenuCard;
