import React from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';

import { Styles } from './Maps.style';
import { mapStyle } from '../../../mapStyle';
import { formatDate, currencyFormatter } from '../../utils/helper';

const MapsScreens = () => {
  const mapView = React.useRef();
  const refRBSheet = React.useRef();
  const [data, setData] = React.useState([]);
  const [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    getMarker();
    getAnimateMaps();
  }, []);

  const getAnimateMaps = () => {
    setTimeout(() => {
      mapView.current.animateToRegion(
        {
          latitude: 30.5683366,
          longitude: 114.1602995,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        },
        1500,
      );
    }, 300);
  };

  const getMarker = async () => {
    try {
      const response = await fetch('https://covid19.mathdro.id/api/confirmed');
      const result = await response.json();
      setData(result);
    } catch (error) {
      // handle error
    }
  };

  const openBottomSheet = item => () => {
    setDetail(item);
    setTimeout(() => {
      refRBSheet.current.open();
    }, 300);
  };

  const renderMaps = () => {
    return (
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        style={[Styles.map]}
        initialRegion={{
          latitude: 8.6122307,
          longitude: 15.6631778,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}
        customMapStyle={mapStyle}
        showsCompass={false}
        maxZoomLevel={5}>
        {data.map((item, idx) => (
          <Marker
            key={idx}
            tracksViewChanges={false}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            onPress={openBottomSheet(item)}>
            <Image
              source={require('../../../assets/marker.png')}
              style={Styles.markerIcon}
            />
          </Marker>
        ))}
      </MapView>
    );
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
        <View style={Styles.countryDetail}>
          <Text style={Styles.countryName}>{`${
            detail.provinceState ? detail.provinceState + ' ' : ''
          }${detail.countryRegion}`}</Text>
          <Text
            style={[
              Styles.countryInfo,
              Styles.confirmed,
            ]}>{`Confirmed: ${currencyFormatter(detail.confirmed)}`}</Text>
          <Text
            style={[
              Styles.countryInfo,
              Styles.deaths,
            ]}>{`Deaths: ${currencyFormatter(detail.deaths)}`}</Text>
          <Text
            style={[
              Styles.countryInfo,
              Styles.recovered,
            ]}>{`Recovered: ${currencyFormatter(detail.recovered)}`}</Text>
          <Text
            style={[
              Styles.countryInfo,
              Styles.existing,
            ]}>{`Existing: ${currencyFormatter(detail.active)}`}</Text>
          <Text style={Styles.lastUpdate}>
            Last Updated: {formatDate(detail.lastUpdate)}
          </Text>
        </View>
      </RBSheet>
    );
  };

  return (
    <View>
      {renderMaps()}
      {renderBottomSheet()}
    </View>
  );
};

export default MapsScreens;
