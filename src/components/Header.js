import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((store)=>store.user);

    const handleSignOut = () => {
     signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

     }).catch((error) => {
      // An error happened.
      navigate("/error");
});
    }

    return (
        <div className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
            <img 
            className="w-48"
            src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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