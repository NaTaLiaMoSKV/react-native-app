import { View, Text, Image, FlatList, KeyboardAvoidingView, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { app } from '../firebase/config';
import { getFirestore, collection, doc, addDoc, onSnapshot } from 'firebase/firestore';

import 'firebase/firestore'
import { useSelector } from "react-redux";
import styles from "../styles/commentsScreenStyles";

const firestore = getFirestore(app);

export default function CommentsScreen({ route }) {
    const { image, postId } = route.params;
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState(null);
    
    const { nickname } = useSelector(state => state.auth);

    useEffect(() => {
        getAllPosts();
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const createPost = async () => {
        if (comment.trim() === '') return;
        const postsCollectionRef = collection(firestore, 'posts');
        const postDocRef = doc(postsCollectionRef, postId);

        const date = new Date();
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };

        const formattedDate = date.toLocaleString('ru-RU', options);

        const commentsCollectionRef = collection(postDocRef, 'comments');
        const newComment = {
            comment,
            date: formattedDate,
            nickname,
        };
        
        await addDoc(commentsCollectionRef, newComment);
    }

    const getAllPosts = async () => {
        const postsCollectionRef = collection(firestore, 'posts');
        const postDocRef = doc(postsCollectionRef, postId);
        const commentsCollectionRef = collection(postDocRef, 'comments');
        onSnapshot(commentsCollectionRef, (data) => {
            setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, })))
        });
    }

    const handleSend = async () => {
        await createPost();
        setComment('');
        Keyboard.dismiss();
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} >
            
            <View style={styles.container}>
                <Image style={{ marginBottom: 20, width: 343, height: 240, borderRadius: 8 }} source={{ uri: image }} />
                {allComments && 
                    <FlatList contentContainerStyle={{ }}
                        data={allComments}
                        renderItem={({ item }) => (
                            <View style={styles.commentContainer}>
                                <Image source={require('../assets/images/user.png')} style={{ width: 28, height: 28, borderRadius: 50, marginRight: 16 }} />
                                <View style={styles.comment}>
                                    <Text style={styles.commentText}>{item.comment}</Text>
                                    <Text style={styles.commentDate}>{item.date}</Text>
                                </View>
                            </View>
                                
                        )}
                        keyExtractor={(item) => (item.id)}
                    />
                }
                
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Комментарий..."
                        value={comment}
                        onChangeText={setComment}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                        <Text style={{ color: '#fff', textAlign: 'center', padding: 8 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}