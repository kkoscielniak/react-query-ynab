import client from "./apiClient";

export const getBudgets = async () => {
  const { data } = await client.get("/budgets");
  return data;
};
