import React from 'react';
import {
    Card,
    CardContent
} from "@/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import PrivateHeader from "../../reuseable_component/privateMessageHeader";
import Navigation from "../../reuseable_component/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Privatetells from '../../reuseable_component/privatemessage';

const Profile = () => {
    return (
        <div className="flex justify-center items-start h-screen bg-gray-100">
            <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
                <PrivateHeader />
                <ScrollArea className="flex-grow w-full">
                    <Privatetells />
                    <Privatetells />
                    <Privatetells />
                    <Privatetells />
                    <h2 className="text-lg font-semibold mb-2 mt-4">People you may know</h2>
                    <div className="w-full overflow-x-auto">
                        <Carousel className="w-full max-w-sm">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-2xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <Privatetells />
                    <Privatetells />
                    <Privatetells />
                    <Privatetells />
                </ScrollArea>
                <Navigation />
            </main>
        </div>
    );
};

export default Profile;

