"use client";

import { useId, useState } from "react";

import { FilterCombobox } from "@/components/layout/filter-combobox";
import { Input } from "@/components/ui/input";
import { FILTER_DROPDOWNS } from "@/constants/filters";

export function FilterBar() {
  const searchId = useId();
  const [keyword, setKeyword] = useState("");
  const [topic, setTopic] = useState("any");
  const [tags, setTags] = useState("any");

  const filterValues: Record<string, string> = {
    topic,
    tags,
  };

  const filterSetters: Record<string, (value: string) => void> = {
    topic: setTopic,
    tags: setTags,
  };

  return (
    <section
      aria-label="Filters"
      className="sticky top-18 z-40 border-y border-border bg-background filter-bar-stripes"
    >
      <div className="relative px-4 py-6 md:px-8">
        <form
          role="search"
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="min-w-0 flex-1 sm:min-w-48 sm:max-w-md">
            <label htmlFor={searchId} className="sr-only">
              Search questions
            </label>
            <Input
              id={searchId}
              type="search"
              name="q"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Search questions, answers, tags…"
              className="h-9 rounded-none border-input bg-background backdrop-blur-sm"
            />
          </div>

          {FILTER_DROPDOWNS.map((filter) => (
            <FilterCombobox
              key={filter.id}
              label={filter.label}
              options={filter.options}
              value={filterValues[filter.id] ?? "any"}
              onValueChange={filterSetters[filter.id] ?? (() => undefined)}
            />
          ))}
        </form>
      </div>
    </section>
  );
}
