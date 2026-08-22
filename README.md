# [Toolbox-X](https://toolbox-x.vercel.app)

> “I solve problems you face daily”

<p>
  <!-- Package Info -->
  <a href="https://www.npmjs.com/package/toolbox-x" aria-label="NPM Downloads">
    <img src="https://img.shields.io/npm/dm/toolbox-x.svg?label=DOWNLOADS&style=flat&color=red&logo=npm" alt="Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/toolbox-x" aria-label="Latest Version">
    <img src="https://img.shields.io/npm/v/toolbox-x.svg?label=NPM&style=flat&color=teal&logo=npm" alt="Latest Version" />
  </a>
  <a href="https://bundlejs.com/?q=toolbox-x" aria-label="Bundle Size">
    <img src="https://img.shields.io/bundlejs/size/toolbox-x?label=Bundle%20Size&style=flat&color=blue&logo=npm" alt="Bundle Size" />
  </a>

  <!-- Project Metadata -->
  <a href="https://github.com/nazmul-nhb/toolbox-x" aria-label="TypeScript">
    <img src="https://img.shields.io/badge/BUILT%20with-TypeScript-3178C6?style=flat&logo=typescript&logoColor=blue" alt="Built with TypeScript" />
  </a>
  <a href="https://github.com/nazmul-nhb/toolbox-x/actions" aria-label="Build Status">
    <img src="https://img.shields.io/github/actions/workflow/status/nazmul-nhb/toolbox-x/publish.yml?label=BUILD%20%26%20PUBLISH&style=flat&logo=github" alt="Build Status" />
  </a>
  <a href="https://github.com/nazmul-nhb/toolbox-x" aria-label="Project Status">
    <img src="https://img.shields.io/badge/STATUS-maintained-brightgreen?style=flat&logo=git" alt="Maintained" />
  </a>
  <a href="https://github.com/nazmul-nhb/toolbox-x/commits/main" aria-label="Last Commit">
    <img src="https://img.shields.io/github/last-commit/nazmul-nhb/toolbox-x?style=flat&label=LAST%20COMMIT&logo=git" alt="Last Commit" />
  </a>

  <!-- GitHub Meta -->
  <a href="https://github.com/nazmul-nhb/toolbox-x/stargazers" aria-label="GitHub Stars">
    <img src="https://img.shields.io/github/stars/nazmul-nhb/toolbox-x?style=flat&label=STARS&logo=github" alt="GitHub stars" />
  </a>
  <a href="https://github.com/nazmul-nhb/toolbox-x/issues" aria-label="Open Issues">
    <img src="https://img.shields.io/github/issues/nazmul-nhb/toolbox-x?style=flat&label=ISSUES&logo=github" alt="Open Issues" />
  </a>
  <a href="https://github.com/nazmul-nhb/toolbox-x/pulls" aria-label="Open Pull Requests">
    <img src="https://img.shields.io/github/issues-pr/nazmul-nhb/toolbox-x?style=flat&label=PRs&logo=github" alt="Pull Requests" />
  </a>

  <!-- License Info -->
  <a href="https://www.npmjs.com/package/toolbox-x" aria-label="License">
    <img src="https://img.shields.io/npm/l/toolbox-x.svg?label=LICENSE&style=flat&color=orange&logo=open-source-initiative" alt="License" />
  </a>
</p>

