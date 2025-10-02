import { useState } from "react";
import { authUrl, apikey } from './api'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(authUrl, apikey)

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function signUpNewUser(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: 'https://example.com/welcome',
            }
        })
        console.log("data", data);
        console.log("error", error);
    }

    return (
        <div>
            <form onSubmit={signUpNewUser} >
                <div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email / Username" />
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button>Signup</button>
            </form>
        </div>
    );
}