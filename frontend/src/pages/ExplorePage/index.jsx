import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../themes';

import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { VscHeartFilled } from 'react-icons/vsc';
import { TbMessageCircle2Filled } from 'react-icons/tb';

function ExplorePage(props) {
  const ImageList = [
    {
      img: [
        'https://th.bing.com/th/id/OIF.z28X7uegXEM1YpU6e3cA8w?rs=1&pid=ImgDetMain',
        'https://i.pinimg.com/736x/2e/82/5b/2e825bc7d01a139d536b80b437676b5e.jpg',
        'https://i.pinimg.com/736x/48/16/17/481617c375a87badcb36ffc86dbe0c0e.jpg'
      ],
      type: 'image'
    },
    {
      img: [
        'https://th.bing.com/th/id/OIP.TL5C3ZXh5S2TEXTalppNIQAAAA?w=400&h=400&rs=1&pid=ImgDetMain'
      ],
      type: 'video'
    },
    {
      img: ['https://i.pinimg.com/originals/85/e7/a3/85e7a3c20a87c936342ce32d00e879aa.jpg'],
      type: 'image'
    },
    {
      img: [
        'https://i.pinimg.com/736x/93/ad/6b/93ad6b496733df734b9642a641ec2596.jpg',
        'https://i.pinimg.com/originals/49/f3/46/49f346bd3d953f0d5a8b1ceb89287a3a.jpg'
      ],
      type: 'image'
    },
    {
      img: ['https://i.pinimg.com/originals/45/99/9d/45999d2c2e98238d816cdbd9fc72a3ce.jpg'],
      type: 'image'
    },
    {
      img: ['https://i.pinimg.com/originals/5c/63/21/5c632192846fb0113f3c663e9569eabd.jpg'],
      type: 'video'
    },
    {
      img: ['https://i.pinimg.com/736x/24/fb/3c/24fb3cf2cf2f649f90f96cec46a7a77e.jpg'],
      type: 'video'
    },
    {
      img: ['https://i.pinimg.com/736x/64/29/a2/6429a23f5fa0c9a585259581a9dd9456.jpg'],
      type: 'image'
    },
    {
      img: ['https://th.bing.com/th/id/OIF.z28X7uegXEM1YpU6e3cA8w?rs=1&pid=ImgDetMain'],
      type: 'image'
    },
    {
      img: ['https://i.pinimg.com/originals/85/e7/a3/85e7a3c20a87c936342ce32d00e879aa.jpg'],
      type: 'video'
    },
    {
      img: [
        'https://i.pinimg.com/736x/93/ad/6b/93ad6b496733df734b9642a641ec2596.jpg',
        'https://i.pinimg.com/originals/45/99/9d/45999d2c2e98238d816cdbd9fc72a3ce.jpg',
        'https://i.pinimg.com/originals/45/99/9d/45999d2c2e98238d816cdbd9fc72a3ce.jpg'
      ],
      type: 'image'
    },
    {
      img: ['https://i.pinimg.com/originals/49/f3/46/49f346bd3d953f0d5a8b1ceb89287a3a.jpg'],
      type: 'video'
    }
  ];

  return (
    <StyledExplorePage>
      <StyledListImg>
        {ImageList.map((item, index) => (
          <Container key={index}>
            <img src={item.img[0]} alt="" />
            {item.img.length > 1 ? (
              <svg
                aria-label="Quay vòng"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
                style={{ position: 'absolute', right: '10', top: '10', width: '25', height: '25' }}>
                <title>Quay vòng</title>
                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
              </svg>
            ) : item.type === 'video' ? (
              <svg
                aria-label="Thước phim"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                style={{ position: 'absolute', right: '10', top: '10', width: '25', height: '25' }}>
                <title>Thước phim</title>
                <path d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"></path>
              </svg>
            ) : null}
            <ExploreHover className="show">
              <label htmlFor="">
                <VscHeartFilled style={{ fontSize: '20px' }} />
                5.164
              </label>
              <label htmlFor="">
                <TbMessageCircle2Filled style={{ fontSize: '20px' }} />
                168
              </label>
            </ExploreHover>
          </Container>
        ))}
      </StyledListImg>
    </StyledExplorePage>
  );
}
const StyledExplorePage = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center', align: 'center' })}
  max-width: ${APP_SIZES.xl};
  width: 100%;
  margin: 0 auto;
`;

const StyledListImg = styled.div`
  ${StyledDisplay.dFlex({ justify: 'flex-start', align: 'flex-start', wrap: 'wrap', gap: '8px' })}
  width: 950px;
  padding: 24px 0;
`;

const Container = styled.div`
  position: relative;
  width: 310px;
  height: 310px;
  display: inline-flex;

  img {
    width: 310px;
    object-fit: cover;
  }

  &:hover {
    .show {
      ${StyledDisplay.dFlex({ align: 'center', justify: 'center', gap: '25px' })}
    }
  }
`;

const ExploreHover = styled.div`
  width: 100%;
  height: 100%;
  ${StyledPosition.position({ left: 0, top: 0 })}
  background-color: #00000040;
  display: none;

  label {
    font-size: 16px;
    font-weight: 600;

    ${StyledDisplay.dFlex({ justify: 'center', align: 'center', gap: '6px' })}
  }
`;
export default ExplorePage;
