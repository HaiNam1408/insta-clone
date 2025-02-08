import styled, { css } from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import { VerifiedIcon } from '../../../../assets/svgs/VerifiedIcon';
import { useState } from 'react';

const SuggestedItem = styled.div`
  ${StyledDisplay.dFlex({})}
  padding-top: 15px;
  width: 100%;
  font-weight: 600;
`;
const Item1 = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '10px' })}
  font-size: 14px;
  color: rgb(168, 168, 168);
  flex-grow: 3;
`;
const Item2 = styled.div`
  ${StyledTypo.heading7({ color: APP_COLORS.blue })}
  cursor: pointer;

  ${(props) =>
    props.$isSolid
      ? css`
          ${StyledTypo.heading6({})}
          padding: 5px 16px;
          border-radius: 8px;
          color: ${APP_COLORS.white};
          background-color: ${APP_COLORS.blue};
          &:hover {
            background-color: ${APP_COLORS.blueDark};
          }
        `
      : null};

  ${(props) =>
    props.$isFollow
      ? css`
          ${StyledTypo.heading6({})}
          padding: 5px 16px;
          border-radius: 8px;
          color: ${APP_COLORS.white};
          background-color: ${APP_COLORS.grayBtn};
          &:hover {
            background-color: ${APP_COLORS.veryDark};
          }
        `
      : null};

  &:hover {
    color: ${APP_COLORS.grayLightest};
  }
`;
const Item3 = styled.div`
  ${StyledDisplay.dFlexCol({ direction: 'column' })}
  align-items: flex-start;
`;
const SuggestImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
const Wei400 = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(168, 168, 168);
`;
const Size14W4 = styled.div`
  ${StyledTypo.textBody2({})}
  color: rgb(168, 168, 168);
`;
const Wei600 = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '5px' })}

  font-weight: 600;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;
export default function SuggestItem(props) {
  const [toggle, setToggle] = useState(false);

  const handleFollowing = () => {
    setToggle(true);

    if (toggle) props.handleShowModal();
  };

  return (
    <SuggestedItem>
      <Item1>
        <Item2>
          <SuggestImg src={props.avt} alt="avt" />
        </Item2>
        <Item3>
          <Wei600>
            {props.nameIn}
            {props.isVerified && <VerifiedIcon />}
          </Wei600>
          {props.nameFb && <Size14W4>{props.nameFb}</Size14W4>}
          <Wei400>{props.act}</Wei400>
        </Item3>
      </Item1>
      <Item2
        $isSolid={props.isSolid}
        $isFollow={toggle}
        onClick={() => {
          if (props.isSolid) {
            handleFollowing();
          }
        }}>
        {toggle ? 'Following' : 'Follow'}
      </Item2>
    </SuggestedItem>
  );
}
