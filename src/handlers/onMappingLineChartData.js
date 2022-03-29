export default function onMappingLineChartData(taskList) {
  const lineChartData = [
    {
      day: "Sun",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Mon",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Tue",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Wed",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Thu",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Fri",
      Pending: 0,
      Completed: 0,
    },
    {
      day: "Sat",
      Pending: 0,
      Completed: 0,
    },
  ];

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].day === "Sun")
      taskList[i].status === "Pending"
        ? lineChartData[0].Pending++
        : lineChartData[0].Completed++;
    if (taskList[i].day === "Mon")
      taskList[i].status === "Pending"
        ? lineChartData[1].Pending++
        : lineChartData[1].Completed++;
    if (taskList[i].day === "Tue")
      taskList[i].status === "Pending"
        ? lineChartData[2].Pending++
        : lineChartData[2].Completed++;
    if (taskList[i].day === "Wed")
      taskList[i].status === "Pending"
        ? lineChartData[3].Pending++
        : lineChartData[3].Completed++;
    if (taskList[i].day === "Thu")
      taskList[i].status === "Pending"
        ? lineChartData[4].Pending++
        : lineChartData[4].Completed++;
    if (taskList[i].day === "Fri")
      taskList[i].status === "Pending"
        ? lineChartData[5].Pending++
        : lineChartData[5].Completed++;
    if (taskList[i].day === "Sat")
      taskList[i].status === "Pending"
        ? lineChartData[6].Pending++
        : lineChartData[6].Completed++;
  }

  return { lineChartData };
}
