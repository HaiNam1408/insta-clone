import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';

const SuggestedItem = styled.div`
  ${StyledDisplay.dFlex({})}
  padding-top: 15px;
  width: 100%;
`;
const Item1 = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '10px' })}

  flex-grow: 3;
`;
const Item2 = styled.button`
  ${StyledTypo.heading7({ color: APP_COLORS.blue })}
  cursor: pointer;

  &:hover {
    color: ${APP_COLORS.grayLightest};
  }
`;
const Item3 = styled.div`
  ${StyledDisplay.dFlexCol({ direction: 'column' })}
  align-items: flex-start;
  font-size: 14px;
`;
const SuggestImg = styled(Avatar)`
  font-size: 12px;
`;
const Wei400 = styled.div`
  font-weight: 400;
  color: rgb(168, 168, 168);
`;
const Wei600 = styled.div`
  font-weight: 600;
  cursor: pointer;
`;

export default function SuggestAccount() {
  const { userCurrent } = useSelector((state) => state.users);

  return (
    <SuggestedItem>
      <Item1>
        <Item2>
          <SuggestImg
            src={userCurrent?.avatar}
            name={userCurrent?.username}
            round={true}
            size={44}
          />
        </Item2>
        <Item3>
          <Wei600>{userCurrent?.username}</Wei600>
          {userCurrent?.fullName && <Wei400>Luan Thnh</Wei400>}
        </Item3>
      </Item1>
      <Item2>
        <p>Switch</p>
      </Item2>
    </SuggestedItem>
  );
}
