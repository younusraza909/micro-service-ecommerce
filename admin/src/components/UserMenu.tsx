import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { DropdownMenuWrapper } from "./ui/dropdown-menu-wrapper";

const UserMenu = () => {
  const trigger = (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );

  const content = (
    <>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <User className="h-[1.2rem] w-[1.2rem] mr-2" />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
        Logout
      </DropdownMenuItem>
    </>
  );

  return (
    <DropdownMenuWrapper trigger={trigger} content={content} sideOffset={10} />
  );
};

export default UserMenu;
