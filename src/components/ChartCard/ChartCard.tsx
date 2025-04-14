import React from 'react';
import { View, Text, processColor  } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import Card from '../Card/Card';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import Icon from '../../styles/Icon';

const ChartCard: React.FC = () => {
  const data = {
    dataSets: [
      {
        values: [
          { x: 0, y: 50 }, { x: 1, y: 10 }, { x: 2, y: 40 },
          { x: 3, y: 95 }, { x: 4, y: 85 }, { x: 5, y: 91 },
          { x: 6, y: 35 }, { x: 7, y: 53 }, { x: 8, y: 24 },
          { x: 9, y: 50 }, { x: 10, y: 60 }, { x: 11, y: 80 }
        ],
        label: 'Previous Month',
        config: {
          mode: 'CUBIC_BEZIER',
          color: processColor('#00CED1'),
          drawFilled: true,
          fillGradient: {
            colors: [processColor('#00CED1'), processColor('transparent')],
            positions: [0, 1],
            angle: 90,
            orientation: 'TOP_BOTTOM'
          },
          fillAlpha: 1000,
          drawCircles: true,
          circleColor: processColor('#00CED1'),
          circleRadius: 5,
          drawValues: false,
        }
      },
      {
        values: [
          { x: 0, y: 45 }, { x: 1, y: 15 }, { x: 2, y: 35 },
          { x: 3, y: 80 }, { x: 4, y: 65 }, { x: 5, y: 87 },
          { x: 6, y: 25 }, { x: 7, y: 43 }, { x: 8, y: 34 },
          { x: 9, y: 60 }, { x: 10, y: 70 }, { x: 11, y: 90 }
        ],
        label: 'Current Month',
        config: {
          mode: 'CUBIC_BEZIER',
          color: processColor('#663399'),
          drawFilled: true,
          fillGradient: {
            colors: [processColor('#663399'), processColor('transparent')],
            positions: [0, 1],
            angle: 90,
            orientation: 'TOP_BOTTOM'
          },
          fillAlpha: 1000,
          drawCircles: true,
          circleColor: processColor('#663399'),
          circleRadius: 5,
          drawValues: false,
        }
      }
    ]
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Card>
      <View style={styles.container}>
        <View style={{ gap: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ gap: 6 }}>
            <Text style={styles.title}>September Activites</Text>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Icon type='FontAwesome' name='circle' size={16} color={'#663399'} />
                <Text style={{ color: colors.gray, fontSize: 12 }}>Current Month</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Icon type='FontAwesome' name='circle' size={16} color={'#00ced1'} />
                <Text style={{ color: colors.gray, fontSize: 12 }}>Previous Month</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon type='AntDesign' name="rightcircleo" size={23} color={colors.gray} />
          </View>
        </View>


        <View style={styles.chartContainer}>
          <LineChart
            style={styles.chart}
            data={data}
            chartDescription={{ text: '' }}
            xAxis={{
              position: 'BOTTOM',
              drawGridLines: false,
              textSize: 10,
              avoidFirstLastClipping: true,
              valueFormatter: months,
              granularityEnabled: true,
              granularity: 1,
            }}
            yAxis={{
              left: {
                drawGridLines: true,
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