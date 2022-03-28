export default function FilterList({
  setLowerCaseOfTaskFilter,
  statusFilter,
  setStatusFilter,
  durationFilter,
  setDurationFilter,
}) {
  return (
    <div className="filterListLayout solidBorder">
      <input
        className="filtersTextSize"
        type="search"
        placeholder="Search for a task..."
        onChange={(event) => setLowerCaseOfTaskFilter(event.target.value)}
      />
      <select
        className="filtersTextSize paddingSelectInput"
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option value="">Filter by task status</option>
        <option value="Pending">Pending</option>
        <option value="Complete">Completed</option>
      </select>
      <select
        className="filtersTextSize paddingSelectInput"
        value={durationFilter}
        onChange={(event) => setDurationFilter(event.target.value)}
      >
        <option value="">Filter by task duration</option>
        <option value="long">More than 1 hour</option>
        <option value="medium">Between 30 minutes and 1 hour</option>
        <option value="short">Up to 30 minutes</option>
      </select>
    </div>
  );
}
