import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import urlcalling from '../components/urlcalling';
import {setexamData} from '../redux/redux';
import {RootState} from '../redux/store';
import feedback from '../images/feedback.webp';

type ClassItem = {
  id: number;
  grade: string;
};
type ExamTypeItem = {
  id: number;
  name: string;
};

function Hallticket() {
  const examdata = useSelector((value: RootState) => value.exam.examData);
  const dispatch = useDispatch();
  const [selectedClassId, setSelectedClassId] = useState<number | string>();
  const [selectedExamType, setSelectedExamType] = useState<number | string>();

  useEffect(() => {
    urlcalling(`/exam/classid`, 'GET').then(data => {
      const {classIdResult, examTypeResult} = data.message;
      dispatch(
        setexamData({
          classIdResult,
          examTypeResult,
        }),
      );
    });
  }, [dispatch]);

  const handlesubmit = async () => {
    const requestData = {
      classes: selectedClassId,
      examType: selectedExamType,
    };
    urlcalling(`/exam/hallTicket`, 'POST', requestData).then(data => {
      if (!data.success) {
        Alert.alert('Some issue occurred');
      } else {
        Alert.alert('Success');
      }
    });
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.sideimg}>
        <Text style={styles.header}>Hall Ticket</Text>
        <Image source={feedback} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.examdiv}>
            <Text style={styles.label}>Select Class:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedClassId}
                style={styles.picker}
                onValueChange={value => setSelectedClassId(value)}>
                <Picker.Item label="select..." value="undefined" />
                {examdata?.classIdResult.map((value: ClassItem) => (
                  <Picker.Item
                    key={value.id}
                    label={value.grade}
                    value={value.id}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.examdiv}>
            <Text style={styles.label}>Exam Type:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedExamType}
                style={styles.picker}
                onValueChange={value => setSelectedExamType(value)}>
                <Picker.Item label="select..." value="undefined" />
                {examdata?.examTypeResult.map((value: ExamTypeItem) => (
                  <Picker.Item
                    key={value.id}
                    label={value.name}
                    value={value.id}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.examdiv}>
            <Button title="Submit" onPress={handlesubmit} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    flex: 1,
  },
  examdiv: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  sideimg: {
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default Hallticket;
