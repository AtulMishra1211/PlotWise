import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validation.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { AVATAR } from "../utils/constants.js";

const Login = () => {

  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm);
  }

    const handleButtonClick = () =>{
     //validation logic
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);

      if(message) return;  // means that if there is any error, there will be message so return directly, because first needed to be validated
      
      //now moving ahead with firebase authentication
      // we will check firebase docs and see what we can do
      // now if isSignInForm is false(means not signed in), then we will create user with email and password, otherwise we will sign in with email and password
      if(!isSignInForm){

          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
             // Signed up 
           const user = userCredential.user;
           console.log(user);
           updateProfile(user, {
              displayName: name.current.value, photoURL: AVATAR
          }).then(() => {
            // Profile updated!

            const {uid, email, displayName, photoURL} = auth.currentUser;  //auth is coming from get auth function... auth.currentUser will give us updated value of user
            
            dispatch(addUser({
               uid: uid, email:email, displayName: displayName, photoURL: photoURL
              }));

  // ...
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message)
});



              // ...
            })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode + " " + errorMessage);
  
         });


      }
      else{

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
             .then((userCredential) => { 
              const user = userCredential.user;

            })
             .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
              });

      }


    };

    

  return (
    <div >
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg"
         alt= "background"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute my-36 bg-black w-1/4 p-8 mx-auto right-0 left-0 text-white bg-opacity-70 ">
      <h1 className="text-3xl font-bold my-4">{isSignInForm ? "Sign In": "Sign Up"}</h1>

        {!isSignInForm && (
         <input
         ref = {name}
        type ="text"
        placeholder="Name"
        className="bg-gray-700 w-full p-4 my-4"/>
        
        )}
        <input
        ref = {email}
        type = "text"
        placeholder="Email Id"
        className="bg-gray-700 w-full p-4 my-4"/>

        <input
        ref = {password}
        type = "password"
        placeholder="Password"
        className="bg-gray-700 w-full p-4 my-4"/>

        <p className = "font-bold text-red-600">{errorMessage}</p>

        <button 
        onClick = {handleButtonClick}
        className="bg-red-700 w-full p-4 my-6 rounded-lg">
          {isSignInForm ? "Sign In": "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer"  onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now": "Already have an account? Sign In"}
        </p>
      </form>

      
    </div>
  );
};

export default Login;
