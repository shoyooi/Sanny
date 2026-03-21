// Render once in App.tsx — JS in useCursor() drives the positions
export default function Cursor() {
  return (
    <>
      <div id="cursor" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}
