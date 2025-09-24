import { View } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View
      style={{
        position: 'relative',
        height: 15,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
      }}
    >
      <View
        style={{
          position: 'absolute',
          height: 14,
          width: progress,
          borderRadius: 10,
          backgroundColor: 'blue',
        }}
      ></View>
    </View>
  );
};

export default ProgressBar;
