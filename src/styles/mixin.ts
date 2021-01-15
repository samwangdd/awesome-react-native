/* 方法 */
import {Alert, Dimensions, Platform, TextStyle, ViewStyle} from 'react-native';

const {height, width} = Dimensions.get('window'),
  /**
   * 屏幕工具类
   * ui设计基准,iphone 6
   * width:750
   * height:1334
   *设备的像素密度，例如：
   *PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
   *PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
   *PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
   *PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
   *PixelRatio.get() === 3.5        Nexus 6       */
  defaultPixel = 2, //iphone6的像素密度
  //px转换成dp
  w2 = 750 / defaultPixel,
  h2 = 1334 / defaultPixel,
  scale = Math.min(height / h2, width / w2); //获取缩放比例

export function getScale() {
  return scale;
}

/**
 * 设置text为sp，单位为像素
 * @param size sp
 * return number dp
 */

export function setSpText(spSize: number) {
  return Math.round(spSize * scale + 0.5);
}

/**
 * 屏幕大小适配size，单位为像素
 * @param {number} size
 * @returns {number}
 */
export function scaleSize(scaleSize: number) {
  const scaleSizeTmp = Math.round(scaleSize * scale + 0.5);

  return scaleSizeTmp;
}

//盒子
function uf(flexNumber: number): ViewStyle {
  return {flex: flexNumber};
}

//高度百分比
function hRatio(height: number): ViewStyle {
  return {height: height + '%'};
}

//高度
function h(height: number): ViewStyle {
  return {height: scaleSize(height)};
}

//最小高度
function minh(minHeight: number): ViewStyle {
  return {minHeight: scaleSize(minHeight)};
}

//最大高度
function maxh(maxHeight: number): ViewStyle {
  return {maxHeight: scaleSize(maxHeight)};
}

//宽度百分比
function wRatio(width: number): ViewStyle {
  return {width: width + '%'};
}

//宽度
function w(width: number): ViewStyle {
  return {width: scaleSize(width)};
}

//最小宽度
export function minw(minWidth: number): ViewStyle {
  return {minWidth: scaleSize(minWidth)};
}

//最大宽度
function maxw(maxWidth: number): ViewStyle {
  return {maxWidth: scaleSize(maxWidth)};
}

//内边距
function pt(paddingTop: number): ViewStyle {
  return {paddingTop: scaleSize(paddingTop)};
}

function pr(paddingRight: number): ViewStyle {
  return {paddingRight: scaleSize(paddingRight)};
}

function pl(paddingLeft: number): ViewStyle {
  return {paddingLeft: scaleSize(paddingLeft)};
}

function pb(paddingBottom: number): ViewStyle {
  return {paddingBottom: scaleSize(paddingBottom)};
}

function pa(padding: number): ViewStyle {
  return {padding: scaleSize(padding)};
}

function padding(paddingArr: any): ViewStyle {
  /*传递的是一个数组*/
  if (paddingArr.constructor === Array) {
    return {
      paddingTop: scaleSize(paddingArr[0]),
      paddingRight: scaleSize(paddingArr[1]),
      paddingBottom: scaleSize(paddingArr[2]),
      paddingLeft: scaleSize(paddingArr[3]),
    };
  }
  Alert.alert(
    '提示:',
    'padding方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数',
  );
  return {};
}

//边框
function bt(borderTopWidth: number): ViewStyle {
  return {borderTopWidth: scaleSize(borderTopWidth)};
}

function bb(borderBottomWidth: number): ViewStyle {
  return {borderBottomWidth: scaleSize(borderBottomWidth)};
}

function bl(borderLeftWidth: number): ViewStyle {
  return {borderLeftWidth: scaleSize(borderLeftWidth)};
}

function br(borderRightWidth: number): ViewStyle {
  return {borderRightWidth: scaleSize(borderRightWidth)};
}

function bo(borderWidth: number): ViewStyle {
  return {borderWidth: scaleSize(borderWidth)};
}

function border(borderWidthArr: any): ViewStyle {
  /*传递的是一个数组*/
  if (borderWidthArr.constructor === Array) {
    return {
      borderTopWidth: scaleSize(borderWidthArr[0]),
      borderRightWidth: scaleSize(borderWidthArr[1]),
      borderBottomWidth: scaleSize(borderWidthArr[2]),
      borderLeftWidth: scaleSize(borderWidthArr[3]),
    };
  }
  Alert.alert(
    '提示:',
    'border方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数',
  );
  return {};
}

//外边距
function mt(marginTop: number): ViewStyle {
  return {marginTop: scaleSize(marginTop)};
}

function mb(marginBottom: number): ViewStyle {
  return {marginBottom: scaleSize(marginBottom)};
}

