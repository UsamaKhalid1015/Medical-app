import React from 'react';
import { View, Text, Image } from 'react-native';
import AppText from '../../../components/appText/AppText';
import { styles } from './Category.style';
import CategoryTrauma from '../../../components/categorytrauma/CategoryTrauma';
import { ScrollView } from 'react-native';
const Categories = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainScroll}>
      <View style={styles.mainView}>
        <View style={styles.catelogo}>
          <Image
            source={require('../../assets/images/category.png')}
            style={styles.categoryLogo}
          />
          <AppText style={styles.categoryText}>Category</AppText>
        </View>
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
          title1="ABC’s"
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
        <CategoryTrauma
          percent="58"
          title1="Category name"
          title2="Not started"
          title3="Completed"
          showCompleted={false}
          showProgress={false}
          showPercent={false}
          progressValue={'60%'}
        />
      </View>
    </ScrollView>
  );
};

export default Categories;
