import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 32,
        alignItems: 'center'
    },
    addPhotoContainer: {
        width: 343,
    },
    addPhotoIcon: {
        width: 24,
        height: 24,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -12 }, { translateY: -12 }],
    },
    addPhotoText: {
        fontFamily: 'Roboto-Regular',
        marginTop: 8,
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
        photoView: {
        height: 240,
        width: 343,
        borderRadius: 8,
        justifyContent: "center",
    },
    cameraContainer: {
        height: 240,
        alignSelf: "center",
        justifyContent: 'center',
        position: 'relative',
        width: 343,
    },
    camera: {
        flex: 1,
    },
    previewImage: {
        flex: 1,
        width: "100%",
    },
    button: {
        position: "absolute",
        borderRadius: '50%',
        alignSelf: "center",
        width: 60,
        height: 60,
        backgroundColor: '#fff',
    },
    deleteButton: {
        position: "absolute",
        borderRadius: '50%',
        alignSelf: "center",
        width: 60,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    addPostContainer: {
        marginTop: 16,
    },
    addPostInput: {
        width: 343,
        padding: 16,
        paddingLeft: 0,
        marginTop: 16,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
    },
    addPostButton: {
        marginTop: 32,
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        paddingTop: 16,
        paddingBottom: 16,
    },
    addPostButtonTitle: {
        textAlign: 'center',
        color: '#BDBDBD',
    },

})

export default styles;