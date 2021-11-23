import { Text, View } from "react-native-web";

const BudgetDetailsScreen = ({ route }) => {
  const { budgetId } = route.params;

  return (
    <View className="App">
      <View className="App-header">
        <Text>Budget id: { budgetId }</Text>
      </View>
    </View>
  );
};

export default BudgetDetailsScreen;
