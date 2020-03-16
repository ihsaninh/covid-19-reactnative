import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { Styles } from './Home.style';
import { formatDate, currencyFormatter } from '../../utils/helper';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const [lastUpdate, setLastUpdate] = React.useState('');

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://covid19.mathdro.id/api');
      const result = await response.json();
      const confirmed = result.confirmed.value;
      const recovered = result.recovered.value;
      const deaths = result.deaths.value;
      const arrayData = [confirmed, recovered, deaths];
      setData(arrayData);
      setLastUpdate(result.lastUpdate);
    } catch (error) {
      // error handler
    }
  };

  const goToMaps = () => {
    return navigation.navigate('Maps');
  };

  const renderTitle = () => {
    return (
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>
          Corona<Text style={Styles.title2}>Virus</Text>
        </Text>
      </View>
    );
  };
  const renderDataChart = () => {
    const chart_wh = 190;
    const series = data;
    const sliceColor = ['#E7B002', '#01C292', '#e74c3c'];
    return (
      <View style={Styles.card}>
        <View style={Styles.flexRow}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.65}
            coverFill={'#1B232E'}
          />
          <View style={Styles.info}>
            <View style={Styles.sections}>
              <Text style={[Styles.textWhite, Styles.fontStyle]}>
                {currencyFormatter(data[0])}
              </Text>
              <Text style={[Styles.confirmed, Styles.fontStyle]}>
                Confirmed
              </Text>
            </View>
            <View style={Styles.sections}>
              <Text style={[Styles.textWhite, Styles.fontStyle]}>
                {currencyFormatter(data[1])}
              </Text>
              <Text style={[Styles.recovered, Styles.fontStyle]}>
                Recovered
              </Text>
            </View>
            <View style={Styles.sections}>
              <Text style={[Styles.textWhite, Styles.fontStyle]}>
                {currencyFormatter(data[2])}
              </Text>
              <Text style={[Styles.deaths, Styles.fontStyle]}>Deaths</Text>
            </View>
          </View>
        </View>
        <Text style={Styles.infoData}>
          Last Updated: {formatDate(lastUpdate)}
        </Text>
        <Text style={Styles.infoSource}>
          Source data:{' '}
          <Text
            style={Styles.link}
            onPress={() => Linking.openURL('https://covid19.mathdro.id/api')}>
            https://covid19.mathdro.id/api
          </Text>
        </Text>
      </View>
    );
  };

  const renderDailyCases = () => {
    return (
      <View style={Styles.card2}>
        <TouchableOpacity onPress={goToMaps}>
          <Text style={[Styles.textGrey, Styles.fontStyle]}>View on Maps</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      {renderTitle()}
      {renderDataChart()}
      {renderDailyCases()}
    </View>
  );
};

export default HomeScreen;
