export const fetchSavedData = async () => {
    try {
      const response = await fetch('https://api.instanote.com/sync');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching saved data:', error);
    }
  };