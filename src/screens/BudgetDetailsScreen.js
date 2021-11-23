import { Button, Text, View } from "react-native-web";
import { useQuery } from "react-query";
import { getTransactions } from "../queries/transactions";

const BudgetDetailsScreen = ({ route, navigation }) => {
  const { budgetId } = route.params;

  const {
    isLoading,
    isSuccess,
    data: responseData,
    isError,
    error,
  } = useQuery([`transactions`, budgetId], getTransactions);

  console.log(responseData);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button onPress={handleBack} title="Go back" />
      <Text>Budget id: {budgetId}</Text>
    </View>
  );
};

export default BudgetDetailsScreen;
