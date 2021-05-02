import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useDispatch } from 'react-redux';
import selectRole from '../store/actions/selectRole';
import { Role } from '../entities/User';

export default function () {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Role</Text>
      <Button
        title="Client"
        onPress={() => dispatch(selectRole(Role.CLIENT))}
      />
      <Button
        title="Master"
        onPress={() => dispatch(selectRole(Role.MASTER))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
