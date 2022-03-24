import { useState } from "react";

const useFiltersStates = () => {
  const [taskFilter, setTaskFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");

  const setLowerCaseOfTaskFilter = (value) => {
    const lowerCaseTaskFilter = value.toLowerCase();
    setTaskFilter(lowerCaseTaskFilter);
  };

  return {
    taskFilter,
    setLowerCaseOfTaskFilter,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
  };
};

export default useFiltersStates;
