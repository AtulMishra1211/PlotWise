import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO_URL } from "../utils/constants.js";



const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store)=>store.user);

    const handleSignOut = () => {
     signOut(auth).then(() => {
      // Sign-out successful.

     }).catch((error) => {
      // An error happened.
      navigate("/error");
});
    }

    useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            //user is signed in
           
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({
                uid: uid, email:email, displayName: displayName, photoURL: photoURL
            }));
            navigate("/browse")
         } else {
            
    // User is signed out
          dispatch(removeUser());
          navigate("/");
         
  }
});
      // unsubscribe to the onAuthStateChange Callback when component unmounts

        return ()=> unsubscribe();
     }, [])

    return (
        <div className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
            <img 
            className="w-48"
            src = {LOGO_URL}
            alt = "logo"/>
    

       {/** the bottom syntax means only if user exists then only we have to show the photo */}
             {user && (<div className="flex p-2">
            <img 
            className="w-12 h-12"
            alt = "usericon" src={user?.photoURL}/>
            <button onClick={handleSignOut} className ="font-bold text-white">(Sign Out)</button>
            </div>)}
        </div>
    );
}   
export default Header;