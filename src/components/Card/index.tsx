import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  commonStyle as CS,
  Colors,
  padding,
  Layout,
  borderRadius,
} from '../../styles';

const space = Layout.whiteSpace;

interface ICard {
  [x: string]: ReactNode;
  type?: String;
  shape?: Boolean;
}

const Card = (props: ICard) => {
  const {shape} = props;

  return (
    <View
      style={[
        CS.sectionContainer,
        styles.cardWrapper,
        shape ? borderRadius([25, 25, 25, 25]) : null,
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: Colors.background,
    ...padding([...Array(4).fill(space)]),
  },
});
export default Card;
