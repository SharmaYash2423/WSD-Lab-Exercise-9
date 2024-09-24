import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageFetcher = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/SharmaYash2423/JSON-File/refs/heads/main/games.json')
      .then((response) => {
        setImages(response.data.games);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Game Images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.name} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageFetcher;