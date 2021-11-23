import { View, Text } from "react-native-web";
import { Link } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getBudgets } from "../queries/budgets";

const BudgetSelectionScreen = ({ navigation }) => {
  const { isLoading, isSuccess, data, isError, error } = useQuery(
    `budgets`,
    getBudgets
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {data?.budgets.map((budget) => {
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
    </View>
  );
};

export default BudgetSelectionScreen;
