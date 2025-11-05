import React, { useEffect, useState } from 'react';
import CollapsibleSection from '@/components/CollapsibleSection';

import State01 from './a_useState/State01';
import State02 from './a_useState/State02';
import State03 from './a_useState/State03';
import State04 from './a_useState/State04';
import State05 from './a_useState/State05';
import State06 from './a_useState/State06';
import Ref01 from './b_useRef/Ref01';
import Ref02 from './b_useRef/Ref02';
import Ref_Practice01 from './b_useRef/Practice01';
import Ref_Practice02 from './b_useRef/Practice02';
import Effect01 from './c_useEffect/Effect01';
import Effect02 from './c_useEffect/Effect02';
import Effect_Practice01 from './c_useEffect/Practice01';
import UseCallback from './d_callback_memo/A_UseCallback';
import UseMemo from './d_callback_memo/B_UseMemo';
import Reducer01 from './e_useReducer/Reducer01';
import Reducer02 from './e_useReducer/Reducer02';

function Index() {
  const sectionsData = [
    {
      title: '1️. 리액트 Hooks - useState',
      contents: [<State01 />, <State02 />, <State03 />, <State04 />, <State05 />, <State06 />],
    },
    {
      title: '️2. 리액트 Hooks - useRef',
      contents: [<Ref01 />, <Ref02 />, <Ref_Practice01 />, <Ref_Practice02 />],
    },
    {
      title: '️3. 리액트 Hooks - useEffect',
      contents: [<Effect01 />, <Effect02 />, <Effect_Practice01 />,],
    },
    {
      title: '️4. 리액트 Hooks - useCallback & useMemo',
      contents: [<UseCallback/>, <UseMemo />],
    },
    {
      title: '️5. 리액트 Hooks - useReducer',
      contents: [<Reducer01 />, <Reducer02 /> ],
    },
  ];

  // 자동으로 섹션 길이 감지 + 최신 섹션만 열기
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpenIndex(sectionsData.length - 1); // 최신 섹션 자동 오픈
  }, [sectionsData.length]);

  // 섹션 클릭 시 하나만 열림
  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <h1
        style={{
          background: 'linear-gradient(90deg, #111, #333)',
          color: '#fff',
          padding: '12px 16px',
          borderRadius: '6px',
        }}
      >
        === 리액트 Hooks ===
      </h1>

      <div style={{ marginTop: '12px' }}>
        {sectionsData.map((section, i) => (
          <CollapsibleSection
            key={i}
            title={section.title}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          >
            {section.contents.map((Component, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                {Component}
                {idx !== section.contents.length - 1 && <hr />}
              </div>
            ))}
          </CollapsibleSection>
        ))}
      </div>
    </div>
  );
}

export default Index;
