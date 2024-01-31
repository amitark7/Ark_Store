
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomIconProp {
  name: string;
  color: string;
  size: number;
}

const CustomIcon: React.FC<CustomIconProp> = ({name, color, size}) => {
  return <MaterialIcons name={name} color={color} size={size} />;
};

export default CustomIcon;

