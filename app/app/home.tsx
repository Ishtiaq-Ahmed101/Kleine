import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getData } from '../utils/storage';
import { userType } from '../types';

const Home = () => {
  const [user, setUser] = useState<userType | null>(null);

  const getUser = async () => {
    const userData = await getData('user') as userType | null;
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      {user && (
        <>
          <Text>{user.firstName}</Text>
          <Text>Hello</Text>
        </>
      )}
    </View>
  );
};

export default Home;
