import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();

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

             <div className="flex p-2">
            <img 
            className="w-12 h-12"
            alt = "usericon" src="https://occ-0-3709-3663.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf7EMnYmiegBSxWjOTXkzTXkTcjuH2w4uIhr6OStUdFTLZtS6UmB0s8Ht7poTk5TE1f2ppZf4Cy7eYIEo26z_OyNP7j36CA.png?r=e6e"/>
            <button onClick={handleSignOut} className ="font-bold text-white">(Sign Out)</button>
            </div>
        </div>
    );
}   
export default Header;