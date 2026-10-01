// Stable preview IDs only. Replace with real inventory when listings are ready.
export const placeholderWatches = Array.from({ length: 12 }, (_, index) => ({
  index: index + 1,
  slug: `watch-${String(index + 1).padStart(2, "0")}`,
}));
