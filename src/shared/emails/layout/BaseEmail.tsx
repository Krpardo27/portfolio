type Props = {
  children: React.ReactNode;
};

export function BaseEmail({ children }: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ margin: 0 }}>Kevin Dev</h2>
        </div>

        {/* Content */}
        {children}

        {/* Footer */}
        <div
          style={{
            marginTop: "30px",
            fontSize: "12px",
            color: "#888",
          }}
        >
          <p>© {new Date().getFullYear()} Kevin Portfolio</p>
        </div>
      </div>
    </div>
  );
}
