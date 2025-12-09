import { View, Text } from 'react-native';
import { styles } from './PatientSummary.style';
import Button from '../button/Button';
const PatientSummary = ({
  chips = [],
  history,
  meds = [],
  exam,
  physicalExam,
  vitals = [],
  buttonText,
  onButtonPress,
  onPressButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chipscontainer}>
        {chips.map((item, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.historyText}>{history}</Text>
      <Text style={styles.title}>Meds</Text>
      {meds.map((m, i) => (
        <Text key={i} style={styles.sectionText}>
          {m}
        </Text>
      ))}
      <Text style={styles.title}>Exam</Text>
      <Text style={styles.sectionText}>{exam}</Text>

      <Text style={styles.title}>Physical Exam</Text>
      <Text style={styles.sectionText}>{physicalExam}</Text>

      <View style={styles.vitalscontainer}>
        <Text style={styles.vital}>P {vitals.P}</Text>
        <Text style={styles.vital}>R {vitals.R}</Text>
        <Text style={styles.vital}>BP{vitals.BP}</Text>
      </View>
      <Button
        title={buttonText}
        onPress={onPressButton}
        style={styles.beginButton}
      />
    </View>
  );
};
export default PatientSummary;
