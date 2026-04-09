import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './Scenario.style';
import AppText from '../../../components/appText/AppText';
import PreviousResult from '../../../components/previousresult/PreviousResult';
import Button from '../../../components/button/Button';

const Scenario = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainView}>
        <View style={styles.mainView1}>
          <View style={styles.scenario}>
            <Text style={styles.scenariocompleted}>Scenario Completed</Text>
            <Text style={styles.pts}>15pts</Text>
            <Text style={styles.accuracy}>83% accuracy</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.try}>Try again</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.messageBox}>
            <Image
              source={require('../../assets/images/message.png')}
              style={styles.message}
            />
            <View>
              <AppText style={styles.letText}>
                Let us know what you think!
              </AppText>
              <Text style={styles.shareText}>
                Share your experience with us
              </Text>
            </View>
          </View>

          <View style={styles.previous}>
            <Text style={styles.previousText}>Previous results</Text>

            <PreviousResult
              source1={require('../../assets/images/Avatar.png')}
              title1="Volodymyr Boiarinov"
              title2="93% . May 8"
              source2={require('../../assets/images/star.png')}
              title3="16pts"
              backgroundcolor="white"
            />

            <PreviousResult
              source1={require('../../assets/images/Avatar.png')}
              title1="Volodymyr Boiarinov"
              title2="88% . May 7"
              source2={require('../../assets/images/star.png')}
              title3="15pts"
              backgroundcolor="#FFFFFF"
            />

            <PreviousResult
              source1={require('../../assets/images/Avatar.png')}
              title1="Volodymyr Boiarinov"
              title2="82% . May 6"
              source2={require('../../assets/images/star.png')}
              title3="15pts"
            />
          </View>

          <View style={styles.buttonGroup}>
            <Button title={'Finish'} style={styles.btnstyle} />
            <Button
              title={'Continue'}
              textColor={'white'}
              style={styles.btnContinue}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Scenario;
