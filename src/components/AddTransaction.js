import { useState } from "react";
import { TextInput, View, Text, Button, Picker } from "react-native-web";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTransaction } from "../queries/transactions";
import { getAccounts } from "../queries/accounts";

const AddTransaction = ({ budgetId }) => {
  const [payeeText, setPayeeText] = useState("");
  const [valueText, setValueText] = useState(0);
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const queryClient = useQueryClient(); 

  const {
    isLoading,
    data: responseData,
    isError,
    error,
  } = useQuery([`accounts`, budgetId], getAccounts, {
    onSuccess: (data) => {
      setSelectedAccountId(data.data.accounts[0].id);
    },
  });

  const mutation = useMutation(addTransaction);

  if (isLoading || mutation.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error}</Text>;
  }

  if (mutation.isError) {
    return <Text>Error: {mutation.error}</Text>;
  }

  const { accounts } = responseData.data;

  const handleAddButton = () => {
    mutation.mutate({
      budgetId,
      payee: payeeText,
      value: valueText,
      accountId: selectedAccountId,
    }, {
      onSuccess: () => { queryClient.invalidateQueries(['transactions', budgetId])}
    });
  };

  const handleSelectAccount = (itemValue) => {
    return setSelectedAccountId(itemValue);
  };

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Picker style={{ flex: 1 }} onValueChange={handleSelectAccount}>
        {accounts.map((account) => {
          console.log(account);
          return (
            <>
              <Picker.Item label={account.name} value={account.id} />
            </>
          );
        })}
      </Picker>
      <TextInput
        value={payeeText}
        onChangeText={setPayeeText}
        editable
        placeholder="Payee"
        style={{ border: "1px solid black", flex: 1 }}
      ></TextInput>
      <TextInput
        value={valueText}
        onChangeText={setValueText}
        editable
        placeholder="Value"
        style={{ border: "1px solid black", flex: 1 }}
      ></TextInput>
      <Button style={{ flex: 1 }} title="Add" onPress={handleAddButton} />
    </View>
  );
};

export default AddTransaction;
