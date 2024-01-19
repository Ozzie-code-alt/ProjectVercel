"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import Modal from "react-modal"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { VscChromeClose } from "react-icons/vsc"

interface NavigationMenuDemoProps {
  isOpen: boolean;
  onClose: () => void;
  field: {
    onChange: (value: any) => void;  
  };
  onClick: () => void;
}
export function NavigationMenuDemo({ isOpen, onClose, field, onClick } : NavigationMenuDemoProps) {

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="w-[90vw] md:w-[50vw] xl:w-[35vw] bg-white h-[25vh] mt-[40vh] mx-auto my-auto overflow-hidden rounded-lg"  style={{
        content: {
          // maxWidth: '50px',  // Maximum width of the modal
        
        }
      }} >
      <div className="flex w-full justify-between text-xl pt-4 px-4">
        <h1 className="mb-2">
          Select Schedule
        </h1>
        <div className="flex flex-row-reverse pb-2">
            <button onClick={onClose}><VscChromeClose /></button>
          </div>
      </div>
      <div className="border-t border-gray-200"></div>
        
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <div className="flex flex-row p-6 w-[100vw] justify-center items-center">
              {/* <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <a
                    className="h-full w-full flex-col w-full rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md flex"
                  >

                    <p className="flex">
                      Select your schedule
                    </p>

                  </a>
                </NavigationMenuLink>
              </li> */}
              <div className="flex gap-6 justify-center items-center">

              <ListItem className="border border-promises-gold" title="AM Schedule" onClick={()=>{field.onChange("AM");  onClick()}}>
                8AM - 12PM 
              </ListItem>
              <ListItem className="border border-promises-gold" title="PM Schedule"onClick={()=>{field.onChange("PM"); onClick() }}>
                1PM - 4PM
              </ListItem>

              </div>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </Modal>
  )
}

const ListItem = React.forwardRef< // this is needed for links 
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:cursor-pointer hover:bg-promises-gold text-black hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-base leading-snug ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
