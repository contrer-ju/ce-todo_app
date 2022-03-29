import { useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../constant/various";

export default function Dashboard({
  startCountdown,
  setStartCountdown,
  setPlaySelected,
  setPauseSelected,
  taskList,
  taskToDo,
  onMappingPieChartData,
  onMappingLineChartData,
}) {
  useEffect(() => {
    if (startCountdown) {
      setStartCountdown(false);
      setPlaySelected(false);
      setPauseSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pieChartData, renderCustomizedLabel } = onMappingPieChartData(
    taskList,
    taskToDo
  );

  const { lineChartData } = onMappingLineChartData(taskList);

  return (
    <div className="dashboardLayout">
      <div>
        <span>Total percentages of tasks by status</span>
        <div className="solidBorder">
          <ResponsiveContainer width="100%" minWidth={300} height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                labelLine={false}
                label={renderCustomizedLabel}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend layout="vertical" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <span>Number of tasks per day in the last week</span>
        <div className="solidBorder">
          <ResponsiveContainer width="100%" minWidth={300} height={300}>
            <BarChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Pending" fill={COLORS[0]} />
              <Bar dataKey="Completed" fill={COLORS[1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
