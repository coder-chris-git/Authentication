import {Auth} from 'aws-amplify';
import React from 'react';
import {View, Text, Button} from 'react-native';

const index = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Button title="signout" onPress={signOut} />
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
    </View>
  );
};

export default index;
