import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect, RedirectType } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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

  return <div className="flex flex-col h-screen w-full justify-center item-center">
    
  </div>
}
