import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import RBSheet from 'react-native-raw-bottom-sheet';

import { mapStyle } from './mapStyle';

const App = () => {
  const refRBSheet = React.useRef();
  const [marginBottom, setMarginBottom] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    getMarker();
  }, []);

  const getMarker = async () => {
    try {
      const response = await fetch('https://covid19.mathdro.id/api/confirmed');
      const result = await response.json();
      setData(result);
    } catch (error) {
      // handle error
    }
  };

  const onMapReady = () => setMarginBottom(0);

  const openBottomSheet = item => () => {
    setDetail(item);
    refRBSheet.current.open();
  };

  const formatDate = () => {
    const date = new Date(detail.lastUpdate);
    const month = date.getMonth();
    const getDate = date.getDate();
    const getYears = date.getFullYear();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();

    const monthName = [
      'Januari',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    if (getHours < 10) {
      getHours = `0${getHours}`;
    }

    if (getMinutes < 10) {
      getMinutes = `0${getMinutes}`;
    }

    return `${getDate} ${
      monthName[month]
    } ${getYears} ${getHours}:${getMinutes}`;
  };

  const renderBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={200}
        closeOnPressMask={true}
        customStyles={{
          container: {
            backgroundColor: 'rgba(26, 36, 45, 0.7)',
          },
          draggableIcon: {
            backgroundColor: 'grey',
          },
        }}>
        <View style={styles.countryDetail}>
          <Text style={styles.countryName}>{`${
            detail.provinceState ? detail.provinceState + ' ' : ''
          }${detail.countryRegion}`}</Text>
          <Text style={[styles.countryInfo, styles.confirmed]}>{`Confirmed: ${
            detail.confirmed
          }`}</Text>
          <Text style={[styles.countryInfo, styles.deaths]}>{`Deaths: ${
            detail.deaths
          }`}</Text>
          <Text style={[styles.countryInfo, styles.recovered]}>{`Recovered: ${
            detail.recovered
          }`}</Text>
          <Text style={styles.lastUpdate}>Last Updated: {formatDate()}</Text>
        </View>
      </RBSheet>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="#1A242D" barStyle="light-content" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={[styles.map, { marginBottom }]}
        initialRegion={{
          latitude: 30.5683366,
          longitude: 114.1602995,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsCompass
        customMapStyle={mapStyle}
        onMapReady={onMapReady}
        maxZoomLevel={4.5}
        showsScale>
        {data.map((item, idx) => (
          <Marker
            key={idx}
            image={require('./assets/marker.png')}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            onPress={openBottomSheet(item)}
            flat
          />
        ))}
      </MapView>
      {renderBottomSheet()}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
  },
  countryName: {
    color: '#bdc3c7',
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: '700',
  },
  countryInfo: {
    fontWeight: '700',
    paddingBottom: 10,
  },
  lastUpdate: {
    color: 'grey',
  },
  countryDetail: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  confirmed: {
    color: 'gold',
  },
  deaths: {
    color: 'red',
  },
  recovered: {
    color: 'lightgreen',
  },
});

export default App;
