import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/createPostsScreenStyles";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import 'firebase/firestore'

import { app } from '../firebase/config';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function CreatePostsScreen() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [coords, setCoords] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [photo, setPhoto] = useState(null);

    const { userId, nickname } = useSelector((state) => state.auth);
    
    const cameraRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

   
    const takePhoto = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            setPhoto(uri);

            const location = await Location.getCurrentPositionAsync({});
            setCoords({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        }
    };

    const uploadPhotoToServer = async () => {
        const storage = getStorage(app);

        const response = await fetch(photo);
        const fileBlob = await response.blob();

        const uniquePostId = Date.now().toString();

        const storageRef = ref(storage, `postImage/${uniquePostId}`);
        const uploadTask = await uploadBytes(storageRef, fileBlob);
        const downloadURL = await getDownloadURL(storageRef)

        return downloadURL;
    }

    const uploadPostToServer = async () => {
        const photo = await uploadPhotoToServer();
        const firestore = getFirestore(app);

        const newPost = {
            userId,
            nickname,
            title: name,
            image: photo,
            comments: 0,
            likes: 0,
            location: location,
            coords: coords,
        }

        const docRef = await addDoc(collection(firestore, 'posts'), newPost);
    }

    const deletePhoto = () => {
        setPhoto(null);
    };

    const navigation = useNavigation();

    const handleSubmit = async () => {
        await uploadPostToServer();
        
        setPhoto(null);
        setName('');
        setLocation('');
        setCoords(null)
        
        navigation.navigate('DefaultPosts');
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                { photo ? (
                    <>
                        <Image source={{ uri: photo }} style={styles.previewImage} />
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
                {name !== '' && location !== '' && photo !== null && coords !== null ? (
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
