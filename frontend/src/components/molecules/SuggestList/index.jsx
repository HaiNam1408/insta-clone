import SuggestItem from './SuggestItem';
import { data } from '../../../data/peopleData';
import { useState } from 'react';
import styled from 'styled-components';
import Notifi from '../../atoms/Notifi';
const List = styled.div`
  width: 100%;
`;
export default function SuggestList({ isSolid, isSubTitle }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleUnshowModal = () => setShowModal(false);

  const suggestComponents = data.map((person, index) => (
    <SuggestItem
      key={index}
      avt={person.avt}
      nameIn={person.nameIn}
      nameFb={isSubTitle ? person.nameFb : null}
      act={person.act}
      isVerified={person.isVerified}
      isSolid={isSolid}
      handleShowModal={handleShowModal}
    />
  ));
  return (
    <>
      <List>{suggestComponents}</List>

      {showModal && <Notifi handleUnshowModal={handleUnshowModal} />}
    </>
  );
}
