import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Facebook from '../images/facebook.jpg';
import Instagram from '../images/instagram.jpg';
import Twiter from '../images/twitter.jpeg';
// const Facebook = require('../images/marathon.jpeg');
// const Instagram = require('../images/marathon.jpeg');
// const Twitter = require('../images/marathon.jpeg');

function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Text style={styles.header}>The RGMHSS School</Text>
        <Text style={styles.text}>Academic Schools</Text>
        <Text style={styles.text}>Visitor information</Text>
        <Text style={styles.text}>Contact us</Text>
        <Text style={styles.text}>Emergency contacts</Text>
        <Text style={styles.text}>Public information</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Our facilities</Text>
        <Text style={styles.text}>Libraries</Text>
        <Text style={styles.text}>Conferences</Text>
        <Text style={styles.text}>Computer Lab</Text>
        <Text style={styles.text}>Sport</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Connect with us</Text>
        <Text style={styles.text}>New students</Text>
        <Text style={styles.text}>Alumni</Text>
        <Text style={styles.text}>Blogs</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Quick links</Text>
        <Text style={styles.text}>Job opportunities</Text>
        <Text style={styles.text}>Intranet</Text>
        <Text style={styles.text}>Media centre</Text>
        <Text style={styles.text}>People</Text>
      </View>
      <View style={styles.icons}>
        <Image source={Facebook} style={styles.icon} />
        <Image source={Instagram} style={styles.icon} />
        <Image source={Twiter} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: '#4F6F52',
  },
  section: {
    marginBottom: 20,
    color: '#000000',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  text: {
    color: '#E5E1DA',
    fontSize: 16,
    marginBottom: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: '#4F6F52',
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#000000',
    color: '#000000',
  },
});

export default Footer;
