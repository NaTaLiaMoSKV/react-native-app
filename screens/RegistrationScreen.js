import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useState } from "react";
import styles from "../styles/registrationStyles";

export default function RegistrationScreen() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = () => {
      console.debug('Welcome!');
    };
    return (
        <>
            <Image style={styles.bgImage} source={require('../assets/images/bg-image.png')} />
            <View style={{...styles.registrationView, marginTop: isFocused ? 147 : 263 }}>
                <View style={styles.loadPhotoView}>
                    <View style={styles.loadPhotoButton}>
                        <Image source={require('../assets/images/add-photo.png')}/>
                    </View>
                </View>
                <Text style={styles.registrationTitle}>Регистрация</Text>
                <View style={styles.registrationForm}>
                    <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={styles.registrationInput} placeholderTextColor="#BDBDBD" placeholder="Логин" value={login} onChangeText={setLogin} />
                    <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={styles.registrationInput} placeholderTextColor="#BDBDBD" placeholder="Адрес электронной почты" value={email} onChangeText={setEmail} />
                    <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={styles.registrationInput} placeholderTextColor="#BDBDBD" placeholder="Пароль" value={password} onChangeText={setPassword} />
                    <TouchableOpacity style={styles.registrationButton} onPress={handleSubmit}>
                        <Text style={styles.registrationButtonTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationLink}>Уже есть аккаунт? Войти</Text>
                </View>
            </View>
        </>
        
    )
};