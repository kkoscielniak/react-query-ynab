import { Button, Text, View } from "react-native-web";
import { useQuery } from "react-query";
import AddTransaction from "../components/AddTransaction";
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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error}</Text>;
  }

  const { data: transactionsData } = responseData;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button onPress={handleBack} title="Go back" />
      <Text>Budget id: {budgetId}</Text>

      <View>
        {transactionsData.transactions.map((transaction) => {
          const { payee_name: payee, amount } = transaction;

          return (
            <View>{payee}: {amount*0.001}</View>
          );
        })}
      </View>
      <View>
        <AddTransaction budgetId={budgetId}/>
      </View>
    </View>
  );
};

export default BudgetDetailsScreen;
