import { View, Text,TouchableOpacity, Image } from "react-native";
import styles from "../styles/postsScreenStyles";
import { useNavigation, useRoute } from "@react-navigation/native";


const PostsScreen = () => {
    const navigation = useNavigation();
    const { params: { email, login } } = useRoute();
    


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
                        <Text style={styles.userName}>{ login ? login : 'Natalia Romanova'}</Text>
                        <Text style={styles.userEmail}>{ email ? email : 'example@mail.com' }</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}


export default PostsScreen;