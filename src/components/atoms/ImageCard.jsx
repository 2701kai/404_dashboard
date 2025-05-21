export default function ImageCard({ children, src, alt }) {
  return (
    <div className="card">
      {children}
      <img src={src} alt={alt} className="preview" />
    </div>
  );
}
