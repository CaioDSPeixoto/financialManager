import Label from "@/components/Label";
import SignUp from "@/components/SignUp";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
export default function Login(){

  const supabase = useSupabaseClient();

  const [user, setUser] = useState<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginEmail = async() => {
    await supabase.auth.signInWithPassword({
      email: email || '',
      password: password || ''
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    const {data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      switch(event){
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        default:
          break;
      }
    });

    return () => {
       authListener.subscription.unsubscribe();
    }
    
}, [])

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginEmail}>
        <div className="mb-4">
          <Label text="Email"/>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-green-500" required id="email" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="mb-6">
          <Label text="Password"/>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-green-500" id="password" type="password" placeholder="******************" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <SignUp />
        </div>
      </form>
    </div>
  );
}