"use client";

function ElementParallax({ children }: { children: React.ReactNode }) {
  return (
    <section className="snap-center h-full w-full relative flex items-center justify-center">
      <div className="min-h-[700px] h-full w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Parallax({ elementList }) {
  return (
    <>
      {elementList.map((Element, i) => (
        <ElementParallax key={i}>{Element}</ElementParallax>
      ))}
    </>
  );
}
