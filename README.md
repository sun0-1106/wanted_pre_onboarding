### 구현한 방법과 이유

styled component를 사용해 css를 입혔습니다. 
styled-component는 CSS-in-JS라고 하는 Javascript파일 안에서 CSS를 처리 할 수 있게 해주는 라이브러리 입니다.
React로 개발을 하면서 component단위로 개발을 하게되는데, 이 때 styled component는 component형태로 개발할 때의 장점을 해치지 않는다고 생각해서 사용하였습니다.

### 어려웠던 점과 해결 방법

이전에 AutoComplete을 만들어본 적이 없어서 처음 상태를 만들 때 막연했습니다.
키보드이벤트를 어떻게 주어야할지 고민하다가 구글링으로 getModifierState 메소드를 찾아내 구현하였습니다.

### 실행 방법

- 모달
openModal 버튼을 누르면 모달창이 나옵니다.
x표를 누르거나 배경부분을 선택하면 모달창을 빠져나갈 수 있습니다.

- 토글
클릭으로 On/Off 상태를 변경시킬 수 있습니다.

- 탭
탭을 클릭하면 변경된 레이아웃을 조회할 수 있습니다.

- 태그
검색창을 누르고 단어를 입력하면 태그가 완성됩니다. 여러 태그를 만들 수 있습니다. 완성된 태그옆 x버튼을 누르면 사라집니다.

- 자동완성
검색창을 누르고 단어를 입력하면 자동완성이 됩니다.
자동완성이 되는 단어들은 다음과 같습니다.
  rustic,
  antique,
  vinyl,
  vintage,
  refurbished,
  신품,
  빈티지,
  중고A급,
  중고B급,
  골동품,
  
- 클릭해서 편집하기
처음엔 김코딩 20살로 설정되어있습니다.
이름 혹은 나이 입력창을 클릭하면 원하는 단어로 바꿀 수 있습니다.
