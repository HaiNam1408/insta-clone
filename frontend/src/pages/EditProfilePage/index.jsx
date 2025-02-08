import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Switch from 'react-switch';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../styles/mixins';
import { APP_COLORS } from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { USER_ACTIONS } from '../../redux/actions/userAction';
import Loading from '../../components/atoms/Loading';

function EditProfilePage(props) {
  const dispatch = useDispatch();
  const { isLoading, message, userCurrent } = useSelector((state) => state.users);

  const [website, setWebsite] = useState('');
  const [blog, setBlog] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [showAccount, setShowAccounts] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Prefer not to stat');

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('avatar', file);

    USER_ACTIONS.uploadAvatar(dispatch, formData);
  };

  const handleSubmit = () => {};

  const handleInputChange = (event, set) => {
    set(event.target.value);
  };

  const handleInputClick = () => {
    setShowOptions(!showOptions);
  };

  const handleRadioChange = (event) => {
    setSelectedGender(event.target.value);
    setShowOptions(false);
  };

  const handleToggleButtonClick = () => {
    setShowAccounts(!showAccount);
  };

  return (
    <StyleEditPage>
      <StyledContainerEdit>
        <p style={{ fontSize: '20px' }}>Edit Profile</p>
        <StyledLineInfo>
          <div>
            <StyledAvatar
              htmlFor="upload-avatar"
              style={{ cursor: 'pointer' }}
              className={`${isLoading && !message.success ? 'uploading' : ''}`}>
              <Avatar
                src={userCurrent?.avatar}
                name={userCurrent?.username}
                round={true}
                size={56}
              />
              {isLoading && !message.success && (
                <StyledLoadingAvatar>
                  <Loading />
                </StyledLoadingAvatar>
              )}
            </StyledAvatar>
            <StyleInfoName>
              <p>{userCurrent?.username}</p>
              {userCurrent?.fullName && <span style={{ fontSize: '14px' }}>Đoàn Đại Hưng</span>}
            </StyleInfoName>
          </div>
          <StyledButtonUpload htmlFor="upload-avatar">
            Change photo
            <input
              type="file"
              id="upload-avatar"
              name="avatar"
              hidden
              onChange={handleChangeAvatar}
            />
          </StyledButtonUpload>
        </StyledLineInfo>

        <StyledLine>
          <p style={{ marginBottom: '8px' }}>Website</p>
          <StyledInput
            type="text"
            value={website}
            placeholder="Website"
            onChange={(e) => handleInputChange(e, setWebsite)}
          />
          <span>
            Editing your links is only available on mobile. Visit the Instagram app and edit your
            profile to change the websites in your bio.
          </span>
        </StyledLine>
        <StyledLine>
          <p style={{ marginBottom: '8px' }}>Bio</p>
          <div style={{ position: 'relative', width: '100%' }}>
            <textarea
              type="text"
              value={blog}
              placeholder="Bio"
              onChange={(e) => handleInputChange(e, setBlog)}
              maxLength={150}
            />
            <span style={{ position: 'absolute', right: '10px', bottom: '10px' }}>
              {blog.length}/150
            </span>
          </div>
        </StyledLine>

        <StyledLine>
          <p style={{ marginBottom: '8px' }}>Gender</p>
          <div style={{ width: '100%', position: 'relative' }}>
            <StyledInputGender
              type="text"
              onClick={handleInputClick}
              value={selectedGender}
              readOnly
            />
            <GenderSelectContainer showOptions={showOptions}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                  Male
                  <GenderRadio
                    type="radio"
                    value="Male"
                    checked={selectedGender === 'Male'}
                    onChange={handleRadioChange}
                  />
                </label>
                <label>
                  Female
                  <GenderRadio
                    type="radio"
                    value="Female"
                    checked={selectedGender === 'Female'}
                    onChange={handleRadioChange}
                  />
                </label>
                <label>
                  Other
                  <GenderRadio
                    type="radio"
                    value="Other"
                    checked={selectedGender === 'Other'}
                    onChange={handleRadioChange}
                  />
                </label>
              </div>
            </GenderSelectContainer>
          </div>
          <span>This won’t be part of your public profile.</span>
        </StyledLine>
        <StyledLine>
          <p style={{ marginBottom: '8px' }}>Show account suggestions on profiles</p>

          <StyledBoxShowAcc>
            <div>
              <p style={{ fontWeight: '500' }}>Show account suggestions on profiles</p>
              <span style={{ fontSize: '14px' }}>
                Choose whether people can see similar account suggestions on your profile, and
                whether your account can be suggested on other profiles.
              </span>
            </div>
            <Switch
              onChange={handleToggleButtonClick}
              checked={showAccount}
              onColor={APP_COLORS.white}
              onHandleColor={APP_COLORS.black}
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={30}
              width={50}
            />
          </StyledBoxShowAcc>
        </StyledLine>
        <div style={{ width: '100%', textAlign: 'end', display: 'flex', justifyContent: 'end' }}>
          <StyledButtonUpload style={{ width: '253px', height: '44px' }} as="button" disabled>
            Submit
          </StyledButtonUpload>
        </div>
      </StyledContainerEdit>
    </StyleEditPage>
  );
}
const StyleEditPage = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  padding: 40px 0;
  border-right: 1px solid ${APP_COLORS.veryDark};

  ${StyledDisplay.dFlexCol({})}

  span {
    font-size: 12px;
    color: #737373;
  }
