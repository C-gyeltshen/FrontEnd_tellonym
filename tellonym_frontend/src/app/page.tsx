"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/signUp');
    };

    const handleLoginClick = () => {
        router.push('/login');
    };

    return (
        <div className="flex justify-center   bg-gray-100">
            <main className="flex flex-col justify-start  max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">              
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="p-8 space-y-4 bg-white flex flex-col ">
                        <div className="p-8 space-y-6 bg-white flex flex-col items-center ">
                            <div>
                                <div className="flex justify-center items-center" style={{width: "50px", height: "50"}} >
                                    <img src="data:image/png;base64,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" alt="" />
                                </div>
                                <h1 className="text-center text-pink-500 text-4xl p-4">TELLONYM</h1>
                                <h1 className="text-center">Create an account to see what your friends are talking about and let them answer your questions.</h1>
                            </div>
                        </div>
                        {/* <h1 className="text-3xl font-bold text-gray-800">Welcome</h1> */}
                        <Button className="w-full  text-1xl text-white " onClick={handleSignUpClick}>
                            Sign Up
                        </Button>
                        <Button className="w-full  text-white " onClick={handleLoginClick}>
                            Login
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}


