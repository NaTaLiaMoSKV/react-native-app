import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/profileScreenStyles";
import { FlatList } from "react-native-gesture-handler";
import POSTS from "../db/posts";

export default function ProfileScreen({ navigation }) {
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
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../assets/images/log-out.png')} />
                </TouchableOpacity>
                <Text style={styles.profileTitle}>Natalia Romanova</Text>

                <FlatList contentContainerStyle={{ alignItems: 'center', marginTop: 32, paddingBottom: 32 }}
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
        </>
    )
}