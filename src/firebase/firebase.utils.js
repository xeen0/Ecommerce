import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
        apiKey: "AIzaSyD5ll7OTXQAs-YARb7ZKjwn-P6O4mwOt2w",
        authDomain: "crown-ecomerce.firebaseapp.com",
        databaseURL: "https://crown-ecomerce.firebaseio.com",
        projectId: "crown-ecomerce",
        storageBucket: "",
        messagingSenderId: "932871776509",
        appId: "1:932871776509:web:dfe5df364f6577460d3694",
        measurementId: "G-H8Y78KLL7M"

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return
        const userRef = await  firestore.doc(`users/${userAuth.uid}`)
        const snapshot = await userRef.get()
        if (!snapshot.exists) {
                const { displayName, email }  = await userAuth
                const createdAt = await new Date()
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (err) {
                        console.log('Error in creating user', err.message)
                }
        }
        return userRef
}


export const convertCollectionsSnapshotToMap = collections => {
        const transformedCollections = collections.docs.map( document => {
                const {title , items } = document.data()
                return {
                        routeName:encodeURI(title.toLowerCase()),
                        id:document.id,
                        title,
                        items
                }
        })
        return transformedCollections.reduce( (accumulator , collections ) =>{
                accumulator[collections.title.toLowerCase()] = collections
                return accumulator
        },{})
}       

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt ': 'Select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase