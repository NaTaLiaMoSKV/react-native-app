import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    bgImage: {
        position: 'absolute',
        width: '100%',
    },
    registrationView: {
        position: "relative",
        marginTop: 263,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
    },
    loadPhotoView: {
        position: "absolute",
        top: -60,
        left: '50%',
        transform: [{ translateX: -50 }],
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    loadPhotoButton: {
        position: "absolute",
        width: 25,
        height: 25,
        bottom: 14,
        right: -12,
        padding: 5,

        backgroundColor: '#FFF',
        borderColor: "#FF6C00",
        borderWidth: 1,
        borderRadius: 16,
    },
    registrationTitle: {
        marginTop: 92,
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        fontWeight: 500,
        textAlign: "center",
        lineHeight: 35,
        letterSpacing: 0.01,
        color: '#212121',
    },
    registrationForm: {
        margin: 16,
    },
    registrationInput: {
        height: 50,
        padding: 16, 
        marginTop: 16,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8E8',
        color: '#212121',
    },
    registrationButton: {
        marginTop: 43,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 100,
        backgroundColor: '#FF6C00',
    },
    registrationButtonTitle: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFF',
    },
    registrationLink: {
        marginTop: 16,
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        color: '#1B4371',
    },
});

export default styles;