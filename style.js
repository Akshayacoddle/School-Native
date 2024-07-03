import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  home_div: {
    position: 'relative',
    display: 'flex',
    height: 550,
    zIndex: 0,
  },
  head: {
    margin: 'auto',
    zIndex: 1,
    textAlign: 'center',
    color: '#ffffff',
  },
  headText: {
    zIndex: 1,
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  headParagraph: {
    margin: 'auto',
    textAlign: 'center',
    color: '#ffffff',
  },
  overlap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  second: {
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: 25,
    margin: 20,
  },
  secondDivision: {
    backgroundColor: '#ADBC9F',
    textAlign: 'center',
    padding: 10,
    paddingVertical: 30,
  },
  secondHeader: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondParagraph: {
    textAlign: 'center',
    fontSize: 16,
  },
  third: {
    display: 'flex',
    flex: 1,
    gap: 25,
    marginTop: 30,
  },
  thirdhead: {},
  thirdHeader: {
    fontSize: 31,
    color: '#C6A969',
    textAlign: 'center',
  },
  thirdParagraph: {
    fontSize: 20,
    color: '#444447',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  thirdcontent: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    gap: 20,
  },
  define: {
    display: 'flex',
    flex: 1,
    margin: 'auto',
  },
  defineHeader: {
    fontSize: 21,
    color: '#437bcadb',
  },
  defineParagraph: {
    fontSize: 16,
  },
  thirdimg: {
    width: 80,
    height: 70,
    alignSelf: 'left',
    borderRadius: 35,
  },
  forth: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    padding: 10,
    gap: 25,
  },
  forthdiv: {
    alignItems: 'center',
  },
  forthimg: {
    position: 'relative',
    display: 'flex',
    zIndex: 0,
    width: '100%',
    borderRadius: 20,
    height: 200,
  },
  forthtext: {
    margin: 'auto',
    zIndex: 1,
    textAlign: 'center',
  },
  eventDiv: {
    padding: 50,
    borderWidth: 2,
    borderColor: '#3f8d97',
    margin: 80,
  },
  eventHeader: {
    fontSize: 22,
    color: '#889172',
    fontStyle: 'italic',
  },
  event: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  divDate: {
    backgroundColor: '#689e68',
    width: 100,
    height: 106,
    textAlign: 'center',
    marginBottom: 10,
  },
  divs: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
  },
  day: {
    fontSize: 27,
  },
  eventDetails: {
    margin: 5,
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export {styles};
