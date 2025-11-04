import React from "react";

const h2Style: React.CSSProperties = {
  backgroundColor: "#222",
  color: "#815854",
  padding: "6px 16px 10px",
  cursor: "pointer",
  borderRadius: "6px",
  userSelect: "none",
  transition: "0.2s",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

function CollapsibleSection({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    onToggle();
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <section style={{ marginBottom: "20px", scrollMargin: "0" }}>
      <h2
        style={{
          ...h2Style,
          color: isOpen ? "#815854" : "#F9EBDE",
          backgroundColor: isOpen ? "#F9EBDE" : "#815854",
          border: isOpen ? "3px solid #815854" : "3px solid transparent",
        }}
        onClick={handleClick}
        tabIndex={-1}
        onMouseDown={(e) => e.preventDefault()}
      >
        <span
          style={{
            width: 0,
            height: 0,
            marginTop: "3px",
            borderLeft: "15px solid #ebb866",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        />
        {title}
      </h2>
      {isOpen && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "6px",
            backgroundColor: "#fafafa",
            overflowY: "auto",
            height: '100vh'
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export default CollapsibleSection;
