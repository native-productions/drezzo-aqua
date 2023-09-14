'use client'

import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { capitalize, cn } from '@/lib/utils/view'

export default function Combobox({ items, name, onSelect }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-white"
        >
          {value
            ? capitalize(
                items.find((item) => item.value === value)?.label || value,
              )
            : `Select ${name}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="max-h-96">
          <CommandInput placeholder={`Search ${name}`} className="h-9" />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  onSelect(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                {item.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
