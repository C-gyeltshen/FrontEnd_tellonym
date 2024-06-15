"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/signUp');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="p-8 space-y-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
                <Button className="w-full py-3 text-2xl text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={handleSignUpClick}>
                    Sign Up
                </Button>
                <Button className="w-full py-3 text-2xl text-white bg-green-500 rounded-lg hover:bg-green-600">
                    Login
                </Button>
            </div>
        </div>
    );
}


