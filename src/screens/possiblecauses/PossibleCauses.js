import { View, Image, TouchableOpacity, Text } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Possible.style';
import AppText from '../../../components/appText/AppText';
import Button from './../../../components/button/Button';
import { useState } from 'react';

const PossibleCause = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', value: 'Ischemic stroke' },
    { id: '2', value: 'Myocardial Infarction' },
    { id: '3', value: 'Heat exhaustion' },
    { id: '4', value: 'Heat stroke' },
  ];

  const handleNav = () => {
    navigation.navigate('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <View style={styles.threecomponent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.arrow}
              source={require('./../../assets/images/Vector.png')}
            />
          </TouchableOpacity>
          <AppText>01 of 10</AppText>
          <View style={styles.Time}>
            <Image
              source={require('./../../assets/images/clock.png')}
              style={styles.clock}
            />
            <Text style={styles.minuteHours}>00:30</Text>
          </View>
        </View>

        <ProgressBar progress={'30%'} />

        <AppText style={styles.emtText}>What are the possible causes? </AppText>

        <View style={styles.fourbutton}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => setSelectedOption(item.id)}
              style={[
                styles.notActively,
                {
                  // ❌ Remove blue highlight, always white
                  //   backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                },
              ]}
            >
              <AppText
                style={[
                  styles.amNotText,
                  {
                    // ❌ Keep text always black
                    color: 'black',
                  },
                ]}
              >
                {item.value}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottomReport}>
        <View style={styles.pageimage}>
          <Image
            source={require('./../../assets/images/page.png')}
            style={styles.pageStyle}
          />
          <AppText>Patient report card</AppText>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.cardStyle}>
            <Text style={styles.textView}>View card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PossibleCause;
