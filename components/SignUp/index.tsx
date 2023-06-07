import { supabase } from "@/services/supabaseClient";
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import Label from '../Label';

export default function SignUp(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signUp = async() => {
    await supabase.auth.signUp({
      email: email || '',
      password: password || ''
    });
  };
  
  useEffect(() => {
    const {data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      switch(event){
        default:
          break;
      }
    });

    return () => {
       authListener.subscription.unsubscribe();
    }
    
}, [])

  return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
        <div className="flex items-center justify-between">
          <a className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800" href="#">
            New account?
          </a>
        </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Create new account
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Make your profile here. Click save when you're done.
            </Dialog.Description>
            <form onSubmit={signUp}>
              <fieldset className="mb-4">
                <Label text="Email"/>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-green-500" id="email" type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
              </fieldset>
              <fieldset className="mb-4">
                <Label text="Password"/>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-green-500" id="password" type="password" placeholder="******************" value={password} onChange={(event) => setPassword(event.target.value)} required/>
              </fieldset>
              <div className="mt-[25px] flex justify-end">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Create
                </button>
                </div>
            </form>
                <Dialog.Close asChild>
                <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <FaWindowClose />
              </button>
                </Dialog.Close>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <FaWindowClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
}