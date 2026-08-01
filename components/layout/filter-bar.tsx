"use client";

import { SlidersHorizontal } from "lucide-react";
import { useId, useMemo, useState } from "react";

import { FilterCombobox } from "@/components/layout/filter-combobox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FILTER_DROPDOWNS } from "@/constants/filters";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  topic: string;
  onTopicChange: (value: string) => void;
  questionType: string;
  onQuestionTypeChange: (value: string) => void;
  difficulty: string;
  onDifficultyChange: (value: string) => void;
};

function countActiveDropdownFilters(values: {
  topic: string;
  type: string;
  difficulty: string;
}) {
  return [values.topic, values.type, values.difficulty].filter(
    (value) => value !== "any",
  ).length;
}

type FilterDropdownRowProps = {
  filterValues: Record<string, string>;
  filterSetters: Record<string, (value: string) => void>;
  layout: "inline" | "stacked";
};

function FilterDropdownRow({
  filterValues,
  filterSetters,
  layout,
}: FilterDropdownRowProps) {
  return (
    <>
      {FILTER_DROPDOWNS.map((filter) => (
        <FilterCombobox
          key={filter.id}
          label={filter.label}
          options={filter.options}
          value={filterValues[filter.id] ?? "any"}
          onValueChange={filterSetters[filter.id] ?? (() => undefined)}
          className={cn(
            layout === "stacked" && "h-10 w-full min-w-0 justify-between",
            layout === "inline" && "min-w-36",
          )}
        />
      ))}
    </>
  );
}

export function FilterBar({
  keyword,
  onKeywordChange,
  topic,
  onTopicChange,
  questionType,
  onQuestionTypeChange,
  difficulty,
  onDifficultyChange,
}: FilterBarProps) {
  const searchId = useId();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterValues: Record<string, string> = {
    topic,
    type: questionType,
    difficulty,
  };

  const filterSetters: Record<string, (value: string) => void> = {
    topic: onTopicChange,
    type: onQuestionTypeChange,
    difficulty: onDifficultyChange,
  };

  const activeFilterCount = useMemo(
    () =>
      countActiveDropdownFilters({
        topic,
        type: questionType,
        difficulty,
      }),
    [topic, questionType, difficulty],
  );

  const clearDropdownFilters = () => {
    onTopicChange("any");
    onQuestionTypeChange("any");
    onDifficultyChange("any");
  };

  const searchField = (
    <div className="min-w-0 flex-1 md:min-w-48 md:max-w-md">
      <label htmlFor={searchId} className="sr-only">
        Search questions
      </label>
      <Input
        id={searchId}
        type="search"
        name="q"
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
        placeholder="Search questions and tags…"
        className="h-9 rounded-none border-input bg-background backdrop-blur-sm"
      />
    </div>
  );

  return (
    <section
      aria-label="Filters"
      className="sticky top-18 z-40 border-y border-border bg-background filter-bar-stripes"
    >
      <div className="relative px-4 py-3 md:px-8 md:py-6">
        <form
          role="search"
          className="flex flex-col gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex items-center gap-2 md:hidden">
            {searchField}
            <Button
              type="button"
              variant="outline"
              aria-expanded={filtersOpen}
              aria-controls="mobile-filter-sheet"
              className="h-9 shrink-0 gap-2 rounded-none border-input bg-background px-3 font-normal text-nav backdrop-blur-sm"
              onClick={() => setFiltersOpen(true)}
            >
              <SlidersHorizontal aria-hidden className="size-4 opacity-70" />
              <span>Filters</span>
              {activeFilterCount > 0 ? (
                <Badge
                  variant="secondary"
                  className="h-5 min-w-5 justify-center rounded-none px-1.5 text-meta tabular-nums"
                >
                  {activeFilterCount}
                </Badge>
              ) : null}
            </Button>
          </div>

          <div className="hidden flex-wrap items-center gap-3 md:flex">
            {searchField}
            <FilterDropdownRow
              filterValues={filterValues}
              filterSetters={filterSetters}
              layout="inline"
            />
          </div>
        </form>
      </div>

      <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
        <DialogContent
          id="mobile-filter-sheet"
          showCloseButton
          className={cn(
            "gap-0 overflow-hidden rounded-none border-border p-0 ring-0 w-full max-w-none!",
            "top-auto bottom-0 left-0 max-h-[min(85dvh,32rem)] w-full max-w-none translate-x-0 translate-y-0",
            "data-open:animate-in data-open:fade-in-0 data-open:slide-in-from-bottom-4 data-open:zoom-in-100",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:slide-out-to-bottom-4 data-closed:zoom-out-100",
          )}
        >
          <DialogHeader className="border-b border-border px-4 py-4 text-left">
            <DialogTitle className="text-nav font-medium text-text-primary">
              Apply Filters
            </DialogTitle>
            <DialogDescription className="text-meta text-text-muted">
              Topic, type, and difficulty. Results update as you choose.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 overflow-y-auto px-4 py-4">
            <FilterDropdownRow
              filterValues={filterValues}
              filterSetters={filterSetters}
              layout="stacked"
            />
          </div>

          <DialogFooter className="m-0! flex-row items-center justify-end gap-3 rounded-none border-t border-border bg-surface-2 px-4 py-3">
            <Button
              type="button"
              variant="ghost"
              className="rounded-none px-2 text-nav text-text-secondary"
              disabled={activeFilterCount === 0}
              onClick={clearDropdownFilters}
            >
              Clear filters
            </Button>
            <Button
              type="button"
              className="rounded-none px-4"
              onClick={() => setFiltersOpen(false)}
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
