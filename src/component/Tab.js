import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  position: relative;
  width: 97.7%;
  height: 4vh;
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
  }

  .focused {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: #fff;
    text-align: center;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const TabName = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 50%;
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map(function (tab, index) {
            return (
              <li
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}
              >
                {tab.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <TabName>{menuArr[currentTab].content}</TabName>
        </Desc>
      </div>
    </>
  );
};
