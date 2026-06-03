import Header from "./Header";
import { useState } from "react";

const Login = () => {

     const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm);
    }

  return (

  
    
    <div >
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg"
         alt= "background"/>
      </div>
      <form className="absolute my-36 bg-black w-1/4 p-8 mx-auto right-0 left-0 text-white bg-opacity-70 ">
      <h1 className="text-3xl font-bold my-4">{isSignInForm ? "Sign In": "Sign Up"}</h1>

        {!isSignInForm && (
         <input
        type ="text"
        placeholder="Name"
        className="bg-gray-700 w-full p-4 my-4"/>
        
        )}
        <input
        type = "text"
        placeholder="Email Id"
        className="bg-gray-700 w-full p-4 my-4"/>

        <input
        type = "password"
        placeholder="Password"
        className="bg-gray-700 w-full p-4 my-4"/>

        <button className="bg-red-700 w-full p-4 my-6 rounded-lg">
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
