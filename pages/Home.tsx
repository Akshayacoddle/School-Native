import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import Footer from '../components/Footer';
import {offerings, forthData} from '../data';
import {styles} from '../style';
import urlcalling from '../components/urlcalling';

type Result = {
  examResult: events[];
};
type events = {
  name: string;
  date: string;
  location: string;
  start_time: string;
  end_time: string;
  description: string;
};

const Home = () => {
  const [data, setData] = useState<Result>();

  useEffect(() => {
    urlcalling(`/exam/events`, 'GET').then(data => {
      const {examResult} = data.message;
      setData({examResult});
    });
  }, []);
  console.log(data);

  const image = {
    uri: 'https://t4.ftcdn.net/jpg/02/75/96/99/360_F_275969992_cf6lDx5Vz0cIgouHW3DJmaXLe0djwFqO.jpg',
  };

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.home_div}>
          <View style={styles.overlap}></View>
          <View style={styles.head}>
            <Text style={styles.headText}>
              We Ensure better education for a better world
            </Text>
            <Text style={styles.headParagraph}>
              EDUCATION IS OUR PASSPORT TO THE FUTURE, FOR TOMORROW BELONGS TO
              THE PEOPLE WHO PREPARE FOR IT TODAY
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.second}>
        {[
          'Certified Teachers',
          'Special Education',
          'Book & Library',
          'Certification',
        ].map((header, index) => (
          <View style={styles.secondDivision} key={index}>
            <Text style={styles.secondHeader}>{header}</Text>
            <Text style={styles.secondParagraph}>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.third}>
        <View style={styles.thirdhead}>
          <Text style={styles.thirdHeader}>What we Offer</Text>
          <Text style={styles.thirdParagraph}>
            we believe in fostering not only intellectual growth but also
            character development. Our dedicated faculty, enriched curriculum,
            and emphasis on extracurricular activities create a holistic
            learning experience.
          </Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={offerings}
            renderItem={({item}) => (
              <View style={styles.thirdcontent}>
                <Image source={item.image} style={styles.thirdimg} />
                <View style={styles.define}>
                  <Text style={styles.defineHeader}>{item.title}</Text>
                  <Text style={styles.defineParagraph}>{item.description}</Text>
                </View>
              </View>
            )}
          />

          {/* {offerings.map((offer, index) => (
            <View style={styles.thirdcontent} key={index}>
              <Image source={offer.image} style={styles.thirdimg} />
              <View style={styles.define}>
                <Text style={styles.defineHeader}>{offer.title}</Text>
                <Text style={styles.defineParagraph}>{offer.description}</Text>
              </View>
            </View>
          ))} */}
        </View>
      </View>

      <View style={styles.eventDiv}>
        <Text style={styles.eventHeader}>Upcoming Events</Text>
      </View>

      <View style={styles.forth}>
        {forthData.map((item, index) => (
          <View style={styles.forthdiv} key={index}>
            <Image source={item.image} style={styles.forthimg} />
            <Text style={styles.forthtext}>{item.text}</Text>
          </View>
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
