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
    addPhotoWrapper: {
        height: 240,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#F6F6F6',
    },
    addPhotoIcon: {
        padding: 18,
        backgroundColor: "#fff",
        position: 'absolute',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
    },
    addPhotoText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    addPostContainer: {
        marginTop: 16,
    },
    addPostInput: {
        width: 343,
        padding: 16,
        paddingLeft: 0,
        marginTop: 16,
        fontWeight: 400,
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
    }
})

export default styles;