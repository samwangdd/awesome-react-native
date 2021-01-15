/* 公用 styles 样式类 */
import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from './constant';
import {margin} from './mixin';

const {height, width} = Dimensions.get('window');

//总则u开头表示样式(ui),c开头表示颜色(color)
const commonStyle = StyleSheet.create({
  deviceWidth: {width},
  deviceHeight: {height},
  h100: {
    height: '100%',
  },
  w100: {
    width: '100%',
  },
  uWrap: {
    flexWrap: 'wrap', //自动换行
  },
  uNoWrap: {
    flexWrap: 'nowrap', //截断
  },
  //主轴的排列方向
  udr: {
    //子项横向排列
    flexDirection: 'row',
  },
  udc: {
    //子项竖向排列
    flexDirection: 'column',
  },
  //主轴的排列方向 end

  uf1: {
    flex: 1,
  },

  //次轴排序
  uas: {
    //居前
    alignItems: 'flex-start',
  },
  uac: {
    //居中
    alignItems: 'center',
  },
  uae: {
    //居后
    alignItems: 'flex-end',
  },
  //主轴排序
  ujs: {
    //居前
    justifyContent: 'flex-start',
  },
  ujc: {
    //居中
    justifyContent: 'center',
  },
  uje: {
    //居后
    justifyContent: 'flex-end',
  },
  uja: {
    //平均分布
    justifyContent: 'space-around',
  },
  ujb: {
    //两端
    justifyContent: 'space-between',
  },
  //自身次轴对齐 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
  uSelfAuto: {alignSelf: 'auto'},
  uSelfStart: {alignSelf: 'flex-start'},
  uSelfEnd: {alignSelf: 'flex-end'},
  uSelfCenter: {alignSelf: 'center'},
  uSelfStretch: {alignSelf: 'stretch'},
  upa: {
    //绝对定位
    position: 'absolute',
  },
  upr: {
    position: 'relative',
  },
  //文字水平居中 enum('auto', 'left', 'right', 'center')
  utxc: {
    textAlign: 'center',
  },
  //水平居左
  utxl: {
    textAlign: 'left',
  },
  //水平居右
  utxr: {
    textAlign: 'right',
  },
  //文字垂直居中 textAlignVertical enum('auto', 'top', 'bottom', 'center') 只支持安卓
  utxvc: {
    textAlignVertical: 'center',
  },
  utxvt: {
    textAlignVertical: 'top',
  },
  //文本横线-底部
  utxdu: {
    textDecorationLine: 'underline',
  },
  //文本横线-中间
  utxdt: {
    textDecorationLine: 'line-through',
  },
  //文本横线-中间和底部
  utxdut: {
    textDecorationLine: 'underline line-through',
  },
  shadowOB: {
    shadowColor: 'rgb(195, 195, 195)',
    shadowOpacity: 0.33,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
  },
  //按键阴影
  uvs: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.33,
    shadowRadius: 5,
  },
  sectionContainer: {...margin([16, 16, 0, 16])},
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.dark,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.description,
  },
  highlight: {
    fontWeight: '700',
  },
});

export {commonStyle};
