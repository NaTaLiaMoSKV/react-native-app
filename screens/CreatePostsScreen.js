import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/createPostsScreenStyles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function CreatePostsScreen() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log(`name: ${name} location: ${email} `);
         navigation.navigate('Home', {
            screen: 'Публикации',
            params: { name, location },
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.addPhotoContainer}>
                <View style={styles.addPhotoWrapper}>
                    <View style={styles.addPhotoIcon}>
                        <Image source={require('../assets/images/camera.png')} />
                    </View>
                </View>
                <Text style={styles.addPhotoText}>Загрузите фото</Text>
            </View>
            <View style={styles.addPostContainer}>
                    <TextInput
                    style={{
                        ...styles.addPostInput,
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Название..."
                    value={name} onChangeText={setName}
                />
                   
                <TextInput
                    style={{
                        ...styles.addPostInput,
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    placeholder="Местность..."
                    value={location} onChangeText={setLocation}
                />
                <TouchableOpacity style={styles.addPostButton} onPress={handleSubmit}>
                    <Text style={styles.addPostButtonTitle}>Опубликовать</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}