# Migrate Remaining Docusaurus Docs to Fumadocs

## Background

Migrating `toolbox-x` documentation from Docusaurus format (in `docs/content/.docusaurus/`) to Fumadocs format (in `docs/content/docs/`). The user has already migrated:
- `docs/content/docs/guards/` (complete)
- `docs/content/docs/utils/hash/` (complete)
- `docs/content/docs/utils/date-time/` (complete)
- `docs/content/docs/utils/array/` (partial — `index.mdx`, `array-metrics.mdx`, `create-options-array.mdx`, `split-array.mdx` done)

## Style Conventions (Extracted from Existing Migrated Docs)

1. **Frontmatter**: `---` with `title`, `description`, optional `icon` (for index pages)
2. **File extension**: `.mdx`
3. **Callouts**: `<Callout type="info" title="Title">` instead of `:::info`
4. **Playground code blocks**: `` ```typescript pg `` or `` ```ts pg `` for interactive playgrounds
5. **Tabbed examples**: `` ```typescript pg tab="Tab Title" ``
6. **Imports**: Use `toolbox-x` or subpath like `toolbox-x/guards`, `toolbox-x/hash`, etc.
7. **Structure per doc**: `## functionName` → `### Function Signature` → `### Parameters` → `### Returns`/`### Return Value` → `### Example`/`### Example Usage` → optional sections
8. **Meta files**: `meta.json` with `{ "title": "...", "icon": "..." }` or `{ "pages": [...] }`
9. **Internal links**: Relative links like `[splitArrayByProperty](split-array#splitarraybyproperty)` or `/docs/guards/mixed-guards#ishexstring`
10. **Alias tables**: At the bottom of docs if functions have aliases

## Import Subpaths (from package.json exports)

| Subpath | Use for |
|---------|---------|
| `toolbox-x` | Main entry — most utilities, number, string, array, object, misc |
| `toolbox-x/colors` | Color utilities |
| `toolbox-x/converter` | Converter class |
| `toolbox-x/dom` | DOM utilities |
| `toolbox-x/guards` | Type guards |
| `toolbox-x/hash` | Hash utilities |
| `toolbox-x/http-status` | HttpStatus class |
| `toolbox-x/paginator` | Paginator class |
| `toolbox-x/pluralizer` | Pluralizer class |
| `toolbox-x/stylog` | LogStyler/Stylog utilities |
| `toolbox-x/verbalizer` | Verbalizer class |
| `toolbox-x/change-case` | Typed case converters |
| `toolbox-x/date` | Date utilities |
| `toolbox-x/constants` | Constants |
| `toolbox-x/types/*` | Type imports |

## Proposed Changes

### 1. Utilities — Array (Remaining ~11 files)

Old: `docs/content/.docusaurus/utilities/array/` → New: `docs/content/docs/utils/array/`

Already migrated: `index.mdx`, `array-metrics.mdx`, `create-options-array.mdx`, `split-array.mdx`

Files to create:
- `filter-array.mdx` ← `filterArrayOfObjects.md`
- `find-missing.mdx` ← `findMissingElements.md`
- `flatten-array.mdx` ← `flattenArray.md`
- `get-duplicates.mdx` ← `getDuplicates.md`
- `get-last-element.mdx` ← `getLastArrayElement.md`
- `move-element.mdx` ← `moveArrayElement.md`
- `natural-sort.mdx` ← `naturalSort.md`
- `remove-duplicates.mdx` ← `removeDuplicates.md`
- `rotate-array.mdx` ← `rotateArray.md`
- `shuffle-array.mdx` ← `shuffleArray.md`
- `sort-array.mdx` ← `sortAnArray.md`
- Add `meta.json` for page ordering

---

### 2. Utilities — Number (~28 files)

Old: `docs/content/.docusaurus/utilities/number/` → New: `docs/content/docs/utils/number/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `bangla-digits.mdx`, `calculate-hcf.mdx`, `calculate-lcm.mdx`, `calculate-percentage.mdx`, `clamp-number.mdx`, `convert-to-decimal.mdx`, `factorial.mdx`, `fibonacci.mdx`, `find-prime-numbers.mdx`, `format-currency.mdx`, `get-average.mdx`, `get-factors.mdx`, `get-numbers-in-range.mdx`, `get-ordinal.mdx`, `get-random-float.mdx`, `get-random-number.mdx`, `normalize-number.mdx`, `number-to-words.mdx`, `number-to-words-ordinal.mdx`, `reverse-number.mdx`, `roman-numerals.mdx`, `round-number.mdx`, `round-to-nearest.mdx`, `sum-digits.mdx`, `sum-numbers.mdx`, `words-to-number.mdx`

---

### 3. Utilities — String (~23 files)

Old: `docs/content/.docusaurus/utilities/string/` → New: `docs/content/docs/utils/string/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `capitalize-string.mdx`, `convert-string-case.mdx`, `count-words.mdx`, `extract-emails.mdx`, `extract-numbers.mdx`, `extract-urls.mdx`, `format-unit-with-plural.mdx`, `generate-anagrams.mdx`, `generate-random-id.mdx`, `get-levenshtein-distance.mdx`, `mask-string.mdx`, `normalize-string.mdx`, `replace-all-in-string.mdx`, `reverse-string.mdx`, `slugify-string.mdx`, `string-diff.mdx`, `trim-string.mdx`, `truncate-string.mdx`, `typed-case-converters.mdx`

