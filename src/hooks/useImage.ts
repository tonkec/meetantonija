import { useState, useEffect } from 'react';

const useImage = (image: string) => {
  const [loading, setLoading] = useState(true);

  const getImage = () => {
    let img = new Image();
    img.src = image;

    img.onload = function () {
      setLoading(false);
    };
  };

  useEffect(() => {
    getImage();
  }, [loading]);

  return loading;
};

export default useImage;
