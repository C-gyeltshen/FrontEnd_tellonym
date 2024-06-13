import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfileCard = () => {
  return (
    
      <main>
        <CardHeader className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="path_to_your_image.jpg" />
          </Avatar>
          <div>
            <CardTitle>UserName</CardTitle>
            <div className="text-sm text-gray-500">@namgyel.8261461</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="flex justify-around my-4">
              <div>
                <div className="text-lg font-bold">9</div>
                <div className="text-sm text-gray-500">Followers</div>
              </div>
              <div>
                <div className="text-lg font-bold">1,194</div>
                <div className="text-sm text-gray-500">Tells</div>
              </div>
              <div>
                <div className="text-lg font-bold">10</div>
                <div className="text-sm text-gray-500">Followings</div>
              </div>
            </div>
            <Button variant="outline" className="mx-2">Unfollow</Button>
            <Button variant="outline" className="mx-2">Message</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Input placeholder="Send anonymous Tell..." className="w-full max-w-xs" />
        </CardFooter>
      </main>
    
  );
};

export default ProfileCard;
