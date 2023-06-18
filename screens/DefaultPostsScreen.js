import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { authSignOut } from "../redux/auth/authOperations";

import styles from "../styles/postsScreenStyles";
import { app } from '../firebase/config';
import 'firebase/firestore'
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firestore = getFirestore(app);

const DefaultPostsScreen = () => {
    const [posts, setPosts] = useState([]);
    const { email, nickname } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const getAllPosts = async () => {
        onSnapshot(collection(firestore, 'posts'), (data) => {
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        });
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публикации</Text>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(authSignOut())}>
                    <Image source={require('../assets/images/log-out.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.postsContainer}>
                <View style={styles.userContainer}>
                    <Image source={require('../assets/images/user.png')} style={{marginRight: 8}} />
                    <View style={styles.userDescription}>
                        <Text style={styles.userName}>{ nickname }</Text>
                        <Text style={styles.userEmail}>{ email }</Text>
                    </View>
                </View>
            </View>
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
    )
}


export default DefaultPostsScreen;