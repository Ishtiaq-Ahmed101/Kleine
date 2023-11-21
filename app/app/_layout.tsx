import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
        <Slot/>
    </SafeAreaView>
  )
};

export default Layout;