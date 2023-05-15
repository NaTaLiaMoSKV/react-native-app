import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useState } from "react";
import styles from "../styles/registrationStyles";

export default function RegistrationScreen() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoginFocused, setIsLoginFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleSubmit = () => {
        console.log(`login: ${login} email: ${email} password: ${password}`);
        setLogin('');
        setEmail('');
        setPassword('');
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
                     <TextInput
                        style={{
                            ...styles.registrationInput,
                            borderColor: isLoginFocused ? '#FF6C00' : '#E8E8E8',
                            backgroundColor: isLoginFocused ? '#FFF' : '#F6F6F6'
                        }}
                        onFocus={() => {setIsFocused(true), setIsLoginFocused(true)}}
                        onBlur={() => {setIsFocused(false), setIsLoginFocused(false)}}
                        placeholderTextColor="#BDBDBD"
                        placeholder="Логин"
                        value={login} onChangeText={setLogin}
                    />
                     <TextInput
                        style={{
                            ...styles.registrationInput,
                            borderColor: isEmailFocused ? '#FF6C00' : '#E8E8E8',
                            backgroundColor: isEmailFocused ? '#FFF' : '#F6F6F6'
                        }}
                        onFocus={() => {setIsFocused(true), setIsEmailFocused(true)}}
                        onBlur={() => {setIsFocused(false), setIsEmailFocused(false)}}
                        placeholderTextColor="#BDBDBD"
                        placeholder="Адрес электронной почты"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email} onChangeText={setEmail}
                    />
                    <TextInput
                        style={{
                            ...styles.registrationInput,
                            borderColor: isPasswordFocused ? '#FF6C00' : '#E8E8E8',
                            backgroundColor: isPasswordFocused ? '#FFF' : '#F6F6F6'
                        }}
                        onFocus={() => {setIsFocused(true), setIsPasswordFocused(true)}}
                        onBlur={() => {setIsFocused(false), setIsPasswordFocused(false)}}
                        placeholderTextColor="#BDBDBD"
                        secureTextEntry={true}
                        placeholder="Пароль"
                        value={password} onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.registrationButton} onPress={handleSubmit}>
                        <Text style={styles.registrationButtonTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationLink}>Уже есть аккаунт? Войти</Text>
                </View>
            </View>
        </>
        
    )
};