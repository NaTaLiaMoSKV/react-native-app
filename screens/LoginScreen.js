import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { useState } from "react";
import styles from "../styles/registrationScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { authSignIn } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isFocused, setIsFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
        dispatch(authSignIn(email, password));
    };

    return (
        <>
          <Image style={styles.bgImage} source={require('../assets/images/bg-image.png')} />
            <View style={{...styles.registrationView, marginTop: isFocused ? 243 : 323 }}>
                <Text style={{...styles.registrationTitle, marginTop: 32}}>Войти</Text>
                <View style={styles.registrationForm}>
                    
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
                        <Text style={styles.registrationButtonTitle}>Войти</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationLink}>Нет аккаунта? <Text onPress={() => navigation.navigate("Registration")}>Зарегистрироваться</Text> </Text>
                </View>
            </View>
        </>
        
    )
};

