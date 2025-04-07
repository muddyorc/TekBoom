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
    <div className="flex flex-col h-screen w-full justify-center items-center bg-orange-500">
      <Tabs defaultValue="create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl bg-white">
        
        {/* Tabs List corrigido */}
        <TabsList className="flex w-full rounded-b-none h-14 p-0">
          <TabsTrigger
            value="create-account"
            className="transition-all delay-150"
          >
            Criar conta
          </TabsTrigger>
          <TabsTrigger
            value="login"
            className="transition-all delay-150"
          >
            Logar
          </TabsTrigger>
        </TabsList>
  
        {/* Conteúdo da aba "Create Account" */}
        <TabsContent value="create-account">
        <div className="bg-white rounded-md p-6">
          <CreateAccountForm />
        </div>
        </TabsContent>
  
        {/* Conteúdo da aba "Login" */}
        <TabsContent value="login">
        <div className="bg-white rounded-md p-6">
          <LoginAccountForm />
        </div>
        </TabsContent>
      </Tabs>
    </div>
  );
  
  

}
