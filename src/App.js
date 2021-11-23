import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import BudgetListingScreen from "./screens/BudgetSelectionScreen";
import BudgetDetailsScreen from "./screens/BudgetDetailsScreen";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
}); // this needs to be outside of the React App!!!

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Choose budget" component={BudgetListingScreen} />
          <Stack.Screen name="BudgetDetails" component={BudgetDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
