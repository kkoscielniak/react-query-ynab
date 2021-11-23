import { Button, Text, View } from "react-native-web";

const BudgetDetailsScreen = ({ route, navigation }) => {
  const { budgetId } = route.params;

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
