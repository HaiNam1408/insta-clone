import styled from 'styled-components';
import { StyledDisplay, StyledPosition } from '../../../styles/mixins';
import { APP_COLORS } from '../../../themes';

const List = styled.div`
  ${StyledPosition.position({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999999
  })}
  ${StyledDisplay.dFlexCol({ justify: 'center' })}
  width: 100%;
`;
const NotifiStyle = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })}
  width: 440px;
  height: 300px;
  border-radius: 15px;
  background-color: ${APP_COLORS.veryDark};
  position: relative;
  z-index: 9999;
`;
const InfoStyle = styled.div`
  ${StyledDisplay.dFlexCol({})}
  padding: 32px;
`;
const ImgStyle = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 25px;
`;
const Styletxt = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })}

  width: 100%;
  padding: 4px 8px;
  height: 48px;
  border-top: 1px solid ${APP_COLORS.grayBtn};
  cursor: pointer;
`;

const StyledOverlay = styled.div`
  ${StyledPosition.position({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999
  })}
  background-color: rgba(${APP_COLORS.blackRBG}, .5);
`;
export default function Notifi(props) {
  const handleCancel = () => {
    props.handleUnshowModal();
  };
  return (
    <List>
      <StyledOverlay onClick={handleCancel} />
      <NotifiStyle>
        <InfoStyle>
          <ImgStyle
            src="https://res.cloudinary.com/dbs7lvxbp/image/upload/v1703661408/samples/man-portrait.jpg"
            alt="avt"
          />
          <p>Unfollow @minhngoc.2512?</p>
        </InfoStyle>
        <Styletxt>
          <p style={{ color: 'rgb(237, 73, 86)' }}>Unfollow</p>
        </Styletxt>
        <Styletxt onClick={handleCancel}>
          <p>Cancel</p>
        </Styletxt>
      </NotifiStyle>
    </List>
  );
}
