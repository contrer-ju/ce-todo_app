export default function FilterList({ test }) {
  return (
    <div className="filterListLayout">
      <input
        className="filtersTextSize"
        type="search"
        placeholder="Search for a task..."
        onChange={(event) => console.log(event.target.value)}
      />
      <select
        className="filtersTextSize"
        value={""}
        onChange={(event) => console.log(event.target.value)}
      >
        <option value="0">Filter by task duration</option>
        <option value="3">More than 1 hour</option>
        <option value="2">Up to 1 hour</option>
        <option value="1">Less than 30 minutes</option>
      </select>
      <div>
        <input type="checkbox" onChange={() => console.log("Pending")} />
        <span>Pending</span>
        <input type="checkbox" onChange={() => console.log("Complete")} />
        <span>Complete</span>
      </div>
    </div>
  );
}
