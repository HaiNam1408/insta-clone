import React from 'react';
import Cropper from 'react-easy-crop';
import styled from 'styled-components';

const CropImagePost = ({ crop, zoom, photoURL, setZoom, setCrop, handleCropComplete }) => {
  return (
    <StyledCropImagePost className="ppppp">
      <Cropper
        image={photoURL}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onZoomChange={setZoom}
        onCropChange={setCrop}
        onCropComplete={handleCropComplete}
        style={{
          containerStyle: {
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px'
          }
        }}
      />
    </StyledCropImagePost>
  );
};

const StyledCropImagePost = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    border-radius: 15px;
  }
`;

export default CropImagePost;
