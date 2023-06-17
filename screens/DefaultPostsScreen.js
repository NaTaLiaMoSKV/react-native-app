import { View, Text,TouchableOpacity, Image } from "react-native";
import styles from "../styles/postsScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authSignOut } from "../redux/auth/authOperations";

const DefaultPostsScreen = ({ route }) => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (route.params == undefined) {
            setPosts((prevState) => [...prevState]);
        } else {
            if (!posts.find(post => post.name == route.params.newPost.name)) {
                setPosts((prevState) => [route.params.newPost, ...prevState]);
            }
        }
    }, [route.params])

    const navigation = useNavigation();

    // const handleLogout = () => {
    //     navigation.navigate('Login');
    // };

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
                        <Text style={styles.userName}>Natalia Romanova</Text>
                        <Text style={styles.userEmail}>example@mail.com</Text>
                    </View>
                </View>
            </View>
            <FlatList contentContainerStyle={{ alignItems: 'center', marginTop: 16, paddingBottom: 16 }}
                    data={posts}
                    renderItem={({ item }) => <View style={styles.profilePost}>
                        <Image style={{width:343, height: 240, borderRadius: 8}} source={item.image} />
                        <Text style={styles.profilePostName}>{item.title}</Text>
                        <View style={styles.profilePostDecription}>
                            <View style={styles.profilePostInfo}>
                                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() =>  navigation.navigate('Comments', { image: item.image })} >
                                    <Image source={require('../assets/images/comment.png')} />
                                    <Text style={styles.profilePostInfoText}>{item.comments}</Text>
                                </TouchableOpacity>
                                <Image source={require('../assets/images/like.png')}/>
                                <Text style={styles.profilePostInfoText}>{item.likes}</Text>
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