> [!NOTE]
> `pluralizer.md` and `verbalizer.md` in the old string docs reference the Pluralizer/Verbalizer classes — these will go under `docs/content/docs/classes/` instead.

---

### 4. Utilities — Object (~19 files)

Old: `docs/content/.docusaurus/utilities/object/` → New: `docs/content/docs/utils/object/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `clone-object.mdx`, `convert-object-values.mdx`, `count-object-fields.mdx`, `delete-fields.mdx`, `extract-new-fields.mdx`, `extract-object-keys.mdx`, `extract-updated-and-new-fields.mdx`, `extract-updated-fields.mdx`, `flatten-object-dot-notation.mdx`, `flatten-object-key-value.mdx`, `merge-and-flatten-objects.mdx`, `merge-objects.mdx`, `parse-json-to-object.mdx`, `parse-object-values.mdx`, `pick-fields.mdx`, `pick-fields-by-condition.mdx`, `remap-fields.mdx`, `sanitize-data.mdx`

---

### 5. Utilities — Color (~7 files)

Old: `docs/content/.docusaurus/utilities/color/` → New: `docs/content/docs/utils/color/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `color-checkers.mdx`, `color-converters.mdx`, `convert-color-code.mdx`, `extract-color-values.mdx`, `get-color-for-initial.mdx`, `random-color.mdx`

---

### 6. Utilities — DOM (~10 files)

Old: `docs/content/.docusaurus/utilities/dom/` → New: `docs/content/docs/utils/dom/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `copy-to-clipboard.mdx`, `generate-query-params.mdx`, `get-query-params.mdx`, `local-storage.mdx`, `parse-query-string.mdx`, `session-storage.mdx`, `smooth-scroll-to.mdx`, `toggle-full-screen.mdx`, `update-query-param.mdx`

---

### 7. Utilities — Form (~3 files)

Old: `docs/content/.docusaurus/utilities/form/` → New: `docs/content/docs/utils/form/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `create-form-data.mdx`, `parse-form-data.mdx`, `serialize-form.mdx`

---

### 8. Utilities — Misc (~13 files)

Old: `docs/content/.docusaurus/utilities/misc/` → New: `docs/content/docs/utils/misc/`

Files to create:
- `index.mdx` — category index
- `meta.json`
- `class-methods.mdx`, `convert-array-to-string.mdx`, `debounce-action.mdx`, `deep-parse-primitives.mdx`, `define-prototype-method.mdx`, `get-country-by-phone.mdx`, `json-stringify.mdx`, `parse-json.mdx`, `throttle-action.mdx`

> [!NOTE]
> `httpStatus.md`, `stylog.md`, and `stylog-utils.md` reference classes — these will go under `docs/content/docs/classes/` instead.

---

### 9. Classes (~10 class docs + subdirectories)

Old: `docs/content/.docusaurus/classes/` → New: `docs/content/docs/classes/`

Files to create:
- `index.mdx` — class overview page
- `meta.json`
- `Color.mdx` (+ potentially subdirectory for Color sub-pages)
- `Converter.mdx`
- `Currency.mdx`
- `Finder.mdx` (+ subdirectory for Finder sub-pages)
- `HttpStatus.mdx`
- `LogStyler.mdx` (from Stylog docs)
- `Paginator/` directory with `index.mdx`, `instance-creation.mdx`, `calculation-methods.mdx`, `page-navigation.mdx`, `static-methods.mdx`, `utility-methods.mdx`, `meta.json`
- `Pluralizer.mdx`
- `Unit/` directory with `index.mdx`, sub-pages for each conversion category, `meta.json`
- `Verbalizer.mdx`

---

### 10. Types (~4 files)

Old: `docs/content/.docusaurus/types/` → New: `docs/content/docs/types/`

Files to create:
- `index.mdx` — types overview page
- `meta.json`
- `common-types.mdx`
- `constants.mdx`
- `utility-types.mdx`

---

## Execution Order

1. **Array** (remaining) — smallest gap, already partially done
2. **Number** — independent, many small files
3. **String** — independent, many small files
4. **Object** — independent
5. **Color** — small category
6. **DOM** — small category
7. **Form** — smallest category
8. **Misc** — some cross-references to classes
9. **Classes** — depends on misc docs for cross-refs
10. **Types** — mostly standalone

## Verification Plan

### Manual Verification
- User will run `pnpm dev` and check the docs output in the browser
- All internal links will be verified by the user using `pnpm validate:links`
