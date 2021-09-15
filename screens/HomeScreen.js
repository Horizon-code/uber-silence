import React from 'react'
import { SafeAreaView,StyleSheet,Image, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

        return (
            <SafeAreaView style={tw`bg-white h-full`}>
              <View style={tw`p-3`}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                  source={{ uri: "https://links.papareact.com/gzs" }}
                />
              <GooglePlacesAutocomplete
                styles={{
                  container: {
                    flex: 0,
                    },
                  textInput: {
                    fontSize: 18,
                    },
                  }}
                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                      location: details.geometry.location,
                      description: data.description,
                    })
                    );
                    dispatch(setDestination(null));
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                enablePoweredByContainer={false}
                minLength={2}
                placeholder="Where From?"
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: "en",
                }}
                />
              <NavOptions/>
              </View> 
                
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})
