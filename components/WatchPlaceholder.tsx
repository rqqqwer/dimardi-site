export default function WatchPlaceholder({
  label = "Watch image placeholder",
}: {
  label?: string;
}) {
  return (
    <div className="product-image" role="img" aria-label={label}>
      <span className="placeholder-mark" aria-hidden="true">
        D.
      </span>
      <span className="placeholder-caption">IMAGE TO FOLLOW</span>
    </div>
  );
}
