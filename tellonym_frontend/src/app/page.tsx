"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/signUp');
    };

    return (
        <div className="flex justify-center items-start h-screen bg-gray-100">
            <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
                
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="p-8 space-y-6 bg-white flex flex-col items-center">
                        <div className="p-8 space-y-6 bg-white flex flex-col items-center ">
                            <div>
                                <h1 className="text-pink-500 text-4xl p-4">TELLONYM</h1>
                                <h1 className="text-center">Create an account to see what your friends are talking about and let them answer your questions.</h1>
                            </div>
                        </div>

                        {/* <h1 className="text-3xl font-bold text-gray-800">Welcome</h1> */}
                        <Button className="w-full py-3 text-2xl text-white " onClick={handleSignUpClick}>
                            Sign Up
                        </Button>
                        <Button className="w-full py-3 text-2xl text-white ">
                            Login
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}