function ml(marginLeft: number): ViewStyle {
  return {marginLeft: scaleSize(marginLeft)};
}

function mr(marginRight: number): ViewStyle {
  return {marginRight: scaleSize(marginRight)};
}

function ma(margin: number): ViewStyle {
  return {margin: scaleSize(margin)};
}

function margin(marginArr: any): ViewStyle {
  /*传递的是一个数组*/
  if (marginArr.constructor === Array) {
    return {
      marginTop: scaleSize(marginArr[0]),
      marginRight: scaleSize(marginArr[1]),
      marginBottom: scaleSize(marginArr[2]),
      marginLeft: scaleSize(marginArr[3]),
    };
  }
  Alert.alert(
    '提示:',
    'margin方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数',
  );
  return {};
}

//圆角
function radiusA(borderRadius: number): ViewStyle {
  return {borderRadius: scaleSize(borderRadius)};
}

function radiusTL(borderTopLeftRadius: number): ViewStyle {
  return {borderTopLeftRadius: scaleSize(borderTopLeftRadius)};
}

function radiusTR(borderTopRightRadius: number): ViewStyle {
  return {borderTopRightRadius: scaleSize(borderTopRightRadius)};
}

function radiusBL(borderBottomLeftRadius: number): ViewStyle {
  return {borderBottomLeftRadius: scaleSize(borderBottomLeftRadius)};
}

function radiusBR(borderBottomRightRadius: number): ViewStyle {
  return {borderBottomRightRadius: scaleSize(borderBottomRightRadius)};
}

function borderRadius(borderRadiusArr: any): ViewStyle {
  /*传递的是一个数组*/
  if (borderRadiusArr.constructor === Array) {
    return {
      borderTopLeftRadius: scaleSize(borderRadiusArr[0]),
      borderTopRightRadius: scaleSize(borderRadiusArr[1]),
      borderBottomRightRadius: scaleSize(borderRadiusArr[2]),
      borderBottomLeftRadius: scaleSize(borderRadiusArr[3]),
    };
  }
  Alert.alert(
    '提示:',
    'radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转',
  );
  return {};
}

//位置
function absT(top: number): ViewStyle {
  return {top: scaleSize(top)};
}

function absB(bottom: number): ViewStyle {
  return {bottom: scaleSize(bottom)};
}

function absL(left: number): ViewStyle {
  return {left: scaleSize(left)};
}

function absR(right: number): ViewStyle {
  return {right: scaleSize(right)};
}

function abs(absolutePositionArr: any): ViewStyle {
  /*传递的是一个数组*/
  if (absolutePositionArr.constructor === Array) {
    return {
      top: scaleSize(absolutePositionArr[0]),
      right: scaleSize(absolutePositionArr[1]),
      bottom: scaleSize(absolutePositionArr[2]),
      left: scaleSize(absolutePositionArr[3]),
    };
  }
  Alert.alert(
    '提示:',
    'abs方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数',
  );
  return {};
}

/*字体大小*/
function fSize(fontSize: number): TextStyle {
  if (Platform.OS === 'ios') {
    return {fontSize: setSpText(fontSize - 2)};
  }
  return {fontSize: setSpText(fontSize)};
}

/*字体风格*/
function fFamily(fontFamily: string): TextStyle {
  return {fontFamily};
}

/*字体weight*/
function fWeight(fontWeight: any): TextStyle {
  return {fontWeight: fontWeight.toString()};
}

/*字体颜色*/
function color(color: string): TextStyle {
  return {color};
}

/*字体行高*/
function lh(lineHeight: number): TextStyle {
  return {lineHeight};
}

/*字体行间距*/
function ls(letterSpacing: number): TextStyle {
  return {letterSpacing};
}

/*背景色*/
function bgColor(backgroundColor: string): ViewStyle {
  return {backgroundColor};
}

/*边框色*/
function bdColor(borderColor: string): ViewStyle {
  return {borderColor};
}

/*透明度*/

function op(opacity: number): ViewStyle {
  return {opacity};
}

/*透明度*/

function bs(borderStyle: any): ViewStyle {
  return {borderStyle};
}

export {
  h,
  w,
  bo,
  bs,
  pt,
  pr,
  pl,
  pb,
  pa,
  padding,
  bt,
  bb,
  bl,
  br,
  border,
  borderRadius,
  mt,
  mb,
  mr,
  ml,
  ma,
  margin,
  maxw,
  minh,
  maxh,
  radiusTL,
  radiusTR,
  radiusBL,
  radiusBR,
  absT,
  absB,
  absL,
  absR,
  abs,
  color,
  bgColor,
  bdColor,
  fSize,
  fFamily,
  op,
  radiusA,
  height,
  width,
  wRatio,
  hRatio,
  lh,
  ls,
  fWeight,
  uf,
};
