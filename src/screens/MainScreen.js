import { useQuery } from "react-query";
import { getBudgets } from "../queries/budgets";

const MainScreen = () => {
  const { isLoading, isSuccess, data, isError, error } = useQuery(
    `budgets`,
    getBudgets
  );

  console.log(data);

  // if (isSuccess) {
  //   console.log(data);
  // };

  return (
    <>
      {data?.budgets.map((budget) => {
        return <p>{budget.name}</p>
      })}
    </>
  );
};

export default MainScreen;
