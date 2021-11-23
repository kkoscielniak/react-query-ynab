// import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BudgetListingScreen from "./screens/BudgetSelectionScreen";
import BudgetDetailsScreen from "./screens/BudgetDetailsScreen";

const App = () => {
  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Choose budget" component={BudgetListingScreen} />
          <Stack.Screen name="BudgetDetails" component={BudgetDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
