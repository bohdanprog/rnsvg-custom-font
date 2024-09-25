import { SafeAreaView, StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded, error] = useFonts({
    "SFProRounded-Regular": require("./assets/fonts/SFProRounded-Regular.otf"),
  });

  console.log(loaded, "loaded");
  console.log(error, "error");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loaded ? (
        <Svg width={"100%"} height={"100%"}>
          <Text
            fill={"black"}
            fontSize={24}
            fontWeight={600}
            fontFamily={"SFProRounded-Regular"}
            fontFeatureSettings={"tnum"}
            x="20"
            y="200"
            textAnchor="start"
          >
            {"-+1!2@3#4$5%6^7&8*9(0)+-"}
          </Text>
        </Svg>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}
