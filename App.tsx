/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {commonStyle as CS, Colors} from './src/styles';
import Card from './src/components/Card';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Card shape>
              <View>
                <Text>12</Text>
                <Text>12</Text>
                <Text>12</Text>
                <Text>12</Text>
                <Text>12</Text>
              </View>
            </Card>
            <View style={CS.sectionContainer}>
              <Text style={CS.sectionTitle}>Step One</Text>
              <Text style={CS.sectionDescription}>
                Edit <Text style={CS.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={CS.sectionContainer}>
              <Text style={CS.sectionTitle}>See Your Changes</Text>
              <Text style={CS.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={CS.sectionContainer}>
              <Text style={CS.sectionTitle}>Debug</Text>
              <Text style={CS.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={CS.sectionContainer}>
              <Text style={CS.sectionTitle}>Learn More</Text>
              <Text style={CS.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
            {console.log('123 :>> ', 123)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.light,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
