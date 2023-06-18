import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    comment: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: '6',
        padding: 15,
        width: 300,
        marginTop: 12,
        marginBottom: 12,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentAuthor: {
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
    },
    commentText: {
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
        marginBottom: 8,
    },
    commentDate: {
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'right',
        color: '#BDBDBD',
    },
    inputContainer: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 100,
        width: 270,
        padding: 15
    },
    sendButton: {
        width: 50,
        height: 34,
        marginLeft: 10,
        borderRadius: '50%',
        borderColor: '#212121',
        backgroundColor: '#FF6C00',
    },
})

export default styles;