import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
    return (
     <View>
     <View style={tw`h-1/2`}>
        <Map />
     </View>
     <View></View>
     </View>

    )
}

export default MapScreen

const styles = StyleSheet.create({})
