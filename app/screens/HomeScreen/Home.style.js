import { StyleSheet } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171B1E',
    paddingTop: ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  },
  flexRow: {
    flexDirection: 'row',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 25,
    color: '#E7B002',
    fontFamily: 'GoogleSans-Bold',
  },
  title2: {
    color: '#01C292',
    fontFamily: 'GoogleSans-Bold',
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#1B232E',
    marginBottom: 5,
  },
  card2: {
    // marginHorizontal: 10,
    marginTop: 5,
    padding: 20,
    paddingLeft: 25,
    backgroundColor: '#1B232E',
    borderRadius: 10,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  infoData: {
    paddingTop: 20,
    color: '#adadad',
    fontFamily: 'GoogleSans-Medium',
  },
  infoSource: {
    paddingTop: 10,
    color: '#adadad',
    fontFamily: 'GoogleSans-Regular',
  },
  link: {
    textDecorationLine: 'underline',
  },
  sections: {
    paddingBottom: 15,
  },
  fontStyle: {
    fontSize: 15,
    paddingTop: 5,
    fontFamily: 'GoogleSans-Medium',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textGrey: {
    color: '#7F8FA6',
  },
  confirmed: {
    color: '#E7B002',
  },
  recovered: {
    color: '#01C292',
  },
  deaths: {
    color: '#e74c3c',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  infoDate: {
    fontSize: 15,
    fontFamily: 'GoogleSans-Medium',
  },
  dataContainer: {
    marginTop: 10,
    width: '92%',
  },
  dataCount: {
    fontSize: 14,
    fontFamily: 'GoogleSans-Medium',
  },
  report: {
    paddingTop: 10,
    color: '#7F8FA6',
    width: '95%',
    lineHeight: 20,
    fontFamily: 'GoogleSans-Regular',
  },
});

export { Styles };
