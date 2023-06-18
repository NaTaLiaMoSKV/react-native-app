import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { authSignOut } from "../redux/auth/authOperations";

import styles from "../styles/profileScreenStyles";
import { app } from '../firebase/config';
import 'firebase/firestore'
import { getFirestore, collection, where, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const firestore = getFirestore(app);

export default function ProfileScreen() {
    const { userId, nickname } = useSelector(state => state.auth);
    const [posts, setPosts] = useState([]);
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const getUserPosts = async () => {
        await onSnapshot(collection(firestore, 'posts'), where('userId', '==', userId), (data) => {
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        });      
    }

    useEffect(() => {
        getUserPosts();
    }, [])

    return (
        <>
            <Image style={styles.bgImage} source={require('../assets/images/bg-image.png')} />
            <View style={{...styles.profileView, marginTop: 147 }}>
                <View style={styles.loadPhotoView}>
                    <Image source={require('../assets/images/user-120x120.png')}/>
                    <View style={styles.loadPhotoButton}>
                        <Image source={require('../assets/images/del-photo.png')}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(authSignOut())}>
                    <Image source={require('../assets/images/log-out.png')} />
                </TouchableOpacity>
                <Text style={styles.profileTitle}>{ nickname }</Text>

                <FlatList contentContainerStyle={{ alignItems: 'center', marginTop: 16, paddingBottom: 16 }}
                    data={posts}
                    renderItem={({ item }) => <View style={styles.profilePost}>
                        <Image style={{width:343, height: 240, borderRadius: 8}} source={{ uri: item.image }} />
                        <Text style={styles.profilePostName}>{item.title}</Text>
                        <View style={styles.profilePostDecription}>
                            <View style={styles.profilePostInfo}>
                                <TouchableOpacity style={{flexDirection: 'row', marginRight: 20}} onPress={() =>  navigation.navigate('Comments', { postId: item.id, image: item.image })} >
                                    <Image source={require('../assets/images/comment.png')} />
                                </TouchableOpacity>
                                <Image source={require('../assets/images/like.png')}/>
                            </View>
                            <TouchableOpacity style={styles.profilePostInfo} onPress={() =>  navigation.navigate('Map', { coords: item.coords })}>
                                <Image source={require('../assets/images/map.png')}/>
                                <Text style={styles.profilePostLocationText}>{item.location}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
                    keyExtractor={(item) => (item.id)}
                />
            </View>
        </>
    )
}