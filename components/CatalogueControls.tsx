export default function CatalogueControls() {
  return (
    <div className="catalogue-controls">
      <div className="filter-row">
        {["Brand", "Price", "Condition", "Year"].map((label) => (
          <label key={label} className="filter-label">
            {label}
            <select
              aria-label={`${label} filter preview`}
              disabled
              defaultValue="all"
            >
              <option value="all">
                All {label === "Price" ? "prices" : label.toLowerCase() + "s"}
              </option>
            </select>
          </label>
        ))}
      </div>
      <label className="sort-label">
        Sort by
        <select aria-label="Sort preview" disabled defaultValue="newest">
          <option value="newest">Newest</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </label>
      <p className="catalogue-demo-note">
        Collection preview — filters and sorting will be available when listings
        are added.
      </p>
    </div>
  );
}
