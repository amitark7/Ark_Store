import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CustomIconProp {
  name: string;
  color: string;
  size: number;
}

const CustomIcon = () => {
  return (
    <View>
      <Text>CustomIcon</Text>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({});
