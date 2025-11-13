
import { useEffect, useState } from "react";
import A_CSS from "./A_CSS";
import CollapsibleSection from "@/components/CollapsibleSection";
import B_Module from "./B_Module";
import C_StyleComponents from "./C_StyleComponents";
import D_Emotion from "./D_Emotion";
import D_EmotionPractice from "./emotion-practice/EmotionPractice";
import EmotionPractice from "./emotion-practice/EmotionPractice";

function Index() {
  const sectionsData = [
    {
      title: '1️. 일반 CSS',
      contents: [<A_CSS />],
    },
    {
      title: '2. Module CSS',
      contents: [<B_Module />],
    },
    {
      title: '3. StyleComponent',
      contents: [<C_StyleComponents />],
    },
    {
      title: '4. Emotion',
      contents: [<D_Emotion />],
    },
    {
      title: '5. Emotion + 반응형',
      contents: [<EmotionPractice />],
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
        === 리액트 스타일(Style) ===
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