import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = React.useState([]);

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
    } catch (error) {
      // error handler
    }
  };

  const goToMaps = () => {
    return navigation.navigate('Maps');
  };

  const currencyFormatter = num => {
    if (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return num;
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Corona<Text style={styles.title2}>Virus</Text>
        </Text>
      </View>
    );
  };
  const renderChart = () => {
    const chart_wh = 200;
    const series = data;
    const sliceColor = ['#E7B002', '#01C292', 'red'];
    return (
      <View style={[styles.card, styles.flexRow]}>
        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.65}
          coverFill={'#1B232E'}
        />
        <View style={styles.info}>
          <View style={styles.sections}>
            <Text style={[styles.textWhite, styles.fontStyle]}>
              {currencyFormatter(data[0])}
            </Text>
            <Text style={[styles.confirmed, styles.fontStyle]}>Confirmed</Text>
          </View>
          <View style={styles.sections}>
            <Text style={[styles.textWhite, styles.fontStyle]}>
              {currencyFormatter(data[1])}
            </Text>
            <Text style={[styles.recovered, styles.fontStyle]}>Recovered</Text>
          </View>
          <View style={styles.sections}>
            <Text style={[styles.textWhite, styles.fontStyle]}>
              {currencyFormatter(data[2])}
            </Text>
            <Text style={[styles.deaths, styles.fontStyle]}>Deaths</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderDailyCases = () => {
    return (
      <View style={styles.card2}>
        <TouchableOpacity onPress={goToMaps}>
          <Text style={[styles.textGrey, styles.fontStyle]}>View on Maps</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderChart()}
      {renderDailyCases()}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#1B232E',
  },
  card2: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1B232E',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  sections: {
    paddingBottom: 15,
  },
  fontStyle: {
    fontSize: 16,
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
    color: 'red',
  },
});
