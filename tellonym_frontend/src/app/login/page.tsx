import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-white">
            <div className="main flex flex-col items-center pt-16">
                <h1 className="text-4xl font-bold mb-8">Login</h1>
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input type="text" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2" max-w-96/>
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <Button type="submit" className="w-full mt-8 bg-pink-500 text-white py-2 rounded-md hover:bg-blue-600 max-w-32">
                Submit
                </Button>
                <div className="forgot-password mt-4 text-center">
                    <a href="/forgot-password" className="text-pink-500 hover:underline">
                        Need help with login?
                    </a>
                </div>
                <div className="social-login flex justify-center mt-8">
                    <Button className="mr-4 bg-black hover:bg-black py-2 px-4 rounded-md">Continue with Apple</Button>
                    <Button className="bg-white hover:bg-gray-100 py-2 px-4 rounded-md border border-gray-300 text-black">Continue with Google</Button>
                </div>
            </div>
        </div>
    );
}
