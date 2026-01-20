export default function Image({ src, alt = "", className = "", style = {} }) {
  const data = new URL(`${src}?as=picture`, import.meta.url).href;

  return (
    <img
      src={data}
      alt={alt}
      loading="lazy"
      className={className}   // <-- pindahkan di sini
      style={{ width: "100%", height: "auto", ...style }}
    />
  );
}
