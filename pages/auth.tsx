import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.png')]">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Create Account'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                label="Username"
                                onChange={(ev: any) => setUsername(ev.target.value)}
                                id="username"
                                type="username"
                                value={username}
                            />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Passwords"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-yellow-500 py-3 text-white rounded-md w-full mt-10 hover:bg-yellow-600 transition">
                            {variant === 'login' ? 'Log in':'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12 text-sm">
                            {variant === 'login' ? 'First time using PadhaiPlaylist?':'Already have account?'}
                            <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>
                                {variant === 'login' ? 'Create Account' : 'Log in'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;