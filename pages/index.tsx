import Category from "@/components/Category";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "./Login";

export default function Home() {
  const session = useSession();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {session? (
        <div>
          <h1>Welcome {session.user.user_metadata.full_name ?? session.user.email}</h1>
          <Category id_user={session.user.id}/>
        </div>
        )
        : (
          <div>
            <Login />
          </div>
        )
      }
    </main>
  )
}
