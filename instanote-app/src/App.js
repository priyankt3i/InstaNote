import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { fetchSavedData } from './services/api';

const App = () => {
  const handleFetchData = async () => {
    const data = await fetchSavedData();
    console.log(data);
  };

  return (
    <SafeAreaView>
      <Text>InstaNote Mobile App</Text>
      <Button title="Fetch Saved Data" onPress={handleFetchData} />
    </SafeAreaView>
  );
};

export default App;
