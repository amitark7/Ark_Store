
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface CustomIconProp {
  name: string;
  color: string;
  size: number;
}

const CustomIcon: React.FC<CustomIconProp> = ({name, color, size}) => {
  return <FontAwesome5 name={name} color={color} size={size} />;
};

export default CustomIcon;

