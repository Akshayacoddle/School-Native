import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Alert, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {useDispatch, useSelector} from 'react-redux';
import {setexamData} from '../redux/redux';
import {RootState} from '../redux/store';
import urlcalling from '../components/urlcalling';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Picker} from '@react-native-picker/picker';

const TimeTable = () => {
  const [selectedExam, setSelectedExam] = useState<number | string>();
  const examdata = useSelector((values: RootState) => values.exam.examData);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const tableHead = ['Subject', 'Start Time', 'End Time'];
  //   let formattedData: React.SetStateAction<never[]> = [];

  const handleChange = () => {
    if (!selectedExam) {
      Alert.alert('Please select an exam');
    } else {
      urlcalling(`/exam/viewExam?examType=${selectedExam}`, 'GET').then(
        data => {
          //   console.log(data);

          const examResult = data.message;
          console.log('examResult', examResult);

          const formattedData = examResult.map((item: any) => [
            item.name,
            `${item.start_time.split('T')[0]}\n${
              item.start_time.split('T')[1].split('.')[0]
            }`,
            `${item.end_time.split('T')[0]}\n${
              item.end_time.split('T')[1].split('.')[0]
            }`,
          ]);
          setTableData(formattedData);
          console.log('formattedData', tableData);
        },
      );
    }
  };

  useEffect(() => {
    urlcalling(`/exam/classid`, 'GET').then(data => {
      const {examTypeResult} = data.message;
      dispatch(
        setexamData({
          examTypeResult,
        }),
      );
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Navbar /> */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedExam}
            style={styles.picker}
            onValueChange={itemValue => setSelectedExam(itemValue)}>
            <Picker.Item label="select..." value="" />
            {examdata?.examTypeResult.map((value: any) => (
              <Picker.Item key={value.id} label={value.name} value={value.id} />
            ))}
          </Picker>
          <Button title="Show" onPress={handleChange} />
        </View>
        <Table borderStyle={styles.tableBorder}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  pickerContainer: {marginBottom: 16},
  picker: {height: 50, width: '100%'},
  tableBorder: {borderWidth: 2, borderColor: '#81A263'},
  head: {height: 40, backgroundColor: '#E7F0DC'},
  text: {margin: 6, color: '#000000'},
});

export default TimeTable;
