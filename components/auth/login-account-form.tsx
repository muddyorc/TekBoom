"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form"; 


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { FormDescription, FormField, FormItem, FormLabel, FormMessage, FormControl } from "../ui/form";
import { CardDescription } from "../ui/card";

const formSchema = z.object({
    email: z.string({
        required_error: "Email is required."
    }).email({
        message: "Must be a valid email."
    }),
    password: z.string({
        required_error: "Password is required."
    }).min(7, {
        message: "Password must have at least 7 characters"
    }).max(12, {
        message: "Password must have at most 12 characters"
    })

});

export function LoginAccountForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: " ",
            password: " ",
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return <div className="flex flex-col justify-center items-center space-y-2">
        <CardDescription>Log in to your account and enjoy all the benefits of Tekboom!</CardDescription>
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
            >
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="E-mail" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your E-mail
                    </FormDescription>
                    <FormMessage></FormMessage>
                    </FormItem>
                )}
                />

            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your Password
                    </FormDescription>
                    <FormMessage></FormMessage>
                    </FormItem>
                )}
                />
                <Button type="submit">Create Account</Button>
            </form>
        </Form>

    </div>
}