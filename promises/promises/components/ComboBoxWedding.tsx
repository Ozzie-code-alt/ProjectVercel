"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const frameworks = [
  {
    value: "cherished collections",
    label: "Cherished Collections",
  },
  {
    value: "timeless embrace selection",
    label: "Timeless Embrace Selection",
  },
  {
    value: "forever yours collection",
    label: "Forever Yours Collection",
  },
  {
    value: "timeless bliss selection",
    label: "Timeless Bliss Selection",
  },
  {
    value: "everlasting",
    label: "Everlasting",
  },
  
]
 
const ComboBoxWedding = ({onSelect}:any) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const handleSelect = (value: string) => {
        onSelect(value); // Call the callback with the selected value
        console.log(value)
      };
    


  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[250px] justify-between"
      >
        {value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Select Wedding Package..."}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search Package..." />
        <CommandEmpty>No Package Found</CommandEmpty>
        <CommandGroup >
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(currentValue:string) => {
                handleSelect(currentValue)
                setValue(currentValue === value ? currentValue : currentValue)
                setOpen(false)
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
              {framework.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
  )
}

export default ComboBoxWedding