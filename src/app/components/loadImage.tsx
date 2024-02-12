"use client";
import { useState, memo } from "react";
import Image, { StaticImageData } from "next/image";
import ContentLoader from "react-content-loader";

const LoadImage = memo(function LoadImage({
  src,
  alt,
  width,
  height,
}: {
  src: string | StaticImageData;
  alt: string | null | undefined;
  width: number;
  height: number;
}) {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Image
        src={src}
        alt={alt || "immagine di profilo"}
        width={width}
        height={height}
        style={{ visibility: visibility }}
        onError={() => setReveal(true)}
        onLoadingComplete={() => setReveal(true)}
      />
      <span
        style={{
          display: loader,
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          height: height,
          overflow: "hidden",
        }}
      >
        <ContentLoader
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          backgroundColor="#ffffff"
          foregroundColor="#e2e2e2"
        >
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
        </ContentLoader>
      </span>
    </div>
  );
});

export default LoadImage;
