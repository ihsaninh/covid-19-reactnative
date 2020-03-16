import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  countryName: {
    color: '#bdc3c7',
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'GoogleSans-Bold',
  },
  countryInfo: {
    fontWeight: '700',
    paddingBottom: 10,
  },
  lastUpdate: {
    color: '#A8A8A8',
    fontFamily: 'GoogleSans-Regular',
  },
  countryDetail: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  confirmed: {
    color: 'gold',
    fontFamily: 'GoogleSans-Medium',
  },
  deaths: {
    color: 'red',
    fontFamily: 'GoogleSans-Medium',
  },
  recovered: {
    color: 'lightgreen',
    fontFamily: 'GoogleSans-Medium',
  },
  existing: {
    color: 'orange',
    fontFamily: 'GoogleSans-Medium',
  },
  markerIcon: {
    height: 20,
    width: 20,
  },
});

export { Styles };
