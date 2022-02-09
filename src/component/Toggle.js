import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: 1s;
    &.toggle--checked {
      background-color: blue;
      transform: translateX(1px);
      transition: 1s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 1s;
    &.toggle--checked {
      transform: translateX(27.5px);
      transition: 1s;
    }
  }
`;

const Desc = styled.div`
  position: relative;
  top: 5%;
  left: 45%;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(isOn ? false : true);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        {isOn ? (
          <>
            <div className='toggle-container toggle--checked' isActive />
            <div className='toggle-circle toggle--checked' />
          </>
        ) : (
          <>
            <div className='toggle-container' />
            <div className='toggle-circle' />
          </>
        )}
      </ToggleContainer>
      <Desc>{isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</Desc>
    </>
  );
};
