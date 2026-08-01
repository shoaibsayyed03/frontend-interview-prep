---
title: "How do you type complex generic component props in TypeScript?"
type: conceptual
difficulty: advanced
tags: [typescript, generics, react, props]
lastUpdated: 2026-08-01
---

**Generic components** preserve item type through props:

```tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
};

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

**Patterns:** `ComponentPropsWithoutRef<'button'>` to extend DOM props; `as` polymorphic components with conditional types; discriminate unions for variant props.

**Rule of thumb**

- Infer `T` from `items` at call site when possible — avoid forcing users to write `<List<User>>` unless needed.
