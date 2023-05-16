import { View, Text,TouchableOpacity, Image } from "react-native";
import styles from "../styles/postsScreenStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import POSTS from "../db/posts";
import { FlatList } from "react-native-gesture-handler";

const PostsScreen = () => {
    const navigation = useNavigation();
    // const { params: { email, login } } = useRoute();

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публикации</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
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
                    data={POSTS}
                    renderItem={({ item }) => <View style={styles.profilePost}>
                        <Image source={item.image}/>
                        <Text style={styles.profilePostName}>{item.title}</Text>
                        <View style={styles.profilePostDecription}>
                            <View style={styles.profilePostInfo}>
                                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() =>  navigation.navigate('Comments', {image: item.image})} >
                                    <Image source={require('../assets/images/comment.png')} />
                                    <Text style={styles.profilePostInfoText}>{item.comments}</Text>
                                </TouchableOpacity>
                                <Image source={require('../assets/images/like.png')}/>
                                <Text style={styles.profilePostInfoText}>{item.likes}</Text>
                            </View>
                            <View style={styles.profilePostInfo}>
                                <Image source={require('../assets/images/map.png')}/>
                                <Text style={styles.profilePostLocationText}>{item.location}</Text>
                            </View>
                        </View>
                    </View>}
                    keyExtractor={(item) => (item.id)}
                />
            
        </View>
    )
}


export default PostsScreen;