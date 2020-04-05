import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
const BackgroundImage = ({ image, index }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImage();
  }, [loading]);

  const getImage = () => {
    let img = new Image();
    img.src = image.src;

    img.onload = function() {
      setLoading(false);
    };
  };

  return loading ? (
    <ContentLoader />
  ) : (
    <div className="card">
      {image.content ? (
        <div className="content">
          <a href={image.href} target="_blank" rel="noopener noreferrer">
            {image.content}
          </a>
        </div>
      ) : (
        ""
      )}

      <div
        className="card__image"
        style={{ backgroundImage: `url(${image.src})` }}
      />
    </div>
  );
};

export default BackgroundImage;