[![Toolbox-X](https://raw.githubusercontent.com/nazmul-nhb/toolbox-x/refs/heads/main/toolbox-x.png)](https://toolbox-x.vercel.app/)

## JavaScript/TypeScript Utility Library

**NHB Toolbox** provides battle-tested utilities for professional JavaScript/TypeScript development. Carefully crafted to solve common challenges with elegant, production-ready solutions:

- **Helper Functions & Classes**: Reusable solutions for everyday tasks
- **Type Guards & Predicates**: Runtime safety with perfect type inference
- **Validation Utilities**: Robust data validation patterns
- **Zero Dependencies**: Framework-agnostic implementation using only native TS/JS with 0 external package

> [Explore Full Documentation →](https://toolbox-x.vercel.app/)

---

## Installation

Choose your preferred package manager:

```shell
npm i toolbox-x
```

```shell
pnpm add toolbox-x
```

```shell
yarn add toolbox-x
```

---

## Changelog

See [Changelog](CHANGELOG.md) for recent updates.

---

## Key Features

- **Type-Safe Utilities**:Fully typed for perfect TypeScript integration with strict type checking
- **Modular Design**: Tree-shaking friendly – import only what you need with zero bloat
- **Zero Dependencies**: No external dependencies - works with any JS/TS framework
- **IDE Support**: Full type hints with JSDoc-powered API references in your editor
- **Comprehensive Documentation**: Learn with real-world use cases on [documentation site](https://toolbox-x.vercel.app/)
- **Battle-Tested**: Reliable utilities refined through real-world production use
- **Optimized for Production**: Focused on clean, efficient implementations

---

## Examples

### 🎨 Professional Color Manipulation

**`Color`** - Convert between color formats, generate palettes, check accessibility contrast, and perform advanced color math with perfect type safety.

```typescript
const blue = new Color('#0000ff');
const darkerBlue = blue.applyDarkness(20); // 20% darker
console.log(darkerBlue.hsl); // "hsl(240, 100%, 40%)" (was 50%)
```

[Documentation →](https://toolbox-x.vercel.app/docs/classes/color)

---

### 🔍 Optimized Array Search

**`Finder`** - Blazing-fast array searching with binary search, fuzzy matching, and smart caching. Perfect for large datasets.

```typescript
const productFinder = new Finder(products);

const laptop = productFinder.findOne('laptop', 'category', {
 fuzzy: true,
 caseInsensitive: false,
});
```

[Documentation →](https://toolbox-x.vercel.app/docs/classes/finder)

---

### 🆔 Random ID Generation

**`generateRandomID`** - Enterprise-grade unique ID generation with prefixes, timestamps, and formatting.

```typescript
import { generateRandomID } from 'toolbox-x';

const rndId = generateRandomID({
 prefix: 'user',
 timeStamp: true,
 length: 12,
 caseOption: 'upper',
}); // "USER-171234567890-AB3C4D5E6F7G"
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/string/generate-random-id)

**`uuid`** - RFC-compliant secured and engine-agnostic UUID generation with support for v1, v3, v4, v5, v6, v7, and v8.

```typescript
import { uuid } from 'toolbox-x/hash';

// Generate a random UUID v4 (default)
const id1 = uuid();
// → "f47ac10b-58cc-4372-a567-0e02b2c3d479"

// Generate uppercase v7
const id2 = uuid({ version: 'v7', uppercase: true });
// → "017F22E2-79B0-7CC3-98C4-DC0C0C07398F"

// Generate v5 UUID with namespace
const id3 = uuid({
  version: 'v5',
  namespace: uuid(),
  name: 'example'
});
// → "aad5a5a7-6c6a-5b5c-8c8c-9c9c9c9c9c9c"

// Generate v3 UUID
const id4 = uuid({
  version: 'v3', 
  namespace: uuid(),
  name: 'test'
});
// → "5df41881-3aed-3515-88a7-2f4a814cf09e"
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/hash/uuid)

---

### 🔢 Pluralize Strings and More

**`pluralizer`** - Handles English word pluralization and singularization with support for irregular forms and uncountable nouns.

```ts
import { pluralizer } from 'toolbox-x/pluralizer';

pluralizer.pluralize('child'); // "children"
pluralizer.pluralize('category', { count: 3 }); // "categories"
pluralizer.pluralize('child', { count: 1, inclusive: true }); // "1 child"

pluralizer.toSingular('geese'); // "goose"
pluralizer.toSingular('children'); // "child"

pluralizer.isPlural('children'); // true
pluralizer.isSingular('child'); // true
pluralizer.isPlural('fish'); // true (uncountable)
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/string/pluralizer)

---

### 🎨 Color System Utilities

**`getColorForInitial`** - Deterministic color mapping system for consistent UI theming

```typescript
// Get color palette for user avatars
getColorForInitial(['Alice', 'Bob', 'Charlie']);
// ['#00094C', '#00376E', '#005600']

getColorForInitial('Banana', 50); // '#00376E80' (50% opacity)
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/color/get-color-for-initial)

---

### 📄 FormData Preparation

**`createFormData`** - Convert JavaScript objects into `FormData` with extensive configuration options for handling nested structures, files, and data transformations.

```typescript
import { createFormData } from 'toolbox-x/dom';

const file1 = new File(['file1'], 'file1.txt', { type: 'application/text' });
const file2 = new File(['file2'], 'file2.txt', { type: 'application/text' });

const user = {
  user: {
    name: ' John Doe ',
    age: 30,
    preferences: { theme: 'dark' }
  },
  files: [file1, file2]
};

const formData = createFormData(user, {
  trimStrings: true,
  lowerCaseValues: ['user.name'],
  dotNotateNested: ['user'],
  breakArray: ['files']
});

// Resulting FormData:
// user.name=john doe
// user.age=30
// user.preferences.theme=dark
// files[0]=[File1]
// files[1]=[File2]
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/form/create-form-data)

---

### 🛡️ Data Sanitization

**`sanitizeData`** - Clean and normalize strings/objects by trimming whitespace, removing empty values, and applying customizable filters.

```typescript
const user = {
 name: '  John Doe  ',
 age: null,
 address: { city: '  NYC  ', zip: '' },
 tags: [],
};

sanitizeData(user, { ignoreFalsy: true, ignoreEmpty: true });
// Returns { name: "John Doe", address: { city: "NYC" } } with exact input type which may cause issue when accessing missing properties

sanitizeData(user, { ignoreFalsy: true, ignoreEmpty: true }, 'partial');
// Return type: $DeepPartial<typeof user> safe property access by making all the properties (nested objects/arrays) optional 
// Returns { name: "John Doe", address: { city: "NYC" } }
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/object/sanitize-data)

---

### 🔄 JSON Hydration

**`parseJSON`** - Bulletproof JSON parsing with primitive conversion

```typescript
parseJSON('{"value":"42"}'); // { value: 42 } (auto-converts numbers)
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/misc/parse-json)

---

### 🔢 Number to Words

**`numberToWords`** - Convert numbers to human-readable words (supports up to 100 quintillion).

```typescript
numberToWords(125); // "one hundred twenty-five"
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/number/number-to-words)

---

### 🔢 Advanced Number Operations

**`getNumbersInRange`** - Generate intelligent number sequences with prime, even/odd, and custom filtering capabilities

```typescript
// Get primes between 10-30 as formatted string
getNumbersInRange('prime', { min: 10, max: 30, getAsString: true });
// "11, 13, 17, 19, 23, 29"
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/number/get-numbers-in-range)

**`calculatePercentage`** - Swiss Army knife for percentage calculations with 7 specialized modes

```typescript
// Calculate percentage change
calculatePercentage({
 mode: 'get-change-percent',
 oldValue: 100,
 newValue: 150,
}); // 50 (50% increase)
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/number/calculate-percentage)

---

### 🔄 Extract Updated Fields

**`extractUpdatedFields`** - Detect exactly what changed between two objects (including deep nested changes).

```typescript
const dbRecord = { id: 1, content: 'Hello', meta: { views: 0 } };
const update = { content: 'Hello', meta: { views: 1 } };
extractUpdatedFields(dbRecord, update);
// { meta: { views: 1 } }
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/object/extract-updated-fields)

---

### 🎨 Style Console Output(s)

**`Stylog`** - `Chalk`-like minimal utility to style console output(s) in both Node.js & Browser environment(s) (supports named CSS colors).

```typescript
// Basic coloring
Stylog.error.log('Error message');
Stylog.success.log('Success message');
Stylog.info.log('Info message');
Stylog.whitesmoke.log('I am White!');

// Multiple styles
Stylog.blue.bold.underline.log('I am Bold Underlined Blue!');

// With object stringification
Stylog.magenta.italic.log({ data: 'value' }, true);
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/misc/stylog)

