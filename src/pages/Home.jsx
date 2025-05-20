import preview from "../assets/preview-dashboard.png";

export default function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>🧠 Welcome to Your 404 Dashboard</h1>
      <p>
        This space will grow into your daily HQ for notes, PDFs, tasks, and
        links.
      </p>
      <img
        src={preview}
        alt="Dashboard Preview"
        style={{
          maxWidth: "100%",
          marginTop: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}
