import React from 'react';
import { StyleSheet, StatusBar, ScrollView, SafeAreaView, } from 'react-native';
import { Header } from 'react-native-elements'
import BooksList from './component/BooksList';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header
       // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Books', style: { color: '#fff',fontSize:20 } }}
       // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <BooksList/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  contentContainer: {
      paddingTop: 0,
  },
});
