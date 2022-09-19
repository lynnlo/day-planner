import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PoiretOne_400Regular } from "@expo-google-fonts/dev";

export default function App() {
    let [fontsLoaded] = useFonts({
      PoiretOne_400Regular
    })
    
    return (
      <View style={styles.view}>
        <StatusBar style="auto" />
        <Text style={styles.textMain}> Hello World! </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    color: '#E0E1DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMain: {
    color: '#E0E1DD',
    fontSize: '4rem',
    fontFamily: 'PoiretOne_400Regular'
  }
});
