'use client'

import { Checkbox } from '@/components/ui/checkbox'

export default function CheckboxComponent({ label, ...rest }) {
  return (
    <div className="my-6 flex items-center space-x-2">
      <Checkbox
        {...rest}
        checked={rest.checked}
        onCheckedChange={rest.onChange}
        id="agreement"
        className="h-6 w-6 rounded-lg bg-border-blue-linear-gradient"
      />
      <label
        htmlFor="agreement"
        className="text-[10px] font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}
