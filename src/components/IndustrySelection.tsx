"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// API call
import { getIndustries } from "@/lib/api";

// Define industry type based on API response
interface Industry {
  id: string;
  label: string;
}

export default function IndustrySelection() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [industries, setIndustries] = useState<Industry[]>([]);

  // Fetch industries on mount
  useEffect(() => {
    const fetchIndustries = async () => {
      const data = await getIndustries();
      if (data?.content) {
        // Map API response to expected format
        const industryOptions = data.content.map((industry: Industry) => ({
          id: industry.id,
          label: industry.label,
        }));
        setIndustries(industryOptions);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? industries.find((industry) => industry.id === value)?.label
            : "Select industry"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search industry" />
          <CommandList>
            {industries.length === 0 ? (
              <CommandEmpty>No industry found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {industries.map((industry) => (
                  <CommandItem
                    key={industry.id}
                    value={industry.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {industry.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === industry.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
