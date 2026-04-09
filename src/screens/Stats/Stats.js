import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './stats.style';
import AppText from '../../../components/appText/AppText';
import PreviousResult from '../../../components/previousresult/PreviousResult';
import { ScrollView } from 'react-native';
const Stats = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.forColor}>
        <View style={styles.mainContainer}>
          <View style={styles.statsContainer}>
            <Image
              source={require('../../assets/images/graph.png')}
              style={styles.statslogo}
            />
            <AppText style={styles.title}>Stats</AppText>
          </View>
          <View style={styles.viewpoints}>
            <Text style={styles.textpoints}>Points earned this week</Text>
            <View style={styles.starview}>
              <View style={styles.ptsview}>
                <Image
                  style={styles.starstyle}
                  source={require('../../assets/images/star.png')}
                />
                <Text style={styles.ptsstyle}>315 pts</Text>
              </View>
            </View>
          </View>
          <View style={styles.percentagContainer}>
            <View style={styles.averageContainer}>
              <Text style={styles.averageScore}>Average score</Text>
              <AppText style={styles.percentage}>93%</AppText>
            </View>
            <View style={styles.averageContainer}>
              <Text style={styles.averageScore}>Quizs taken</Text>
              <AppText style={styles.percentage}>115</AppText>
            </View>
            <View style={styles.averageContainer}>
              <Text style={styles.averageScore}>Categories completed</Text>
              <AppText style={styles.percentage}>12/8</AppText>
            </View>
            <View style={styles.longestContainer}>
              <Text style={styles.averageScore}>Longest streak</Text>
              <AppText style={styles.percentage}>115</AppText>
            </View>
          </View>
          <Text style={styles.latestText}>Latest Result</Text>
          <PreviousResult
            source1={require('../../assets/images/Avatar.png')}
            title1="Volodymyr Boiarinov"
            title2="93% . May 8"
            source2={require('../../assets/images/star.png')}
            title3="16pts"
          />
          <PreviousResult
            source1={require('../../assets/images/Avatar.png')}
            title1="Volodymyr Boiarinov"
            title2="88% . May 7"
            source2={require('../../assets/images/star.png')}
            title3="15pts"
          />
          <PreviousResult
            source1={require('../../assets/images/Avatar.png')}
            title1="Volodymyr Boiarinov"
            title2="82% . May 6"
            source2={require('../../assets/images/star.png')}
            title3="15pts"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Stats;
