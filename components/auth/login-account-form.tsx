'use client';


import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form"; 


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { FormDescription, FormField, FormItem, FormLabel, FormMessage, FormControl } from "../ui/form";
import { CardDescription } from "../ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string({
        required_error: "O e-mail é obrigatório."
    }).email({
        message: "Deve ser um e-mail válido."
    }),
    password: z.string({
        required_error: "A senha é obrigatória."
    }).min(7, {
        message: "A senha deve ter pelo menos 7 caracteres"
    }).max(12, {
        message: "A senha deve ter no máximo 12 caracteres"
    })

});

export function LoginAccountForm() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const supabase = createClientComponentClient()
            const {email, password} = values;
            const { error ,
                 data: {session},
                } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            form.reset()
            router.refresh()
        }catch(error){
            console.log("LoginAccountForm:onSubmit", error)
        }
    };

    return <div className="flex flex-col justify-center items-center space-y-2">
        <CardDescription>Entre na sua conta e aproveite todos os benefícios do Tekboom!</CardDescription>
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-full"
            >
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>
                        <img src="/icons/o-email.png" alt="Email icon" className="w-4 h-4" />
                        Email
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="E-mail" {...field} />
                    </FormControl>
                    <FormDescription>
                        Esse é seu E-mail
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>
                        <img src="/icons/cadeado-trancado.png" alt="Email icon" className="w-4 h-4" />
                        Senha
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription>
                        Esta é a sua senha
                    </FormDescription>
                    <FormMessage></FormMessage>
                    </FormItem>
                )}
                />
                <Button type="submit">Logar</Button>
            </form>
        </Form>

    </div>
}