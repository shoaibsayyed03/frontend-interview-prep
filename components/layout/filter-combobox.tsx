"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { FilterOption } from "@/constants/filters";
import { cn } from "@/lib/utils";

type FilterComboboxProps = {
  label: string;
  options: FilterOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
};

export function FilterCombobox({
  label,
  options,
  value,
  onValueChange,
  className,
}: FilterComboboxProps) {
  const [open, setOpen] = useState(false);
  const listboxId = useId();
  const selected = options.find((option) => option.value === value);
  const displayValue =
    selected && selected.value !== "any" ? selected.label : "Any";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-label={`${label}: ${displayValue}`}
          className={cn(
            "h-9 min-w-36 justify-between gap-2 rounded-none font-normal text-nav bg-background backdrop-blur-sm",
            className,
          )}
        >
          <span className="truncate">
            {selected && selected.value !== "any" ? selected.label : label}
          </span>
          <ChevronDown aria-hidden className="size-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) min-w-48 gap-0 rounded-none border-input p-1"
        align="start"
      >
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="flex flex-col"
        >
          {options.map((option) => {
            const isSelected = value === option.value;

            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "flex h-9 w-full items-center rounded-none px-3 text-left text-sm text-text-secondary outline-none hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset",
                    isSelected && "bg-muted font-medium text-foreground",
                  )}
                  onClick={() => {
                    onValueChange(option.value);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
