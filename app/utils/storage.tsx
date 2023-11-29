import AsyncStorage from '@react-native-async-storage/async-storage';
import { userType } from '../types';


export const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.log(e)
    }
  };
  

  export const getData = async (key: string): Promise<userType | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error("Error fetching data:", e);
      return null;
    }
  };
  