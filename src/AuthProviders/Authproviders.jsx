import Aos from "aos";
import "aos/dist/aos.css";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.cofig";
// import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const Authproviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUser={email:userEmail};
      setUser(currentUser);
      setLoading(false);

       


      
      console.log("usseffect", currentUser);
    });
    Aos.init();
    return () => {
      Unsubscribe();
    };
  }, [user?.email]);
  const AuthInformations = {
    createUser,
    user,
    signInUser,
    logOut,
    signInGoogle,
    loading,
    setUser,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={AuthInformations}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authproviders;