---

### ⚡ Performance Optimizers

**`throttleAction`** - Precision control for high-frequency events

```typescript
// Smooth scroll handling
throttleAction(updateScrollPosition, 100);
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/misc/throttle-action)

**`debounceAction`** - Intelligent delay for expensive operations

```typescript
// Search-as-you-type
debounceAction(fetchResults, 300);
```

[Documentation →](https://toolbox-x.vercel.app/docs/utils/misc/debounce-action)

> These utilities represent just a portion of the comprehensive `toolbox-x`. Each is designed with production-grade reliability and developer experience in mind. Explore more in the [full documentation](https://toolbox-x.vercel.app). All the utilities and classes are categorized.

---

## 🔗 Related Packages

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/chronos-date">
    <img src="https://img.shields.io/badge/Chronos_Date-chronos--date-blue" alt="chronos-date" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/bn-calendar">
    <img src="https://img.shields.io/badge/Bangla_Calendar-bn--calendar-blue" alt="bn-calendar" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-hooks">
    <img src="https://img.shields.io/badge/React_Hooks-nhb--hooks-blue" alt="nhb-hooks" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/locality-idb">
    <img src="https://img.shields.io/badge/IndexedDB_ORM-locality--idb-darkviolet" alt="locality-idb" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-scripts">
    <img src="https://img.shields.io/badge/Development_Scripts-nhb--scripts-red" alt="nhb-scripts" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-express">
    <img src="https://img.shields.io/badge/Express_Server_Scaffolder-nhb--express-orange" alt="nhb-express" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-anagram-generator">
    <img src="https://img.shields.io/badge/Anagram_Generator-nhb--anagram--generator-teal" alt="nhb-anagram-generator" />
  </a>
</div>

---

## License

This project is licensed under the [Apache License 2.0](LICENSE) with the following additional requirement:

**Additional Requirement:**

> Any fork, derivative work, or redistribution of this project must include clear attribution to [**Nazmul Hassan**](https://github.com/nazmul-nhb) in both the source code and any publicly available documentation.

You are free to use, modify, and distribute this project under the terms of the Apache 2.0 License, provided that appropriate credit is given.

---

Built with ❤️ by [**Nazmul Hassan**](https://nazmul-nhb.vercel.app)
