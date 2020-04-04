import React from "react";

const Image = ({ image }) => {
  return (
    <div className="card">
      <div className="content">
        <a href={image.href} target="_blank" rel="noopener noreferrer">
          {image.content}
        </a>
      </div>
      <div className={`card__image ${image.title}`} />
    </div>
  );
};

export default Image;
