import { View, Image, TouchableOpacity, Text } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Possible.style';
import AppText from '../../../components/appText/AppText';
import { useState } from 'react';
import { useRef } from 'react';
import BottomSheetBack from '../../../components/bottomSheetBack/BottomSheetBack';
import BottomViewCard from '../../../components/bottomSheetViewCard/BottomViewCard';
import { useNavigation } from '@react-navigation/native';

const PossibleCause = () => {
  const refBackSheet = useRef();
  const refBottomView = useRef();
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', value: 'Ischemic stroke', isCorrect: false },
    { id: '2', value: 'Myocardial Infarction', isCorrect: true },
    { id: '3', value: 'Heat exhaustion', isCorrect: false },
    { id: '4', value: 'Heat stroke', isCorrect: false },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <View style={styles.threecomponent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => refBackSheet.current.open()}
            style={{ padding: 10 }}
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

        <ProgressBar progress={'20%'} />

        <AppText style={styles.emtText}>What are the possible causes? </AppText>

        <View style={styles.fourbutton}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => {
                setSelectedOption(item);

                if (item.isCorrect) {
                  navigation.navigate('correctscreen');
                } else {
                  navigation.navigate('wrongscreen');
                }
              }}
              style={[
                styles.notActively,
                {
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => refBottomView.current.open()}
        >
          <View style={styles.cardStyle}>
            <Text style={styles.textView}>View card</Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheetBack ref={refBackSheet} />
      <BottomViewCard ref={refBottomView} />
    </View>
  );
};

export default PossibleCause;
