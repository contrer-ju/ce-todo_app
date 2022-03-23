export default function Home({
  ControlTime,
  FilterList,
  TaskList,
  UpdateList,
}) {
  return (
    <div className="mainLayout">
      <FilterList />
      <ControlTime />
      <TaskList />
      <UpdateList />
    </div>
  );
}
