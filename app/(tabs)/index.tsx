import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

const PlaceHolderImage = require("@/assets/images/background-image.png")

export default function Index() {
  const pickerImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ['images'],
      allowsEditing: true
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickerImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center"
  },
  imageContainer: {
    flex: 1
  },
  footerContainer: {
    alignItems: "center"
  }
})
