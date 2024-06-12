import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import StoresList from '@/components/StoresList';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <Header />
        <StoresList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
