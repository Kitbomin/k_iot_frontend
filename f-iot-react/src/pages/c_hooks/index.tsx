// import React from 'react'
// import State01 from './a_useState/State01'
// import State02 from './a_useState/State02'
// import State03 from './a_useState/State03'
// import State04 from './a_useState/State04'
// import State05 from './a_useState/State05'
// import State06 from './a_useState/State06'
// import State06_Child from './a_useState/State06_Child'
// import Ref01 from './b_useRef/Ref01'

// const h2Style = {
//   backgroundColor: 'black',
//   color: 'orange'
// }

// function Index() {

//   return (
//     <div>
//       <h1 style={{backgroundColor: 'black', color: 'white'}}>
//         === 리액트 Hooks ===</h1>
//       <h2 style={h2Style}>2. 리액트 Hooks - useRef</h2>
//       <Ref01 />
//       <h2 style={h2Style}>1. 리액트 Hooks - useState</h2>
//       <State01 /> <hr />
//       <State02 /> <hr />
//       <State03 /> <hr />
//       <State04 /> <hr />
//       <State05 /> <hr />
//       <State06 /> <hr />
//     </div>
//   )
// }

// export default Index

import React, { useEffect, useState } from 'react';
import State01 from './a_useState/State01';
import State02 from './a_useState/State02';
import State03 from './a_useState/State03';
import State04 from './a_useState/State04';
import State05 from './a_useState/State05';
import State06 from './a_useState/State06';
import Ref01 from './b_useRef/Ref01';
import CollapsibleSection from '@/components/CollapsibleSection';
import Ref02 from './b_useRef/Ref02';
import Practice01 from './b_useRef/practice01';
import Practice02 from './b_useRef/Practice02';

const h2Style = {
  backgroundColor: 'black',
  color: 'orange',
  padding: '8px',
  cursor: 'pointer',
};


// ✅ Index 컴포넌트
function Index() {
  const [sections, setSections] = useState([false, false]);

  // ✅ 최신(마지막) 섹션만 자동으로 열리게
  useEffect(() => {
    setSections(prev => prev.map((_, i) => i === prev.length - 1));
  }, []);

  // ✅ 클릭 시 해당 섹션만 열림 (나머지는 닫힘)
  const toggleSection = (index: number) => {
    setSections(prev => prev.map((_, i) => i === index ? !prev[i] : false));
  };


  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white', padding: '8px' }}>
        === 리액트 Hooks ===
      </h1>


      <CollapsibleSection
        title="1. 리액트 Hooks - useState"
        isOpen={sections[0]}
        onToggle={() => toggleSection(0)}
      >
        <State01 /> <hr />
        <State02 /> <hr />
        <State03 /> <hr />
        <State04 /> <hr />
        <State05 /> <hr />
        <State06 /> <hr />
      </CollapsibleSection>

      <CollapsibleSection
        title="2. 리액트 Hooks - useRef"
        isOpen={sections[1]}
        onToggle={() => toggleSection(1)}
      >
        <Ref01 /> <hr />
        <Ref02 /> <hr />
        <Practice01 /> <hr />
        <Practice02 /> <hr />
      </CollapsibleSection>
    </div>
  );
}

export default Index;
