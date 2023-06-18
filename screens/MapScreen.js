import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
    const { coords } = route.params;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                region={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                mapType="standard"
                minZoomLevel={15}
            >
                <Marker
                title="I am here"
                coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
                description='Hello'
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});