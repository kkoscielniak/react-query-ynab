import { useQuery } from "react-query";
import { getBudgets } from "../queries/budgets";

const MainScreen = () => {
  const { data, isLoading, isSuccess, error } = useQuery(`budgets`, getBudgets);

  if (isSuccess) {
    console.log(isSuccess, data);
  }

  return <div>{isSuccess ? "true" : "false"}</div>;
};

export default MainScreen;