`;

const StyledContainerEdit = styled.div`
  width: 700px;
  padding: 0 48px;

  ${StyledDisplay.dFlexCol({ justify: 'flex-start', align: 'flex-start', gap: '32px' })}

  p {
    font-weight: 700;
    text-align: start;
  }
`;

const StyledButtonUpload = styled.label`
  ${StyledTypo.heading6({})};
  ${StyledDisplay.dFlex({ justify: 'center' })};

  background-color: #1877f2;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  padding: 8px 12px;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const StyledLineInfo = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${APP_COLORS.veryDark};
  padding: 16px;

  ${StyledDisplay.dFlex({})}

  div {
    ${StyledDisplay.dFlex({ justify: 'flex-start' })}
  }

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 9999px;
  }
`;
const StyleInfoName = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'flex-start' })}
  color: ${APP_COLORS.white};
  padding-left: 16px;
`;

const StyledLine = styled.div`
  width: 100%;
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'flex-start', gap: '8px' })}

  textarea {
    ${StyledTypo.textBody2({})}
    padding: 12px;
    width: 100%;
    height: 62px;
    color: ${APP_COLORS.white};
    background-color: ${APP_COLORS.veryDark};
    border: none;
    border-radius: 10px;
    flex: 1 0 auto;
    outline: none;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    resize: none;
  }
`;

const StyledInput = styled.input`
  ${StyledTypo.textBody2({})}
  padding: 12px;
  width: 100%;
  height: 42px;
  color: ${APP_COLORS.white};
  background-color: ${APP_COLORS.veryDark};
  border: none;
  border-radius: 10px;
  flex: 1 0 auto;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
`;

const StyledInputGender = styled.input`
  ${StyledTypo.textBody2({})}

  padding: 12px;
  width: 100%;
  height: 55px;
  color: ${APP_COLORS.white};
  background-color: ${APP_COLORS.veryDark};
  border: none;
  border-radius: 10px;
  flex: 1 0 auto;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const GenderSelectContainer = styled.div`
  ${StyledTypo.textBody2({})}
  display: ${(props) => (props.showOptions ? 'block' : 'none')};
  position: absolute;
  top: 42px;
  right: 0;
  width: 200px;
  border-radius: 10px;
  color: ${APP_COLORS.white};
  background-color: ${APP_COLORS.veryDark};
  border: none;

  label {
    width: 100%;
    padding: 16px 12px;
    ${StyledDisplay.dFlex({ justify: 'space-between' })}

    &:hover {
      opacity: 0.5;
      cursor: pointer;
      border-radius: 10px;
    }
  }
`;

const GenderRadio = styled.input`
  margin-right: 5px;
  transform: scale(1.3);
`;

const StyledBoxShowAcc = styled.div`
  width: 100%;
  border-radius: 10px;
  color: ${APP_COLORS.white};
  background-color: ${APP_COLORS.veryDark};
  padding: 17px;

  ${StyledDisplay.dFlex({ gap: '16px' })}
`;

const StyledAvatar = styled.label`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;

  &.uploading::after {
    ${StyledPosition.positionCenter({ position: 'absolute' })}

    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(${APP_COLORS.blackRBG}, 0.4);
  }

  span {
    font-size: 24px;
    color: ${APP_COLORS.white};
  }
`;

const StyledLoadingAvatar = styled.div`
  ${StyledPosition.positionCenter({ position: 'absolute', zIndex: 999 })}
`;

export default EditProfilePage;
