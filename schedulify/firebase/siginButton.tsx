"use client"
import initMyFirebase from "./firebaseInit";
import { GoogleAuthProvider, getAuth , signInWithPopup} from "firebase/auth";
import { useRouter } from "next/navigation"
import useFireBaseAuth from "./useAuth";

export default function Signin()
{
  const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const router = useRouter();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                const user = result.user;

                // you would insert this detail to your database and proceed from there.
                console.log(user);

                router.push("/home");

                // ...
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <div>
        <button className="login text-white justify-center items-center max-w-80 max-h-40 rounded-lg" onClick = {handleLogin} style={{background: "#2BA2A0"}}>
                        <div className="py-1">Sign up now!</div>
                    </button>
        </div>
    )
}