import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/createPostsScreenStyles";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

export default function CreatePostsScreen() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [coords, setCoords] = useState(null);
    const [photoUri, setPhotoUri] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    
    const cameraRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

   
    const takePhoto = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);

            const location = await Location.getCurrentPositionAsync({});
            setCoords({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        }
    };

     useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }
            })();
    }, []);

    const deletePhoto = () => {
        setPhotoUri(null);
    };

    const navigation = useNavigation();

    const handleSubmit = () => {
        const newPost = {
            id: name + location,
            title: name,
            image: { uri: photoUri },
            comments: 0,
            likes: 0,
            location: location,
            coords: coords,
        };
        setPhotoUri(null);
        setName('');
        setLocation('');
        setCoords(null)
        navigation.navigate('DefaultPosts', { newPost });
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                { photoUri ? (
                    <>
                        <Image source={{ uri: photoUri }} style={styles.previewImage} />
                        <TouchableOpacity style={styles.deleteButton} onPress={deletePhoto}>
                            <Image style={styles.addPhotoIcon} source={require('../assets/images/camera1.png')} />
                        </TouchableOpacity>
                        <Text style={styles.addPhotoText}>Редактировать фото</Text>
                    </>
                ) : (
                    <>
                        <Camera style={styles.camera} type={type} ref={cameraRef} />
                        <TouchableOpacity style={styles.button} onPress={takePhoto}>
                            <Image style={styles.addPhotoIcon} source={require('../assets/images/camera2.png')} />
                        </TouchableOpacity>
                        <Text style={styles.addPhotoText}>Загрузите фото</Text>
                    </>
                )}
            </View>
            <View style={styles.addPostContainer}>
                <TextInput style={styles.addPostInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Название..."
                    value={name} onChangeText={setName}
                />
                   
                <TextInput style={styles.addPostInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Местность..."
                    value={location} onChangeText={setLocation}
                />
                {name !== '' && location !== '' && photoUri !== null && coords !== null ? (
                    <TouchableOpacity style={{...styles.addPostButton, backgroundColor: '#FF6C00'}} onPress={handleSubmit}>
                        <Text style={{...styles.addPostButtonTitle, color: '#FFFFFF'}}>Опубликовать</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.addPostButton}>
                        <Text style={styles.addPostButtonTitle}>Опубликовать</Text>
                    </TouchableOpacity>
                ) }                
            </View>
        </View>
    );
}
