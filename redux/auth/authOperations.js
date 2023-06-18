import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { authSlice } from "./authReducer";
import { app } from "../../firebase/config";

const auth = getAuth(app);

const authSignUp = (login, email, password) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        const user = auth.currentUser;

        await updateProfile(user, {
            displayName: login,
            email: email
        })
        
        dispatch(authSlice.actions.updateUserProfile({
            userId: user.uid,
            nickname: user.displayName,
            email: user.email,
        }));
        
    } catch (error) {
        console.log(error.message);
    }
};

const authSignIn = (email, password) => async (dispatch, getState) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error.message);
    }
};

const authSignOut = () => async (dispatch, getState) => {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
};


const authStateChangeUser = () => async (dispatch, getState) => {
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(authSlice.actions.updateUserProfile({
                userId: user.uid,
                nickname: user.displayName,
                email: user.email,
            }));
            dispatch(authSlice.actions.authStateChange({
                stateChange: true
            }));
        }
    })
};

export { authSignUp, authSignIn, authSignOut, authStateChangeUser };