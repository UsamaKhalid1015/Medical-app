import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './Actively.styles';
import AppText from '../../../components/appText/AppText';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import Button from '../../../components/button/Button';
import { useState } from 'react';

const ActivelyWorking = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      id: '1',
      value: 'I am not actively working',
    },
    {
      id: '2',
      value: 'I am actively working',
    },
  ];

  const handleNav = () => {
    navigation.navigate('rolepractice');
  };

  return (
    <View style={styles.mainViewarrow}>
      <View>
        <Image
          style={styles.arrow}
          source={require('../../assets/images/Vector1.png')}
        />

        <ProgressBar progress={'30%'} />
      </View>
      <AppText style={styles.emtText}>
        Are you actively working as an EMT, AEMT, Paramedic or EMR?
      </AppText>

      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => setSelectedOption(item.id)}
          key={index}
          activeOpacity={0.7}
          style={[
            styles.notActively,
            { backgroundColor: selectedOption === item.id ? 'blue' : 'white' },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AppText style={styles.amNotText}>{item.value}</AppText>
            <View style={{ width: 20, height: 20, marginLeft: 8 }}>
              {selectedOption === item.id ? (
                <Image
                  source={require('../../assets/images/Vector1.png')}
                  style={{ width: 20, height: 20 }}
                />
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {selectedOption ? (
        <Button
          style={styles.bottomButton}
          onPress={handleNav}
          title={'Continue'}
        />
      ) : null}
    </View>
  );
};

export default ActivelyWorking;

// import { View, Image, TouchableOpacity, Text } from 'react-native';
// import { styles } from './Actively.styles';
// import AppText from '../../../components/appText/AppText';
// import ProgressBar from '../../../components/progressBar/ProgressBar';
// import Button from '../../../components/button/Button';
// import { useState } from 'react';

// const ActivelyWorking = ({ navigation }) => {
//   const [selectedOption, setSelectedOption] = useState();

//   const options = [
//     {
//       id: '1',
//       value: 'I am not actively working',
//     },
//     {
//       id: '2',
//       value: 'I am actively working',
//     },
//   ];

//   const handleNav = () => {
//     navigation.navigate('rolepractice');
//   };
//   return (
//     <View style={styles.mainViewarrow}>
//       <View>
//         <Image
//           style={styles.arrow}
//           source={require('../../assets/images/Vector.png')}
//         />

//         <ProgressBar progress={'30%'} />
//       </View>
//       <AppText style={styles.emtText}>
//         Are you actively working as an EMT, AEMT, Paramedic or EMR?
//       </AppText>

//       {options.map((item, index) => (
//         <TouchableOpacity
//           onPress={() => setSelectedOption(item.id)}
//           key={index}
//           activeOpacity={0.7}
//           style={[
//             styles.notActively,
//             { backgroundColor: selectedOption === item.id ? 'blue' : 'white' },
//           ]}
//         >
//           <AppText style={styles.amNotText}>{item.value}</AppText>
//         </TouchableOpacity>
//       ))}
//       {selectedOption ? (
//         <Button onPress={handleNav} title={'Continue'} />
//       ) : null}
//     </View>
//   );
// };

// export default ActivelyWorking;
