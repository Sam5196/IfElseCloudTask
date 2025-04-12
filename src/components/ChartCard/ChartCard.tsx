import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-charts-wrapper';
import Card from '../Card/Card';
import { globalStyles } from '../../styles/globalStyles';
import { styles } from './styles';

const ChartCard: React.FC = () => {
  const data = {
    dataSets: [{
      values: [
        { x: 0, y: 50 },
        { x: 1, y: 10 },
        { x: 2, y: 40 },
        { x: 3, y: 95 },
        { x: 4, y: 85 },
        { x: 5, y: 91 },
        { x: 6, y: 35 },
        { x: 7, y: 53 },
        { x: 8, y: 24 },
        { x: 9, y: 50 },
        { x: 10, y: 60 },
        { x: 11, y: 80 },
      ],
      label: 'Monthly Data',
      config: {
        color: '#4B6AF9',
        lineWidth: 2,
        drawCircles: true,
        circleColor: '#4B6AF9',
        circleRadius: 4,
        drawValues: false,
        drawHighlightIndicators: false,
        highlightColor: 'rgba(75, 106, 249, 0.5)',
      }
    }]
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Card>
      <View style={styles.container}>
        <Text style={globalStyles.title}>Monthly Overview</Text>
        
        <View style={styles.chartContainer}>
          <LineChart
            style={styles.chart}
            data={data}
            chartDescription={{ text: '' }}
            xAxis={{
              position: 'BOTTOM',
              drawGridLines: false,
            //   axisLineColor: '#E9ECEF',
            //   textColor: '#6C757D',
              textSize: 10,
              avoidFirstLastClipping: true,
              valueFormatter: months,
              granularityEnabled: true,
              granularity: 1,
            }}
            yAxis={{
              left: {
                drawGridLines: true,
                // gridColor: '#E9ECEF',
                // axisLineColor: '#E9ECEF',
                // textColor: '#6C757D',
                textSize: 10,
                drawAxisLine: true,
                drawLabels: true,
              },
              right: {
                enabled: false
              }
            }}
            drawGridBackground={false}
            drawBorders={false}
            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            pinchZoom={true}
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            legend={{
              enabled: false
            }}
          />
        </View>
      </View>
    </Card>
  );
};

export default ChartCard;