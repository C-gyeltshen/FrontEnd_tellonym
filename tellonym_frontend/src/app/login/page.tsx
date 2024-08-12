"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value); 
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log("its working")
                const data = await response.json();
                const { token } = data
                console.log("the token is",token)


                // Store token in localStorage
                // localStorage.setItem('accessToken', token);
                router.push('/homePage');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
        
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
                <h1 className="text-4xl font-bold mb-8">Login</h1>
                <div className="flex flex-col space-y-4 w-full">
                    <Label htmlFor="email" className="text-gray-700">
                        Email
                    </Label>
                    <Input
                        type="email"
                        id="email"  
                        placeholder="Email"
                        className="border border-gray-300 rounded-md px-3 py-2"
                        value={email}
                        onChange={handleEmailChange}
                        aria-label="Email"
                    />
                    <Label htmlFor="password" className="text-gray-700">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-md px-3 py-2"
                        value={password}
                        onChange={handlePasswordChange}
                        aria-label="Password"
                    />
                </div>
                <Button
                    type="button"
                    onClick={handleLogin}
                    className="w-full mt-8 bg-pink-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </Button>
                <div className="mt-4 text-center">
                    <a href="/forgot-password" className="text-pink-500 hover:underline">
                        Need help with login?
                    </a>
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <Button className="bg-black text-white py-2 px-4 rounded-md hover:bg-black">
                        Continue with Apple
                    </Button>
                    <Button className="bg-white text-black py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100">
                        Continue with Google
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;