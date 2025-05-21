import preview from "../assets/preview-dashboard.png";
import ImageCard from "../components/atoms/ImageCard";

export default function Home() {
  return (
    <>
      <ImageCard src={preview} alt="Dashboard Preview">
        <h1>🧠 Welcome to Your 404 Dashboard</h1>
        <p>
          This space will grow into your daily HQ for notes, PDFs, tasks, and
          links.
        </p>
      </ImageCard>
    </>
  );
}
