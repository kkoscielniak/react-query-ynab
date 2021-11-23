import { View, Text } from "react-native-web";
import { Link } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getBudgets } from "../queries/budgets";

const BudgetListingScreen = ({ navigation }) => {
  const {
    isLoading,
    isSuccess,
    data: responseData,
    isError,
    error,
  } = useQuery(`budgets`, getBudgets);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error}</Text>;
  }

  const budgetData = responseData?.data;

  return (
    <>
      {budgetData.budgets.map((budget) => {
        const { id: budgetId, name } = budget;

        return (
          <Link
            key={budgetId}
            to={{
              screen: "BudgetDetails",
              params: { budgetId },
            }}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default BudgetListingScreen;
