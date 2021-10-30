import client from "./apiClient";

export const getTransactions = ({ budgetId }) => {
  const response = client.get(`/budgets/${budgetId}/transactions`);
  return response.data.data;
};
