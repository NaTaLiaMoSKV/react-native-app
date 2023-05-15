import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { useState } from "react";
import styles from "../styles/registrationStyles";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = () => {
      
    };
    return (
        <>
          <Image style={styles.bgImage} source={require('../assets/images/bg-image.png')} />
            <View style={{...styles.registrationView, marginTop: isFocused ? 243 : 323 }}>
                <Text style={{...styles.registrationTitle, marginTop: 32}}>Войти</Text>
                <View style={styles.registrationForm}>
                    <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={styles.registrationInput} placeholderTextColor="#BDBDBD" placeholder="Адрес электронной почты" value={email} onChangeText={setEmail} />
                    <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={styles.registrationInput} placeholderTextColor="#BDBDBD" placeholder="Пароль" value={password} onChangeText={setPassword} />
                    <TouchableOpacity style={styles.registrationButton} onPress={handleSubmit}>
                        <Text style={styles.registrationButtonTitle}>Войти</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationLink}>Нет аккаунта? Зарегистрироваться</Text>
                </View>
            </View>
        </>
        
    )
};

