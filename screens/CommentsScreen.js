import { View, Image, ScrollView } from "react-native";
import styles from "../styles/commentsScreenStyles";

export default function CommentsScreen({ route }) {
    const { image } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.commentsContainer}>
                <Image style={{ width: 343, height: 240, borderRadius: 8 }} source={ image } />
                <Image style={{marginTop: 32, width: 343, height: 323}} source={require('../assets/images/comments.png')} />
            </ScrollView>
            <Image style={styles.searchImage} source={require('../assets/images/search.png')} />
        </View>
    )
}