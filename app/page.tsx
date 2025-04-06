import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect, RedirectType } from "next/navigation"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CreateAccountForm } from "@/components/auth/create-account-form"
import { LoginAccountForm } from "@/components/auth/login-account-form"

export default async function Home() {
  let loggedIn = false 
  try {
    const supabase = createServerComponentClient({cookies})
    const { data: { session },
   } = await supabase.auth.getSession()

   if(session) loggedIn = true;

  }catch(error){
    console.log(" ")
  }finally {
    if(loggedIn) redirect("/user-app", RedirectType.replace);
  }

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <Tabs defaultValue="create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl">
        
        {/* Tabs List corrigido */}
        <TabsList className="flex w-full rounded-b-none h-14 p-0">
          <TabsTrigger
            value="create-account"
            className="transition-all delay-150"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="login"
            className="transition-all delay-150"
          >
            Login
          </TabsTrigger>
        </TabsList>
  
        {/* Conteúdo da aba "Create Account" */}
        <TabsContent value="create-account">
          <CreateAccountForm />
        </TabsContent>
  
        {/* Conteúdo da aba "Login" */}
        <TabsContent value="login">
          <LoginAccountForm />
        </TabsContent>
      </Tabs>
    </div>
  );
  
  

}
