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
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {useSelector, useDispatch} from 'react-redux';
import urlcalling from '../components/urlcalling';
import {setexamData} from '../redux/redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import feedback from '../images/feedback.webp';
import {RootState} from '../redux/store';

type Teacher = {
  id: number;
  name: string;
};
type SubjectItem = {
  id: number;
  name: string;
};
type ClassItem = {
  id: number;
  grade: string;
};

function Feedback() {
  const examdata = useSelector((exam: RootState) => exam.exam.examData);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    classId: '',
    teacher: '',
    subject: '',
    aboutTeacher: '',
    aboutSchool: '',
    thingsToImprove: '',
  });
  const [errorFormData, setErrorFormData] = useState({
    name: false,
    classId: false,
    teacher: false,
    subject: false,
    aboutTeacher: false,
    aboutSchool: false,
    thingsToImprove: false,
  });
  const [error, setError] = useState(true);
  if (formData.name) {
    console.log('name ......', formData.name);
  }

  useEffect(() => {
    urlcalling('/exam/classId', 'GET').then(data => {
      console.log(data);

      if (!data.success) {
        Alert.alert('Some issue occurred');
      }
      const {classIdResult, subjectIdResult, teacherResult} = data.message;

      dispatch(
        setexamData({
          classIdResult,
          subjectIdResult,
          teacherResult,
        }),
      );
    });
  }, []);

  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handlesubmits = () => {
    // console.log(!formData.name);
    if (!formData.name) {
      setErrorFormData({
        ...errorFormData,
        ['name']: true,
      });
      console.log('errorFormData name $$$', errorFormData.name);
    } else {
      setErrorFormData({
        ...errorFormData,
        ['name']: false,
      });
    }
    if (!formData.classId) {
      setErrorFormData({
        ...errorFormData,
        ['name']: true,
      });
      console.log('errorFormData classId $$$', errorFormData.classId);
    } else {
      setErrorFormData({
        ...errorFormData,
        ['name']: false,
      });
    }
    if (!formData.teacher) {
      setErrorFormData({
        ...errorFormData,
        ['name']: true,
      });
      console.log('errorFormData teacher $$$', errorFormData.teacher);
    } else {
      setErrorFormData({
        ...errorFormData,
        ['name']: false,
      });
    }
    if (!formData.subject) {
      setErrorFormData({
        ...errorFormData,
        ['name']: true,
      });
      console.log('errorFormData subject $$$', errorFormData.subject);
    } else {
      setErrorFormData({
        ...errorFormData,
        ['name']: false,
      });
    }
    if (
      !formData.name ||
      !formData.classId ||
      !formData.teacher ||
      !formData.subject ||
      !formData.aboutTeacher ||
      !formData.aboutSchool
    ) {
      Alert.alert('Please fill the form before submitting');
    } else {
      console.log(formData);

      urlcalling('/student/feedback', 'POST', formData).then(data => {
        if (!data.success) {
          Alert.alert('Some issue occurred');
        } else {
          Alert.alert('Success');
        }
      });
    }
  };
  console.log(errorFormData.name);

  return (
    <>
      <ScrollView style={styles.scroll}>
        {/* <Navbar /> */}
        <View style={styles.sideimg}>
          <Text style={styles.header}>FeedBack</Text>
          <Image source={feedback} style={styles.image} />
        </View>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.examdiv}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[
                  styles.input,
                  {borderColor: errorFormData.name ? 'red' : '#000000'},
                ]}
                placeholder="Name"
                onChangeText={value => handleChange('name', value)}
                value={formData.name}
              />
            </View>
            <View style={styles.examdiv}>
              <Text style={styles.label}>Class</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.classId}
                  //   style={styles.picker}
                  style={[
                    styles.picker,
                    {borderColor: errorFormData.classId ? 'red' : '#000000'},
                  ]}
                  onValueChange={value => handleChange('classId', value)}>
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
              <Text style={styles.label}>Select Teacher</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.teacher}
                  //   style={styles.picker}
                  style={[
                    styles.picker,
                    {borderColor: errorFormData.teacher ? 'red' : '#000000'},
                  ]}
                  onValueChange={value => handleChange('teacher', value)}>
                  <Picker.Item label="Select..." value="undefined" />
                  {examdata?.teacherResult.map((value: Teacher) => (
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
              <Text style={styles.label}>Subject Taken</Text>
              <View
                style={[
                  styles.pickerContainer,
                  {borderColor: errorFormData.subject ? 'red' : '#000000'},
                ]}>
                <Picker
                  selectedValue={formData.subject}
                  style={styles.picker}
                  onValueChange={value => handleChange('subject', value)}>
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
              <Text style={styles.label}>About Teacher</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                numberOfLines={4}
                onChangeText={value => handleChange('aboutTeacher', value)}
                value={formData.aboutTeacher}
              />
            </View>
            <View style={styles.examdiv}>
              <Text style={styles.label}>About School</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                numberOfLines={4}
                onChangeText={value => handleChange('aboutSchool', value)}
                value={formData.aboutSchool}
              />
              <View style={styles.examdiv}>
                <Text style={styles.label}>Things to Improve</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  multiline
                  numberOfLines={4}
                  onChangeText={value => handleChange('thingsToImprove', value)}
                  value={formData.thingsToImprove}
                />
              </View>
            </View>

            <View style={styles.examdiv}>
              <Button title="Submit" onPress={handlesubmits} />
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
    // borderColor: '#000000',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  pickerContainer: {
    borderWidth: 1,
    // borderColor: '#000000',
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
  textArea: {
    height: 100,
  },
});

export default Feedback;
