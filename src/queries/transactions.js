import client from "./apiClient";

export const getTransactions = async ({ queryKey }) => {
  const [_, budgetId] = queryKey; // this is taken from the array from useQuery

  const { data } = await client.get(`/budgets/${budgetId}/transactions`);
  return data;
};

export const addTransaction = async ({ budgetId, payee, value, accountId }) => {
  const { data } = await client.post(`/budgets/${budgetId}/transactions`, {
    transaction: {
      payee_name: payee,
      amount: value,
      date: "2021-09-01",
      account_id: accountId,
    },
  });
  return data;
};
