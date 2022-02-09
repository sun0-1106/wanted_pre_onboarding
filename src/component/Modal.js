import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: relative;
  top: -29%;
`;

export const ModalBtn = styled.button`
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: blue;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  position: relative;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 30vh;
  height: 20vh;
  text-align: center;
  margin: 0 auto;
`;

export const Btn = styled.button`
  position: relative;
  top: 5%;
  border: none;
  background: none;
  font-size: 1.5rem;
`;

export const Word = styled.div`
  position: relative;
  top: 30%;
  font-size: 1.3rem;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler} value={isOpen}>
          {isOpen ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <Btn onClick={openModalHandler}>x</Btn>
              <Word>HELLO CODE STATES!</Word>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
