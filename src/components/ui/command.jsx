import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'

import { cn } from '@/lib/utils'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const Command = React.forwardRef(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            'flex h-full relative w-full flex-col  rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50',
            className
        )}
        {...props}
    />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-lg">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-slate-400">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    )
}

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
    <div>
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                'shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 w-full outline-none "',
                className
            )}
            {...props}
        />
    </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(
            'max-h-[300px] overflow-y-auto overflow-x-hidden',
            className
        )}
        {...props}
    />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="py-6 text-center text-sm"
        {...props}
    />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            'absolute  top-[110%] right-0 bg-white  z-50 overflow-hidden p-1 text-slate-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:text-slate-50 dark:[&_[cmdk-group-heading]]:text-slate-400',
            className
        )}
        {...props}
    />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn('-mx-1 h-px bg-slate-200 dark:bg-slate-800', className)}
        {...props}
    />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            'abslute  flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50',
            className
        )}
        {...props}
    />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }) => {
    return (
        <span
            className={cn(
                'ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400',
                className
            )}
            {...props}
        />
    )
}
CommandShortcut.displayName = 'CommandShortcut'

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
}
