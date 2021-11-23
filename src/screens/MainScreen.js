import { View, Text } from "react-native-web";
import { useQuery } from "react-query";
import { getBudgets } from "../queries/budgets";

const MainScreen = () => {
  const { isLoading, isSuccess, data, isError, error } = useQuery(
    `budgets`,
    getBudgets
  );

  console.log(data);

  return (
    <View className="App">
      <header className="App-header">
        {data?.budgets.map((budget) => {
          return (
            <Text style={{ color: "white", padding: 10 }}>{budget.name}</Text>
          );
        })}
      </header>
    </View>
  );
};

export default MainScreen;
