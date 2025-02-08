import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PhotosIcon } from '../../../assets/svgs/PhotosIcon';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { POST_ACTIONS } from '../../../redux/actions/postAction';
import CreatePostHeader from './CreatePostHeader';
import CropImagePost from './CropImagePost';
import SharePost from './SharePost';
import getCroppedImg from '../../../libs/utils/cropImage';
import DialogContainer from '../DialogContainer';
import loadingGif from '../../../assets/images/loading.gif';
import successGif from '../../../assets/images/success.gif';

const LIMIT_TEXT = 2200;

const CreatePost = (props) => {
  const { showModal, closeModal } = props;

  const dispatch = useDispatch();
  const { data, isLoading, message } = useSelector((state) => state.posts);

  const [file, setFile] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [nextIndex, setNextIndex] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(2);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= LIMIT_TEXT) {
      setText(inputValue);
    }
  };

  const onEmojiClick = (e) => {
    const sym = e.unified.split('_');
    const codeArray = [];

    sym.forEach((e) => codeArray.push('0x' + e));

    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  const handleGoNext = () => setNextIndex(nextIndex + 1);
  const handleGoBack = () => setNextIndex(nextIndex - 1);
  const handleGoChooseImage = () => setNextIndex(0);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleNextToShare = async () => {
    const { url, file } = await getCroppedImg(photoURL, croppedAreaPixels);

    if (url && file) {
      setFile(file);
      setPhotoURL(url);
      handleGoNext();
    }
  };

  const handleClickFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFile(file);
      handleGoNext();
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleCreatePost = () => {
    const formData = new FormData();

    formData.append('caption', text);
    if (file) {
      formData.append('images', file);
    }

    POST_ACTIONS.createOnePost(dispatch, formData);
    setText('');
    handleGoNext();
  };

  const handleClickCloseModal = () => {
    closeModal();
    handleGoChooseImage();
  };

  const ContainerComponent = useMemo(() => {
    switch (nextIndex) {
      case 0:
        return (
          <StyledCreatePostWrapper>
            <CreatePostHeader
              title="Create new post"
              handleGoBack={handleGoBack}
              handleClickNext={handleGoNext}
            />
            <StyledCreatePostContent>
              <PhotosIcon />
              <p>Drag photos and videos here</p>
              <StyledButton htmlFor="file" onChange={handleClickFile}>
                Select from computer <input type="file" id="file" hidden />
              </StyledButton>
            </StyledCreatePostContent>
          </StyledCreatePostWrapper>
        );

      case 1:
        return (
          <StyledCreatePostWrapper>
            <CreatePostHeader
              title="Crop"
              hasNext={nextIndex > 0}
              handleGoBack={handleGoBack}
              handleClickNext={handleNextToShare}
            />
            <StyledCreatePostContent>
              <CropImagePost
                crop={crop}
                zoom={zoom}
                photoURL={photoURL}
                setZoom={setZoom}
                setCrop={setCrop}
                handleCropComplete={handleCropComplete}
              />
            </StyledCreatePostContent>
          </StyledCreatePostWrapper>
        );

      case 2:
        return (
          <StyledCreatePostWrapper>
            <CreatePostHeader
              title="Create new post"
              titleBtn={'Share'}
              hasNext={nextIndex > 0}
              handleGoBack={handleGoChooseImage}
              handleClickNext={handleCreatePost}
            />
            <StyledCreatePostContent>
              <SharePost
                photoCropURL={photoURL}
                file={file}
                croppedAreaPixels={croppedAreaPixels}
                text={text}
                handleInputChange={handleInputChange}
                onEmojiClick={onEmojiClick}
              />
            </StyledCreatePostContent>
          </StyledCreatePostWrapper>
        );

      case 3:
        return (
          <StyledCreatePostWrapper>
            <CreatePostHeader
              title={isLoading && !message.success && !message.success ? 'Sharing' : 'Post shared'}
              hasNext={false}
            />
            <StyledCreatePostContent>
              <StyledCratedPostGif>
                <img src={isLoading && !message.success ? loadingGif : successGif} alt="" />
                <p className={`${isLoading && !message.success ? '' : 'show'}`}>
                  Your post has been shared.
                </p>
              </StyledCratedPostGif>
            </StyledCreatePostContent>
          </StyledCreatePostWrapper>
        );

      default:
        break;
    }
  }, [nextIndex, text, crop, zoom, croppedAreaPixels, isLoading, message, handleCreatePost]);

  return (
    <DialogContainer showModal={showModal} closeModal={handleClickCloseModal}>
      {ContainerComponent}
    </DialogContainer>
  );
};

const StyledCreatePostWrapper = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'start', align: 'stretch' })}
  ${StyledPosition.position({ position: 'absolute', zIndex: 9999 })}

  max-width: 908px;
  min-width: 568px;
  background-color: ${APP_COLORS.veryDark};
  border-radius: 15px;
`;

export const StyledCreatePostContent = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'center', gap: '16px' })}
  ${StyledTypo.textBodyBig({})}

  width: 100%;
  height: 550px;
  position: relative;
`;

const StyledButton = styled.label`
  ${StyledDisplay.dFlex({ justify: 'center' })};
  ${StyledTypo.heading6({})};

  border-radius: 10px;
  height: 32px;
  padding: 0 16px;
  background-color: ${APP_COLORS.blue};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledCratedPostGif = styled.div`
  ${StyledDisplay.dFlexCol({ gap: '16px' })}
  img {
    width: 96px;
    height: 96px;
  }

  p {
    opacity: 1;
    visibility: hidden;
    transform: translateY(15px);
    transition: 0.3s;

    &.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

export default CreatePost;
