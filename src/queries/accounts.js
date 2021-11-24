import client from "./apiClient";

export const getAccounts = async ({ queryKey }) => {
  const [_, budgetId] = queryKey;

  const { data } = await client.get(`/budgets/${budgetId}/accounts`);
  return data;
};