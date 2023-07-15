import { useState, useEffect } from 'react';

const useImage = (image: string) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImage();
  }, [loading]);

  const getImage = () => {
    let img = new Image();
    img.src = image;

    img.onload = function () {
      setLoading(false);
    };
  };

  return loading;
};

export default useImage;
