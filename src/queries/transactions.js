import client from "./apiClient";

export const getTransactions = async ({ queryKey }) => {
  const [_, budgetId] = queryKey; // this is taken from the array from useQuery
  
  const { data } = await client.get(`/budgets/${budgetId}/transactions`);
  return data; 
};
