import { RADIAN } from "../constant/various";

export default function onMappingPieChartData(taskList, taskToDo) {
  const pieChartData = [
    { name: "Pending", value: 0 },
    { name: "Completed", value: 0 },
    { name: "Running", value: 0 },
  ];

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].status === "Pending") pieChartData[0].value++;
    if (taskList[i].status === "Completed") pieChartData[1].value++;
  }
  if (taskToDo !== "") pieChartData[2].value++;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.37;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return { pieChartData, renderCustomizedLabel };
}
