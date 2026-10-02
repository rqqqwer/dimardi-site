import type { StaticImageData } from "next/image";
import whitePhotoOne from "@/photos/image copy 2.png";
import whitePhotoTwo from "@/photos/image copy 3.png";
import whitePhotoThree from "@/photos/image.png";
import redPhotoOne from "@/photos/image copy 4.png";
import redPhotoTwo from "@/photos/image copy 5.png";
import redPhotoThree from "@/photos/image copy 6.png";
import redPhotoFour from "@/photos/image copy 7.png";

export type WatchListing = {
  index: number;
  slug: string;
  photos: StaticImageData[];
  soldOut: boolean;
  description?: string;
};

const watchDescription =
  "New men’s quartz watches with a youthful, sporty style, available in several colours. Ideal as a holiday gift or for everyday wear.";

// Photos and the supplied description for the first two listings.
export const placeholderWatches: WatchListing[] = Array.from(
  { length: 12 },
  (_, index) => ({
    index: index + 1,
    slug: `watch-${String(index + 1).padStart(2, "0")}`,
    photos:
      index === 0
        ? [whitePhotoOne, whitePhotoTwo, whitePhotoThree]
        : index === 1
          ? [redPhotoOne, redPhotoTwo, redPhotoThree, redPhotoFour]
          : [],
    soldOut: index === 1,
    description: index < 2 ? watchDescription : undefined,
  }),
);
