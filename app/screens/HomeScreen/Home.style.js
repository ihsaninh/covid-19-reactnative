import { StyleSheet, StatusBar } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171B1E',
    paddingTop: StatusBar.currentHeight,
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
    borderRadius: 5,
    padding: 20,
  },
  card2: {
    marginHorizontal: 10,
    marginTop: 5,
    padding: 20,
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 5,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  infoData: {
    paddingTop: 20,
    color: '#adadad',
    fontFamily: 'GoogleSans-Regular',
  },
  infoSource: {
    paddingTop: 8,
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
    width: '95%',
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
  toMapsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  toMapsTitle: {
    fontFamily: 'GoogleSans-Medium',
    color: '#fff',
    fontSize: 17,
  },
  toMapsSubTitle: {
    fontFamily: 'GoogleSans-Regular',
    paddingTop: 5,
    color: '#adadad',
    fontSize: 13,
  },
  separator: {
    marginHorizontal: 15,
    height: 1,
    backgroundColor: '#333',
  },
  titleDailyCases: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  titleDailyCasesText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'GoogleSans-Medium',
  },
});

export { Styles };
