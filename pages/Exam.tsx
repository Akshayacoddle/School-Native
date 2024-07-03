import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { setexamData } from '../redux/redux';
// import { RootState } from '../redux/store';
import urlcalling from '../components/urlcalling';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Picker} from '@react-native-picker/picker';
import img from '../images/examschedule.png';
import {setexamData} from '../redux/redux';
import {useDispatch, useSelector} from 'react-redux';
import DateTimePicker from 'react-native-date-picker';
type AcademicYearItem = {
  year: number;
};
type ClassItem = {
  id: number;
  grade: string;
};
type ExamTypeItem = {
  id: number;
  type: string;
};
type RoomItem = {
  id: number;
  name: string;
};
type SubjectItem = {
  id: number;
  name: string;
};

function Exam() {
  const examdata = useSelector((values: any) => values.exam.examData);
  console.log(examdata);
  const dispatch = useDispatch();
  const [startdate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    examName: '',
    selectedClassId: '',
    selectedSubject: '',
    selectedRoom: '',
    academic: '',
    selectedExam: '',
    startDates: '',
    endDates: '',
  });
  useEffect(() => {
    urlcalling('/exam/classId', 'GET').then(data => {
      console.log(data);

      if (!data.success) {
        Alert.alert('Some issue occurred');
      }
      const {
        academicYearResult,
        roomIdResult,
        subjectIdResult,
        teacherResult,
        examTypeResult,
        classIdResult,
      } = data.message;

      dispatch(
        setexamData({
          academicYearResult,
          roomIdResult,
          subjectIdResult,
          teacherResult,
          examTypeResult,
          classIdResult,
        }),
      );
    });
  }, []);
  const toggleShow = () => {
    console.log(startdate);

    setShow(!show);
  };
  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmits = async () => {
    console.log(formData);

    urlcalling(`/exam/shedule`, 'POST', formData).then(data => {
      if (!data.success) {
        Alert.alert('Some issue occurred');
      } else {
        Alert.alert('Success');
      }
    });
  };
  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.sideimg}>
          <Text style={styles.header}>Exam Schedule</Text>
          <Image source={img} style={styles.image} />
        </View>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.examdiv}>
              <Text style={styles.label}>Exam name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Exam Name"
                onChangeText={value => handleChange('examName', value)}
                value={formData.examName}
              />
            </View>
            <View style={styles.examdiv}>
              <Text style={styles.label}>Select Class:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedClassId}
                  style={styles.picker}
                  onValueChange={itemValue =>
                    handleChange('selectedClassId', itemValue)
                  }>
                  <Picker.Item label="Select..." value="undefined" />
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
              <Text style={styles.label}>Select Subject:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedSubject}
                  style={styles.picker}
                  onValueChange={itemValue =>
                    handleChange('selectedSubject', itemValue)
                  }>
                  <Picker.Item label="Select..." value="undefined" />
                  {examdata?.subjectIdResult.map((value: SubjectItem) => (
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
              <Text style={styles.label}>Select Room:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedRoom}
                  style={styles.picker}
                  onValueChange={itemValue =>
                    handleChange('selectedRoom', itemValue)
                  }>
                  <Picker.Item label="Select..." value="undefined" />
                  {examdata?.roomIdResult.map((value: RoomItem) => (
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
              <Text style={styles.label}>Academic Year:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.academic}
                  style={styles.picker}
                  onValueChange={itemValue =>
                    handleChange('academic', itemValue)
                  }>
                  <Picker.Item label="Select..." value="undefined" />
                  {examdata?.academicYearResult.map(
                    (value: AcademicYearItem) => (
                      <Picker.Item
                        key={value.year}
                        label={value.year.toString()}
                        value={value.year}
                      />
                    ),
                  )}
                </Picker>
              </View>
            </View>
            <View style={styles.examdiv}>
              <Text style={styles.label}>Exam Type:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedExam}
                  style={styles.picker}
                  onValueChange={itemValue =>
                    handleChange('selectedExam', itemValue)
                  }>
                  <Picker.Item label="Select..." value="undefined" />
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
              <Text style={styles.label}>Start date:</Text>
              {/* <TextInput
                style={styles.input}
                placeholder="Start Date"
                onChangeText={value => handleChange('startDates', value)}
                value={formData.startDates}
              /> */}
              {/* <Button title="show" onPress={() => setShow(true)} /> */}
              <TouchableOpacity style={styles.input} onPress={toggleShow}>
                <Text>select date</Text>
                {show && (
                  <DateTimePicker
                    modal
                    open={show}
                    date={new Date()}
                    onDateChange={(date: React.SetStateAction<Date>) => {
                      setShow(false);
                      setStartDate(date);
                    }}
                    onCancel={() => {
                      setShow(false);
                    }}
                  />
                )}
              </TouchableOpacity>
              {/* </Text> */}
            </View>
            {/* <View style={styles.examdiv}>
              <Text style={styles.label}>Start date:</Text>
              <DateTimePicker
                modal
                open={show}
                date={new Date()}
                onDateChange={(date: React.SetStateAction<Date>) => {
                  setShow(false);
                  setStartDate(date);
                }}
                onCancel={() => {
                  setShow(false);
                }}
              />
            </View> */}
            <View style={styles.examdiv}>
              <Text style={styles.label}>End date:</Text>
              <TextInput
                style={styles.input}
                placeholder="End Date"
                onChangeText={value => handleChange('endDates', value)}
                value={formData.endDates}
              />
            </View>
            <View style={styles.examdiv}>
              <Button title="Submit" onPress={handleSubmits} />
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
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
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    color: 'black',
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
  button: {
    padding: 10,
    backgroundColor: '#FFBF00',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
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

export default Exam;
