import client from "./apiClient";

export const getBudgets = async () => {
  const response = await client.get("/budgets");
  return response.data.data;
};
