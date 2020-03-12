import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';

import { formatDate, currencyFormatter } from '../utils/helper';
import { mapStyle } from '../../mapStyle';

const MapsScreens = () => {
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
    setTimeout(() => {
      refRBSheet.current.open();
    }, 200);
  };

  const renderBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={220}
        duration={250}
        closeOnPressMask={true}
        customStyles={{
          container: {
            backgroundColor: 'rgba(17, 22, 31, 0.6)',
          },
          draggableIcon: {
            backgroundColor: 'grey',
          },
        }}>
        <View style={styles.countryDetail}>
          <Text style={styles.countryName}>{`${
            detail.provinceState ? detail.provinceState + ' ' : ''
          }${detail.countryRegion}`}</Text>
          <Text
            style={[
              styles.countryInfo,
              styles.confirmed,
            ]}>{`Confirmed: ${currencyFormatter(detail.confirmed)}`}</Text>
          <Text
            style={[
              styles.countryInfo,
              styles.deaths,
            ]}>{`Deaths: ${currencyFormatter(detail.deaths)}`}</Text>
          <Text
            style={[
              styles.countryInfo,
              styles.recovered,
            ]}>{`Recovered: ${currencyFormatter(detail.recovered)}`}</Text>
          <Text
            style={[
              styles.countryInfo,
              styles.existing,
            ]}>{`Existing: ${currencyFormatter(
            detail.confirmed - detail.recovered - detail.deaths,
          )}`}</Text>
          <Text style={styles.lastUpdate}>
            Last Updated: {formatDate(detail.lastUpdate)}
          </Text>
        </View>
      </RBSheet>
    );
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={[styles.map, { marginBottom }]}
        initialRegion={{
          latitude: 30.5683366,
          longitude: 114.1602995,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        customMapStyle={mapStyle}
        onMapReady={onMapReady}
        showsCompass={false}
        maxZoomLevel={4.9}>
        {data.map((item, idx) => (
          <Marker
            key={idx}
            tracksViewChanges={false}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            onPress={openBottomSheet(item)}>
            <Image
              source={require('../../assets/marker.png')}
              style={styles.markerIcon}
            />
          </Marker>
        ))}
      </MapView>
      {renderBottomSheet()}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MapsScreens;
