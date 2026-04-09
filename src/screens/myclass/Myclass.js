import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './MyClass.style';
import AppText from '../../../components/appText/AppText';
import CategoryTrauma from '../../../components/categorytrauma/CategoryTrauma';
import PatientDetail from '../../../components/patientdetail/PatientDetail';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Myclass = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainScroll}>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Image
            style={styles.capSize}
            source={require('../../assets/images/graduation_cap.png')}
          />
          <AppText style={styles.myClass}>My class</AppText>
        </View>
        <View style={styles.percentagContainer}>
          <View style={styles.averageContainer}>
            <Text style={styles.averageScore}>Average score</Text>
            <AppText style={styles.percentage}>93%</AppText>
          </View>
          <View style={styles.longestContainer}>
            <Text style={styles.averageScore}>Completed</Text>
            <AppText style={styles.percentage}>8/32</AppText>
          </View>
        </View>
        <View style={styles.collectionContainer}>
          <Text>Collections</Text>
          <CategoryTrauma
            percent="88"
            title1="Trauma Emergencies"
            title2="12/12 completed"
            title3="Completed"
            onPress={() => navigation.navigate('traumaemergencies')}
          />
          <CategoryTrauma
            percent="77"
            title1="Toxicology"
            title2="14/14 completed"
            title3="Completed"
          />
          <CategoryTrauma
            percent="64"
            title1="Emergency Care"
            title2="8/12 completed"
            title3="Completed"
            showCompleted={false}
            showProgress={true}
            progressValue={'60%'}
          />
          <CategoryTrauma
            percent="58"
            title1="Category"
            title2="Not started"
            title3="Completed"
            showCompleted={false}
            showProgress={false}
            progressValue={'60%'}
            showPercent={false}
          />
        </View>
        <View style={styles.scenarioContainer}>
          <Text style={styles.scanerioText}>Scenario</Text>
          <PatientDetail
            title="23 year old male breaks arm while playing soccer"
            subtitle="No Score"
            showStart={true}
            image={require('../../assets/images/imageA.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Myclass;
