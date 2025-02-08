import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { StyledDisplay, StyledPosition } from '../../../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../../../themes';

const SkeletonPostDialog = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <StyledSkeletonPostDialog>
        <StyledSkeletonPostDialogImage>
          <Skeleton width={600} height={'100%'} />
        </StyledSkeletonPostDialogImage>
        <StyledSkeletonPostDialogComment>
          <StyledPostSkeletonHeader>
            <Skeleton circle={true} width={36} height={36} />
            <StyledPostSkeletonHeaderContent>
              <Skeleton height={10} />
              <Skeleton height={10} width={'50%'} />
            </StyledPostSkeletonHeaderContent>
          </StyledPostSkeletonHeader>
          <StyledPostSkeletonFooter>
            <Skeleton height={10} width={'80%'} />
            <Skeleton height={10} />
            <Skeleton height={10} width={'50%'} />
          </StyledPostSkeletonFooter>
        </StyledSkeletonPostDialogComment>
      </StyledSkeletonPostDialog>
    </SkeletonTheme>
  );
};

const StyledSkeletonPostDialog = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center', align: 'center' })}
  ${StyledPosition.position({ position: 'absolute', zIndex: 9999 })}

  max-width: ${APP_SIZES.xl};
  max-height: 80%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${APP_COLORS.black};
`;

const StyledSkeletonPostDialogImage = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const StyledSkeletonPostDialogComment = styled.div`
  ${StyledDisplay.dFlexCol({ align: 'start' })}
  width: ${APP_SIZES.commentWidth};
  height: 100%;
  background-color: ${APP_COLORS.black};
  padding: 16px;
`;

const StyledPostSkeletonHeader = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', align: 'start', gap: '12px' })}

  width: 100%;
`;

const StyledPostSkeletonHeaderContent = styled.div`
  width: 40%;
`;

const StyledPostSkeletonFooter = styled.div`
  width: 40%;
`;

export default SkeletonPostDialog;
