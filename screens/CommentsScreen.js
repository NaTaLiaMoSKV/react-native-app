import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "../styles/commentsScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CommentsScreen() {
    const navigation = useNavigation();
    const { params: { image } } = useRoute();

     const handleLogout = () => {
        navigation.navigate('Публикации');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Комментарии</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Ionicons name="arrow-back" size={20} color="#21212180"
                        onPress={() => { navigation.navigate('Публикации') }}
                        style={{ marginLeft: 10, padding: 5, transform: [{ scaleX: 1.2 }] }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.commentsContainer}>
                <Image source={image} />
                <Image style={{marginTop: 32, width: 343, height: 323}} source={require('../assets/images/comments.png')} />
            </ScrollView>
            <Image style={styles.searchImage} source={require('../assets/images/search.png')} />
            


        </View>
    )
}