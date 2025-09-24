import { SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SheetFooter } from "./ui/sheet";

export function ChatWindow() {
    return (
        <>
            <div>
                <p className="rounded-2xl p-3 font-thin bg-gray-100 dark:bg-gray-900 dark:text-white m-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quos!</p>
                <p className="rounded-2xl p-3 font-thin bg-gray-100 dark:bg-gray-900 dark:text-white m-2">Nam magnam unde corporis debitis veniam maxime repellat autem voluptates.</p>
                <p className="rounded-2xl p-3 font-thin bg-gray-100 dark:bg-gray-900 dark:text-white m-2">Voluptate illo ex facere velit, quibusdam dolores nesciunt itaque veritatis!</p>
            </div>
            <SheetFooter>
                <div className="flex">
                    <Input placeholder="Chat" className="flex-grow flex-1 p-3 mr-2 ml-2"></Input>
                    <Button className="p-3"><SendIcon /></Button>
                </div>
            </SheetFooter>
        </>
    )
}