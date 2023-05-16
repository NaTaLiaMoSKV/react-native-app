import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        width: '100%',
    },
    profileView: {
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
        padding: 6,

        backgroundColor: '#FFF',
        borderColor: "#BDBDBD",
        borderWidth: 1,
        borderRadius: 16,
    },
    profileTitle: {
        marginTop: 46,
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        fontWeight: 500,
        textAlign: "center",
        lineHeight: 35,
        letterSpacing: 0.01,
        color: '#212121',
    },
    button: {
        marginLeft: 'auto',
        marginRight: 16,
        marginTop: 22,
    },
    profilePost: {
        marginBottom: 32,
        flexDirection: 'column',
    },
    profilePostName: {
        marginTop: 8,
        marginBottom: 10,
        fontFamily: 'Roboto-Medium',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    profilePostDecription: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePostInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePostInfoText: {
        marginLeft: 5,
        marginRight: 25,
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',

    },
    profilePostLocationText: {
        marginLeft: 5,
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
})

export default styles;