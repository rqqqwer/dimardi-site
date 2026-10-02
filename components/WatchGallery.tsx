"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WatchGallery({
  photos,
}: {
  photos: StaticImageData[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div className="photo-gallery">
      <button
        type="button"
        className="photo-gallery-main"
        aria-label={`Enlarge watch photo ${selectedIndex + 1}`}
        aria-haspopup="dialog"
        onClick={() => {
          dialogRef.current?.showModal();
          setIsOpen(true);
        }}
      >
        <Image
          src={photos[selectedIndex]}
          alt={`Watch photo ${selectedIndex + 1}`}
          fill
          sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 964px) calc(100vw - 64px), 900px"
          className="gallery-photograph"
        />
      </button>
      <div className="photo-gallery-thumbnails" aria-label="Watch photos">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="photo-gallery-thumbnail"
            aria-label={`View photo ${index + 1}`}
            aria-pressed={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={photo}
              alt=""
              fill
              sizes="(max-width: 600px) 23vw, 160px"
              className="gallery-photograph"
            />
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="photo-lightbox"
        aria-label="Enlarged watch photo"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          type="button"
          className="photo-lightbox-close"
          aria-label="Close enlarged photo"
          autoFocus
          onClick={() => dialogRef.current?.close()}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="photo-lightbox-image">
          {isOpen && (
            <Image
              src={photos[selectedIndex]}
              alt={`Enlarged watch photo ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 1302px) calc(100vw - 48px), 1254px"
              className="gallery-photograph"
            />
          )}
        </div>
      </dialog>
    </div>
  );
}
