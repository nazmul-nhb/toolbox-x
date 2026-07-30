# Bundle Analysis Report

This report helps identify bundle size issues, dependency bloat, and optimization opportunities.

## Table of Contents

- [Quick Summary](#quick-summary)
- [Largest Modules by Output Contribution](#largest-modules-by-output-contribution)
- [Entry Point Analysis](#entry-point-analysis)
- [Dependency Chains](#dependency-chains)
- [Optimization Suggestions](#optimization-suggestions)
- [Full Module Graph](#full-module-graph)
- [Raw Data for Searching](#raw-data-for-searching)

---

## Quick Summary

| Metric | Value |
|--------|-------|
| Total output size | 1.4 MB |
| Input modules | 228 |
| Entry points | 58 |
| Code-split chunks | 38 |

## Largest Modules by Output Contribution

Modules sorted by bytes contributed to the output bundle. Large modules may indicate bloat.

| Output Bytes | % of Total | Module |
|--------------|------------|--------|
| 109.2 kB | 7.8% | `src/date/timezone.ts` |
| 46.4 kB | 3.3% | `src/http-status/constants.ts` |
| 29.2 kB | 2.1% | `src/types/utils.ts` |
| 27.1 kB | 1.9% | `src/colors/Color.ts` |
| 26.1 kB | 1.9% | `src/hash/utils.ts` |
| 25.8 kB | 1.8% | `src/stylog/Stylog.ts` |
| 24.2 kB | 1.7% | `src/object/countries.ts` |
| 23.8 kB | 1.7% | `src/string/case.ts` |
| 22.6 kB | 1.6% | `src/types/string.ts` |
| 20.8 kB | 1.5% | `src/hash/Signet.ts` |
| 18.8 kB | 1.3% | `src/string/convert.ts` |
| 17.0 kB | 1.2% | `src/types/date.ts` |
| 15.1 kB | 1.1% | `src/utils/miscellaneous.ts` |
| 15.0 kB | 1.1% | `src/date/utils.ts` |
| 15.0 kB | 1.1% | `src/types/object.ts` |
| 14.9 kB | 1.1% | `src/date/timezone.d.ts` |
| 13.7 kB | 1.0% | `src/colors/convert.ts` |
| 11.8 kB | 0.8% | `src/number/constants.ts` |
| 11.2 kB | 0.8% | `src/number/convert.ts` |
| 10.9 kB | 0.8% | `src/array/Finder.ts` |
| 10.8 kB | 0.8% | `src/number/Unit.ts` |
| 10.6 kB | 0.8% | `src/pluralizer/Pluralizer.ts` |
| 10.4 kB | 0.7% | `src/types/number.ts` |
| 10.3 kB | 0.7% | `src/number/basics.ts` |
| 9.8 kB | 0.7% | `src/object/sanitize.ts` |
| 9.4 kB | 0.7% | `src/hash/helpers.ts` |
| 9.4 kB | 0.7% | `src/form/convert.ts` |
| 9.2 kB | 0.7% | `src/verbalizer/Verbalizer.ts` |
| 9.2 kB | 0.7% | `src/object/objectify.ts` |
| 9.1 kB | 0.6% | `src/hash/uuid.ts` |
| 8.7 kB | 0.6% | `src/types/date.d.ts` |
| 8.5 kB | 0.6% | `src/pluralizer/rules.ts` |
| 8.0 kB | 0.6% | `src/types/utils.d.ts` |
| 7.8 kB | 0.6% | `src/utils/Paginator.ts` |
| 7.6 kB | 0.5% | `src/types/index.ts` |
| 7.2 kB | 0.5% | `src/types/object.d.ts` |
| 7.1 kB | 0.5% | `src/converter/base.ts` |
| 6.9 kB | 0.5% | `src/object/convert.ts` |
| 6.7 kB | 0.5% | `src/index.ts` |
| 6.5 kB | 0.5% | `src/date/constants.ts` |
| 6.5 kB | 0.5% | `src/string/diff.ts` |
| 6.4 kB | 0.5% | `src/index.d.ts` |
| 6.4 kB | 0.5% | `src/array/transform.ts` |
| 6.3 kB | 0.4% | `src/types/string.d.ts` |
| 6.3 kB | 0.4% | `src/hash/TextCodec.ts` |
| 6.2 kB | 0.4% | `src/http-status/HttpStatus.ts` |
| 6.2 kB | 0.4% | `src/guards/non-primitives.ts` |
| 6.2 kB | 0.4% | `src/number/Currency.ts` |
| 6.0 kB | 0.4% | `src/colors/utils.ts` |
| 5.8 kB | 0.4% | `src/verbalizer/rules.ts` |
| 5.8 kB | 0.4% | `src/object/basics.ts` |
| 5.7 kB | 0.4% | `src/types/array.ts` |
| 5.6 kB | 0.4% | `src/types/colors.ts` |
| 5.6 kB | 0.4% | `src/types/hash.ts` |
| 5.5 kB | 0.4% | `src/array/sort.ts` |
| 5.5 kB | 0.4% | `src/string/basics.ts` |
| 5.2 kB | 0.4% | `src/guards/specials.ts` |
| 5.1 kB | 0.4% | `src/date/guards.ts` |
| 5.1 kB | 0.4% | `src/hash/core.ts` |
| 5.0 kB | 0.4% | `src/dom/query.ts` |
| 4.9 kB | 0.4% | `src/date/seasons.ts` |
| 4.8 kB | 0.3% | `src/array/calc.ts` |
| 4.6 kB | 0.3% | `src/hash/Cipher.ts` |
| 4.5 kB | 0.3% | `src/types/form.ts` |
| 4.4 kB | 0.3% | `src/date/helpers.ts` |
| 4.0 kB | 0.3% | `src/form/guards.ts` |
| 4.0 kB | 0.3% | `src/guards/primitives.ts` |
| 4.0 kB | 0.3% | `src/colors/initials.ts` |
| 3.9 kB | 0.3% | `src/number/utilities.ts` |
| 3.8 kB | 0.3% | `src/object/countries.d.ts` |
| 3.6 kB | 0.3% | `src/colors/css-colors.ts` |
| 3.3 kB | 0.2% | `src/types/number.d.ts` |
| 3.2 kB | 0.2% | `src/array/basics.ts` |
| 3.1 kB | 0.2% | `src/dom/storage.ts` |
| 3.0 kB | 0.2% | `src/colors/guards.ts` |
| 3.0 kB | 0.2% | `src/number/percent.ts` |
| 3.0 kB | 0.2% | `src/colors/random.ts` |
| 2.9 kB | 0.2% | `src/converter/volume.ts` |
| 2.9 kB | 0.2% | `src/types/converter.ts` |
| 2.9 kB | 0.2% | `src/types/http-status.ts` |
| 2.9 kB | 0.2% | `src/number/range.ts` |
| 2.9 kB | 0.2% | `src/form/transform.ts` |
| 2.8 kB | 0.2% | `src/types/index.d.ts` |
| 2.8 kB | 0.2% | `src/colors/helpers.ts` |
| 2.7 kB | 0.2% | `src/stylog/constants.ts` |
| 2.6 kB | 0.2% | `src/converter/area.ts` |
| 2.5 kB | 0.2% | `src/string/anagram.ts` |
| 2.5 kB | 0.2% | `src/converter/length.ts` |
| 2.5 kB | 0.2% | `src/converter/time.ts` |
| 2.4 kB | 0.2% | `src/string/helpers.ts` |
| 2.4 kB | 0.2% | `src/stylog/utils.ts` |
| 2.4 kB | 0.2% | `src/dom/utils.ts` |
| 2.4 kB | 0.2% | `src/converter/temp.ts` |
| 2.3 kB | 0.2% | `src/number/fibonacci.ts` |
| 2.3 kB | 0.2% | `src/guards/index.ts` |
| 2.3 kB | 0.2% | `src/converter/data.ts` |
| 2.3 kB | 0.2% | `src/utils/xtras.ts` |
| 2.3 kB | 0.2% | `src/converter/mass.ts` |
| 2.2 kB | 0.2% | `src/date/parse.ts` |
| 2.2 kB | 0.2% | `src/types/colors.d.ts` |
| 2.1 kB | 0.2% | `src/converter/Converter.ts` |
| 2.1 kB | 0.2% | `src/guards/index.d.ts` |
| 2.1 kB | 0.1% | `src/date/greet.ts` |
| 2.1 kB | 0.1% | `src/http-status/constants.d.ts` |
| 2.0 kB | 0.1% | `src/number/guards.ts` |
| 2.0 kB | 0.1% | `src/string/utilities.ts` |
| 1.9 kB | 0.1% | `src/types/converter.d.ts` |
| 1.9 kB | 0.1% | `src/types/hash.d.ts` |
| 1.9 kB | 0.1% | `src/number/helpers.ts` |
| 1.9 kB | 0.1% | `src/string/case.d.ts` |
| 1.8 kB | 0.1% | `src/date/utils.d.ts` |
| 1.8 kB | 0.1% | `src/string/constants.ts` |
| 1.8 kB | 0.1% | `src/stylog/helpers.ts` |
| 1.7 kB | 0.1% | `src/utils/miscellaneous.d.ts` |
| 1.7 kB | 0.1% | `src/converter/constants.ts` |
| 1.7 kB | 0.1% | `src/date/calculation.ts` |
| 1.6 kB | 0.1% | `src/date/constants.d.ts` |
| 1.6 kB | 0.1% | `src/string/guards.ts` |
| 1.6 kB | 0.1% | `src/types/array.d.ts` |
| 1.6 kB | 0.1% | `src/number/constants.d.ts` |
| 1.5 kB | 0.1% | `src/types/stylog.ts` |
| 1.5 kB | 0.1% | `src/colors/convert.d.ts` |
| 1.5 kB | 0.1% | `src/guards/non-primitives.d.ts` |
| 1.4 kB | 0.1% | `src/date/index.ts` |
| 1.3 kB | 0.1% | `src/date/index.d.ts` |
| 1.3 kB | 0.1% | `src/object/objectify.d.ts` |
| 1.2 kB | 0.1% | `src/types/form.d.ts` |
| 1.2 kB | 0.1% | `src/types/http-status.d.ts` |
| 1.2 kB | 0.1% | `src/constants.ts` |
| 1.2 kB | 0.1% | `src/object/convert.d.ts` |
| 1.1 kB | 0.1% | `src/constants.d.ts` |
| 1.1 kB | 0.1% | `src/colors/Color.d.ts` |
| 1.1 kB | 0.1% | `src/object/helpers.ts` |
| 1.1 kB | 0.1% | `src/hash/utils.d.ts` |
| 1.0 kB | 0.1% | `src/array/transform.d.ts` |
| 1.0 kB | 0.1% | `src/number/basics.d.ts` |
| 1.0 kB | 0.1% | `src/object/sanitize.d.ts` |
| 1.0 kB | 0.1% | `src/number/prime.ts` |
| 994 B | 0.1% | `src/dom/index.ts` |
| 980 B | 0.1% | `src/array/Finder.d.ts` |
| 942 B | 0.1% | `src/date/seasons.d.ts` |
| 922 B | 0.1% | `src/guards/primitives.d.ts` |
| 915 B | 0.1% | `src/dom/index.d.ts` |
| 913 B | 0.1% | `src/array/calc.d.ts` |
| 869 B | 0.1% | `src/guards/specials.d.ts` |
| 805 B | 0.1% | `src/types/pluralizer.ts` |
| 793 B | 0.1% | `src/number/Unit.d.ts` |
| 785 B | 0.1% | `src/hash/uuid.d.ts` |
| 777 B | 0.1% | `src/colors/index.ts` |
| 760 B | 0.1% | `src/colors/constants.ts` |
| 755 B | 0.1% | `src/hash/Signet.d.ts` |
| 754 B | 0.1% | `src/converter/Converter.d.ts` |
| 750 B | 0.1% | `src/hash/index.ts` |
| 742 B | 0.1% | `src/object/basics.d.ts` |
| 728 B | 0.1% | `src/colors/index.d.ts` |
| 718 B | 0.0% | `src/hash/index.d.ts` |
| 715 B | 0.0% | `src/string/convert.d.ts` |
| 689 B | 0.0% | `src/types/stylog.d.ts` |
| 684 B | 0.0% | `src/colors/css-colors.d.ts` |
| 661 B | 0.0% | `src/date/guards.d.ts` |
| 659 B | 0.0% | `src/converter/base.d.ts` |
| 656 B | 0.0% | `src/http-status/HttpStatus.d.ts` |
| 638 B | 0.0% | `src/form/guards.d.ts` |
| 634 B | 0.0% | `src/number/convert.d.ts` |
| 615 B | 0.0% | `src/dom/storage.d.ts` |
| 598 B | 0.0% | `src/array/basics.d.ts` |
| 583 B | 0.0% | `src/stylog/Stylog.d.ts` |
| 573 B | 0.0% | `src/dom/query.d.ts` |
| 558 B | 0.0% | `src/colors/utils.d.ts` |
| 557 B | 0.0% | `src/stylog/constants.d.ts` |
| 550 B | 0.0% | `src/number/utilities.d.ts` |
| 523 B | 0.0% | `src/utils/Paginator.d.ts` |
| 481 B | 0.0% | `src/colors/guards.d.ts` |
| 468 B | 0.0% | `src/number/Currency.d.ts` |
| 467 B | 0.0% | `src/array/sort.d.ts` |
| 446 B | 0.0% | `src/stylog/utils.d.ts` |
| 435 B | 0.0% | `src/converter/length.d.ts` |
| 435 B | 0.0% | `src/converter/volume.d.ts` |
| 428 B | 0.0% | `src/converter/temp.d.ts` |
| 421 B | 0.0% | `src/converter/data.d.ts` |
| 421 B | 0.0% | `src/converter/mass.d.ts` |
| 421 B | 0.0% | `src/converter/time.d.ts` |
| 421 B | 0.0% | `src/converter/area.d.ts` |
| 373 B | 0.0% | `src/string/basics.d.ts` |
| 366 B | 0.0% | `src/number/guards.d.ts` |
| 342 B | 0.0% | `src/number/fibonacci.d.ts` |
| 334 B | 0.0% | `src/types/verbalizer.ts` |
| 308 B | 0.0% | `src/pluralizer/Pluralizer.d.ts` |
| 306 B | 0.0% | `src/form/transform.d.ts` |
| 301 B | 0.0% | `src/string/guards.d.ts` |
| 286 B | 0.0% | `src/colors/initials.d.ts` |
| 284 B | 0.0% | `src/colors/random.d.ts` |
| 249 B | 0.0% | `src/converter/index.ts` |
| 241 B | 0.0% | `src/verbalizer/Verbalizer.d.ts` |
| 238 B | 0.0% | `src/change-case.ts` |
| 227 B | 0.0% | `src/form/convert.d.ts` |
| 227 B | 0.0% | `src/types/pluralizer.d.ts` |
| 226 B | 0.0% | `src/converter/constants.d.ts` |
| 223 B | 0.0% | `src/change-case.d.ts` |
| 218 B | 0.0% | `src/string/diff.d.ts` |
| 206 B | 0.0% | `src/dom/utils.d.ts` |
| 205 B | 0.0% | `src/number/range.d.ts` |
| 200 B | 0.0% | `src/date/calculation.d.ts` |
| 191 B | 0.0% | `src/hash/TextCodec.d.ts` |
| 184 B | 0.0% | `src/stylog/console.log.ts` |
| 179 B | 0.0% | `src/converter/index.d.ts` |
| 176 B | 0.0% | `src/string/utilities.d.ts` |
| 170 B | 0.0% | `src/date/parse.d.ts` |
| 162 B | 0.0% | `src/stylog/index.ts` |
| 155 B | 0.0% | `src/stylog/index.d.ts` |
| 142 B | 0.0% | `src/string/anagram.d.ts` |
| 132 B | 0.0% | `src/number/percent.d.ts` |
| 129 B | 0.0% | `src/hash/core.d.ts` |
| 124 B | 0.0% | `src/utils/xtras.d.ts` |
| 118 B | 0.0% | `src/date/greet.d.ts` |
| 115 B | 0.0% | `src/colors/constants.d.ts` |
| 115 B | 0.0% | `src/pluralizer/index.ts` |
| 115 B | 0.0% | `src/verbalizer/index.ts` |
| 113 B | 0.0% | `src/types/verbalizer.d.ts` |
| 104 B | 0.0% | `src/number/prime.d.ts` |
| 98 B | 0.0% | `src/string/constants.d.ts` |
| 86 B | 0.0% | `src/http-status/index.ts` |
| 72 B | 0.0% | `src/hash/Cipher.d.ts` |
| 68 B | 0.0% | `src/http-status/index.d.ts` |
| 67 B | 0.0% | `src/pluralizer/index.d.ts` |
| 67 B | 0.0% | `src/verbalizer/index.d.ts` |
| 49 B | 0.0% | `src/paginator.ts` |
| 48 B | 0.0% | `src/paginator.d.ts` |

## Entry Point Analysis

Each entry point and the total code it loads (including shared chunks).

### Entry: `src/change-case.d.ts`

**Output file**: `change-case.d.mts`
**Bundle size**: 1.1 kB

**Loads these chunks** (code-splitting):
- `case-CK3shNWW.d.mts` (16.8 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 223 B | `src/change-case.d.ts` |

### Entry: `src/change-case.ts`

**Output file**: `change-case.mjs`
**Bundle size**: 1.1 kB

**Loads these chunks** (code-splitting):
- `case-Bub_44BH.mjs` (21.1 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 238 B | `src/change-case.ts` |

### Entry: `src/colors/index.d.ts`

**Output file**: `colors/index.d.mts`
**Bundle size**: 16.4 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `Color-bp5E6G85.d.mts` (25.0 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 1.5 kB | `src/colors/convert.d.ts` |
| 728 B | `src/colors/index.d.ts` |
| 558 B | `src/colors/utils.d.ts` |
| 286 B | `src/colors/initials.d.ts` |
| 284 B | `src/colors/random.d.ts` |

### Entry: `src/colors/index.ts`

**Output file**: `colors/index.mjs`
**Bundle size**: 25.4 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `constants-DCZL77t-.mjs` (1.4 kB, import-statement)
- `css-colors-B-y4TmeC.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `guards-CNG9gnvL.mjs` (5.9 kB, import-statement)
- `convert-BPv05akN.mjs` (14.4 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 27.1 kB | `src/colors/Color.ts` |
| 4.0 kB | `src/colors/initials.ts` |
| 3.0 kB | `src/colors/random.ts` |
| 777 B | `src/colors/index.ts` |

### Entry: `src/constants.d.ts`

**Output file**: `constants.d.mts`
**Bundle size**: 5.2 kB

**Loads these chunks** (code-splitting):
- `constants-BPeq21eD.d.mts` (2.2 kB, import-statement)
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `css-colors-Dqz6Bfnp.d.mts` (5.8 kB, import-statement)
- `constants-D8RzBjsL.d.mts` (2.0 kB, import-statement)
- `constants-DNIXgBkz.d.mts` (51.5 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 1.1 kB | `src/constants.d.ts` |
| 942 B | `src/date/seasons.d.ts` |
| 115 B | `src/colors/constants.d.ts` |

### Entry: `src/constants.ts`

**Output file**: `constants.mjs`
**Bundle size**: 7.2 kB

**Loads these chunks** (code-splitting):
- `constants-B0zJiNqH.mjs` (2.0 kB, import-statement)
- `constants-GZL_CT1W.mjs` (4.5 kB, import-statement)
- `timezone-avZ4TvDx.mjs` (107.9 kB, import-statement)
- `constants-DCZL77t-.mjs` (1.4 kB, import-statement)
- `css-colors-B-y4TmeC.mjs` (4.3 kB, import-statement)
- `constants-ZyfpysiQ.mjs` (9.0 kB, import-statement)
- `constants-CaESnVR6.mjs` (2.4 kB, import-statement)
- `countries-CMxHxKiK.mjs` (24.6 kB, import-statement)
- `constants-BLAcLxOu.mjs` (46.6 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 4.9 kB | `src/date/seasons.ts` |
| 1.2 kB | `src/constants.ts` |

### Entry: `src/converter/index.d.ts`

**Output file**: `converter/index.d.mts`
**Bundle size**: 1.5 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `area-DfL2_gb2.d.mts` (15.0 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 754 B | `src/converter/Converter.d.ts` |
| 179 B | `src/converter/index.d.ts` |

### Entry: `src/converter/index.ts`

**Output file**: `converter/index.mjs`
**Bundle size**: 21.1 kB

**Loads these chunks** (code-splitting):
- `constants-CaESnVR6.mjs` (2.4 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 7.1 kB | `src/converter/base.ts` |
| 2.9 kB | `src/converter/volume.ts` |
| 2.6 kB | `src/converter/area.ts` |
| 2.5 kB | `src/converter/length.ts` |
| 2.5 kB | `src/converter/time.ts` |
| 2.4 kB | `src/converter/temp.ts` |
| 2.3 kB | `src/converter/data.ts` |
| 2.3 kB | `src/converter/mass.ts` |
| 2.1 kB | `src/converter/Converter.ts` |
| 249 B | `src/converter/index.ts` |

### Entry: `src/date/index.d.ts`

**Output file**: `date/index.d.mts`
**Bundle size**: 13.0 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 1.8 kB | `src/date/utils.d.ts` |
| 1.3 kB | `src/date/index.d.ts` |
| 200 B | `src/date/calculation.d.ts` |
| 170 B | `src/date/parse.d.ts` |
| 118 B | `src/date/greet.d.ts` |

### Entry: `src/date/index.ts`

**Output file**: `date/index.mjs`
**Bundle size**: 16.9 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `constants-GZL_CT1W.mjs` (4.5 kB, import-statement)
- `timezone-avZ4TvDx.mjs` (107.9 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `guards-CV5StNcy.mjs` (5.2 kB, import-statement)
- `parse-CPrnHfTO.mjs` (6.2 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 15.0 kB | `src/date/utils.ts` |
| 2.1 kB | `src/date/greet.ts` |
| 1.7 kB | `src/date/calculation.ts` |
| 1.4 kB | `src/date/index.ts` |

### Entry: `src/dom/index.d.ts`

**Output file**: `dom/index.d.mts`
**Bundle size**: 8.9 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `query-vGg2LRnF.d.mts` (3.7 kB, import-statement)
- `form-DzEfUeSF.d.mts` (5.2 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 915 B | `src/dom/index.d.ts` |
| 638 B | `src/form/guards.d.ts` |
| 615 B | `src/dom/storage.d.ts` |
| 306 B | `src/form/transform.d.ts` |
| 227 B | `src/form/convert.d.ts` |
| 206 B | `src/dom/utils.d.ts` |

### Entry: `src/dom/index.ts`

**Output file**: `dom/index.mjs`
**Bundle size**: 16.0 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `uuid-UwpqLOtl.mjs` (65.6 kB, import-statement)
- `guards-CV5StNcy.mjs` (5.2 kB, import-statement)
- `query-y0KFAAFD.mjs` (21.6 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 9.4 kB | `src/form/convert.ts` |
| 3.1 kB | `src/dom/storage.ts` |
| 2.9 kB | `src/form/transform.ts` |
| 2.4 kB | `src/dom/utils.ts` |
| 994 B | `src/dom/index.ts` |

### Entry: `src/guards/index.d.ts`

**Output file**: `guards/index.d.mts`
**Bundle size**: 18.8 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `Color-bp5E6G85.d.mts` (25.0 kB, import-statement)
- `miscellaneous-CpACKZhr.d.mts` (12.7 kB, import-statement)
- `uuid-gvCzfLr7.d.mts` (9.4 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 2.1 kB | `src/guards/index.d.ts` |
| 1.5 kB | `src/guards/non-primitives.d.ts` |
| 922 B | `src/guards/primitives.d.ts` |
| 661 B | `src/date/guards.d.ts` |
| 481 B | `src/colors/guards.d.ts` |
| 366 B | `src/number/guards.d.ts` |
| 301 B | `src/string/guards.d.ts` |

### Entry: `src/guards/index.ts`

**Output file**: `guards/index.mjs`
**Bundle size**: 4.0 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `uuid-UwpqLOtl.mjs` (65.6 kB, import-statement)
- `guards-D5TPrR6_.mjs` (27.8 kB, import-statement)
- `guards-CV5StNcy.mjs` (5.2 kB, import-statement)
- `guards-CNG9gnvL.mjs` (5.9 kB, import-statement)

### Entry: `src/hash/index.d.ts`

**Output file**: `hash/index.d.mts`
**Bundle size**: 43.9 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `hash-y4HVojCw.d.mts` (6.4 kB, import-statement)
- `uuid-gvCzfLr7.d.mts` (9.4 kB, import-statement)
- `basics-CMLA7Ma8.d.mts` (3.9 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 1.1 kB | `src/hash/utils.d.ts` |
| 755 B | `src/hash/Signet.d.ts` |
| 718 B | `src/hash/index.d.ts` |
| 191 B | `src/hash/TextCodec.d.ts` |
| 129 B | `src/hash/core.d.ts` |
| 72 B | `src/hash/Cipher.d.ts` |

### Entry: `src/hash/index.ts`

**Output file**: `hash/index.mjs`
**Bundle size**: 30.4 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `uuid-UwpqLOtl.mjs` (65.6 kB, import-statement)
- `parse-CPrnHfTO.mjs` (6.2 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 20.8 kB | `src/hash/Signet.ts` |
| 6.3 kB | `src/hash/TextCodec.ts` |
| 4.6 kB | `src/hash/Cipher.ts` |
| 750 B | `src/hash/index.ts` |

### Entry: `src/http-status/index.d.ts`

**Output file**: `http-status/index.d.mts`
**Bundle size**: 5.3 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `http-status-BN8YgIo7.d.mts` (3.6 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 656 B | `src/http-status/HttpStatus.d.ts` |
| 68 B | `src/http-status/index.d.ts` |

### Entry: `src/http-status/index.ts`

**Output file**: `http-status/index.mjs`
**Bundle size**: 5.5 kB

**Loads these chunks** (code-splitting):
- `constants-BLAcLxOu.mjs` (46.6 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 6.2 kB | `src/http-status/HttpStatus.ts` |
| 86 B | `src/http-status/index.ts` |

### Entry: `src/index.d.ts`

**Output file**: `index.d.mts`
**Bundle size**: 68.5 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)
- `string-BzpLOJGy.d.mts` (23.7 kB, import-statement)
- `case-CK3shNWW.d.mts` (16.8 kB, import-statement)
- `query-vGg2LRnF.d.mts` (3.7 kB, import-statement)
- `array-DE8LqQnI.d.mts` (6.4 kB, import-statement)
- `miscellaneous-CpACKZhr.d.mts` (12.7 kB, import-statement)
- `basics-CMLA7Ma8.d.mts` (3.9 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 6.4 kB | `src/index.d.ts` |
| 1.3 kB | `src/object/objectify.d.ts` |
| 1.2 kB | `src/object/convert.d.ts` |
| 1.0 kB | `src/array/transform.d.ts` |
| 1.0 kB | `src/number/basics.d.ts` |
| 1.0 kB | `src/object/sanitize.d.ts` |
| 980 B | `src/array/Finder.d.ts` |
| 913 B | `src/array/calc.d.ts` |
| 742 B | `src/object/basics.d.ts` |
| 715 B | `src/string/convert.d.ts` |
| 634 B | `src/number/convert.d.ts` |
| 550 B | `src/number/utilities.d.ts` |
| 468 B | `src/number/Currency.d.ts` |
| 467 B | `src/array/sort.d.ts` |
| 342 B | `src/number/fibonacci.d.ts` |
| 218 B | `src/string/diff.d.ts` |
| 205 B | `src/number/range.d.ts` |
| 176 B | `src/string/utilities.d.ts` |
| 142 B | `src/string/anagram.d.ts` |
| 132 B | `src/number/percent.d.ts` |
| 124 B | `src/utils/xtras.d.ts` |

### Entry: `src/index.ts`

**Output file**: `index.mjs`
**Bundle size**: 85.3 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `case-Bub_44BH.mjs` (21.1 kB, import-statement)
- `constants-ZyfpysiQ.mjs` (9.0 kB, import-statement)
- `countries-CMxHxKiK.mjs` (24.6 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `uuid-UwpqLOtl.mjs` (65.6 kB, import-statement)
- `guards-D5TPrR6_.mjs` (27.8 kB, import-statement)
- `query-y0KFAAFD.mjs` (21.6 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 11.2 kB | `src/number/convert.ts` |
| 10.9 kB | `src/array/Finder.ts` |
| 10.8 kB | `src/number/Unit.ts` |
| 10.3 kB | `src/number/basics.ts` |
| 6.9 kB | `src/object/convert.ts` |
| 6.7 kB | `src/index.ts` |
| 6.5 kB | `src/string/diff.ts` |
| 6.4 kB | `src/array/transform.ts` |
| 6.2 kB | `src/number/Currency.ts` |
| 4.8 kB | `src/array/calc.ts` |
| 3.0 kB | `src/number/percent.ts` |
| 2.9 kB | `src/number/range.ts` |
| 2.5 kB | `src/string/anagram.ts` |
| 2.4 kB | `src/string/helpers.ts` |
| 2.3 kB | `src/number/fibonacci.ts` |
| 2.3 kB | `src/utils/xtras.ts` |
| 2.0 kB | `src/string/utilities.ts` |
| 1.9 kB | `src/number/helpers.ts` |

### Entry: `src/paginator.d.ts`

**Output file**: `paginator.d.mts`
**Bundle size**: 5.3 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 523 B | `src/utils/Paginator.d.ts` |
| 48 B | `src/paginator.d.ts` |

### Entry: `src/paginator.ts`

**Output file**: `paginator.mjs`
**Bundle size**: 7.7 kB

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 7.8 kB | `src/utils/Paginator.ts` |
| 49 B | `src/paginator.ts` |

### Entry: `src/pluralizer/index.d.ts`

**Output file**: `pluralizer/index.d.mts`
**Bundle size**: 6.5 kB

**Loads these chunks** (code-splitting):
- `pluralizer-Bn4MUZAM.d.mts` (1.5 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 308 B | `src/pluralizer/Pluralizer.d.ts` |
| 67 B | `src/pluralizer/index.d.ts` |

### Entry: `src/pluralizer/index.ts`

**Output file**: `pluralizer/index.mjs`
**Bundle size**: 18.0 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 10.6 kB | `src/pluralizer/Pluralizer.ts` |
| 8.5 kB | `src/pluralizer/rules.ts` |
| 115 B | `src/pluralizer/index.ts` |

### Entry: `src/stylog/index.d.ts`

**Output file**: `stylog/index.d.mts`
**Bundle size**: 2.2 kB

**Loads these chunks** (code-splitting):
- `Color-bp5E6G85.d.mts` (25.0 kB, import-statement)
- `Stylog-DXyP10Dd.d.mts` (20.9 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 446 B | `src/stylog/utils.d.ts` |
| 155 B | `src/stylog/index.d.ts` |

### Entry: `src/stylog/index.ts`

**Output file**: `stylog/index.mjs`
**Bundle size**: 22.8 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)
- `css-colors-B-y4TmeC.mjs` (4.3 kB, import-statement)
- `utilities-DH6-MgdV.mjs` (14.4 kB, import-statement)
- `guards-CNG9gnvL.mjs` (5.9 kB, import-statement)
- `convert-BPv05akN.mjs` (14.4 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 25.8 kB | `src/stylog/Stylog.ts` |
| 2.7 kB | `src/stylog/constants.ts` |
| 2.4 kB | `src/stylog/utils.ts` |
| 1.8 kB | `src/stylog/helpers.ts` |
| 184 B | `src/stylog/console.log.ts` |
| 162 B | `src/stylog/index.ts` |

### Entry: `src/types/array.d.ts`

**Output file**: `types/array.d.mts`
**Bundle size**: 1.0 kB

**Loads these chunks** (code-splitting):
- `array-DE8LqQnI.d.mts` (6.4 kB, import-statement)

### Entry: `src/types/array.ts`

**Output file**: `types/array.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 5.7 kB | `src/types/array.ts` |

### Entry: `src/types/colors.d.ts`

**Output file**: `types/colors.d.mts`
**Bundle size**: 1.3 kB

**Loads these chunks** (code-splitting):
- `Color-bp5E6G85.d.mts` (25.0 kB, import-statement)

### Entry: `src/types/colors.ts`

**Output file**: `types/colors.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 5.6 kB | `src/types/colors.ts` |

### Entry: `src/types/converter.d.ts`

**Output file**: `types/converter.d.mts`
**Bundle size**: 1.1 kB

**Loads these chunks** (code-splitting):
- `area-DfL2_gb2.d.mts` (15.0 kB, import-statement)

### Entry: `src/types/converter.ts`

**Output file**: `types/converter.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 2.9 kB | `src/types/converter.ts` |

### Entry: `src/types/date.d.ts`

**Output file**: `types/date.d.mts`
**Bundle size**: 3.0 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

### Entry: `src/types/date.ts`

**Output file**: `types/date.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 17.0 kB | `src/types/date.ts` |

### Entry: `src/types/form.d.ts`

**Output file**: `types/form.d.mts`
**Bundle size**: 891 B

**Loads these chunks** (code-splitting):
- `form-DzEfUeSF.d.mts` (5.2 kB, import-statement)

### Entry: `src/types/form.ts`

**Output file**: `types/form.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 4.5 kB | `src/types/form.ts` |

### Entry: `src/types/hash.d.ts`

**Output file**: `types/hash.d.mts`
**Bundle size**: 1.3 kB

**Loads these chunks** (code-splitting):
- `hash-y4HVojCw.d.mts` (6.4 kB, import-statement)

### Entry: `src/types/hash.ts`

**Output file**: `types/hash.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 5.6 kB | `src/types/hash.ts` |

### Entry: `src/types/http-status.d.ts`

**Output file**: `types/http-status.d.mts`
**Bundle size**: 1021 B

**Loads these chunks** (code-splitting):
- `http-status-BN8YgIo7.d.mts` (3.6 kB, import-statement)

### Entry: `src/types/http-status.ts`

**Output file**: `types/http-status.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 2.9 kB | `src/types/http-status.ts` |

### Entry: `src/types/index.d.ts`

**Output file**: `types/index.d.mts`
**Bundle size**: 1.7 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

### Entry: `src/types/index.ts`

**Output file**: `types/index.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 7.6 kB | `src/types/index.ts` |

### Entry: `src/types/number.d.ts`

**Output file**: `types/number.d.mts`
**Bundle size**: 1.9 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

### Entry: `src/types/number.ts`

**Output file**: `types/number.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 10.4 kB | `src/types/number.ts` |

### Entry: `src/types/object.d.ts`

**Output file**: `types/object.d.mts`
**Bundle size**: 2.0 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

### Entry: `src/types/object.ts`

**Output file**: `types/object.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 15.0 kB | `src/types/object.ts` |

### Entry: `src/types/pluralizer.d.ts`

**Output file**: `types/pluralizer.d.mts`
**Bundle size**: 773 B

**Loads these chunks** (code-splitting):
- `pluralizer-Bn4MUZAM.d.mts` (1.5 kB, import-statement)

### Entry: `src/types/pluralizer.ts`

**Output file**: `types/pluralizer.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 805 B | `src/types/pluralizer.ts` |

### Entry: `src/types/string.d.ts`

**Output file**: `types/string.d.mts`
**Bundle size**: 2.5 kB

**Loads these chunks** (code-splitting):
- `string-BzpLOJGy.d.mts` (23.7 kB, import-statement)

### Entry: `src/types/string.ts`

**Output file**: `types/string.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 22.6 kB | `src/types/string.ts` |

### Entry: `src/types/stylog.d.ts`

**Output file**: `types/stylog.d.mts`
**Bundle size**: 886 B

**Loads these chunks** (code-splitting):
- `Stylog-DXyP10Dd.d.mts` (20.9 kB, import-statement)

### Entry: `src/types/stylog.ts`

**Output file**: `types/stylog.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 1.5 kB | `src/types/stylog.ts` |

### Entry: `src/types/utils.d.ts`

**Output file**: `types/utils.d.mts`
**Bundle size**: 2.6 kB

**Loads these chunks** (code-splitting):
- `index-CuYJv2Xe.d.mts` (291.7 kB, import-statement)

### Entry: `src/types/utils.ts`

**Output file**: `types/utils.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 29.2 kB | `src/types/utils.ts` |

### Entry: `src/types/verbalizer.d.ts`

**Output file**: `types/verbalizer.d.mts`
**Bundle size**: 1019 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 113 B | `src/types/verbalizer.d.ts` |

### Entry: `src/types/verbalizer.ts`

**Output file**: `types/verbalizer.mjs`
**Bundle size**: 621 B

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 334 B | `src/types/verbalizer.ts` |

### Entry: `src/verbalizer/index.d.ts`

**Output file**: `verbalizer/index.d.mts`
**Bundle size**: 5.3 kB

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 241 B | `src/verbalizer/Verbalizer.d.ts` |
| 67 B | `src/verbalizer/index.d.ts` |

### Entry: `src/verbalizer/index.ts`

**Output file**: `verbalizer/index.mjs`
**Bundle size**: 15.1 kB

**Loads these chunks** (code-splitting):
- `primitives-B-n6Y61s.mjs` (4.3 kB, import-statement)

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 9.2 kB | `src/verbalizer/Verbalizer.ts` |
| 5.8 kB | `src/verbalizer/rules.ts` |
| 115 B | `src/verbalizer/index.ts` |

## Dependency Chains

For each module, shows what files import it. Use this to understand why a module is included.

### Most Commonly Imported Modules

Modules imported by many files. Extracting these to shared chunks may help.

| Import Count | Module | Imported By |
|--------------|--------|-------------|
| 46 | `src/types/index.d.ts` | `src/converter/Converter.d.ts`, `src/date/calculation.d.ts`, `src/date/parse.d.ts`, `src/date/utils.d.ts`, `src/dom/storage.d.ts`, `src/date/guards.d.ts`, `src/guards/non-primitives.d.ts`, `src/guards/primitives.d.ts`, `src/number/guards.d.ts`, `src/hash/Signet.d.ts`, `src/hash/utils.d.ts`, `src/http-status/HttpStatus.d.ts`, `src/number/basics.d.ts`, `src/number/Currency.d.ts`, `src/number/fibonacci.d.ts`, `src/number/convert.d.ts`, `src/number/utilities.d.ts`, `src/array/calc.d.ts`, `src/array/Finder.d.ts`, `src/array/sort.d.ts`, `src/array/transform.d.ts`, `src/object/objectify.d.ts`, `src/object/sanitize.d.ts`, `src/utils/Paginator.d.ts`, `src/types/colors.d.ts`, `src/converter/data.d.ts`, `src/converter/length.d.ts`, `src/converter/mass.d.ts`, `src/converter/temp.d.ts`, `src/converter/time.d.ts`, `src/converter/volume.d.ts`, `src/converter/base.d.ts`, `src/converter/area.d.ts`, `src/types/array.d.ts`, `src/types/form.d.ts`, `src/types/hash.d.ts`, `src/types/object.d.ts`, `src/types/utils.d.ts`, `src/types/number.d.ts`, `src/types/date.d.ts`, `src/array/basics.d.ts`, `src/utils/miscellaneous.d.ts`, `src/types/pluralizer.d.ts`, `src/types/string.d.ts`, `src/guards/specials.d.ts`, `src/hash/uuid.d.ts` |
| 41 | `src/guards/primitives.ts` | `src/colors/Color.ts`, `src/colors/initials.ts`, `src/date/calculation.ts`, `src/date/utils.ts`, `src/form/convert.ts`, `src/form/transform.ts`, `src/hash/Cipher.ts`, `src/hash/Signet.ts`, `src/hash/TextCodec.ts`, `src/string/anagram.ts`, `src/number/basics.ts`, `src/number/convert.ts`, `src/number/range.ts`, `src/array/transform.ts`, `src/array/Finder.ts`, `src/object/convert.ts`, `src/utils/xtras.ts`, `src/pluralizer/Pluralizer.ts`, `src/stylog/helpers.ts`, `src/stylog/Stylog.ts`, `src/verbalizer/Verbalizer.ts`, `src/string/case.ts`, `src/colors/utils.ts`, `src/date/guards.ts`, `src/string/convert.ts`, `src/number/guards.ts`, `src/guards/index.ts`, `src/date/helpers.ts`, `src/date/parse.ts`, `src/form/guards.ts`, `src/object/sanitize.ts`, `src/dom/query.ts`, `src/guards/non-primitives.ts`, `src/guards/specials.ts`, `src/number/utilities.ts`, `src/string/basics.ts`, `src/array/sort.ts`, `src/utils/miscellaneous.ts`, `src/hash/utils.ts`, `src/hash/helpers.ts`, `src/hash/core.ts` |
| 28 | `src/types/object.d.ts` | `src/form/convert.d.ts`, `src/guards/non-primitives.d.ts`, `src/hash/Signet.d.ts`, `src/array/calc.d.ts`, `src/array/Finder.d.ts`, `src/array/sort.d.ts`, `src/array/transform.d.ts`, `src/object/basics.d.ts`, `src/object/objectify.d.ts`, `src/object/sanitize.d.ts`, `src/object/convert.d.ts`, `src/utils/xtras.d.ts`, `src/converter/data.d.ts`, `src/converter/length.d.ts`, `src/converter/mass.d.ts`, `src/converter/temp.d.ts`, `src/converter/time.d.ts`, `src/converter/volume.d.ts`, `src/converter/area.d.ts`, `src/types/array.d.ts`, `src/types/form.d.ts`, `src/types/hash.d.ts`, `src/types/utils.d.ts`, `src/types/index.d.ts`, `src/array/basics.d.ts`, `src/utils/miscellaneous.d.ts`, `src/dom/query.d.ts`, `src/types/string.d.ts` |
| 23 | `src/guards/non-primitives.ts` | `src/date/calculation.ts`, `src/date/utils.ts`, `src/form/convert.ts`, `src/hash/Signet.ts`, `src/string/anagram.ts`, `src/array/transform.ts`, `src/array/calc.ts`, `src/array/Finder.ts`, `src/object/convert.ts`, `src/stylog/helpers.ts`, `src/date/guards.ts`, `src/string/convert.ts`, `src/object/basics.ts`, `src/array/basics.ts`, `src/guards/index.ts`, `src/object/sanitize.ts`, `src/object/objectify.ts`, `src/guards/specials.ts`, `src/string/basics.ts`, `src/object/helpers.ts`, `src/array/sort.ts`, `src/utils/miscellaneous.ts`, `src/hash/helpers.ts` |
| 13 | `src/guards/specials.ts` | `src/hash/Cipher.ts`, `src/hash/TextCodec.ts`, `src/hash/index.ts`, `src/number/convert.ts`, `src/stylog/Stylog.ts`, `src/date/guards.ts`, `src/guards/index.ts`, `src/date/parse.ts`, `src/number/utilities.ts`, `src/utils/miscellaneous.ts`, `src/hash/utils.ts`, `src/hash/helpers.ts`, `src/hash/uuid.ts` |
| 12 | `src/number/utilities.ts` | `src/colors/Color.ts`, `src/date/calculation.ts`, `src/date/utils.ts`, `src/number/basics.ts`, `src/number/Currency.ts`, `src/number/convert.ts`, `src/index.ts`, `src/pluralizer/Pluralizer.ts`, `src/date/guards.ts`, `src/number/guards.ts`, `src/date/helpers.ts`, `src/object/helpers.ts` |
| 11 | `src/types/number.d.ts` | `src/colors/initials.d.ts`, `src/colors/utils.d.ts`, `src/number/basics.d.ts`, `src/number/Currency.d.ts`, `src/number/percent.d.ts`, `src/number/convert.d.ts`, `src/number/utilities.d.ts`, `src/number/range.d.ts`, `src/colors/Color.d.ts`, `src/number/Unit.d.ts`, `src/types/date.d.ts` |
| 10 | `src/converter/constants.ts` | `src/constants.ts`, `src/converter/base.ts`, `src/converter/area.ts`, `src/converter/data.ts`, `src/converter/length.ts`, `src/converter/mass.ts`, `src/converter/temp.ts`, `src/converter/time.ts`, `src/converter/volume.ts`, `src/converter/Converter.ts` |
| 10 | `src/types/utils.d.ts` | `src/object/basics.d.ts`, `src/utils/Paginator.d.ts`, `src/types/converter.d.ts`, `src/types/form.d.ts`, `src/types/http-status.d.ts`, `src/types/object.d.ts`, `src/types/number.d.ts`, `src/types/date.d.ts`, `src/utils/miscellaneous.d.ts`, `src/types/string.d.ts` |
| 9 | `src/types/converter.d.ts` | `src/converter/Converter.d.ts`, `src/converter/data.d.ts`, `src/converter/length.d.ts`, `src/converter/mass.d.ts`, `src/converter/temp.d.ts`, `src/converter/time.d.ts`, `src/converter/volume.d.ts`, `src/converter/base.d.ts`, `src/converter/area.d.ts` |
| 8 | `src/converter/base.ts` | `src/converter/area.ts`, `src/converter/data.ts`, `src/converter/length.ts`, `src/converter/mass.ts`, `src/converter/temp.ts`, `src/converter/time.ts`, `src/converter/volume.ts`, `src/converter/Converter.ts` |
| 8 | `src/types/colors.d.ts` | `src/colors/convert.d.ts`, `src/colors/initials.d.ts`, `src/colors/random.d.ts`, `src/colors/utils.d.ts`, `src/colors/guards.d.ts`, `src/stylog/utils.d.ts`, `src/colors/Color.d.ts`, `src/types/stylog.d.ts` |
| 8 | `src/converter/base.d.ts` | `src/converter/data.d.ts`, `src/converter/length.d.ts`, `src/converter/mass.d.ts`, `src/converter/temp.d.ts`, `src/converter/time.d.ts`, `src/converter/volume.d.ts`, `src/types/converter.d.ts`, `src/converter/area.d.ts` |
| 8 | `src/date/guards.ts` | `src/date/utils.ts`, `src/date/greet.ts`, `src/form/convert.ts`, `src/guards/index.ts`, `src/date/parse.ts`, `src/object/sanitize.ts`, `src/object/objectify.ts`, `src/utils/miscellaneous.ts` |
| 8 | `src/types/date.d.ts` | `src/date/calculation.d.ts`, `src/date/greet.d.ts`, `src/date/parse.d.ts`, `src/date/utils.d.ts`, `src/date/guards.d.ts`, `src/types/hash.d.ts`, `src/date/constants.d.ts`, `src/types/index.d.ts` |
| 8 | `src/utils/miscellaneous.ts` | `src/hash/Signet.ts`, `src/number/range.ts`, `src/array/transform.ts`, `src/index.ts`, `src/object/basics.ts`, `src/guards/index.ts`, `src/object/objectify.ts`, `src/dom/query.ts` |
| 7 | `src/types/string.d.ts` | `src/string/anagram.d.ts`, `src/string/convert.d.ts`, `src/string/diff.d.ts`, `src/string/basics.d.ts`, `src/string/case.d.ts`, `src/types/form.d.ts`, `src/dom/query.d.ts` |
| 7 | `src/hash/utils.ts` | `src/hash/Cipher.ts`, `src/hash/Signet.ts`, `src/hash/TextCodec.ts`, `src/hash/index.ts`, `src/hash/helpers.ts`, `src/hash/core.ts`, `src/hash/uuid.ts` |
| 6 | `src/colors/helpers.ts` | `src/colors/random.ts`, `src/colors/initials.ts`, `src/stylog/Stylog.ts`, `src/colors/utils.ts`, `src/colors/convert.ts`, `src/colors/guards.ts` |
| 6 | `src/colors/guards.ts` | `src/colors/Color.ts`, `src/stylog/utils.ts`, `src/stylog/Stylog.ts`, `src/colors/utils.ts`, `src/colors/convert.ts`, `src/guards/index.ts` |
| 6 | `src/hash/helpers.ts` | `src/hash/Cipher.ts`, `src/hash/Signet.ts`, `src/hash/TextCodec.ts`, `src/hash/utils.ts`, `src/hash/core.ts`, `src/hash/uuid.ts` |
| 5 | `src/types/array.d.ts` | `src/array/Finder.d.ts`, `src/array/sort.d.ts`, `src/array/transform.d.ts`, `src/types/form.d.ts`, `src/array/basics.d.ts` |
| 5 | `src/date/constants.ts` | `src/constants.ts`, `src/date/calculation.ts`, `src/date/utils.ts`, `src/date/helpers.ts`, `src/date/parse.ts` |
| 5 | `src/number/constants.ts` | `src/constants.ts`, `src/number/helpers.ts`, `src/number/Unit.ts`, `src/number/convert.ts`, `src/number/utilities.ts` |
| 5 | `src/colors/utils.ts` | `src/colors/random.ts`, `src/colors/Color.ts`, `src/colors/initials.ts`, `src/colors/index.ts`, `src/colors/convert.ts` |
| 5 | `src/colors/convert.ts` | `src/colors/random.ts`, `src/colors/Color.ts`, `src/colors/index.ts`, `src/stylog/utils.ts`, `src/stylog/Stylog.ts` |
| 5 | `src/string/basics.ts` | `src/form/convert.ts`, `src/hash/index.ts`, `src/index.ts`, `src/string/convert.ts`, `src/object/sanitize.ts` |
| 4 | `src/number/basics.ts` | `src/number/percent.ts`, `src/number/range.ts`, `src/array/calc.ts`, `src/index.ts` |
| 4 | `src/colors/css-colors.ts` | `src/colors/Color.ts`, `src/constants.ts`, `src/stylog/Stylog.ts`, `src/colors/guards.ts` |
| 4 | `src/form/guards.ts` | `src/form/convert.ts`, `src/dom/index.ts`, `src/object/sanitize.ts`, `src/object/objectify.ts` |
| 4 | `src/object/sanitize.ts` | `src/form/transform.ts`, `src/index.ts`, `src/object/objectify.ts`, `src/dom/query.ts` |
| 4 | `src/object/helpers.ts` | `src/array/transform.ts`, `src/array/calc.ts`, `src/array/sort.ts`, `src/utils/miscellaneous.ts` |
| 3 | `src/number/helpers.ts` | `src/number/basics.ts`, `src/number/convert.ts`, `src/number/range.ts` |
| 3 | `src/stylog/constants.ts` | `src/stylog/helpers.ts`, `src/stylog/utils.ts`, `src/stylog/Stylog.ts` |
| 3 | `src/types/form.d.ts` | `src/form/convert.d.ts`, `src/form/guards.d.ts`, `src/form/transform.d.ts` |
| 3 | `src/number/guards.ts` | `src/number/percent.ts`, `src/number/range.ts`, `src/guards/index.ts` |
| 3 | `src/number/prime.ts` | `src/number/range.ts`, `src/index.ts`, `src/guards/index.ts` |
| 3 | `src/array/basics.ts` | `src/number/range.ts`, `src/index.ts`, `src/guards/index.ts` |
| 3 | `src/types/hash.d.ts` | `src/hash/Signet.d.ts`, `src/guards/specials.d.ts`, `src/hash/uuid.d.ts` |
| 3 | `src/date/helpers.ts` | `src/date/calculation.ts`, `src/date/utils.ts`, `src/hash/Signet.ts` |
| 3 | `src/dom/query.ts` | `src/form/transform.ts`, `src/dom/index.ts`, `src/index.ts` |
| 3 | `src/date/timezone.ts` | `src/constants.ts`, `src/date/utils.ts`, `src/date/guards.ts` |
| 2 | `src/colors/random.ts` | `src/colors/Color.ts`, `src/colors/index.ts` |
| 2 | `src/date/utils.ts` | `src/date/greet.ts`, `src/date/index.ts` |
| 2 | `src/string/utilities.ts` | `src/string/helpers.ts`, `src/index.ts` |
| 2 | `src/array/transform.ts` | `src/array/calc.ts`, `src/index.ts` |
| 2 | `src/stylog/utils.ts` | `src/stylog/Stylog.ts`, `src/stylog/index.ts` |
| 2 | `src/colors/Color.d.ts` | `src/colors/index.d.ts`, `src/types/colors.d.ts` |
| 2 | `src/types/stylog.d.ts` | `src/stylog/utils.d.ts`, `src/stylog/Stylog.d.ts` |
| 2 | `src/stylog/Stylog.d.ts` | `src/stylog/index.d.ts`, `src/types/stylog.d.ts` |
| 2 | `src/converter/data.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/length.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/mass.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/temp.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/time.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/volume.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/converter/area.d.ts` | `src/converter/Converter.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/string/basics.d.ts` | `src/hash/index.d.ts`, `src/index.d.ts` |
| 2 | `src/string/case.ts` | `src/change-case.ts`, `src/index.ts` |
| 2 | `src/string/case.d.ts` | `src/change-case.d.ts`, `src/index.d.ts` |
| 2 | `src/string/constants.ts` | `src/constants.ts`, `src/string/case.ts` |
| 2 | `src/http-status/constants.ts` | `src/constants.ts`, `src/http-status/HttpStatus.ts` |
| 2 | `src/string/constants.d.ts` | `src/constants.d.ts`, `src/types/string.d.ts` |
| 2 | `src/converter/constants.d.ts` | `src/constants.d.ts`, `src/types/converter.d.ts` |
| 2 | `src/colors/constants.ts` | `src/colors/initials.ts`, `src/constants.ts` |
| 2 | `src/http-status/constants.d.ts` | `src/constants.d.ts`, `src/types/http-status.d.ts` |
| 2 | `src/object/countries.ts` | `src/constants.ts`, `src/utils/xtras.ts` |
| 2 | `src/colors/css-colors.d.ts` | `src/constants.d.ts`, `src/types/colors.d.ts` |
| 2 | `src/string/convert.ts` | `src/index.ts`, `src/string/guards.ts` |
| 2 | `src/object/basics.ts` | `src/index.ts`, `src/array/basics.ts` |
| 2 | `src/guards/index.ts` | `src/stylog/Stylog.ts`, `src/form/guards.ts` |
| 2 | `src/date/constants.d.ts` | `src/constants.d.ts`, `src/types/date.d.ts` |
| 2 | `src/date/timezone.d.ts` | `src/constants.d.ts`, `src/types/date.d.ts` |
| 2 | `src/number/constants.d.ts` | `src/constants.d.ts`, `src/types/number.d.ts` |
| 2 | `src/number/Unit.d.ts` | `src/index.d.ts`, `src/types/number.d.ts` |
| 2 | `src/object/countries.d.ts` | `src/constants.d.ts`, `src/types/object.d.ts` |
| 2 | `src/array/basics.d.ts` | `src/guards/index.d.ts`, `src/index.d.ts` |
| 2 | `src/number/prime.d.ts` | `src/guards/index.d.ts`, `src/index.d.ts` |
| 2 | `src/utils/miscellaneous.d.ts` | `src/guards/index.d.ts`, `src/index.d.ts` |
| 2 | `src/date/parse.ts` | `src/date/index.ts`, `src/hash/Signet.ts` |
| 2 | `src/dom/query.d.ts` | `src/dom/index.d.ts`, `src/index.d.ts` |
| 2 | `src/object/objectify.ts` | `src/index.ts`, `src/dom/query.ts` |
| 2 | `src/array/sort.ts` | `src/index.ts`, `src/utils/miscellaneous.ts` |
| 2 | `src/hash/core.ts` | `src/hash/index.ts`, `src/hash/uuid.ts` |
| 2 | `src/hash/uuid.ts` | `src/hash/index.ts`, `src/guards/index.ts` |
| 2 | `src/guards/specials.d.ts` | `src/guards/index.d.ts`, `src/hash/index.d.ts` |
| 2 | `src/hash/uuid.d.ts` | `src/guards/index.d.ts`, `src/hash/index.d.ts` |

## Full Module Graph

Complete dependency information for each module.

### `src/array/Finder.d.ts`

- **Output contribution**: 980 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/array.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/array/Finder.ts`

- **Output contribution**: 10.9 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/array/basics.d.ts`

- **Output contribution**: 598 B
- **Imported by** (2 files): `src/guards/index.d.ts` `src/index.d.ts`
- **Imports**:
  - `src/types/array.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/array/basics.ts`

- **Output contribution**: 3.2 kB
- **Imported by** (3 files): `src/number/range.ts` `src/index.ts` `src/guards/index.ts`
- **Imports**:
  - `src/object/basics.ts`
  - `src/guards/non-primitives.ts`

### `src/array/calc.d.ts`

- **Output contribution**: 913 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/array/calc.ts`

- **Output contribution**: 4.8 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/basics.ts`
  - `src/array/transform.ts`
  - `src/guards/non-primitives.ts`
  - `src/object/helpers.ts`

### `src/array/sort.d.ts`

- **Output contribution**: 467 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/array.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/array/sort.ts`

- **Output contribution**: 5.5 kB
- **Imported by** (2 files): `src/index.ts` `src/utils/miscellaneous.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/object/helpers.ts`

### `src/array/transform.d.ts`

- **Output contribution**: 1.0 kB
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/array.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/array/transform.ts`

- **Output contribution**: 6.4 kB
- **Imported by** (2 files): `src/array/calc.ts` `src/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/object/helpers.ts`
  - `src/utils/miscellaneous.ts`

### `src/change-case.d.ts`

- **Output contribution**: 223 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/string/case.d.ts`

### `src/change-case.ts`

- **Output contribution**: 238 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/string/case.ts`

### `src/colors/Color.d.ts`

- **Output contribution**: 1.1 kB
- **Imported by** (2 files): `src/colors/index.d.ts` `src/types/colors.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`
  - `src/types/number.d.ts`

### `src/colors/Color.ts`

- **Output contribution**: 27.1 kB
- **Imported by** (1 files): `src/colors/index.ts`
- **Imports**:
  - `src/colors/random.ts`
  - `src/colors/utils.ts`
  - `src/colors/convert.ts`
  - `src/colors/css-colors.ts`
  - `src/colors/guards.ts`
  - `src/guards/primitives.ts`
  - `src/number/utilities.ts`

### `src/colors/constants.d.ts`

- **Output contribution**: 115 B
- **Imported by** (1 files): `src/constants.d.ts`

### `src/colors/constants.ts`

- **Output contribution**: 760 B
- **Imported by** (2 files): `src/colors/initials.ts` `src/constants.ts`

### `src/colors/convert.d.ts`

- **Output contribution**: 1.5 kB
- **Imported by** (1 files): `src/colors/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`

### `src/colors/convert.ts`

- **Output contribution**: 13.7 kB
- **Imported by** (5 files): `src/colors/random.ts` `src/colors/Color.ts` `src/colors/index.ts` `src/stylog/utils.ts` `src/stylog/Stylog.ts`
- **Imports**:
  - `src/colors/utils.ts`
  - `src/colors/helpers.ts`
  - `src/colors/guards.ts`

### `src/colors/css-colors.d.ts`

- **Output contribution**: 684 B
- **Imported by** (2 files): `src/constants.d.ts` `src/types/colors.d.ts`

### `src/colors/css-colors.ts`

- **Output contribution**: 3.6 kB
- **Imported by** (4 files): `src/colors/Color.ts` `src/constants.ts` `src/stylog/Stylog.ts` `src/colors/guards.ts`

### `src/colors/guards.d.ts`

- **Output contribution**: 481 B
- **Imported by** (1 files): `src/guards/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`

### `src/colors/guards.ts`

- **Output contribution**: 3.0 kB
- **Imported by** (6 files): `src/colors/Color.ts` `src/stylog/utils.ts` `src/stylog/Stylog.ts` `src/colors/utils.ts` `src/colors/convert.ts` `src/guards/index.ts`
- **Imports**:
  - `src/colors/css-colors.ts`
  - `src/colors/helpers.ts`

### `src/colors/helpers.ts`

- **Output contribution**: 2.8 kB
- **Imported by** (6 files): `src/colors/random.ts` `src/colors/initials.ts` `src/stylog/Stylog.ts` `src/colors/utils.ts` `src/colors/convert.ts` `src/colors/guards.ts`

### `src/colors/index.d.ts`

- **Output contribution**: 728 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/colors/convert.d.ts`
  - `src/colors/initials.d.ts`
  - `src/colors/random.d.ts`
  - `src/colors/utils.d.ts`
  - `src/colors/Color.d.ts`

### `src/colors/index.ts`

- **Output contribution**: 777 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/colors/random.ts`
  - `src/colors/Color.ts`
  - `src/colors/initials.ts`
  - `src/colors/utils.ts`
  - `src/colors/convert.ts`

### `src/colors/initials.d.ts`

- **Output contribution**: 286 B
- **Imported by** (1 files): `src/colors/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`
  - `src/types/number.d.ts`

### `src/colors/initials.ts`

- **Output contribution**: 4.0 kB
- **Imported by** (1 files): `src/colors/index.ts`
- **Imports**:
  - `src/colors/constants.ts`
  - `src/colors/utils.ts`
  - `src/colors/helpers.ts`
  - `src/guards/primitives.ts`

### `src/colors/random.d.ts`

- **Output contribution**: 284 B
- **Imported by** (1 files): `src/colors/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`

### `src/colors/random.ts`

- **Output contribution**: 3.0 kB
- **Imported by** (2 files): `src/colors/Color.ts` `src/colors/index.ts`
- **Imports**:
  - `src/colors/utils.ts`
  - `src/colors/convert.ts`
  - `src/colors/helpers.ts`

### `src/colors/utils.d.ts`

- **Output contribution**: 558 B
- **Imported by** (1 files): `src/colors/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`
  - `src/types/number.d.ts`

### `src/colors/utils.ts`

- **Output contribution**: 6.0 kB
- **Imported by** (5 files): `src/colors/random.ts` `src/colors/Color.ts` `src/colors/initials.ts` `src/colors/index.ts` `src/colors/convert.ts`
- **Imports**:
  - `src/colors/helpers.ts`
  - `src/colors/guards.ts`
  - `src/guards/primitives.ts`

### `src/constants.d.ts`

- **Output contribution**: 1.1 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/date/seasons.d.ts`
  - `src/colors/constants.d.ts`
  - `src/string/constants.d.ts`
  - `src/converter/constants.d.ts`
  - `src/http-status/constants.d.ts`
  - `src/colors/css-colors.d.ts`
  - `src/date/constants.d.ts`
  - `src/date/timezone.d.ts`
  - `src/number/constants.d.ts`
  - `src/object/countries.d.ts`

### `src/constants.ts`

- **Output contribution**: 1.2 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/date/seasons.ts`
  - `src/string/constants.ts`
  - `src/http-status/constants.ts`
  - `src/converter/constants.ts`
  - `src/colors/constants.ts`
  - `src/date/constants.ts`
  - `src/number/constants.ts`
  - `src/object/countries.ts`
  - `src/colors/css-colors.ts`
  - `src/date/timezone.ts`

### `src/converter/Converter.d.ts`

- **Output contribution**: 754 B
- **Imported by** (1 files): `src/converter/index.d.ts`
- **Imports**:
  - `src/converter/data.d.ts`
  - `src/converter/length.d.ts`
  - `src/converter/mass.d.ts`
  - `src/converter/temp.d.ts`
  - `src/converter/time.d.ts`
  - `src/converter/volume.d.ts`
  - `src/types/converter.d.ts`
  - `src/converter/area.d.ts`
  - `src/types/index.d.ts`

### `src/converter/Converter.ts`

- **Output contribution**: 2.1 kB
- **Imported by** (1 files): `src/converter/index.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/area.ts`
  - `src/converter/data.ts`
  - `src/converter/length.ts`
  - `src/converter/mass.ts`
  - `src/converter/temp.ts`
  - `src/converter/time.ts`
  - `src/converter/volume.ts`
  - `src/converter/constants.ts`

### `src/converter/area.d.ts`

- **Output contribution**: 421 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/area.ts`

- **Output contribution**: 2.6 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/base.d.ts`

- **Output contribution**: 659 B
- **Imported by** (8 files): `src/converter/data.d.ts` `src/converter/length.d.ts` `src/converter/mass.d.ts` `src/converter/temp.d.ts` `src/converter/time.d.ts` `src/converter/volume.d.ts` `src/types/converter.d.ts` `src/converter/area.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/types/index.d.ts`

### `src/converter/base.ts`

- **Output contribution**: 7.1 kB
- **Imported by** (8 files): `src/converter/area.ts` `src/converter/data.ts` `src/converter/length.ts` `src/converter/mass.ts` `src/converter/temp.ts` `src/converter/time.ts` `src/converter/volume.ts` `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/constants.ts`

### `src/converter/constants.d.ts`

- **Output contribution**: 226 B
- **Imported by** (2 files): `src/constants.d.ts` `src/types/converter.d.ts`

### `src/converter/constants.ts`

- **Output contribution**: 1.7 kB
- **Imported by** (10 files): `src/constants.ts` `src/converter/base.ts` `src/converter/area.ts` `src/converter/data.ts` `src/converter/length.ts` `src/converter/mass.ts` `src/converter/temp.ts` `src/converter/time.ts` `src/converter/volume.ts` `src/converter/Converter.ts`

### `src/converter/data.d.ts`

- **Output contribution**: 421 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/data.ts`

- **Output contribution**: 2.3 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/index.d.ts`

- **Output contribution**: 179 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/converter/Converter.d.ts`

### `src/converter/index.ts`

- **Output contribution**: 249 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/converter/Converter.ts`

### `src/converter/length.d.ts`

- **Output contribution**: 435 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/length.ts`

- **Output contribution**: 2.5 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/mass.d.ts`

- **Output contribution**: 421 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/mass.ts`

- **Output contribution**: 2.3 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/temp.d.ts`

- **Output contribution**: 428 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/temp.ts`

- **Output contribution**: 2.4 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/time.d.ts`

- **Output contribution**: 421 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/time.ts`

- **Output contribution**: 2.5 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/converter/volume.d.ts`

- **Output contribution**: 435 B
- **Imported by** (2 files): `src/converter/Converter.d.ts` `src/types/converter.d.ts`
- **Imports**:
  - `src/types/converter.d.ts`
  - `src/converter/base.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/converter/volume.ts`

- **Output contribution**: 2.9 kB
- **Imported by** (1 files): `src/converter/Converter.ts`
- **Imports**:
  - `src/converter/base.ts`
  - `src/converter/constants.ts`

### `src/date/calculation.d.ts`

- **Output contribution**: 200 B
- **Imported by** (1 files): `src/date/index.d.ts`
- **Imports**:
  - `src/types/date.d.ts`
  - `src/types/index.d.ts`

### `src/date/calculation.ts`

- **Output contribution**: 1.7 kB
- **Imported by** (1 files): `src/date/index.ts`
- **Imports**:
  - `src/date/constants.ts`
  - `src/date/helpers.ts`
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/number/utilities.ts`

### `src/date/constants.d.ts`

- **Output contribution**: 1.6 kB
- **Imported by** (2 files): `src/constants.d.ts` `src/types/date.d.ts`
- **Imports**:
  - `src/types/date.d.ts`

### `src/date/constants.ts`

- **Output contribution**: 6.5 kB
- **Imported by** (5 files): `src/constants.ts` `src/date/calculation.ts` `src/date/utils.ts` `src/date/helpers.ts` `src/date/parse.ts`

### `src/date/greet.d.ts`

- **Output contribution**: 118 B
- **Imported by** (1 files): `src/date/index.d.ts`
- **Imports**:
  - `src/types/date.d.ts`

### `src/date/greet.ts`

- **Output contribution**: 2.1 kB
- **Imported by** (1 files): `src/date/index.ts`
- **Imports**:
  - `src/date/utils.ts`
  - `src/date/guards.ts`

### `src/date/guards.d.ts`

- **Output contribution**: 661 B
- **Imported by** (1 files): `src/guards/index.d.ts`
- **Imports**:
  - `src/types/date.d.ts`
  - `src/types/index.d.ts`

### `src/date/guards.ts`

- **Output contribution**: 5.1 kB
- **Imported by** (8 files): `src/date/utils.ts` `src/date/greet.ts` `src/form/convert.ts` `src/guards/index.ts` `src/date/parse.ts` `src/object/sanitize.ts` `src/object/objectify.ts` `src/utils/miscellaneous.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/date/timezone.ts`
  - `src/guards/non-primitives.ts`
  - `src/guards/specials.ts`
  - `src/number/utilities.ts`

### `src/date/helpers.ts`

- **Output contribution**: 4.4 kB
- **Imported by** (3 files): `src/date/calculation.ts` `src/date/utils.ts` `src/hash/Signet.ts`
- **Imports**:
  - `src/date/constants.ts`
  - `src/guards/primitives.ts`
  - `src/number/utilities.ts`

### `src/date/index.d.ts`

- **Output contribution**: 1.3 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/date/calculation.d.ts`
  - `src/date/greet.d.ts`
  - `src/date/parse.d.ts`
  - `src/date/utils.d.ts`

### `src/date/index.ts`

- **Output contribution**: 1.4 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/date/calculation.ts`
  - `src/date/utils.ts`
  - `src/date/greet.ts`
  - `src/date/parse.ts`

### `src/date/parse.d.ts`

- **Output contribution**: 170 B
- **Imported by** (1 files): `src/date/index.d.ts`
- **Imports**:
  - `src/types/date.d.ts`
  - `src/types/index.d.ts`

### `src/date/parse.ts`

- **Output contribution**: 2.2 kB
- **Imported by** (2 files): `src/date/index.ts` `src/hash/Signet.ts`
- **Imports**:
  - `src/date/constants.ts`
  - `src/date/guards.ts`
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`

### `src/date/seasons.d.ts`

- **Output contribution**: 942 B
- **Imported by** (1 files): `src/constants.d.ts`

### `src/date/seasons.ts`

- **Output contribution**: 4.9 kB
- **Imported by** (1 files): `src/constants.ts`

### `src/date/timezone.d.ts`

- **Output contribution**: 14.9 kB
- **Imported by** (2 files): `src/constants.d.ts` `src/types/date.d.ts`

### `src/date/timezone.ts`

- **Output contribution**: 109.2 kB
- **Imported by** (3 files): `src/constants.ts` `src/date/utils.ts` `src/date/guards.ts`

### `src/date/utils.d.ts`

- **Output contribution**: 1.8 kB
- **Imported by** (1 files): `src/date/index.d.ts`
- **Imports**:
  - `src/types/date.d.ts`
  - `src/types/index.d.ts`

### `src/date/utils.ts`

- **Output contribution**: 15.0 kB
- **Imported by** (2 files): `src/date/greet.ts` `src/date/index.ts`
- **Imports**:
  - `src/date/constants.ts`
  - `src/date/guards.ts`
  - `src/date/helpers.ts`
  - `src/guards/primitives.ts`
  - `src/date/timezone.ts`
  - `src/guards/non-primitives.ts`
  - `src/number/utilities.ts`

### `src/dom/index.d.ts`

- **Output contribution**: 915 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/dom/storage.d.ts`
  - `src/dom/utils.d.ts`
  - `src/form/convert.d.ts`
  - `src/form/guards.d.ts`
  - `src/form/transform.d.ts`
  - `src/dom/query.d.ts`

### `src/dom/index.ts`

- **Output contribution**: 994 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/dom/storage.ts`
  - `src/dom/utils.ts`
  - `src/form/convert.ts`
  - `src/form/transform.ts`
  - `src/form/guards.ts`
  - `src/dom/query.ts`

### `src/dom/query.d.ts`

- **Output contribution**: 573 B
- **Imported by** (2 files): `src/dom/index.d.ts` `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/string.d.ts`

### `src/dom/query.ts`

- **Output contribution**: 5.0 kB
- **Imported by** (3 files): `src/form/transform.ts` `src/dom/index.ts` `src/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/object/sanitize.ts`
  - `src/object/objectify.ts`
  - `src/utils/miscellaneous.ts`

### `src/dom/storage.d.ts`

- **Output contribution**: 615 B
- **Imported by** (1 files): `src/dom/index.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/dom/storage.ts`

- **Output contribution**: 3.1 kB
- **Imported by** (1 files): `src/dom/index.ts`

### `src/dom/utils.d.ts`

- **Output contribution**: 206 B
- **Imported by** (1 files): `src/dom/index.d.ts`

### `src/dom/utils.ts`

- **Output contribution**: 2.4 kB
- **Imported by** (1 files): `src/dom/index.ts`

### `src/form/convert.d.ts`

- **Output contribution**: 227 B
- **Imported by** (1 files): `src/dom/index.d.ts`
- **Imports**:
  - `src/types/form.d.ts`
  - `src/types/object.d.ts`

### `src/form/convert.ts`

- **Output contribution**: 9.4 kB
- **Imported by** (1 files): `src/dom/index.ts`
- **Imports**:
  - `src/date/guards.ts`
  - `src/guards/primitives.ts`
  - `src/form/guards.ts`
  - `src/guards/non-primitives.ts`
  - `src/string/basics.ts`

### `src/form/guards.d.ts`

- **Output contribution**: 638 B
- **Imported by** (1 files): `src/dom/index.d.ts`
- **Imports**:
  - `src/types/form.d.ts`

### `src/form/guards.ts`

- **Output contribution**: 4.0 kB
- **Imported by** (4 files): `src/form/convert.ts` `src/dom/index.ts` `src/object/sanitize.ts` `src/object/objectify.ts`
- **Imports**:
  - `src/guards/index.ts`
  - `src/guards/primitives.ts`

### `src/form/transform.d.ts`

- **Output contribution**: 306 B
- **Imported by** (1 files): `src/dom/index.d.ts`
- **Imports**:
  - `src/types/form.d.ts`

### `src/form/transform.ts`

- **Output contribution**: 2.9 kB
- **Imported by** (1 files): `src/dom/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/object/sanitize.ts`
  - `src/dom/query.ts`

### `src/guards/index.d.ts`

- **Output contribution**: 2.1 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/colors/guards.d.ts`
  - `src/date/guards.d.ts`
  - `src/guards/non-primitives.d.ts`
  - `src/guards/primitives.d.ts`
  - `src/number/guards.d.ts`
  - `src/string/guards.d.ts`
  - `src/array/basics.d.ts`
  - `src/number/prime.d.ts`
  - `src/utils/miscellaneous.d.ts`
  - `src/guards/specials.d.ts`
  - `src/hash/uuid.d.ts`

### `src/guards/index.ts`

- **Output contribution**: 2.3 kB
- **Imported by** (2 files): `src/stylog/Stylog.ts` `src/form/guards.ts`
- **Imports**:
  - `src/colors/guards.ts`
  - `src/date/guards.ts`
  - `src/number/guards.ts`
  - `src/number/prime.ts`
  - `src/array/basics.ts`
  - `src/string/guards.ts`
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/guards/specials.ts`
  - `src/utils/miscellaneous.ts`
  - `src/hash/uuid.ts`

### `src/guards/non-primitives.d.ts`

- **Output contribution**: 1.5 kB
- **Imported by** (1 files): `src/guards/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/guards/non-primitives.ts`

- **Output contribution**: 6.2 kB
- **Imported by** (23 files): `src/date/calculation.ts` `src/date/utils.ts` `src/form/convert.ts` `src/hash/Signet.ts` `src/string/anagram.ts` `src/array/transform.ts` `src/array/calc.ts` `src/array/Finder.ts` `src/object/convert.ts` `src/stylog/helpers.ts` `src/date/guards.ts` `src/string/convert.ts` `src/object/basics.ts` `src/array/basics.ts` `src/guards/index.ts` `src/object/sanitize.ts` `src/object/objectify.ts` `src/guards/specials.ts` `src/string/basics.ts` `src/object/helpers.ts` `src/array/sort.ts` `src/utils/miscellaneous.ts` `src/hash/helpers.ts`
- **Imports**:
  - `src/guards/primitives.ts`

### `src/guards/primitives.d.ts`

- **Output contribution**: 922 B
- **Imported by** (1 files): `src/guards/index.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/guards/primitives.ts`

- **Output contribution**: 4.0 kB
- **Imported by** (41 files): `src/colors/Color.ts` `src/colors/initials.ts` `src/date/calculation.ts` `src/date/utils.ts` `src/form/convert.ts` `src/form/transform.ts` `src/hash/Cipher.ts` `src/hash/Signet.ts` `src/hash/TextCodec.ts` `src/string/anagram.ts` `src/number/basics.ts` `src/number/convert.ts` `src/number/range.ts` `src/array/transform.ts` `src/array/Finder.ts` `src/object/convert.ts` `src/utils/xtras.ts` `src/pluralizer/Pluralizer.ts` `src/stylog/helpers.ts` `src/stylog/Stylog.ts` `src/verbalizer/Verbalizer.ts` `src/string/case.ts` `src/colors/utils.ts` `src/date/guards.ts` `src/string/convert.ts` `src/number/guards.ts` `src/guards/index.ts` `src/date/helpers.ts` `src/date/parse.ts` `src/form/guards.ts` `src/object/sanitize.ts` `src/dom/query.ts` `src/guards/non-primitives.ts` `src/guards/specials.ts` `src/number/utilities.ts` `src/string/basics.ts` `src/array/sort.ts` `src/utils/miscellaneous.ts` `src/hash/utils.ts` `src/hash/helpers.ts` `src/hash/core.ts`

### `src/guards/specials.d.ts`

- **Output contribution**: 869 B
- **Imported by** (2 files): `src/guards/index.d.ts` `src/hash/index.d.ts`
- **Imports**:
  - `src/types/hash.d.ts`
  - `src/types/index.d.ts`

### `src/guards/specials.ts`

- **Output contribution**: 5.2 kB
- **Imported by** (13 files): `src/hash/Cipher.ts` `src/hash/TextCodec.ts` `src/hash/index.ts` `src/number/convert.ts` `src/stylog/Stylog.ts` `src/date/guards.ts` `src/guards/index.ts` `src/date/parse.ts` `src/number/utilities.ts` `src/utils/miscellaneous.ts` `src/hash/utils.ts` `src/hash/helpers.ts` `src/hash/uuid.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/hash/Cipher.d.ts`

- **Output contribution**: 72 B
- **Imported by** (1 files): `src/hash/index.d.ts`

### `src/hash/Cipher.ts`

- **Output contribution**: 4.6 kB
- **Imported by** (1 files): `src/hash/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`
  - `src/hash/utils.ts`
  - `src/hash/helpers.ts`

### `src/hash/Signet.d.ts`

- **Output contribution**: 755 B
- **Imported by** (1 files): `src/hash/index.d.ts`
- **Imports**:
  - `src/types/hash.d.ts`
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/hash/Signet.ts`

- **Output contribution**: 20.8 kB
- **Imported by** (1 files): `src/hash/index.ts`
- **Imports**:
  - `src/date/helpers.ts`
  - `src/date/parse.ts`
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/utils/miscellaneous.ts`
  - `src/hash/utils.ts`
  - `src/hash/helpers.ts`

### `src/hash/TextCodec.d.ts`

- **Output contribution**: 191 B
- **Imported by** (1 files): `src/hash/index.d.ts`

### `src/hash/TextCodec.ts`

- **Output contribution**: 6.3 kB
- **Imported by** (1 files): `src/hash/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`
  - `src/hash/utils.ts`
  - `src/hash/helpers.ts`

### `src/hash/core.d.ts`

- **Output contribution**: 129 B
- **Imported by** (1 files): `src/hash/index.d.ts`

### `src/hash/core.ts`

- **Output contribution**: 5.1 kB
- **Imported by** (2 files): `src/hash/index.ts` `src/hash/uuid.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/hash/utils.ts`
  - `src/hash/helpers.ts`

### `src/hash/helpers.ts`

- **Output contribution**: 9.4 kB
- **Imported by** (6 files): `src/hash/Cipher.ts` `src/hash/Signet.ts` `src/hash/TextCodec.ts` `src/hash/utils.ts` `src/hash/core.ts` `src/hash/uuid.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/guards/specials.ts`
  - `src/hash/utils.ts`

### `src/hash/index.d.ts`

- **Output contribution**: 718 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/hash/Cipher.d.ts`
  - `src/hash/core.d.ts`
  - `src/hash/Signet.d.ts`
  - `src/hash/TextCodec.d.ts`
  - `src/hash/utils.d.ts`
  - `src/string/basics.d.ts`
  - `src/guards/specials.d.ts`
  - `src/hash/uuid.d.ts`

### `src/hash/index.ts`

- **Output contribution**: 750 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/hash/Cipher.ts`
  - `src/hash/Signet.ts`
  - `src/hash/TextCodec.ts`
  - `src/guards/specials.ts`
  - `src/string/basics.ts`
  - `src/hash/utils.ts`
  - `src/hash/core.ts`
  - `src/hash/uuid.ts`

### `src/hash/utils.d.ts`

- **Output contribution**: 1.1 kB
- **Imported by** (1 files): `src/hash/index.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/hash/utils.ts`

- **Output contribution**: 26.1 kB
- **Imported by** (7 files): `src/hash/Cipher.ts` `src/hash/Signet.ts` `src/hash/TextCodec.ts` `src/hash/index.ts` `src/hash/helpers.ts` `src/hash/core.ts` `src/hash/uuid.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`
  - `src/hash/helpers.ts`

### `src/hash/uuid.d.ts`

- **Output contribution**: 785 B
- **Imported by** (2 files): `src/guards/index.d.ts` `src/hash/index.d.ts`
- **Imports**:
  - `src/types/hash.d.ts`
  - `src/types/index.d.ts`

### `src/hash/uuid.ts`

- **Output contribution**: 9.1 kB
- **Imported by** (2 files): `src/hash/index.ts` `src/guards/index.ts`
- **Imports**:
  - `src/guards/specials.ts`
  - `src/hash/utils.ts`
  - `src/hash/helpers.ts`
  - `src/hash/core.ts`

### `src/http-status/HttpStatus.d.ts`

- **Output contribution**: 656 B
- **Imported by** (1 files): `src/http-status/index.d.ts`
- **Imports**:
  - `src/types/http-status.d.ts`
  - `src/types/index.d.ts`

### `src/http-status/HttpStatus.ts`

- **Output contribution**: 6.2 kB
- **Imported by** (1 files): `src/http-status/index.ts`
- **Imports**:
  - `src/http-status/constants.ts`

### `src/http-status/constants.d.ts`

- **Output contribution**: 2.1 kB
- **Imported by** (2 files): `src/constants.d.ts` `src/types/http-status.d.ts`

### `src/http-status/constants.ts`

- **Output contribution**: 46.4 kB
- **Imported by** (2 files): `src/constants.ts` `src/http-status/HttpStatus.ts`

### `src/http-status/index.d.ts`

- **Output contribution**: 68 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/http-status/HttpStatus.d.ts`

### `src/http-status/index.ts`

- **Output contribution**: 86 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/http-status/HttpStatus.ts`

### `src/index.d.ts`

- **Output contribution**: 6.4 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/string/anagram.d.ts`
  - `src/string/convert.d.ts`
  - `src/string/diff.d.ts`
  - `src/string/utilities.d.ts`
  - `src/number/basics.d.ts`
  - `src/number/Currency.d.ts`
  - `src/number/percent.d.ts`
  - `src/number/fibonacci.d.ts`
  - `src/number/convert.d.ts`
  - `src/number/utilities.d.ts`
  - `src/number/range.d.ts`
  - `src/array/calc.d.ts`
  - `src/array/Finder.d.ts`
  - `src/array/sort.d.ts`
  - `src/array/transform.d.ts`
  - `src/object/basics.d.ts`
  - `src/object/objectify.d.ts`
  - `src/object/sanitize.d.ts`
  - `src/object/convert.d.ts`
  - `src/utils/xtras.d.ts`
  - `src/string/basics.d.ts`
  - `src/string/case.d.ts`
  - `src/number/Unit.d.ts`
  - `src/array/basics.d.ts`
  - `src/number/prime.d.ts`
  - `src/utils/miscellaneous.d.ts`
  - `src/dom/query.d.ts`

### `src/index.ts`

- **Output contribution**: 6.7 kB
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/string/anagram.ts`
  - `src/string/utilities.ts`
  - `src/string/diff.ts`
  - `src/number/basics.ts`
  - `src/number/Currency.ts`
  - `src/number/Unit.ts`
  - `src/number/percent.ts`
  - `src/number/fibonacci.ts`
  - `src/number/convert.ts`
  - `src/number/range.ts`
  - `src/array/transform.ts`
  - `src/array/calc.ts`
  - `src/array/Finder.ts`
  - `src/object/convert.ts`
  - `src/utils/xtras.ts`
  - `src/string/case.ts`
  - `src/string/convert.ts`
  - `src/number/prime.ts`
  - `src/object/basics.ts`
  - `src/array/basics.ts`
  - `src/object/sanitize.ts`
  - `src/object/objectify.ts`
  - `src/dom/query.ts`
  - `src/number/utilities.ts`
  - `src/string/basics.ts`
  - `src/array/sort.ts`
  - `src/utils/miscellaneous.ts`

### `src/number/Currency.d.ts`

- **Output contribution**: 468 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`
  - `src/types/index.d.ts`

### `src/number/Currency.ts`

- **Output contribution**: 6.2 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/utilities.ts`

### `src/number/Unit.d.ts`

- **Output contribution**: 793 B
- **Imported by** (2 files): `src/index.d.ts` `src/types/number.d.ts`
- **Imports**:
  - `src/types/number.d.ts`

### `src/number/Unit.ts`

- **Output contribution**: 10.8 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/constants.ts`

### `src/number/basics.d.ts`

- **Output contribution**: 1.0 kB
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`
  - `src/types/index.d.ts`

### `src/number/basics.ts`

- **Output contribution**: 10.3 kB
- **Imported by** (4 files): `src/number/percent.ts` `src/number/range.ts` `src/array/calc.ts` `src/index.ts`
- **Imports**:
  - `src/number/helpers.ts`
  - `src/guards/primitives.ts`
  - `src/number/utilities.ts`

### `src/number/constants.d.ts`

- **Output contribution**: 1.6 kB
- **Imported by** (2 files): `src/constants.d.ts` `src/types/number.d.ts`

### `src/number/constants.ts`

- **Output contribution**: 11.8 kB
- **Imported by** (5 files): `src/constants.ts` `src/number/helpers.ts` `src/number/Unit.ts` `src/number/convert.ts` `src/number/utilities.ts`

### `src/number/convert.d.ts`

- **Output contribution**: 634 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`
  - `src/types/index.d.ts`

### `src/number/convert.ts`

- **Output contribution**: 11.2 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/helpers.ts`
  - `src/number/constants.ts`
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`
  - `src/number/utilities.ts`

### `src/number/fibonacci.d.ts`

- **Output contribution**: 342 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/number/fibonacci.ts`

- **Output contribution**: 2.3 kB
- **Imported by** (1 files): `src/index.ts`

### `src/number/guards.d.ts`

- **Output contribution**: 366 B
- **Imported by** (1 files): `src/guards/index.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/number/guards.ts`

- **Output contribution**: 2.0 kB
- **Imported by** (3 files): `src/number/percent.ts` `src/number/range.ts` `src/guards/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/number/utilities.ts`

### `src/number/helpers.ts`

- **Output contribution**: 1.9 kB
- **Imported by** (3 files): `src/number/basics.ts` `src/number/convert.ts` `src/number/range.ts`
- **Imports**:
  - `src/number/constants.ts`

### `src/number/percent.d.ts`

- **Output contribution**: 132 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`

### `src/number/percent.ts`

- **Output contribution**: 3.0 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/basics.ts`
  - `src/number/guards.ts`

### `src/number/prime.d.ts`

- **Output contribution**: 104 B
- **Imported by** (2 files): `src/guards/index.d.ts` `src/index.d.ts`

### `src/number/prime.ts`

- **Output contribution**: 1.0 kB
- **Imported by** (3 files): `src/number/range.ts` `src/index.ts` `src/guards/index.ts`

### `src/number/range.d.ts`

- **Output contribution**: 205 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`

### `src/number/range.ts`

- **Output contribution**: 2.9 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/number/helpers.ts`
  - `src/number/basics.ts`
  - `src/number/guards.ts`
  - `src/number/prime.ts`
  - `src/array/basics.ts`
  - `src/guards/primitives.ts`
  - `src/utils/miscellaneous.ts`

### `src/number/utilities.d.ts`

- **Output contribution**: 550 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/number.d.ts`
  - `src/types/index.d.ts`

### `src/number/utilities.ts`

- **Output contribution**: 3.9 kB
- **Imported by** (12 files): `src/colors/Color.ts` `src/date/calculation.ts` `src/date/utils.ts` `src/number/basics.ts` `src/number/Currency.ts` `src/number/convert.ts` `src/index.ts` `src/pluralizer/Pluralizer.ts` `src/date/guards.ts` `src/number/guards.ts` `src/date/helpers.ts` `src/object/helpers.ts`
- **Imports**:
  - `src/number/constants.ts`
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`

### `src/object/basics.d.ts`

- **Output contribution**: 742 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/utils.d.ts`

### `src/object/basics.ts`

- **Output contribution**: 5.8 kB
- **Imported by** (2 files): `src/index.ts` `src/array/basics.ts`
- **Imports**:
  - `src/guards/non-primitives.ts`
  - `src/utils/miscellaneous.ts`

### `src/object/convert.d.ts`

- **Output contribution**: 1.2 kB
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`

### `src/object/convert.ts`

- **Output contribution**: 6.9 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/object/countries.d.ts`

- **Output contribution**: 3.8 kB
- **Imported by** (2 files): `src/constants.d.ts` `src/types/object.d.ts`

### `src/object/countries.ts`

- **Output contribution**: 24.2 kB
- **Imported by** (2 files): `src/constants.ts` `src/utils/xtras.ts`

### `src/object/helpers.ts`

- **Output contribution**: 1.1 kB
- **Imported by** (4 files): `src/array/transform.ts` `src/array/calc.ts` `src/array/sort.ts` `src/utils/miscellaneous.ts`
- **Imports**:
  - `src/guards/non-primitives.ts`
  - `src/number/utilities.ts`

### `src/object/objectify.d.ts`

- **Output contribution**: 1.3 kB
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/object/objectify.ts`

- **Output contribution**: 9.2 kB
- **Imported by** (2 files): `src/index.ts` `src/dom/query.ts`
- **Imports**:
  - `src/date/guards.ts`
  - `src/form/guards.ts`
  - `src/object/sanitize.ts`
  - `src/guards/non-primitives.ts`
  - `src/utils/miscellaneous.ts`

### `src/object/sanitize.d.ts`

- **Output contribution**: 1.0 kB
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/object/sanitize.ts`

- **Output contribution**: 9.8 kB
- **Imported by** (4 files): `src/form/transform.ts` `src/index.ts` `src/object/objectify.ts` `src/dom/query.ts`
- **Imports**:
  - `src/date/guards.ts`
  - `src/guards/primitives.ts`
  - `src/form/guards.ts`
  - `src/guards/non-primitives.ts`
  - `src/string/basics.ts`

### `src/paginator.d.ts`

- **Output contribution**: 48 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/utils/Paginator.d.ts`

### `src/paginator.ts`

- **Output contribution**: 49 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/utils/Paginator.ts`

### `src/pluralizer/Pluralizer.d.ts`

- **Output contribution**: 308 B
- **Imported by** (1 files): `src/pluralizer/index.d.ts`
- **Imports**:
  - `src/types/pluralizer.d.ts`

### `src/pluralizer/Pluralizer.ts`

- **Output contribution**: 10.6 kB
- **Imported by** (1 files): `src/pluralizer/index.ts`
- **Imports**:
  - `src/pluralizer/rules.ts`
  - `src/guards/primitives.ts`
  - `src/number/utilities.ts`

### `src/pluralizer/index.d.ts`

- **Output contribution**: 67 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/pluralizer/Pluralizer.d.ts`

### `src/pluralizer/index.ts`

- **Output contribution**: 115 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/pluralizer/Pluralizer.ts`

### `src/pluralizer/rules.ts`

- **Output contribution**: 8.5 kB
- **Imported by** (1 files): `src/pluralizer/Pluralizer.ts`

### `src/string/anagram.d.ts`

- **Output contribution**: 142 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/string.d.ts`

### `src/string/anagram.ts`

- **Output contribution**: 2.5 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/string/basics.d.ts`

- **Output contribution**: 373 B
- **Imported by** (2 files): `src/hash/index.d.ts` `src/index.d.ts`
- **Imports**:
  - `src/types/string.d.ts`

### `src/string/basics.ts`

- **Output contribution**: 5.5 kB
- **Imported by** (5 files): `src/form/convert.ts` `src/hash/index.ts` `src/index.ts` `src/string/convert.ts` `src/object/sanitize.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/string/case.d.ts`

- **Output contribution**: 1.9 kB
- **Imported by** (2 files): `src/change-case.d.ts` `src/index.d.ts`
- **Imports**:
  - `src/types/string.d.ts`

### `src/string/case.ts`

- **Output contribution**: 23.8 kB
- **Imported by** (2 files): `src/change-case.ts` `src/index.ts`
- **Imports**:
  - `src/string/constants.ts`
  - `src/guards/primitives.ts`

### `src/string/constants.d.ts`

- **Output contribution**: 98 B
- **Imported by** (2 files): `src/constants.d.ts` `src/types/string.d.ts`

### `src/string/constants.ts`

- **Output contribution**: 1.8 kB
- **Imported by** (2 files): `src/constants.ts` `src/string/case.ts`

### `src/string/convert.d.ts`

- **Output contribution**: 715 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/string.d.ts`

### `src/string/convert.ts`

- **Output contribution**: 18.8 kB
- **Imported by** (2 files): `src/index.ts` `src/string/guards.ts`
- **Imports**:
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/string/basics.ts`

### `src/string/diff.d.ts`

- **Output contribution**: 218 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/string.d.ts`

### `src/string/diff.ts`

- **Output contribution**: 6.5 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/string/helpers.ts`

### `src/string/guards.d.ts`

- **Output contribution**: 301 B
- **Imported by** (1 files): `src/guards/index.d.ts`

### `src/string/guards.ts`

- **Output contribution**: 1.6 kB
- **Imported by** (1 files): `src/guards/index.ts`
- **Imports**:
  - `src/string/convert.ts`

### `src/string/helpers.ts`

- **Output contribution**: 2.4 kB
- **Imported by** (1 files): `src/string/diff.ts`
- **Imports**:
  - `src/string/utilities.ts`

### `src/string/utilities.d.ts`

- **Output contribution**: 176 B
- **Imported by** (1 files): `src/index.d.ts`

### `src/string/utilities.ts`

- **Output contribution**: 2.0 kB
- **Imported by** (2 files): `src/string/helpers.ts` `src/index.ts`

### `src/stylog/Stylog.d.ts`

- **Output contribution**: 583 B
- **Imported by** (2 files): `src/stylog/index.d.ts` `src/types/stylog.d.ts`
- **Imports**:
  - `src/types/stylog.d.ts`

### `src/stylog/Stylog.ts`

- **Output contribution**: 25.8 kB
- **Imported by** (1 files): `src/stylog/index.ts`
- **Imports**:
  - `src/stylog/console.log.ts`
  - `src/stylog/constants.ts`
  - `src/stylog/helpers.ts`
  - `src/stylog/utils.ts`
  - `src/colors/convert.ts`
  - `src/colors/css-colors.ts`
  - `src/colors/helpers.ts`
  - `src/colors/guards.ts`
  - `src/guards/index.ts`
  - `src/guards/primitives.ts`
  - `src/guards/specials.ts`

### `src/stylog/console.log.ts`

- **Output contribution**: 184 B
- **Imported by** (1 files): `src/stylog/Stylog.ts`

### `src/stylog/constants.d.ts`

- **Output contribution**: 557 B
- **Imported by** (1 files): `src/types/stylog.d.ts`

### `src/stylog/constants.ts`

- **Output contribution**: 2.7 kB
- **Imported by** (3 files): `src/stylog/helpers.ts` `src/stylog/utils.ts` `src/stylog/Stylog.ts`

### `src/stylog/helpers.ts`

- **Output contribution**: 1.8 kB
- **Imported by** (1 files): `src/stylog/Stylog.ts`
- **Imports**:
  - `src/stylog/constants.ts`
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`

### `src/stylog/index.d.ts`

- **Output contribution**: 155 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/stylog/utils.d.ts`
  - `src/stylog/Stylog.d.ts`

### `src/stylog/index.ts`

- **Output contribution**: 162 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/stylog/utils.ts`
  - `src/stylog/Stylog.ts`

### `src/stylog/utils.d.ts`

- **Output contribution**: 446 B
- **Imported by** (1 files): `src/stylog/index.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`
  - `src/types/stylog.d.ts`

### `src/stylog/utils.ts`

- **Output contribution**: 2.4 kB
- **Imported by** (2 files): `src/stylog/Stylog.ts` `src/stylog/index.ts`
- **Imports**:
  - `src/stylog/constants.ts`
  - `src/colors/convert.ts`
  - `src/colors/guards.ts`

### `src/types/array.d.ts`

- **Output contribution**: 1.6 kB
- **Imported by** (5 files): `src/array/Finder.d.ts` `src/array/sort.d.ts` `src/array/transform.d.ts` `src/types/form.d.ts` `src/array/basics.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/types/array.ts`

- **Output contribution**: 5.7 kB
- **Imported by**: (entry point or orphan)

### `src/types/colors.d.ts`

- **Output contribution**: 2.2 kB
- **Imported by** (8 files): `src/colors/convert.d.ts` `src/colors/initials.d.ts` `src/colors/random.d.ts` `src/colors/utils.d.ts` `src/colors/guards.d.ts` `src/stylog/utils.d.ts` `src/colors/Color.d.ts` `src/types/stylog.d.ts`
- **Imports**:
  - `src/colors/Color.d.ts`
  - `src/colors/css-colors.d.ts`
  - `src/types/index.d.ts`

### `src/types/colors.ts`

- **Output contribution**: 5.6 kB
- **Imported by**: (entry point or orphan)

### `src/types/converter.d.ts`

- **Output contribution**: 1.9 kB
- **Imported by** (9 files): `src/converter/Converter.d.ts` `src/converter/data.d.ts` `src/converter/length.d.ts` `src/converter/mass.d.ts` `src/converter/temp.d.ts` `src/converter/time.d.ts` `src/converter/volume.d.ts` `src/converter/base.d.ts` `src/converter/area.d.ts`
- **Imports**:
  - `src/converter/data.d.ts`
  - `src/converter/length.d.ts`
  - `src/converter/mass.d.ts`
  - `src/converter/temp.d.ts`
  - `src/converter/time.d.ts`
  - `src/converter/volume.d.ts`
  - `src/converter/base.d.ts`
  - `src/converter/area.d.ts`
  - `src/converter/constants.d.ts`
  - `src/types/utils.d.ts`

### `src/types/converter.ts`

- **Output contribution**: 2.9 kB
- **Imported by**: (entry point or orphan)

### `src/types/date.d.ts`

- **Output contribution**: 8.7 kB
- **Imported by** (8 files): `src/date/calculation.d.ts` `src/date/greet.d.ts` `src/date/parse.d.ts` `src/date/utils.d.ts` `src/date/guards.d.ts` `src/types/hash.d.ts` `src/date/constants.d.ts` `src/types/index.d.ts`
- **Imports**:
  - `src/date/constants.d.ts`
  - `src/date/timezone.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/number.d.ts`
  - `src/types/index.d.ts`

### `src/types/date.ts`

- **Output contribution**: 17.0 kB
- **Imported by**: (entry point or orphan)

### `src/types/form.d.ts`

- **Output contribution**: 1.2 kB
- **Imported by** (3 files): `src/form/convert.d.ts` `src/form/guards.d.ts` `src/form/transform.d.ts`
- **Imports**:
  - `src/types/array.d.ts`
  - `src/types/object.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`
  - `src/types/string.d.ts`

### `src/types/form.ts`

- **Output contribution**: 4.5 kB
- **Imported by**: (entry point or orphan)

### `src/types/hash.d.ts`

- **Output contribution**: 1.9 kB
- **Imported by** (3 files): `src/hash/Signet.d.ts` `src/guards/specials.d.ts` `src/hash/uuid.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/date.d.ts`
  - `src/types/index.d.ts`

### `src/types/hash.ts`

- **Output contribution**: 5.6 kB
- **Imported by**: (entry point or orphan)

### `src/types/http-status.d.ts`

- **Output contribution**: 1.2 kB
- **Imported by** (1 files): `src/http-status/HttpStatus.d.ts`
- **Imports**:
  - `src/http-status/constants.d.ts`
  - `src/types/utils.d.ts`

### `src/types/http-status.ts`

- **Output contribution**: 2.9 kB
- **Imported by**: (entry point or orphan)

### `src/types/index.d.ts`

- **Output contribution**: 2.8 kB
- **Imported by** (46 files): `src/converter/Converter.d.ts` `src/date/calculation.d.ts` `src/date/parse.d.ts` `src/date/utils.d.ts` `src/dom/storage.d.ts` `src/date/guards.d.ts` `src/guards/non-primitives.d.ts` `src/guards/primitives.d.ts` `src/number/guards.d.ts` `src/hash/Signet.d.ts` `src/hash/utils.d.ts` `src/http-status/HttpStatus.d.ts` `src/number/basics.d.ts` `src/number/Currency.d.ts` `src/number/fibonacci.d.ts` `src/number/convert.d.ts` `src/number/utilities.d.ts` `src/array/calc.d.ts` `src/array/Finder.d.ts` `src/array/sort.d.ts` `src/array/transform.d.ts` `src/object/objectify.d.ts` `src/object/sanitize.d.ts` `src/utils/Paginator.d.ts` `src/types/colors.d.ts` `src/converter/data.d.ts` `src/converter/length.d.ts` `src/converter/mass.d.ts` `src/converter/temp.d.ts` `src/converter/time.d.ts` `src/converter/volume.d.ts` `src/converter/base.d.ts` `src/converter/area.d.ts` `src/types/array.d.ts` `src/types/form.d.ts` `src/types/hash.d.ts` `src/types/object.d.ts` `src/types/utils.d.ts` `src/types/number.d.ts` `src/types/date.d.ts` `src/array/basics.d.ts` `src/utils/miscellaneous.d.ts` `src/types/pluralizer.d.ts` `src/types/string.d.ts` `src/guards/specials.d.ts` `src/hash/uuid.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/date.d.ts`

### `src/types/index.ts`

- **Output contribution**: 7.6 kB
- **Imported by**: (entry point or orphan)

### `src/types/number.d.ts`

- **Output contribution**: 3.3 kB
- **Imported by** (11 files): `src/colors/initials.d.ts` `src/colors/utils.d.ts` `src/number/basics.d.ts` `src/number/Currency.d.ts` `src/number/percent.d.ts` `src/number/convert.d.ts` `src/number/utilities.d.ts` `src/number/range.d.ts` `src/colors/Color.d.ts` `src/number/Unit.d.ts` `src/types/date.d.ts`
- **Imports**:
  - `src/number/constants.d.ts`
  - `src/number/Unit.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`

### `src/types/number.ts`

- **Output contribution**: 10.4 kB
- **Imported by**: (entry point or orphan)

### `src/types/object.d.ts`

- **Output contribution**: 7.2 kB
- **Imported by** (28 files): `src/form/convert.d.ts` `src/guards/non-primitives.d.ts` `src/hash/Signet.d.ts` `src/array/calc.d.ts` `src/array/Finder.d.ts` `src/array/sort.d.ts` `src/array/transform.d.ts` `src/object/basics.d.ts` `src/object/objectify.d.ts` `src/object/sanitize.d.ts` `src/object/convert.d.ts` `src/utils/xtras.d.ts` `src/converter/data.d.ts` `src/converter/length.d.ts` `src/converter/mass.d.ts` `src/converter/temp.d.ts` `src/converter/time.d.ts` `src/converter/volume.d.ts` `src/converter/area.d.ts` `src/types/array.d.ts` `src/types/form.d.ts` `src/types/hash.d.ts` `src/types/utils.d.ts` `src/types/index.d.ts` `src/array/basics.d.ts` `src/utils/miscellaneous.d.ts` `src/dom/query.d.ts` `src/types/string.d.ts`
- **Imports**:
  - `src/object/countries.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`

### `src/types/object.ts`

- **Output contribution**: 15.0 kB
- **Imported by**: (entry point or orphan)

### `src/types/pluralizer.d.ts`

- **Output contribution**: 227 B
- **Imported by** (1 files): `src/pluralizer/Pluralizer.d.ts`
- **Imports**:
  - `src/types/index.d.ts`

### `src/types/pluralizer.ts`

- **Output contribution**: 805 B
- **Imported by**: (entry point or orphan)

### `src/types/string.d.ts`

- **Output contribution**: 6.3 kB
- **Imported by** (7 files): `src/string/anagram.d.ts` `src/string/convert.d.ts` `src/string/diff.d.ts` `src/string/basics.d.ts` `src/string/case.d.ts` `src/types/form.d.ts` `src/dom/query.d.ts`
- **Imports**:
  - `src/string/constants.d.ts`
  - `src/types/object.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`

### `src/types/string.ts`

- **Output contribution**: 22.6 kB
- **Imported by**: (entry point or orphan)

### `src/types/stylog.d.ts`

- **Output contribution**: 689 B
- **Imported by** (2 files): `src/stylog/utils.d.ts` `src/stylog/Stylog.d.ts`
- **Imports**:
  - `src/types/colors.d.ts`
  - `src/stylog/constants.d.ts`
  - `src/stylog/Stylog.d.ts`

### `src/types/stylog.ts`

- **Output contribution**: 1.5 kB
- **Imported by**: (entry point or orphan)

### `src/types/utils.d.ts`

- **Output contribution**: 8.0 kB
- **Imported by** (10 files): `src/object/basics.d.ts` `src/utils/Paginator.d.ts` `src/types/converter.d.ts` `src/types/form.d.ts` `src/types/http-status.d.ts` `src/types/object.d.ts` `src/types/number.d.ts` `src/types/date.d.ts` `src/utils/miscellaneous.d.ts` `src/types/string.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/index.d.ts`

### `src/types/utils.ts`

- **Output contribution**: 29.2 kB
- **Imported by**: (entry point or orphan)

### `src/types/verbalizer.d.ts`

- **Output contribution**: 113 B
- **Imported by**: (entry point or orphan)

### `src/types/verbalizer.ts`

- **Output contribution**: 334 B
- **Imported by**: (entry point or orphan)

### `src/utils/Paginator.d.ts`

- **Output contribution**: 523 B
- **Imported by** (1 files): `src/paginator.d.ts`
- **Imports**:
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`

### `src/utils/Paginator.ts`

- **Output contribution**: 7.8 kB
- **Imported by** (1 files): `src/paginator.ts`

### `src/utils/miscellaneous.d.ts`

- **Output contribution**: 1.7 kB
- **Imported by** (2 files): `src/guards/index.d.ts` `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`
  - `src/types/utils.d.ts`
  - `src/types/index.d.ts`

### `src/utils/miscellaneous.ts`

- **Output contribution**: 15.1 kB
- **Imported by** (8 files): `src/hash/Signet.ts` `src/number/range.ts` `src/array/transform.ts` `src/index.ts` `src/object/basics.ts` `src/guards/index.ts` `src/object/objectify.ts` `src/dom/query.ts`
- **Imports**:
  - `src/date/guards.ts`
  - `src/guards/primitives.ts`
  - `src/guards/non-primitives.ts`
  - `src/guards/specials.ts`
  - `src/object/helpers.ts`
  - `src/array/sort.ts`

### `src/utils/xtras.d.ts`

- **Output contribution**: 124 B
- **Imported by** (1 files): `src/index.d.ts`
- **Imports**:
  - `src/types/object.d.ts`

### `src/utils/xtras.ts`

- **Output contribution**: 2.3 kB
- **Imported by** (1 files): `src/index.ts`
- **Imports**:
  - `src/object/countries.ts`
  - `src/guards/primitives.ts`

### `src/verbalizer/Verbalizer.d.ts`

- **Output contribution**: 241 B
- **Imported by** (1 files): `src/verbalizer/index.d.ts`

### `src/verbalizer/Verbalizer.ts`

- **Output contribution**: 9.2 kB
- **Imported by** (1 files): `src/verbalizer/index.ts`
- **Imports**:
  - `src/verbalizer/rules.ts`
  - `src/guards/primitives.ts`

### `src/verbalizer/index.d.ts`

- **Output contribution**: 67 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/verbalizer/Verbalizer.d.ts`

### `src/verbalizer/index.ts`

- **Output contribution**: 115 B
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `src/verbalizer/Verbalizer.ts`

### `src/verbalizer/rules.ts`

- **Output contribution**: 5.8 kB
- **Imported by** (1 files): `src/verbalizer/Verbalizer.ts`

## Raw Data for Searching

This section contains raw, grep-friendly data. Use these patterns:
- `[MODULE:` - Find all modules
- `[OUTPUT_BYTES:` - Find output contribution for each module
- `[IMPORT:` - Find all import relationships
- `[IMPORTED_BY:` - Find reverse dependencies
- `[ENTRY:` - Find entry points
- `[CHUNK:` - Find code-split chunks

### All Modules

```
[MODULE: src/date/timezone.ts]
[OUTPUT_BYTES: src/date/timezone.ts = 111849 bytes]
[MODULE: src/http-status/constants.ts]
[OUTPUT_BYTES: src/http-status/constants.ts = 47471 bytes]
[MODULE: src/types/utils.ts]
[OUTPUT_BYTES: src/types/utils.ts = 29879 bytes]
[MODULE: src/colors/Color.ts]
[OUTPUT_BYTES: src/colors/Color.ts = 27767 bytes]
[MODULE: src/hash/utils.ts]
[OUTPUT_BYTES: src/hash/utils.ts = 26703 bytes]
[MODULE: src/stylog/Stylog.ts]
[OUTPUT_BYTES: src/stylog/Stylog.ts = 26457 bytes]
[MODULE: src/object/countries.ts]
[OUTPUT_BYTES: src/object/countries.ts = 24734 bytes]
[MODULE: src/string/case.ts]
[OUTPUT_BYTES: src/string/case.ts = 24391 bytes]
[MODULE: src/types/string.ts]
[OUTPUT_BYTES: src/types/string.ts = 23108 bytes]
[MODULE: src/hash/Signet.ts]
[OUTPUT_BYTES: src/hash/Signet.ts = 21297 bytes]
[MODULE: src/string/convert.ts]
[OUTPUT_BYTES: src/string/convert.ts = 19277 bytes]
[MODULE: src/types/date.ts]
[OUTPUT_BYTES: src/types/date.ts = 17452 bytes]
[MODULE: src/utils/miscellaneous.ts]
[OUTPUT_BYTES: src/utils/miscellaneous.ts = 15444 bytes]
[MODULE: src/date/utils.ts]
[OUTPUT_BYTES: src/date/utils.ts = 15328 bytes]
[MODULE: src/types/object.ts]
[OUTPUT_BYTES: src/types/object.ts = 15309 bytes]
[MODULE: src/date/timezone.d.ts]
[OUTPUT_BYTES: src/date/timezone.d.ts = 15249 bytes]
[MODULE: src/colors/convert.ts]
[OUTPUT_BYTES: src/colors/convert.ts = 14025 bytes]
[MODULE: src/number/constants.ts]
[OUTPUT_BYTES: src/number/constants.ts = 12124 bytes]
[MODULE: src/number/convert.ts]
[OUTPUT_BYTES: src/number/convert.ts = 11455 bytes]
[MODULE: src/array/Finder.ts]
[OUTPUT_BYTES: src/array/Finder.ts = 11188 bytes]
[MODULE: src/number/Unit.ts]
[OUTPUT_BYTES: src/number/Unit.ts = 11060 bytes]
[MODULE: src/pluralizer/Pluralizer.ts]
[OUTPUT_BYTES: src/pluralizer/Pluralizer.ts = 10805 bytes]
[MODULE: src/types/number.ts]
[OUTPUT_BYTES: src/types/number.ts = 10687 bytes]
[MODULE: src/number/basics.ts]
[OUTPUT_BYTES: src/number/basics.ts = 10597 bytes]
[MODULE: src/object/sanitize.ts]
[OUTPUT_BYTES: src/object/sanitize.ts = 10061 bytes]
[MODULE: src/hash/helpers.ts]
[OUTPUT_BYTES: src/hash/helpers.ts = 9652 bytes]
[MODULE: src/form/convert.ts]
[OUTPUT_BYTES: src/form/convert.ts = 9628 bytes]
[MODULE: src/verbalizer/Verbalizer.ts]
[OUTPUT_BYTES: src/verbalizer/Verbalizer.ts = 9464 bytes]
[MODULE: src/object/objectify.ts]
[OUTPUT_BYTES: src/object/objectify.ts = 9384 bytes]
[MODULE: src/hash/uuid.ts]
[OUTPUT_BYTES: src/hash/uuid.ts = 9293 bytes]
[MODULE: src/types/date.d.ts]
[OUTPUT_BYTES: src/types/date.d.ts = 8954 bytes]
[MODULE: src/pluralizer/rules.ts]
[OUTPUT_BYTES: src/pluralizer/rules.ts = 8744 bytes]
[MODULE: src/types/utils.d.ts]
[OUTPUT_BYTES: src/types/utils.d.ts = 8229 bytes]
[MODULE: src/utils/Paginator.ts]
[OUTPUT_BYTES: src/utils/Paginator.ts = 7953 bytes]
[MODULE: src/types/index.ts]
[OUTPUT_BYTES: src/types/index.ts = 7743 bytes]
[MODULE: src/types/object.d.ts]
[OUTPUT_BYTES: src/types/object.d.ts = 7356 bytes]
[MODULE: src/converter/base.ts]
[OUTPUT_BYTES: src/converter/base.ts = 7273 bytes]
[MODULE: src/object/convert.ts]
[OUTPUT_BYTES: src/object/convert.ts = 7115 bytes]
[MODULE: src/index.ts]
[OUTPUT_BYTES: src/index.ts = 6896 bytes]
[MODULE: src/date/constants.ts]
[OUTPUT_BYTES: src/date/constants.ts = 6672 bytes]
[MODULE: src/string/diff.ts]
[OUTPUT_BYTES: src/string/diff.ts = 6637 bytes]
[MODULE: src/index.d.ts]
[OUTPUT_BYTES: src/index.d.ts = 6546 bytes]
[MODULE: src/array/transform.ts]
[OUTPUT_BYTES: src/array/transform.ts = 6514 bytes]
[MODULE: src/types/string.d.ts]
[OUTPUT_BYTES: src/types/string.d.ts = 6447 bytes]
[MODULE: src/hash/TextCodec.ts]
[OUTPUT_BYTES: src/hash/TextCodec.ts = 6439 bytes]
[MODULE: src/http-status/HttpStatus.ts]
[OUTPUT_BYTES: src/http-status/HttpStatus.ts = 6385 bytes]
[MODULE: src/guards/non-primitives.ts]
[OUTPUT_BYTES: src/guards/non-primitives.ts = 6370 bytes]
[MODULE: src/number/Currency.ts]
[OUTPUT_BYTES: src/number/Currency.ts = 6329 bytes]
[MODULE: src/colors/utils.ts]
[OUTPUT_BYTES: src/colors/utils.ts = 6142 bytes]
[MODULE: src/verbalizer/rules.ts]
[OUTPUT_BYTES: src/verbalizer/rules.ts = 5961 bytes]
[MODULE: src/object/basics.ts]
[OUTPUT_BYTES: src/object/basics.ts = 5902 bytes]
[MODULE: src/types/array.ts]
[OUTPUT_BYTES: src/types/array.ts = 5825 bytes]
[MODULE: src/types/colors.ts]
[OUTPUT_BYTES: src/types/colors.ts = 5775 bytes]
[MODULE: src/types/hash.ts]
[OUTPUT_BYTES: src/types/hash.ts = 5760 bytes]
[MODULE: src/array/sort.ts]
[OUTPUT_BYTES: src/array/sort.ts = 5657 bytes]
[MODULE: src/string/basics.ts]
[OUTPUT_BYTES: src/string/basics.ts = 5608 bytes]
[MODULE: src/guards/specials.ts]
[OUTPUT_BYTES: src/guards/specials.ts = 5275 bytes]
[MODULE: src/date/guards.ts]
[OUTPUT_BYTES: src/date/guards.ts = 5220 bytes]
[MODULE: src/hash/core.ts]
[OUTPUT_BYTES: src/hash/core.ts = 5213 bytes]
[MODULE: src/dom/query.ts]
[OUTPUT_BYTES: src/dom/query.ts = 5090 bytes]
[MODULE: src/date/seasons.ts]
[OUTPUT_BYTES: src/date/seasons.ts = 5059 bytes]
[MODULE: src/array/calc.ts]
[OUTPUT_BYTES: src/array/calc.ts = 4903 bytes]
[MODULE: src/hash/Cipher.ts]
[OUTPUT_BYTES: src/hash/Cipher.ts = 4720 bytes]
[MODULE: src/types/form.ts]
[OUTPUT_BYTES: src/types/form.ts = 4575 bytes]
[MODULE: src/date/helpers.ts]
[OUTPUT_BYTES: src/date/helpers.ts = 4488 bytes]
[MODULE: src/form/guards.ts]
[OUTPUT_BYTES: src/form/guards.ts = 4132 bytes]
[MODULE: src/guards/primitives.ts]
[OUTPUT_BYTES: src/guards/primitives.ts = 4105 bytes]
[MODULE: src/colors/initials.ts]
[OUTPUT_BYTES: src/colors/initials.ts = 4059 bytes]
[MODULE: src/number/utilities.ts]
[OUTPUT_BYTES: src/number/utilities.ts = 4026 bytes]
[MODULE: src/object/countries.d.ts]
[OUTPUT_BYTES: src/object/countries.d.ts = 3883 bytes]
[MODULE: src/colors/css-colors.ts]
[OUTPUT_BYTES: src/colors/css-colors.ts = 3732 bytes]
[MODULE: src/types/number.d.ts]
[OUTPUT_BYTES: src/types/number.d.ts = 3402 bytes]
[MODULE: src/array/basics.ts]
[OUTPUT_BYTES: src/array/basics.ts = 3300 bytes]
[MODULE: src/dom/storage.ts]
[OUTPUT_BYTES: src/dom/storage.ts = 3167 bytes]
[MODULE: src/colors/guards.ts]
[OUTPUT_BYTES: src/colors/guards.ts = 3078 bytes]
[MODULE: src/number/percent.ts]
[OUTPUT_BYTES: src/number/percent.ts = 3058 bytes]
[MODULE: src/colors/random.ts]
[OUTPUT_BYTES: src/colors/random.ts = 3053 bytes]
[MODULE: src/converter/volume.ts]
[OUTPUT_BYTES: src/converter/volume.ts = 2990 bytes]
[MODULE: src/types/converter.ts]
[OUTPUT_BYTES: src/types/converter.ts = 2955 bytes]
[MODULE: src/types/http-status.ts]
[OUTPUT_BYTES: src/types/http-status.ts = 2952 bytes]
[MODULE: src/number/range.ts]
[OUTPUT_BYTES: src/number/range.ts = 2948 bytes]
[MODULE: src/form/transform.ts]
[OUTPUT_BYTES: src/form/transform.ts = 2934 bytes]
[MODULE: src/types/index.d.ts]
[OUTPUT_BYTES: src/types/index.d.ts = 2875 bytes]
[MODULE: src/colors/helpers.ts]
[OUTPUT_BYTES: src/colors/helpers.ts = 2859 bytes]
[MODULE: src/stylog/constants.ts]
[OUTPUT_BYTES: src/stylog/constants.ts = 2808 bytes]
[MODULE: src/converter/area.ts]
[OUTPUT_BYTES: src/converter/area.ts = 2681 bytes]
[MODULE: src/string/anagram.ts]
[OUTPUT_BYTES: src/string/anagram.ts = 2557 bytes]
[MODULE: src/converter/length.ts]
[OUTPUT_BYTES: src/converter/length.ts = 2526 bytes]
[MODULE: src/converter/time.ts]
[OUTPUT_BYTES: src/converter/time.ts = 2521 bytes]
[MODULE: src/string/helpers.ts]
[OUTPUT_BYTES: src/string/helpers.ts = 2472 bytes]
[MODULE: src/stylog/utils.ts]
[OUTPUT_BYTES: src/stylog/utils.ts = 2467 bytes]
[MODULE: src/dom/utils.ts]
[OUTPUT_BYTES: src/dom/utils.ts = 2457 bytes]
[MODULE: src/converter/temp.ts]
[OUTPUT_BYTES: src/converter/temp.ts = 2426 bytes]
[MODULE: src/number/fibonacci.ts]
[OUTPUT_BYTES: src/number/fibonacci.ts = 2396 bytes]
[MODULE: src/guards/index.ts]
[OUTPUT_BYTES: src/guards/index.ts = 2392 bytes]
[MODULE: src/converter/data.ts]
[OUTPUT_BYTES: src/converter/data.ts = 2350 bytes]
[MODULE: src/utils/xtras.ts]
[OUTPUT_BYTES: src/utils/xtras.ts = 2335 bytes]
[MODULE: src/converter/mass.ts]
[OUTPUT_BYTES: src/converter/mass.ts = 2317 bytes]
[MODULE: src/date/parse.ts]
[OUTPUT_BYTES: src/date/parse.ts = 2279 bytes]
[MODULE: src/types/colors.d.ts]
[OUTPUT_BYTES: src/types/colors.d.ts = 2242 bytes]
[MODULE: src/converter/Converter.ts]
[OUTPUT_BYTES: src/converter/Converter.ts = 2188 bytes]
[MODULE: src/guards/index.d.ts]
[OUTPUT_BYTES: src/guards/index.d.ts = 2163 bytes]
[MODULE: src/date/greet.ts]
[OUTPUT_BYTES: src/date/greet.ts = 2154 bytes]
[MODULE: src/http-status/constants.d.ts]
[OUTPUT_BYTES: src/http-status/constants.d.ts = 2130 bytes]
[MODULE: src/number/guards.ts]
[OUTPUT_BYTES: src/number/guards.ts = 2037 bytes]
[MODULE: src/string/utilities.ts]
[OUTPUT_BYTES: src/string/utilities.ts = 2019 bytes]
[MODULE: src/types/converter.d.ts]
[OUTPUT_BYTES: src/types/converter.d.ts = 1995 bytes]
[MODULE: src/types/hash.d.ts]
[OUTPUT_BYTES: src/types/hash.d.ts = 1980 bytes]
[MODULE: src/number/helpers.ts]
[OUTPUT_BYTES: src/number/helpers.ts = 1970 bytes]
[MODULE: src/string/case.d.ts]
[OUTPUT_BYTES: src/string/case.d.ts = 1925 bytes]
[MODULE: src/date/utils.d.ts]
[OUTPUT_BYTES: src/date/utils.d.ts = 1836 bytes]
[MODULE: src/string/constants.ts]
[OUTPUT_BYTES: src/string/constants.ts = 1827 bytes]
[MODULE: src/stylog/helpers.ts]
[OUTPUT_BYTES: src/stylog/helpers.ts = 1805 bytes]
[MODULE: src/utils/miscellaneous.d.ts]
[OUTPUT_BYTES: src/utils/miscellaneous.d.ts = 1773 bytes]
[MODULE: src/converter/constants.ts]
[OUTPUT_BYTES: src/converter/constants.ts = 1724 bytes]
[MODULE: src/date/calculation.ts]
[OUTPUT_BYTES: src/date/calculation.ts = 1699 bytes]
[MODULE: src/date/constants.d.ts]
[OUTPUT_BYTES: src/date/constants.d.ts = 1678 bytes]
[MODULE: src/string/guards.ts]
[OUTPUT_BYTES: src/string/guards.ts = 1668 bytes]
[MODULE: src/types/array.d.ts]
[OUTPUT_BYTES: src/types/array.d.ts = 1598 bytes]
[MODULE: src/number/constants.d.ts]
[OUTPUT_BYTES: src/number/constants.d.ts = 1591 bytes]
[MODULE: src/types/stylog.ts]
[OUTPUT_BYTES: src/types/stylog.ts = 1579 bytes]
[MODULE: src/colors/convert.d.ts]
[OUTPUT_BYTES: src/colors/convert.d.ts = 1578 bytes]
[MODULE: src/guards/non-primitives.d.ts]
[OUTPUT_BYTES: src/guards/non-primitives.d.ts = 1522 bytes]
[MODULE: src/date/index.ts]
[OUTPUT_BYTES: src/date/index.ts = 1393 bytes]
[MODULE: src/date/index.d.ts]
[OUTPUT_BYTES: src/date/index.d.ts = 1300 bytes]
[MODULE: src/object/objectify.d.ts]
[OUTPUT_BYTES: src/object/objectify.d.ts = 1298 bytes]
[MODULE: src/types/form.d.ts]
[OUTPUT_BYTES: src/types/form.d.ts = 1267 bytes]
[MODULE: src/types/http-status.d.ts]
[OUTPUT_BYTES: src/types/http-status.d.ts = 1214 bytes]
[MODULE: src/constants.ts]
[OUTPUT_BYTES: src/constants.ts = 1200 bytes]
[MODULE: src/object/convert.d.ts]
[OUTPUT_BYTES: src/object/convert.d.ts = 1191 bytes]
[MODULE: src/constants.d.ts]
[OUTPUT_BYTES: src/constants.d.ts = 1154 bytes]
[MODULE: src/colors/Color.d.ts]
[OUTPUT_BYTES: src/colors/Color.d.ts = 1129 bytes]
[MODULE: src/object/helpers.ts]
[OUTPUT_BYTES: src/object/helpers.ts = 1103 bytes]
[MODULE: src/hash/utils.d.ts]
[OUTPUT_BYTES: src/hash/utils.d.ts = 1091 bytes]
[MODULE: src/array/transform.d.ts]
[OUTPUT_BYTES: src/array/transform.d.ts = 1069 bytes]
[MODULE: src/number/basics.d.ts]
[OUTPUT_BYTES: src/number/basics.d.ts = 1064 bytes]
[MODULE: src/object/sanitize.d.ts]
[OUTPUT_BYTES: src/object/sanitize.d.ts = 1049 bytes]
[MODULE: src/number/prime.ts]
[OUTPUT_BYTES: src/number/prime.ts = 1025 bytes]
[MODULE: src/dom/index.ts]
[OUTPUT_BYTES: src/dom/index.ts = 994 bytes]
[MODULE: src/array/Finder.d.ts]
[OUTPUT_BYTES: src/array/Finder.d.ts = 980 bytes]
[MODULE: src/date/seasons.d.ts]
[OUTPUT_BYTES: src/date/seasons.d.ts = 942 bytes]
[MODULE: src/guards/primitives.d.ts]
[OUTPUT_BYTES: src/guards/primitives.d.ts = 922 bytes]
[MODULE: src/dom/index.d.ts]
[OUTPUT_BYTES: src/dom/index.d.ts = 915 bytes]
[MODULE: src/array/calc.d.ts]
[OUTPUT_BYTES: src/array/calc.d.ts = 913 bytes]
[MODULE: src/guards/specials.d.ts]
[OUTPUT_BYTES: src/guards/specials.d.ts = 869 bytes]
[MODULE: src/types/pluralizer.ts]
[OUTPUT_BYTES: src/types/pluralizer.ts = 805 bytes]
[MODULE: src/number/Unit.d.ts]
[OUTPUT_BYTES: src/number/Unit.d.ts = 793 bytes]
[MODULE: src/hash/uuid.d.ts]
[OUTPUT_BYTES: src/hash/uuid.d.ts = 785 bytes]
[MODULE: src/colors/index.ts]
[OUTPUT_BYTES: src/colors/index.ts = 777 bytes]
[MODULE: src/colors/constants.ts]
[OUTPUT_BYTES: src/colors/constants.ts = 760 bytes]
[MODULE: src/hash/Signet.d.ts]
[OUTPUT_BYTES: src/hash/Signet.d.ts = 755 bytes]
[MODULE: src/converter/Converter.d.ts]
[OUTPUT_BYTES: src/converter/Converter.d.ts = 754 bytes]
[MODULE: src/hash/index.ts]
[OUTPUT_BYTES: src/hash/index.ts = 750 bytes]
[MODULE: src/object/basics.d.ts]
[OUTPUT_BYTES: src/object/basics.d.ts = 742 bytes]
[MODULE: src/colors/index.d.ts]
[OUTPUT_BYTES: src/colors/index.d.ts = 728 bytes]
[MODULE: src/hash/index.d.ts]
[OUTPUT_BYTES: src/hash/index.d.ts = 718 bytes]
[MODULE: src/string/convert.d.ts]
[OUTPUT_BYTES: src/string/convert.d.ts = 715 bytes]
[MODULE: src/types/stylog.d.ts]
[OUTPUT_BYTES: src/types/stylog.d.ts = 689 bytes]
[MODULE: src/colors/css-colors.d.ts]
[OUTPUT_BYTES: src/colors/css-colors.d.ts = 684 bytes]
[MODULE: src/date/guards.d.ts]
[OUTPUT_BYTES: src/date/guards.d.ts = 661 bytes]
[MODULE: src/converter/base.d.ts]
[OUTPUT_BYTES: src/converter/base.d.ts = 659 bytes]
[MODULE: src/http-status/HttpStatus.d.ts]
[OUTPUT_BYTES: src/http-status/HttpStatus.d.ts = 656 bytes]
[MODULE: src/form/guards.d.ts]
[OUTPUT_BYTES: src/form/guards.d.ts = 638 bytes]
[MODULE: src/number/convert.d.ts]
[OUTPUT_BYTES: src/number/convert.d.ts = 634 bytes]
[MODULE: src/dom/storage.d.ts]
[OUTPUT_BYTES: src/dom/storage.d.ts = 615 bytes]
[MODULE: src/array/basics.d.ts]
[OUTPUT_BYTES: src/array/basics.d.ts = 598 bytes]
[MODULE: src/stylog/Stylog.d.ts]
[OUTPUT_BYTES: src/stylog/Stylog.d.ts = 583 bytes]
[MODULE: src/dom/query.d.ts]
[OUTPUT_BYTES: src/dom/query.d.ts = 573 bytes]
[MODULE: src/colors/utils.d.ts]
[OUTPUT_BYTES: src/colors/utils.d.ts = 558 bytes]
[MODULE: src/stylog/constants.d.ts]
[OUTPUT_BYTES: src/stylog/constants.d.ts = 557 bytes]
[MODULE: src/number/utilities.d.ts]
[OUTPUT_BYTES: src/number/utilities.d.ts = 550 bytes]
[MODULE: src/utils/Paginator.d.ts]
[OUTPUT_BYTES: src/utils/Paginator.d.ts = 523 bytes]
[MODULE: src/colors/guards.d.ts]
[OUTPUT_BYTES: src/colors/guards.d.ts = 481 bytes]
[MODULE: src/number/Currency.d.ts]
[OUTPUT_BYTES: src/number/Currency.d.ts = 468 bytes]
[MODULE: src/array/sort.d.ts]
[OUTPUT_BYTES: src/array/sort.d.ts = 467 bytes]
[MODULE: src/stylog/utils.d.ts]
[OUTPUT_BYTES: src/stylog/utils.d.ts = 446 bytes]
[MODULE: src/converter/length.d.ts]
[OUTPUT_BYTES: src/converter/length.d.ts = 435 bytes]
[MODULE: src/converter/volume.d.ts]
[OUTPUT_BYTES: src/converter/volume.d.ts = 435 bytes]
[MODULE: src/converter/temp.d.ts]
[OUTPUT_BYTES: src/converter/temp.d.ts = 428 bytes]
[MODULE: src/converter/data.d.ts]
[OUTPUT_BYTES: src/converter/data.d.ts = 421 bytes]
[MODULE: src/converter/mass.d.ts]
[OUTPUT_BYTES: src/converter/mass.d.ts = 421 bytes]
[MODULE: src/converter/time.d.ts]
[OUTPUT_BYTES: src/converter/time.d.ts = 421 bytes]
[MODULE: src/converter/area.d.ts]
[OUTPUT_BYTES: src/converter/area.d.ts = 421 bytes]
[MODULE: src/string/basics.d.ts]
[OUTPUT_BYTES: src/string/basics.d.ts = 373 bytes]
[MODULE: src/number/guards.d.ts]
[OUTPUT_BYTES: src/number/guards.d.ts = 366 bytes]
[MODULE: src/number/fibonacci.d.ts]
[OUTPUT_BYTES: src/number/fibonacci.d.ts = 342 bytes]
[MODULE: src/types/verbalizer.ts]
[OUTPUT_BYTES: src/types/verbalizer.ts = 334 bytes]
[MODULE: src/pluralizer/Pluralizer.d.ts]
[OUTPUT_BYTES: src/pluralizer/Pluralizer.d.ts = 308 bytes]
[MODULE: src/form/transform.d.ts]
[OUTPUT_BYTES: src/form/transform.d.ts = 306 bytes]
[MODULE: src/string/guards.d.ts]
[OUTPUT_BYTES: src/string/guards.d.ts = 301 bytes]
[MODULE: src/colors/initials.d.ts]
[OUTPUT_BYTES: src/colors/initials.d.ts = 286 bytes]
[MODULE: src/colors/random.d.ts]
[OUTPUT_BYTES: src/colors/random.d.ts = 284 bytes]
[MODULE: src/converter/index.ts]
[OUTPUT_BYTES: src/converter/index.ts = 249 bytes]
[MODULE: src/verbalizer/Verbalizer.d.ts]
[OUTPUT_BYTES: src/verbalizer/Verbalizer.d.ts = 241 bytes]
[MODULE: src/change-case.ts]
[OUTPUT_BYTES: src/change-case.ts = 238 bytes]
[MODULE: src/form/convert.d.ts]
[OUTPUT_BYTES: src/form/convert.d.ts = 227 bytes]
[MODULE: src/types/pluralizer.d.ts]
[OUTPUT_BYTES: src/types/pluralizer.d.ts = 227 bytes]
[MODULE: src/converter/constants.d.ts]
[OUTPUT_BYTES: src/converter/constants.d.ts = 226 bytes]
[MODULE: src/change-case.d.ts]
[OUTPUT_BYTES: src/change-case.d.ts = 223 bytes]
[MODULE: src/string/diff.d.ts]
[OUTPUT_BYTES: src/string/diff.d.ts = 218 bytes]
[MODULE: src/dom/utils.d.ts]
[OUTPUT_BYTES: src/dom/utils.d.ts = 206 bytes]
[MODULE: src/number/range.d.ts]
[OUTPUT_BYTES: src/number/range.d.ts = 205 bytes]
[MODULE: src/date/calculation.d.ts]
[OUTPUT_BYTES: src/date/calculation.d.ts = 200 bytes]
[MODULE: src/hash/TextCodec.d.ts]
[OUTPUT_BYTES: src/hash/TextCodec.d.ts = 191 bytes]
[MODULE: src/stylog/console.log.ts]
[OUTPUT_BYTES: src/stylog/console.log.ts = 184 bytes]
[MODULE: src/converter/index.d.ts]
[OUTPUT_BYTES: src/converter/index.d.ts = 179 bytes]
[MODULE: src/string/utilities.d.ts]
[OUTPUT_BYTES: src/string/utilities.d.ts = 176 bytes]
[MODULE: src/date/parse.d.ts]
[OUTPUT_BYTES: src/date/parse.d.ts = 170 bytes]
[MODULE: src/stylog/index.ts]
[OUTPUT_BYTES: src/stylog/index.ts = 162 bytes]
[MODULE: src/stylog/index.d.ts]
[OUTPUT_BYTES: src/stylog/index.d.ts = 155 bytes]
[MODULE: src/string/anagram.d.ts]
[OUTPUT_BYTES: src/string/anagram.d.ts = 142 bytes]
[MODULE: src/number/percent.d.ts]
[OUTPUT_BYTES: src/number/percent.d.ts = 132 bytes]
[MODULE: src/hash/core.d.ts]
[OUTPUT_BYTES: src/hash/core.d.ts = 129 bytes]
[MODULE: src/utils/xtras.d.ts]
[OUTPUT_BYTES: src/utils/xtras.d.ts = 124 bytes]
[MODULE: src/date/greet.d.ts]
[OUTPUT_BYTES: src/date/greet.d.ts = 118 bytes]
[MODULE: src/colors/constants.d.ts]
[OUTPUT_BYTES: src/colors/constants.d.ts = 115 bytes]
[MODULE: src/pluralizer/index.ts]
[OUTPUT_BYTES: src/pluralizer/index.ts = 115 bytes]
[MODULE: src/verbalizer/index.ts]
[OUTPUT_BYTES: src/verbalizer/index.ts = 115 bytes]
[MODULE: src/types/verbalizer.d.ts]
[OUTPUT_BYTES: src/types/verbalizer.d.ts = 113 bytes]
[MODULE: src/number/prime.d.ts]
[OUTPUT_BYTES: src/number/prime.d.ts = 104 bytes]
[MODULE: src/string/constants.d.ts]
[OUTPUT_BYTES: src/string/constants.d.ts = 98 bytes]
[MODULE: src/http-status/index.ts]
[OUTPUT_BYTES: src/http-status/index.ts = 86 bytes]
[MODULE: src/hash/Cipher.d.ts]
[OUTPUT_BYTES: src/hash/Cipher.d.ts = 72 bytes]
[MODULE: src/http-status/index.d.ts]
[OUTPUT_BYTES: src/http-status/index.d.ts = 68 bytes]
[MODULE: src/pluralizer/index.d.ts]
[OUTPUT_BYTES: src/pluralizer/index.d.ts = 67 bytes]
[MODULE: src/verbalizer/index.d.ts]
[OUTPUT_BYTES: src/verbalizer/index.d.ts = 67 bytes]
[MODULE: src/paginator.ts]
[OUTPUT_BYTES: src/paginator.ts = 49 bytes]
[MODULE: src/paginator.d.ts]
[OUTPUT_BYTES: src/paginator.d.ts = 48 bytes]
```

### All Imports

```
[IMPORT: src/array/Finder.d.ts -> src/types/array.d.ts]
[IMPORT: src/array/Finder.d.ts -> src/types/object.d.ts]
[IMPORT: src/array/Finder.d.ts -> src/types/index.d.ts]
[IMPORT: src/array/Finder.ts -> src/guards/primitives.ts]
[IMPORT: src/array/Finder.ts -> src/guards/non-primitives.ts]
[IMPORT: src/array/basics.d.ts -> src/types/array.d.ts]
[IMPORT: src/array/basics.d.ts -> src/types/object.d.ts]
[IMPORT: src/array/basics.d.ts -> src/types/index.d.ts]
[IMPORT: src/array/basics.ts -> src/object/basics.ts]
[IMPORT: src/array/basics.ts -> src/guards/non-primitives.ts]
[IMPORT: src/array/calc.d.ts -> src/types/object.d.ts]
[IMPORT: src/array/calc.d.ts -> src/types/index.d.ts]
[IMPORT: src/array/calc.ts -> src/number/basics.ts]
[IMPORT: src/array/calc.ts -> src/array/transform.ts]
[IMPORT: src/array/calc.ts -> src/guards/non-primitives.ts]
[IMPORT: src/array/calc.ts -> src/object/helpers.ts]
[IMPORT: src/array/sort.d.ts -> src/types/array.d.ts]
[IMPORT: src/array/sort.d.ts -> src/types/object.d.ts]
[IMPORT: src/array/sort.d.ts -> src/types/index.d.ts]
[IMPORT: src/array/sort.ts -> src/guards/primitives.ts]
[IMPORT: src/array/sort.ts -> src/guards/non-primitives.ts]
[IMPORT: src/array/sort.ts -> src/object/helpers.ts]
[IMPORT: src/array/transform.d.ts -> src/types/array.d.ts]
[IMPORT: src/array/transform.d.ts -> src/types/object.d.ts]
[IMPORT: src/array/transform.d.ts -> src/types/index.d.ts]
[IMPORT: src/array/transform.ts -> src/guards/primitives.ts]
[IMPORT: src/array/transform.ts -> src/guards/non-primitives.ts]
[IMPORT: src/array/transform.ts -> src/object/helpers.ts]
[IMPORT: src/array/transform.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/change-case.d.ts -> src/string/case.d.ts]
[IMPORT: src/change-case.ts -> src/string/case.ts]
[IMPORT: src/colors/Color.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/Color.d.ts -> src/types/number.d.ts]
[IMPORT: src/colors/Color.ts -> src/colors/random.ts]
[IMPORT: src/colors/Color.ts -> src/colors/utils.ts]
[IMPORT: src/colors/Color.ts -> src/colors/convert.ts]
[IMPORT: src/colors/Color.ts -> src/colors/css-colors.ts]
[IMPORT: src/colors/Color.ts -> src/colors/guards.ts]
[IMPORT: src/colors/Color.ts -> src/guards/primitives.ts]
[IMPORT: src/colors/Color.ts -> src/number/utilities.ts]
[IMPORT: src/colors/convert.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/convert.ts -> src/colors/utils.ts]
[IMPORT: src/colors/convert.ts -> src/colors/helpers.ts]
[IMPORT: src/colors/convert.ts -> src/colors/guards.ts]
[IMPORT: src/colors/guards.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/guards.ts -> src/colors/css-colors.ts]
[IMPORT: src/colors/guards.ts -> src/colors/helpers.ts]
[IMPORT: src/colors/index.d.ts -> src/colors/convert.d.ts]
[IMPORT: src/colors/index.d.ts -> src/colors/initials.d.ts]
[IMPORT: src/colors/index.d.ts -> src/colors/random.d.ts]
[IMPORT: src/colors/index.d.ts -> src/colors/utils.d.ts]
[IMPORT: src/colors/index.d.ts -> src/colors/Color.d.ts]
[IMPORT: src/colors/index.ts -> src/colors/random.ts]
[IMPORT: src/colors/index.ts -> src/colors/Color.ts]
[IMPORT: src/colors/index.ts -> src/colors/initials.ts]
[IMPORT: src/colors/index.ts -> src/colors/utils.ts]
[IMPORT: src/colors/index.ts -> src/colors/convert.ts]
[IMPORT: src/colors/initials.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/initials.d.ts -> src/types/number.d.ts]
[IMPORT: src/colors/initials.ts -> src/colors/constants.ts]
[IMPORT: src/colors/initials.ts -> src/colors/utils.ts]
[IMPORT: src/colors/initials.ts -> src/colors/helpers.ts]
[IMPORT: src/colors/initials.ts -> src/guards/primitives.ts]
[IMPORT: src/colors/random.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/random.ts -> src/colors/utils.ts]
[IMPORT: src/colors/random.ts -> src/colors/convert.ts]
[IMPORT: src/colors/random.ts -> src/colors/helpers.ts]
[IMPORT: src/colors/utils.d.ts -> src/types/colors.d.ts]
[IMPORT: src/colors/utils.d.ts -> src/types/number.d.ts]
[IMPORT: src/colors/utils.ts -> src/colors/helpers.ts]
[IMPORT: src/colors/utils.ts -> src/colors/guards.ts]
[IMPORT: src/colors/utils.ts -> src/guards/primitives.ts]
[IMPORT: src/constants.d.ts -> src/date/seasons.d.ts]
[IMPORT: src/constants.d.ts -> src/colors/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/string/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/converter/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/http-status/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/colors/css-colors.d.ts]
[IMPORT: src/constants.d.ts -> src/date/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/date/timezone.d.ts]
[IMPORT: src/constants.d.ts -> src/number/constants.d.ts]
[IMPORT: src/constants.d.ts -> src/object/countries.d.ts]
[IMPORT: src/constants.ts -> src/date/seasons.ts]
[IMPORT: src/constants.ts -> src/string/constants.ts]
[IMPORT: src/constants.ts -> src/http-status/constants.ts]
[IMPORT: src/constants.ts -> src/converter/constants.ts]
[IMPORT: src/constants.ts -> src/colors/constants.ts]
[IMPORT: src/constants.ts -> src/date/constants.ts]
[IMPORT: src/constants.ts -> src/number/constants.ts]
[IMPORT: src/constants.ts -> src/object/countries.ts]
[IMPORT: src/constants.ts -> src/colors/css-colors.ts]
[IMPORT: src/constants.ts -> src/date/timezone.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/data.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/length.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/mass.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/temp.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/time.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/volume.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/converter/area.d.ts]
[IMPORT: src/converter/Converter.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/base.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/area.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/data.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/length.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/mass.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/temp.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/time.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/volume.ts]
[IMPORT: src/converter/Converter.ts -> src/converter/constants.ts]
[IMPORT: src/converter/area.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/area.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/area.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/area.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/area.ts -> src/converter/base.ts]
[IMPORT: src/converter/area.ts -> src/converter/constants.ts]
[IMPORT: src/converter/base.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/base.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/base.ts -> src/converter/constants.ts]
[IMPORT: src/converter/data.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/data.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/data.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/data.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/data.ts -> src/converter/base.ts]
[IMPORT: src/converter/data.ts -> src/converter/constants.ts]
[IMPORT: src/converter/index.d.ts -> src/converter/Converter.d.ts]
[IMPORT: src/converter/index.ts -> src/converter/Converter.ts]
[IMPORT: src/converter/length.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/length.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/length.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/length.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/length.ts -> src/converter/base.ts]
[IMPORT: src/converter/length.ts -> src/converter/constants.ts]
[IMPORT: src/converter/mass.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/mass.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/mass.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/mass.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/mass.ts -> src/converter/base.ts]
[IMPORT: src/converter/mass.ts -> src/converter/constants.ts]
[IMPORT: src/converter/temp.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/temp.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/temp.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/temp.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/temp.ts -> src/converter/base.ts]
[IMPORT: src/converter/temp.ts -> src/converter/constants.ts]
[IMPORT: src/converter/time.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/time.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/time.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/time.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/time.ts -> src/converter/base.ts]
[IMPORT: src/converter/time.ts -> src/converter/constants.ts]
[IMPORT: src/converter/volume.d.ts -> src/types/converter.d.ts]
[IMPORT: src/converter/volume.d.ts -> src/converter/base.d.ts]
[IMPORT: src/converter/volume.d.ts -> src/types/object.d.ts]
[IMPORT: src/converter/volume.d.ts -> src/types/index.d.ts]
[IMPORT: src/converter/volume.ts -> src/converter/base.ts]
[IMPORT: src/converter/volume.ts -> src/converter/constants.ts]
[IMPORT: src/date/calculation.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/calculation.d.ts -> src/types/index.d.ts]
[IMPORT: src/date/calculation.ts -> src/date/constants.ts]
[IMPORT: src/date/calculation.ts -> src/date/helpers.ts]
[IMPORT: src/date/calculation.ts -> src/guards/primitives.ts]
[IMPORT: src/date/calculation.ts -> src/guards/non-primitives.ts]
[IMPORT: src/date/calculation.ts -> src/number/utilities.ts]
[IMPORT: src/date/constants.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/greet.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/greet.ts -> src/date/utils.ts]
[IMPORT: src/date/greet.ts -> src/date/guards.ts]
[IMPORT: src/date/guards.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/guards.d.ts -> src/types/index.d.ts]
[IMPORT: src/date/guards.ts -> src/guards/primitives.ts]
[IMPORT: src/date/guards.ts -> src/date/timezone.ts]
[IMPORT: src/date/guards.ts -> src/guards/non-primitives.ts]
[IMPORT: src/date/guards.ts -> src/guards/specials.ts]
[IMPORT: src/date/guards.ts -> src/number/utilities.ts]
[IMPORT: src/date/helpers.ts -> src/date/constants.ts]
[IMPORT: src/date/helpers.ts -> src/guards/primitives.ts]
[IMPORT: src/date/helpers.ts -> src/number/utilities.ts]
[IMPORT: src/date/index.d.ts -> src/date/calculation.d.ts]
[IMPORT: src/date/index.d.ts -> src/date/greet.d.ts]
[IMPORT: src/date/index.d.ts -> src/date/parse.d.ts]
[IMPORT: src/date/index.d.ts -> src/date/utils.d.ts]
[IMPORT: src/date/index.ts -> src/date/calculation.ts]
[IMPORT: src/date/index.ts -> src/date/utils.ts]
[IMPORT: src/date/index.ts -> src/date/greet.ts]
[IMPORT: src/date/index.ts -> src/date/parse.ts]
[IMPORT: src/date/parse.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/parse.d.ts -> src/types/index.d.ts]
[IMPORT: src/date/parse.ts -> src/date/constants.ts]
[IMPORT: src/date/parse.ts -> src/date/guards.ts]
[IMPORT: src/date/parse.ts -> src/guards/primitives.ts]
[IMPORT: src/date/parse.ts -> src/guards/specials.ts]
[IMPORT: src/date/utils.d.ts -> src/types/date.d.ts]
[IMPORT: src/date/utils.d.ts -> src/types/index.d.ts]
[IMPORT: src/date/utils.ts -> src/date/constants.ts]
[IMPORT: src/date/utils.ts -> src/date/guards.ts]
[IMPORT: src/date/utils.ts -> src/date/helpers.ts]
[IMPORT: src/date/utils.ts -> src/guards/primitives.ts]
[IMPORT: src/date/utils.ts -> src/date/timezone.ts]
[IMPORT: src/date/utils.ts -> src/guards/non-primitives.ts]
[IMPORT: src/date/utils.ts -> src/number/utilities.ts]
[IMPORT: src/dom/index.d.ts -> src/dom/storage.d.ts]
[IMPORT: src/dom/index.d.ts -> src/dom/utils.d.ts]
[IMPORT: src/dom/index.d.ts -> src/form/convert.d.ts]
[IMPORT: src/dom/index.d.ts -> src/form/guards.d.ts]
[IMPORT: src/dom/index.d.ts -> src/form/transform.d.ts]
[IMPORT: src/dom/index.d.ts -> src/dom/query.d.ts]
[IMPORT: src/dom/index.ts -> src/dom/storage.ts]
[IMPORT: src/dom/index.ts -> src/dom/utils.ts]
[IMPORT: src/dom/index.ts -> src/form/convert.ts]
[IMPORT: src/dom/index.ts -> src/form/transform.ts]
[IMPORT: src/dom/index.ts -> src/form/guards.ts]
[IMPORT: src/dom/index.ts -> src/dom/query.ts]
[IMPORT: src/dom/query.d.ts -> src/types/object.d.ts]
[IMPORT: src/dom/query.d.ts -> src/types/string.d.ts]
[IMPORT: src/dom/query.ts -> src/guards/primitives.ts]
[IMPORT: src/dom/query.ts -> src/object/sanitize.ts]
[IMPORT: src/dom/query.ts -> src/object/objectify.ts]
[IMPORT: src/dom/query.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/dom/storage.d.ts -> src/types/index.d.ts]
[IMPORT: src/form/convert.d.ts -> src/types/form.d.ts]
[IMPORT: src/form/convert.d.ts -> src/types/object.d.ts]
[IMPORT: src/form/convert.ts -> src/date/guards.ts]
[IMPORT: src/form/convert.ts -> src/guards/primitives.ts]
[IMPORT: src/form/convert.ts -> src/form/guards.ts]
[IMPORT: src/form/convert.ts -> src/guards/non-primitives.ts]
[IMPORT: src/form/convert.ts -> src/string/basics.ts]
[IMPORT: src/form/guards.d.ts -> src/types/form.d.ts]
[IMPORT: src/form/guards.ts -> src/guards/index.ts]
[IMPORT: src/form/guards.ts -> src/guards/primitives.ts]
[IMPORT: src/form/transform.d.ts -> src/types/form.d.ts]
[IMPORT: src/form/transform.ts -> src/guards/primitives.ts]
[IMPORT: src/form/transform.ts -> src/object/sanitize.ts]
[IMPORT: src/form/transform.ts -> src/dom/query.ts]
[IMPORT: src/guards/index.d.ts -> src/colors/guards.d.ts]
[IMPORT: src/guards/index.d.ts -> src/date/guards.d.ts]
[IMPORT: src/guards/index.d.ts -> src/guards/non-primitives.d.ts]
[IMPORT: src/guards/index.d.ts -> src/guards/primitives.d.ts]
[IMPORT: src/guards/index.d.ts -> src/number/guards.d.ts]
[IMPORT: src/guards/index.d.ts -> src/string/guards.d.ts]
[IMPORT: src/guards/index.d.ts -> src/array/basics.d.ts]
[IMPORT: src/guards/index.d.ts -> src/number/prime.d.ts]
[IMPORT: src/guards/index.d.ts -> src/utils/miscellaneous.d.ts]
[IMPORT: src/guards/index.d.ts -> src/guards/specials.d.ts]
[IMPORT: src/guards/index.d.ts -> src/hash/uuid.d.ts]
[IMPORT: src/guards/index.ts -> src/colors/guards.ts]
[IMPORT: src/guards/index.ts -> src/date/guards.ts]
[IMPORT: src/guards/index.ts -> src/number/guards.ts]
[IMPORT: src/guards/index.ts -> src/number/prime.ts]
[IMPORT: src/guards/index.ts -> src/array/basics.ts]
[IMPORT: src/guards/index.ts -> src/string/guards.ts]
[IMPORT: src/guards/index.ts -> src/guards/primitives.ts]
[IMPORT: src/guards/index.ts -> src/guards/non-primitives.ts]
[IMPORT: src/guards/index.ts -> src/guards/specials.ts]
[IMPORT: src/guards/index.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/guards/index.ts -> src/hash/uuid.ts]
[IMPORT: src/guards/non-primitives.d.ts -> src/types/object.d.ts]
[IMPORT: src/guards/non-primitives.d.ts -> src/types/index.d.ts]
[IMPORT: src/guards/non-primitives.ts -> src/guards/primitives.ts]
[IMPORT: src/guards/primitives.d.ts -> src/types/index.d.ts]
[IMPORT: src/guards/specials.d.ts -> src/types/hash.d.ts]
[IMPORT: src/guards/specials.d.ts -> src/types/index.d.ts]
[IMPORT: src/guards/specials.ts -> src/guards/primitives.ts]
[IMPORT: src/guards/specials.ts -> src/guards/non-primitives.ts]
[IMPORT: src/hash/Cipher.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/Cipher.ts -> src/guards/specials.ts]
[IMPORT: src/hash/Cipher.ts -> src/hash/utils.ts]
[IMPORT: src/hash/Cipher.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/Signet.d.ts -> src/types/hash.d.ts]
[IMPORT: src/hash/Signet.d.ts -> src/types/object.d.ts]
[IMPORT: src/hash/Signet.d.ts -> src/types/index.d.ts]
[IMPORT: src/hash/Signet.ts -> src/date/helpers.ts]
[IMPORT: src/hash/Signet.ts -> src/date/parse.ts]
[IMPORT: src/hash/Signet.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/Signet.ts -> src/guards/non-primitives.ts]
[IMPORT: src/hash/Signet.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/hash/Signet.ts -> src/hash/utils.ts]
[IMPORT: src/hash/Signet.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/TextCodec.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/TextCodec.ts -> src/guards/specials.ts]
[IMPORT: src/hash/TextCodec.ts -> src/hash/utils.ts]
[IMPORT: src/hash/TextCodec.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/core.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/core.ts -> src/hash/utils.ts]
[IMPORT: src/hash/core.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/helpers.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/helpers.ts -> src/guards/non-primitives.ts]
[IMPORT: src/hash/helpers.ts -> src/guards/specials.ts]
[IMPORT: src/hash/helpers.ts -> src/hash/utils.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/Cipher.d.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/core.d.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/Signet.d.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/TextCodec.d.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/utils.d.ts]
[IMPORT: src/hash/index.d.ts -> src/string/basics.d.ts]
[IMPORT: src/hash/index.d.ts -> src/guards/specials.d.ts]
[IMPORT: src/hash/index.d.ts -> src/hash/uuid.d.ts]
[IMPORT: src/hash/index.ts -> src/hash/Cipher.ts]
[IMPORT: src/hash/index.ts -> src/hash/Signet.ts]
[IMPORT: src/hash/index.ts -> src/hash/TextCodec.ts]
[IMPORT: src/hash/index.ts -> src/guards/specials.ts]
[IMPORT: src/hash/index.ts -> src/string/basics.ts]
[IMPORT: src/hash/index.ts -> src/hash/utils.ts]
[IMPORT: src/hash/index.ts -> src/hash/core.ts]
[IMPORT: src/hash/index.ts -> src/hash/uuid.ts]
[IMPORT: src/hash/utils.d.ts -> src/types/index.d.ts]
[IMPORT: src/hash/utils.ts -> src/guards/primitives.ts]
[IMPORT: src/hash/utils.ts -> src/guards/specials.ts]
[IMPORT: src/hash/utils.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/uuid.d.ts -> src/types/hash.d.ts]
[IMPORT: src/hash/uuid.d.ts -> src/types/index.d.ts]
[IMPORT: src/hash/uuid.ts -> src/guards/specials.ts]
[IMPORT: src/hash/uuid.ts -> src/hash/utils.ts]
[IMPORT: src/hash/uuid.ts -> src/hash/helpers.ts]
[IMPORT: src/hash/uuid.ts -> src/hash/core.ts]
[IMPORT: src/http-status/HttpStatus.d.ts -> src/types/http-status.d.ts]
[IMPORT: src/http-status/HttpStatus.d.ts -> src/types/index.d.ts]
[IMPORT: src/http-status/HttpStatus.ts -> src/http-status/constants.ts]
[IMPORT: src/http-status/index.d.ts -> src/http-status/HttpStatus.d.ts]
[IMPORT: src/http-status/index.ts -> src/http-status/HttpStatus.ts]
[IMPORT: src/index.d.ts -> src/string/anagram.d.ts]
[IMPORT: src/index.d.ts -> src/string/convert.d.ts]
[IMPORT: src/index.d.ts -> src/string/diff.d.ts]
[IMPORT: src/index.d.ts -> src/string/utilities.d.ts]
[IMPORT: src/index.d.ts -> src/number/basics.d.ts]
[IMPORT: src/index.d.ts -> src/number/Currency.d.ts]
[IMPORT: src/index.d.ts -> src/number/percent.d.ts]
[IMPORT: src/index.d.ts -> src/number/fibonacci.d.ts]
[IMPORT: src/index.d.ts -> src/number/convert.d.ts]
[IMPORT: src/index.d.ts -> src/number/utilities.d.ts]
[IMPORT: src/index.d.ts -> src/number/range.d.ts]
[IMPORT: src/index.d.ts -> src/array/calc.d.ts]
[IMPORT: src/index.d.ts -> src/array/Finder.d.ts]
[IMPORT: src/index.d.ts -> src/array/sort.d.ts]
[IMPORT: src/index.d.ts -> src/array/transform.d.ts]
[IMPORT: src/index.d.ts -> src/object/basics.d.ts]
[IMPORT: src/index.d.ts -> src/object/objectify.d.ts]
[IMPORT: src/index.d.ts -> src/object/sanitize.d.ts]
[IMPORT: src/index.d.ts -> src/object/convert.d.ts]
[IMPORT: src/index.d.ts -> src/utils/xtras.d.ts]
[IMPORT: src/index.d.ts -> src/string/basics.d.ts]
[IMPORT: src/index.d.ts -> src/string/case.d.ts]
[IMPORT: src/index.d.ts -> src/number/Unit.d.ts]
[IMPORT: src/index.d.ts -> src/array/basics.d.ts]
[IMPORT: src/index.d.ts -> src/number/prime.d.ts]
[IMPORT: src/index.d.ts -> src/utils/miscellaneous.d.ts]
[IMPORT: src/index.d.ts -> src/dom/query.d.ts]
[IMPORT: src/index.ts -> src/string/anagram.ts]
[IMPORT: src/index.ts -> src/string/utilities.ts]
[IMPORT: src/index.ts -> src/string/diff.ts]
[IMPORT: src/index.ts -> src/number/basics.ts]
[IMPORT: src/index.ts -> src/number/Currency.ts]
[IMPORT: src/index.ts -> src/number/Unit.ts]
[IMPORT: src/index.ts -> src/number/percent.ts]
[IMPORT: src/index.ts -> src/number/fibonacci.ts]
[IMPORT: src/index.ts -> src/number/convert.ts]
[IMPORT: src/index.ts -> src/number/range.ts]
[IMPORT: src/index.ts -> src/array/transform.ts]
[IMPORT: src/index.ts -> src/array/calc.ts]
[IMPORT: src/index.ts -> src/array/Finder.ts]
[IMPORT: src/index.ts -> src/object/convert.ts]
[IMPORT: src/index.ts -> src/utils/xtras.ts]
[IMPORT: src/index.ts -> src/string/case.ts]
[IMPORT: src/index.ts -> src/string/convert.ts]
[IMPORT: src/index.ts -> src/number/prime.ts]
[IMPORT: src/index.ts -> src/object/basics.ts]
[IMPORT: src/index.ts -> src/array/basics.ts]
[IMPORT: src/index.ts -> src/object/sanitize.ts]
[IMPORT: src/index.ts -> src/object/objectify.ts]
[IMPORT: src/index.ts -> src/dom/query.ts]
[IMPORT: src/index.ts -> src/number/utilities.ts]
[IMPORT: src/index.ts -> src/string/basics.ts]
[IMPORT: src/index.ts -> src/array/sort.ts]
[IMPORT: src/index.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/number/Currency.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/Currency.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/Currency.ts -> src/number/utilities.ts]
[IMPORT: src/number/Unit.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/Unit.ts -> src/number/constants.ts]
[IMPORT: src/number/basics.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/basics.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/basics.ts -> src/number/helpers.ts]
[IMPORT: src/number/basics.ts -> src/guards/primitives.ts]
[IMPORT: src/number/basics.ts -> src/number/utilities.ts]
[IMPORT: src/number/convert.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/convert.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/convert.ts -> src/number/helpers.ts]
[IMPORT: src/number/convert.ts -> src/number/constants.ts]
[IMPORT: src/number/convert.ts -> src/guards/primitives.ts]
[IMPORT: src/number/convert.ts -> src/guards/specials.ts]
[IMPORT: src/number/convert.ts -> src/number/utilities.ts]
[IMPORT: src/number/fibonacci.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/guards.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/guards.ts -> src/guards/primitives.ts]
[IMPORT: src/number/guards.ts -> src/number/utilities.ts]
[IMPORT: src/number/helpers.ts -> src/number/constants.ts]
[IMPORT: src/number/percent.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/percent.ts -> src/number/basics.ts]
[IMPORT: src/number/percent.ts -> src/number/guards.ts]
[IMPORT: src/number/range.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/range.ts -> src/number/helpers.ts]
[IMPORT: src/number/range.ts -> src/number/basics.ts]
[IMPORT: src/number/range.ts -> src/number/guards.ts]
[IMPORT: src/number/range.ts -> src/number/prime.ts]
[IMPORT: src/number/range.ts -> src/array/basics.ts]
[IMPORT: src/number/range.ts -> src/guards/primitives.ts]
[IMPORT: src/number/range.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/number/utilities.d.ts -> src/types/number.d.ts]
[IMPORT: src/number/utilities.d.ts -> src/types/index.d.ts]
[IMPORT: src/number/utilities.ts -> src/number/constants.ts]
[IMPORT: src/number/utilities.ts -> src/guards/primitives.ts]
[IMPORT: src/number/utilities.ts -> src/guards/specials.ts]
[IMPORT: src/object/basics.d.ts -> src/types/object.d.ts]
[IMPORT: src/object/basics.d.ts -> src/types/utils.d.ts]
[IMPORT: src/object/basics.ts -> src/guards/non-primitives.ts]
[IMPORT: src/object/basics.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/object/convert.d.ts -> src/types/object.d.ts]
[IMPORT: src/object/convert.ts -> src/guards/primitives.ts]
[IMPORT: src/object/convert.ts -> src/guards/non-primitives.ts]
[IMPORT: src/object/helpers.ts -> src/guards/non-primitives.ts]
[IMPORT: src/object/helpers.ts -> src/number/utilities.ts]
[IMPORT: src/object/objectify.d.ts -> src/types/object.d.ts]
[IMPORT: src/object/objectify.d.ts -> src/types/index.d.ts]
[IMPORT: src/object/objectify.ts -> src/date/guards.ts]
[IMPORT: src/object/objectify.ts -> src/form/guards.ts]
[IMPORT: src/object/objectify.ts -> src/object/sanitize.ts]
[IMPORT: src/object/objectify.ts -> src/guards/non-primitives.ts]
[IMPORT: src/object/objectify.ts -> src/utils/miscellaneous.ts]
[IMPORT: src/object/sanitize.d.ts -> src/types/object.d.ts]
[IMPORT: src/object/sanitize.d.ts -> src/types/index.d.ts]
[IMPORT: src/object/sanitize.ts -> src/date/guards.ts]
[IMPORT: src/object/sanitize.ts -> src/guards/primitives.ts]
[IMPORT: src/object/sanitize.ts -> src/form/guards.ts]
[IMPORT: src/object/sanitize.ts -> src/guards/non-primitives.ts]
[IMPORT: src/object/sanitize.ts -> src/string/basics.ts]
[IMPORT: src/paginator.d.ts -> src/utils/Paginator.d.ts]
[IMPORT: src/paginator.ts -> src/utils/Paginator.ts]
[IMPORT: src/pluralizer/Pluralizer.d.ts -> src/types/pluralizer.d.ts]
[IMPORT: src/pluralizer/Pluralizer.ts -> src/pluralizer/rules.ts]
[IMPORT: src/pluralizer/Pluralizer.ts -> src/guards/primitives.ts]
[IMPORT: src/pluralizer/Pluralizer.ts -> src/number/utilities.ts]
[IMPORT: src/pluralizer/index.d.ts -> src/pluralizer/Pluralizer.d.ts]
[IMPORT: src/pluralizer/index.ts -> src/pluralizer/Pluralizer.ts]
[IMPORT: src/string/anagram.d.ts -> src/types/string.d.ts]
[IMPORT: src/string/anagram.ts -> src/guards/primitives.ts]
[IMPORT: src/string/anagram.ts -> src/guards/non-primitives.ts]
[IMPORT: src/string/basics.d.ts -> src/types/string.d.ts]
[IMPORT: src/string/basics.ts -> src/guards/primitives.ts]
[IMPORT: src/string/basics.ts -> src/guards/non-primitives.ts]
[IMPORT: src/string/case.d.ts -> src/types/string.d.ts]
[IMPORT: src/string/case.ts -> src/string/constants.ts]
[IMPORT: src/string/case.ts -> src/guards/primitives.ts]
[IMPORT: src/string/convert.d.ts -> src/types/string.d.ts]
[IMPORT: src/string/convert.ts -> src/guards/primitives.ts]
[IMPORT: src/string/convert.ts -> src/guards/non-primitives.ts]
[IMPORT: src/string/convert.ts -> src/string/basics.ts]
[IMPORT: src/string/diff.d.ts -> src/types/string.d.ts]
[IMPORT: src/string/diff.ts -> src/string/helpers.ts]
[IMPORT: src/string/guards.ts -> src/string/convert.ts]
[IMPORT: src/string/helpers.ts -> src/string/utilities.ts]
[IMPORT: src/stylog/Stylog.d.ts -> src/types/stylog.d.ts]
[IMPORT: src/stylog/Stylog.ts -> src/stylog/console.log.ts]
[IMPORT: src/stylog/Stylog.ts -> src/stylog/constants.ts]
[IMPORT: src/stylog/Stylog.ts -> src/stylog/helpers.ts]
[IMPORT: src/stylog/Stylog.ts -> src/stylog/utils.ts]
[IMPORT: src/stylog/Stylog.ts -> src/colors/convert.ts]
[IMPORT: src/stylog/Stylog.ts -> src/colors/css-colors.ts]
[IMPORT: src/stylog/Stylog.ts -> src/colors/helpers.ts]
[IMPORT: src/stylog/Stylog.ts -> src/colors/guards.ts]
[IMPORT: src/stylog/Stylog.ts -> src/guards/index.ts]
[IMPORT: src/stylog/Stylog.ts -> src/guards/primitives.ts]
[IMPORT: src/stylog/Stylog.ts -> src/guards/specials.ts]
[IMPORT: src/stylog/helpers.ts -> src/stylog/constants.ts]
[IMPORT: src/stylog/helpers.ts -> src/guards/primitives.ts]
[IMPORT: src/stylog/helpers.ts -> src/guards/non-primitives.ts]
[IMPORT: src/stylog/index.d.ts -> src/stylog/utils.d.ts]
[IMPORT: src/stylog/index.d.ts -> src/stylog/Stylog.d.ts]
[IMPORT: src/stylog/index.ts -> src/stylog/utils.ts]
[IMPORT: src/stylog/index.ts -> src/stylog/Stylog.ts]
[IMPORT: src/stylog/utils.d.ts -> src/types/colors.d.ts]
[IMPORT: src/stylog/utils.d.ts -> src/types/stylog.d.ts]
[IMPORT: src/stylog/utils.ts -> src/stylog/constants.ts]
[IMPORT: src/stylog/utils.ts -> src/colors/convert.ts]
[IMPORT: src/stylog/utils.ts -> src/colors/guards.ts]
[IMPORT: src/types/array.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/array.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/colors.d.ts -> src/colors/Color.d.ts]
[IMPORT: src/types/colors.d.ts -> src/colors/css-colors.d.ts]
[IMPORT: src/types/colors.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/data.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/length.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/mass.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/temp.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/time.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/volume.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/base.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/area.d.ts]
[IMPORT: src/types/converter.d.ts -> src/converter/constants.d.ts]
[IMPORT: src/types/converter.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/date.d.ts -> src/date/constants.d.ts]
[IMPORT: src/types/date.d.ts -> src/date/timezone.d.ts]
[IMPORT: src/types/date.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/date.d.ts -> src/types/number.d.ts]
[IMPORT: src/types/date.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/form.d.ts -> src/types/array.d.ts]
[IMPORT: src/types/form.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/form.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/form.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/form.d.ts -> src/types/string.d.ts]
[IMPORT: src/types/hash.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/hash.d.ts -> src/types/date.d.ts]
[IMPORT: src/types/hash.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/http-status.d.ts -> src/http-status/constants.d.ts]
[IMPORT: src/types/http-status.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/index.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/index.d.ts -> src/types/date.d.ts]
[IMPORT: src/types/number.d.ts -> src/number/constants.d.ts]
[IMPORT: src/types/number.d.ts -> src/number/Unit.d.ts]
[IMPORT: src/types/number.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/number.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/object.d.ts -> src/object/countries.d.ts]
[IMPORT: src/types/object.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/object.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/pluralizer.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/string.d.ts -> src/string/constants.d.ts]
[IMPORT: src/types/string.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/string.d.ts -> src/types/utils.d.ts]
[IMPORT: src/types/string.d.ts -> src/types/index.d.ts]
[IMPORT: src/types/stylog.d.ts -> src/types/colors.d.ts]
[IMPORT: src/types/stylog.d.ts -> src/stylog/constants.d.ts]
[IMPORT: src/types/stylog.d.ts -> src/stylog/Stylog.d.ts]
[IMPORT: src/types/utils.d.ts -> src/types/object.d.ts]
[IMPORT: src/types/utils.d.ts -> src/types/index.d.ts]
[IMPORT: src/utils/Paginator.d.ts -> src/types/utils.d.ts]
[IMPORT: src/utils/Paginator.d.ts -> src/types/index.d.ts]
[IMPORT: src/utils/miscellaneous.d.ts -> src/types/object.d.ts]
[IMPORT: src/utils/miscellaneous.d.ts -> src/types/utils.d.ts]
[IMPORT: src/utils/miscellaneous.d.ts -> src/types/index.d.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/date/guards.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/guards/primitives.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/guards/non-primitives.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/guards/specials.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/object/helpers.ts]
[IMPORT: src/utils/miscellaneous.ts -> src/array/sort.ts]
[IMPORT: src/utils/xtras.d.ts -> src/types/object.d.ts]
[IMPORT: src/utils/xtras.ts -> src/object/countries.ts]
[IMPORT: src/utils/xtras.ts -> src/guards/primitives.ts]
[IMPORT: src/verbalizer/Verbalizer.ts -> src/verbalizer/rules.ts]
[IMPORT: src/verbalizer/Verbalizer.ts -> src/guards/primitives.ts]
[IMPORT: src/verbalizer/index.d.ts -> src/verbalizer/Verbalizer.d.ts]
[IMPORT: src/verbalizer/index.ts -> src/verbalizer/Verbalizer.ts]
```

### Reverse Dependencies (Imported By)

```
[IMPORTED_BY: src/array/Finder.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/array/Finder.ts <- src/index.ts]
[IMPORTED_BY: src/array/basics.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/array/basics.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/array/basics.ts <- src/number/range.ts]
[IMPORTED_BY: src/array/basics.ts <- src/index.ts]
[IMPORTED_BY: src/array/basics.ts <- src/guards/index.ts]
[IMPORTED_BY: src/array/calc.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/array/calc.ts <- src/index.ts]
[IMPORTED_BY: src/array/sort.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/array/sort.ts <- src/index.ts]
[IMPORTED_BY: src/array/sort.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/array/transform.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/array/transform.ts <- src/array/calc.ts]
[IMPORTED_BY: src/array/transform.ts <- src/index.ts]
[IMPORTED_BY: src/colors/Color.d.ts <- src/colors/index.d.ts]
[IMPORTED_BY: src/colors/Color.d.ts <- src/types/colors.d.ts]
[IMPORTED_BY: src/colors/Color.ts <- src/colors/index.ts]
[IMPORTED_BY: src/colors/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/colors/constants.ts <- src/colors/initials.ts]
[IMPORTED_BY: src/colors/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/colors/convert.d.ts <- src/colors/index.d.ts]
[IMPORTED_BY: src/colors/convert.ts <- src/colors/random.ts]
[IMPORTED_BY: src/colors/convert.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/colors/convert.ts <- src/colors/index.ts]
[IMPORTED_BY: src/colors/convert.ts <- src/stylog/utils.ts]
[IMPORTED_BY: src/colors/convert.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/colors/css-colors.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/colors/css-colors.d.ts <- src/types/colors.d.ts]
[IMPORTED_BY: src/colors/css-colors.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/colors/css-colors.ts <- src/constants.ts]
[IMPORTED_BY: src/colors/css-colors.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/colors/css-colors.ts <- src/colors/guards.ts]
[IMPORTED_BY: src/colors/guards.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/stylog/utils.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/colors/utils.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/colors/convert.ts]
[IMPORTED_BY: src/colors/guards.ts <- src/guards/index.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/colors/random.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/colors/initials.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/colors/utils.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/colors/convert.ts]
[IMPORTED_BY: src/colors/helpers.ts <- src/colors/guards.ts]
[IMPORTED_BY: src/colors/initials.d.ts <- src/colors/index.d.ts]
[IMPORTED_BY: src/colors/initials.ts <- src/colors/index.ts]
[IMPORTED_BY: src/colors/random.d.ts <- src/colors/index.d.ts]
[IMPORTED_BY: src/colors/random.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/colors/random.ts <- src/colors/index.ts]
[IMPORTED_BY: src/colors/utils.d.ts <- src/colors/index.d.ts]
[IMPORTED_BY: src/colors/utils.ts <- src/colors/random.ts]
[IMPORTED_BY: src/colors/utils.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/colors/utils.ts <- src/colors/initials.ts]
[IMPORTED_BY: src/colors/utils.ts <- src/colors/index.ts]
[IMPORTED_BY: src/colors/utils.ts <- src/colors/convert.ts]
[IMPORTED_BY: src/converter/Converter.d.ts <- src/converter/index.d.ts]
[IMPORTED_BY: src/converter/Converter.ts <- src/converter/index.ts]
[IMPORTED_BY: src/converter/area.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/area.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/area.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/data.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/length.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/mass.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/temp.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/time.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/volume.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/base.d.ts <- src/converter/area.d.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/area.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/data.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/length.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/mass.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/temp.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/time.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/volume.ts]
[IMPORTED_BY: src/converter/base.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/converter/constants.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/base.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/area.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/data.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/length.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/mass.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/temp.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/time.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/volume.ts]
[IMPORTED_BY: src/converter/constants.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/data.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/data.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/data.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/length.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/length.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/length.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/mass.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/mass.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/mass.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/temp.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/temp.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/temp.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/time.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/time.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/time.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/converter/volume.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/converter/volume.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/converter/volume.ts <- src/converter/Converter.ts]
[IMPORTED_BY: src/date/calculation.d.ts <- src/date/index.d.ts]
[IMPORTED_BY: src/date/calculation.ts <- src/date/index.ts]
[IMPORTED_BY: src/date/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/date/constants.d.ts <- src/types/date.d.ts]
[IMPORTED_BY: src/date/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/date/constants.ts <- src/date/calculation.ts]
[IMPORTED_BY: src/date/constants.ts <- src/date/utils.ts]
[IMPORTED_BY: src/date/constants.ts <- src/date/helpers.ts]
[IMPORTED_BY: src/date/constants.ts <- src/date/parse.ts]
[IMPORTED_BY: src/date/greet.d.ts <- src/date/index.d.ts]
[IMPORTED_BY: src/date/greet.ts <- src/date/index.ts]
[IMPORTED_BY: src/date/guards.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/date/guards.ts <- src/date/utils.ts]
[IMPORTED_BY: src/date/guards.ts <- src/date/greet.ts]
[IMPORTED_BY: src/date/guards.ts <- src/form/convert.ts]
[IMPORTED_BY: src/date/guards.ts <- src/guards/index.ts]
[IMPORTED_BY: src/date/guards.ts <- src/date/parse.ts]
[IMPORTED_BY: src/date/guards.ts <- src/object/sanitize.ts]
[IMPORTED_BY: src/date/guards.ts <- src/object/objectify.ts]
[IMPORTED_BY: src/date/guards.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/date/helpers.ts <- src/date/calculation.ts]
[IMPORTED_BY: src/date/helpers.ts <- src/date/utils.ts]
[IMPORTED_BY: src/date/helpers.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/date/parse.d.ts <- src/date/index.d.ts]
[IMPORTED_BY: src/date/parse.ts <- src/date/index.ts]
[IMPORTED_BY: src/date/parse.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/date/seasons.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/date/seasons.ts <- src/constants.ts]
[IMPORTED_BY: src/date/timezone.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/date/timezone.d.ts <- src/types/date.d.ts]
[IMPORTED_BY: src/date/timezone.ts <- src/constants.ts]
[IMPORTED_BY: src/date/timezone.ts <- src/date/utils.ts]
[IMPORTED_BY: src/date/timezone.ts <- src/date/guards.ts]
[IMPORTED_BY: src/date/utils.d.ts <- src/date/index.d.ts]
[IMPORTED_BY: src/date/utils.ts <- src/date/greet.ts]
[IMPORTED_BY: src/date/utils.ts <- src/date/index.ts]
[IMPORTED_BY: src/dom/query.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/dom/query.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/dom/query.ts <- src/form/transform.ts]
[IMPORTED_BY: src/dom/query.ts <- src/dom/index.ts]
[IMPORTED_BY: src/dom/query.ts <- src/index.ts]
[IMPORTED_BY: src/dom/storage.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/dom/storage.ts <- src/dom/index.ts]
[IMPORTED_BY: src/dom/utils.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/dom/utils.ts <- src/dom/index.ts]
[IMPORTED_BY: src/form/convert.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/form/convert.ts <- src/dom/index.ts]
[IMPORTED_BY: src/form/guards.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/form/guards.ts <- src/form/convert.ts]
[IMPORTED_BY: src/form/guards.ts <- src/dom/index.ts]
[IMPORTED_BY: src/form/guards.ts <- src/object/sanitize.ts]
[IMPORTED_BY: src/form/guards.ts <- src/object/objectify.ts]
[IMPORTED_BY: src/form/transform.d.ts <- src/dom/index.d.ts]
[IMPORTED_BY: src/form/transform.ts <- src/dom/index.ts]
[IMPORTED_BY: src/guards/index.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/guards/index.ts <- src/form/guards.ts]
[IMPORTED_BY: src/guards/non-primitives.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/date/calculation.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/date/utils.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/form/convert.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/string/anagram.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/array/transform.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/array/calc.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/array/Finder.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/object/convert.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/stylog/helpers.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/date/guards.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/string/convert.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/object/basics.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/array/basics.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/guards/index.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/object/sanitize.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/object/objectify.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/guards/specials.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/string/basics.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/object/helpers.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/array/sort.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/guards/non-primitives.ts <- src/hash/helpers.ts]
[IMPORTED_BY: src/guards/primitives.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/colors/initials.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/date/calculation.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/date/utils.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/form/convert.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/form/transform.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/Cipher.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/TextCodec.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/string/anagram.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/number/basics.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/number/convert.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/number/range.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/array/transform.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/array/Finder.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/object/convert.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/utils/xtras.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/pluralizer/Pluralizer.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/stylog/helpers.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/verbalizer/Verbalizer.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/string/case.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/colors/utils.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/date/guards.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/string/convert.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/number/guards.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/guards/index.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/date/helpers.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/date/parse.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/form/guards.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/object/sanitize.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/dom/query.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/guards/non-primitives.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/guards/specials.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/number/utilities.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/string/basics.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/array/sort.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/utils.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/helpers.ts]
[IMPORTED_BY: src/guards/primitives.ts <- src/hash/core.ts]
[IMPORTED_BY: src/guards/specials.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/guards/specials.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/Cipher.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/TextCodec.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/index.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/number/convert.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/date/guards.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/guards/index.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/date/parse.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/number/utilities.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/utils.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/helpers.ts]
[IMPORTED_BY: src/guards/specials.ts <- src/hash/uuid.ts]
[IMPORTED_BY: src/hash/Cipher.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/Cipher.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/Signet.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/Signet.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/TextCodec.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/TextCodec.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/core.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/core.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/core.ts <- src/hash/uuid.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/Cipher.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/TextCodec.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/utils.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/core.ts]
[IMPORTED_BY: src/hash/helpers.ts <- src/hash/uuid.ts]
[IMPORTED_BY: src/hash/utils.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/Cipher.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/TextCodec.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/helpers.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/core.ts]
[IMPORTED_BY: src/hash/utils.ts <- src/hash/uuid.ts]
[IMPORTED_BY: src/hash/uuid.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/hash/uuid.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/hash/uuid.ts <- src/hash/index.ts]
[IMPORTED_BY: src/hash/uuid.ts <- src/guards/index.ts]
[IMPORTED_BY: src/http-status/HttpStatus.d.ts <- src/http-status/index.d.ts]
[IMPORTED_BY: src/http-status/HttpStatus.ts <- src/http-status/index.ts]
[IMPORTED_BY: src/http-status/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/http-status/constants.d.ts <- src/types/http-status.d.ts]
[IMPORTED_BY: src/http-status/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/http-status/constants.ts <- src/http-status/HttpStatus.ts]
[IMPORTED_BY: src/number/Currency.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/Currency.ts <- src/index.ts]
[IMPORTED_BY: src/number/Unit.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/Unit.d.ts <- src/types/number.d.ts]
[IMPORTED_BY: src/number/Unit.ts <- src/index.ts]
[IMPORTED_BY: src/number/basics.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/basics.ts <- src/number/percent.ts]
[IMPORTED_BY: src/number/basics.ts <- src/number/range.ts]
[IMPORTED_BY: src/number/basics.ts <- src/array/calc.ts]
[IMPORTED_BY: src/number/basics.ts <- src/index.ts]
[IMPORTED_BY: src/number/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/number/constants.d.ts <- src/types/number.d.ts]
[IMPORTED_BY: src/number/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/number/constants.ts <- src/number/helpers.ts]
[IMPORTED_BY: src/number/constants.ts <- src/number/Unit.ts]
[IMPORTED_BY: src/number/constants.ts <- src/number/convert.ts]
[IMPORTED_BY: src/number/constants.ts <- src/number/utilities.ts]
[IMPORTED_BY: src/number/convert.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/convert.ts <- src/index.ts]
[IMPORTED_BY: src/number/fibonacci.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/fibonacci.ts <- src/index.ts]
[IMPORTED_BY: src/number/guards.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/number/guards.ts <- src/number/percent.ts]
[IMPORTED_BY: src/number/guards.ts <- src/number/range.ts]
[IMPORTED_BY: src/number/guards.ts <- src/guards/index.ts]
[IMPORTED_BY: src/number/helpers.ts <- src/number/basics.ts]
[IMPORTED_BY: src/number/helpers.ts <- src/number/convert.ts]
[IMPORTED_BY: src/number/helpers.ts <- src/number/range.ts]
[IMPORTED_BY: src/number/percent.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/percent.ts <- src/index.ts]
[IMPORTED_BY: src/number/prime.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/number/prime.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/prime.ts <- src/number/range.ts]
[IMPORTED_BY: src/number/prime.ts <- src/index.ts]
[IMPORTED_BY: src/number/prime.ts <- src/guards/index.ts]
[IMPORTED_BY: src/number/range.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/range.ts <- src/index.ts]
[IMPORTED_BY: src/number/utilities.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/colors/Color.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/date/calculation.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/date/utils.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/number/basics.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/number/Currency.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/number/convert.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/index.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/pluralizer/Pluralizer.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/date/guards.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/number/guards.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/date/helpers.ts]
[IMPORTED_BY: src/number/utilities.ts <- src/object/helpers.ts]
[IMPORTED_BY: src/object/basics.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/object/basics.ts <- src/index.ts]
[IMPORTED_BY: src/object/basics.ts <- src/array/basics.ts]
[IMPORTED_BY: src/object/convert.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/object/convert.ts <- src/index.ts]
[IMPORTED_BY: src/object/countries.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/object/countries.d.ts <- src/types/object.d.ts]
[IMPORTED_BY: src/object/countries.ts <- src/constants.ts]
[IMPORTED_BY: src/object/countries.ts <- src/utils/xtras.ts]
[IMPORTED_BY: src/object/helpers.ts <- src/array/transform.ts]
[IMPORTED_BY: src/object/helpers.ts <- src/array/calc.ts]
[IMPORTED_BY: src/object/helpers.ts <- src/array/sort.ts]
[IMPORTED_BY: src/object/helpers.ts <- src/utils/miscellaneous.ts]
[IMPORTED_BY: src/object/objectify.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/object/objectify.ts <- src/index.ts]
[IMPORTED_BY: src/object/objectify.ts <- src/dom/query.ts]
[IMPORTED_BY: src/object/sanitize.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/object/sanitize.ts <- src/form/transform.ts]
[IMPORTED_BY: src/object/sanitize.ts <- src/index.ts]
[IMPORTED_BY: src/object/sanitize.ts <- src/object/objectify.ts]
[IMPORTED_BY: src/object/sanitize.ts <- src/dom/query.ts]
[IMPORTED_BY: src/pluralizer/Pluralizer.d.ts <- src/pluralizer/index.d.ts]
[IMPORTED_BY: src/pluralizer/Pluralizer.ts <- src/pluralizer/index.ts]
[IMPORTED_BY: src/pluralizer/rules.ts <- src/pluralizer/Pluralizer.ts]
[IMPORTED_BY: src/string/anagram.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/anagram.ts <- src/index.ts]
[IMPORTED_BY: src/string/basics.d.ts <- src/hash/index.d.ts]
[IMPORTED_BY: src/string/basics.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/basics.ts <- src/form/convert.ts]
[IMPORTED_BY: src/string/basics.ts <- src/hash/index.ts]
[IMPORTED_BY: src/string/basics.ts <- src/index.ts]
[IMPORTED_BY: src/string/basics.ts <- src/string/convert.ts]
[IMPORTED_BY: src/string/basics.ts <- src/object/sanitize.ts]
[IMPORTED_BY: src/string/case.d.ts <- src/change-case.d.ts]
[IMPORTED_BY: src/string/case.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/case.ts <- src/change-case.ts]
[IMPORTED_BY: src/string/case.ts <- src/index.ts]
[IMPORTED_BY: src/string/constants.d.ts <- src/constants.d.ts]
[IMPORTED_BY: src/string/constants.d.ts <- src/types/string.d.ts]
[IMPORTED_BY: src/string/constants.ts <- src/constants.ts]
[IMPORTED_BY: src/string/constants.ts <- src/string/case.ts]
[IMPORTED_BY: src/string/convert.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/convert.ts <- src/index.ts]
[IMPORTED_BY: src/string/convert.ts <- src/string/guards.ts]
[IMPORTED_BY: src/string/diff.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/diff.ts <- src/index.ts]
[IMPORTED_BY: src/string/guards.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/string/guards.ts <- src/guards/index.ts]
[IMPORTED_BY: src/string/helpers.ts <- src/string/diff.ts]
[IMPORTED_BY: src/string/utilities.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/string/utilities.ts <- src/string/helpers.ts]
[IMPORTED_BY: src/string/utilities.ts <- src/index.ts]
[IMPORTED_BY: src/stylog/Stylog.d.ts <- src/stylog/index.d.ts]
[IMPORTED_BY: src/stylog/Stylog.d.ts <- src/types/stylog.d.ts]
[IMPORTED_BY: src/stylog/Stylog.ts <- src/stylog/index.ts]
[IMPORTED_BY: src/stylog/console.log.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/stylog/constants.d.ts <- src/types/stylog.d.ts]
[IMPORTED_BY: src/stylog/constants.ts <- src/stylog/helpers.ts]
[IMPORTED_BY: src/stylog/constants.ts <- src/stylog/utils.ts]
[IMPORTED_BY: src/stylog/constants.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/stylog/helpers.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/stylog/utils.d.ts <- src/stylog/index.d.ts]
[IMPORTED_BY: src/stylog/utils.ts <- src/stylog/Stylog.ts]
[IMPORTED_BY: src/stylog/utils.ts <- src/stylog/index.ts]
[IMPORTED_BY: src/types/array.d.ts <- src/array/Finder.d.ts]
[IMPORTED_BY: src/types/array.d.ts <- src/array/sort.d.ts]
[IMPORTED_BY: src/types/array.d.ts <- src/array/transform.d.ts]
[IMPORTED_BY: src/types/array.d.ts <- src/types/form.d.ts]
[IMPORTED_BY: src/types/array.d.ts <- src/array/basics.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/convert.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/initials.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/random.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/utils.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/guards.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/stylog/utils.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/colors/Color.d.ts]
[IMPORTED_BY: src/types/colors.d.ts <- src/types/stylog.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/data.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/length.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/mass.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/temp.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/time.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/volume.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/base.d.ts]
[IMPORTED_BY: src/types/converter.d.ts <- src/converter/area.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/calculation.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/greet.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/parse.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/utils.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/guards.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/types/hash.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/date/constants.d.ts]
[IMPORTED_BY: src/types/date.d.ts <- src/types/index.d.ts]
[IMPORTED_BY: src/types/form.d.ts <- src/form/convert.d.ts]
[IMPORTED_BY: src/types/form.d.ts <- src/form/guards.d.ts]
[IMPORTED_BY: src/types/form.d.ts <- src/form/transform.d.ts]
[IMPORTED_BY: src/types/hash.d.ts <- src/hash/Signet.d.ts]
[IMPORTED_BY: src/types/hash.d.ts <- src/guards/specials.d.ts]
[IMPORTED_BY: src/types/hash.d.ts <- src/hash/uuid.d.ts]
[IMPORTED_BY: src/types/http-status.d.ts <- src/http-status/HttpStatus.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/Converter.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/date/calculation.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/date/parse.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/date/utils.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/dom/storage.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/date/guards.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/guards/non-primitives.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/guards/primitives.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/guards.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/hash/Signet.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/hash/utils.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/http-status/HttpStatus.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/basics.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/Currency.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/fibonacci.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/convert.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/number/utilities.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/array/calc.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/array/Finder.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/array/sort.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/array/transform.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/object/objectify.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/object/sanitize.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/utils/Paginator.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/colors.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/data.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/length.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/mass.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/temp.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/time.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/volume.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/base.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/converter/area.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/array.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/form.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/hash.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/object.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/utils.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/number.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/date.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/array/basics.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/utils/miscellaneous.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/pluralizer.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/types/string.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/guards/specials.d.ts]
[IMPORTED_BY: src/types/index.d.ts <- src/hash/uuid.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/colors/initials.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/colors/utils.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/basics.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/Currency.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/percent.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/convert.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/utilities.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/range.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/colors/Color.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/number/Unit.d.ts]
[IMPORTED_BY: src/types/number.d.ts <- src/types/date.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/form/convert.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/guards/non-primitives.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/hash/Signet.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/array/calc.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/array/Finder.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/array/sort.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/array/transform.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/object/basics.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/object/objectify.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/object/sanitize.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/object/convert.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/utils/xtras.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/data.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/length.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/mass.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/temp.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/time.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/volume.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/converter/area.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/array.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/form.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/hash.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/utils.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/index.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/array/basics.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/utils/miscellaneous.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/dom/query.d.ts]
[IMPORTED_BY: src/types/object.d.ts <- src/types/string.d.ts]
[IMPORTED_BY: src/types/pluralizer.d.ts <- src/pluralizer/Pluralizer.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/string/anagram.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/string/convert.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/string/diff.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/string/basics.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/string/case.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/types/form.d.ts]
[IMPORTED_BY: src/types/string.d.ts <- src/dom/query.d.ts]
[IMPORTED_BY: src/types/stylog.d.ts <- src/stylog/utils.d.ts]
[IMPORTED_BY: src/types/stylog.d.ts <- src/stylog/Stylog.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/object/basics.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/utils/Paginator.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/converter.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/form.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/http-status.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/object.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/number.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/date.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/utils/miscellaneous.d.ts]
[IMPORTED_BY: src/types/utils.d.ts <- src/types/string.d.ts]
[IMPORTED_BY: src/utils/Paginator.d.ts <- src/paginator.d.ts]
[IMPORTED_BY: src/utils/Paginator.ts <- src/paginator.ts]
[IMPORTED_BY: src/utils/miscellaneous.d.ts <- src/guards/index.d.ts]
[IMPORTED_BY: src/utils/miscellaneous.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/hash/Signet.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/number/range.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/array/transform.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/index.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/object/basics.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/guards/index.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/object/objectify.ts]
[IMPORTED_BY: src/utils/miscellaneous.ts <- src/dom/query.ts]
[IMPORTED_BY: src/utils/xtras.d.ts <- src/index.d.ts]
[IMPORTED_BY: src/utils/xtras.ts <- src/index.ts]
[IMPORTED_BY: src/verbalizer/Verbalizer.d.ts <- src/verbalizer/index.d.ts]
[IMPORTED_BY: src/verbalizer/Verbalizer.ts <- src/verbalizer/index.ts]
[IMPORTED_BY: src/verbalizer/rules.ts <- src/verbalizer/Verbalizer.ts]
```

### Entry Points

```
[ENTRY: src/change-case.d.ts -> change-case.d.mts (1102 bytes)]
[ENTRY: src/change-case.ts -> change-case.mjs (1103 bytes)]
[ENTRY: src/colors/index.d.ts -> colors/index.d.mts (16766 bytes)]
[ENTRY: src/colors/index.ts -> colors/index.mjs (26036 bytes)]
[ENTRY: src/constants.d.ts -> constants.d.mts (5283 bytes)]
[ENTRY: src/constants.ts -> constants.mjs (7386 bytes)]
[ENTRY: src/converter/index.d.ts -> converter/index.d.mts (1515 bytes)]
[ENTRY: src/converter/index.ts -> converter/index.mjs (21566 bytes)]
[ENTRY: src/date/index.d.ts -> date/index.d.mts (13336 bytes)]
[ENTRY: src/date/index.ts -> date/index.mjs (17345 bytes)]
[ENTRY: src/dom/index.d.ts -> dom/index.d.mts (9159 bytes)]
[ENTRY: src/dom/index.ts -> dom/index.mjs (16410 bytes)]
[ENTRY: src/guards/index.d.ts -> guards/index.d.mts (19247 bytes)]
[ENTRY: src/guards/index.ts -> guards/index.mjs (4065 bytes)]
[ENTRY: src/hash/index.d.ts -> hash/index.d.mts (44965 bytes)]
[ENTRY: src/hash/index.ts -> hash/index.mjs (31124 bytes)]
[ENTRY: src/http-status/index.d.ts -> http-status/index.d.mts (5447 bytes)]
[ENTRY: src/http-status/index.ts -> http-status/index.mjs (5604 bytes)]
[ENTRY: src/index.d.ts -> index.d.mts (70100 bytes)]
[ENTRY: src/index.ts -> index.mjs (87364 bytes)]
[ENTRY: src/paginator.d.ts -> paginator.d.mts (5427 bytes)]
[ENTRY: src/paginator.ts -> paginator.mjs (7921 bytes)]
[ENTRY: src/pluralizer/index.d.ts -> pluralizer/index.d.mts (6676 bytes)]
[ENTRY: src/pluralizer/index.ts -> pluralizer/index.mjs (18409 bytes)]
[ENTRY: src/stylog/index.d.ts -> stylog/index.d.mts (2271 bytes)]
[ENTRY: src/stylog/index.ts -> stylog/index.mjs (23304 bytes)]
[ENTRY: src/types/array.d.ts -> types/array.d.mts (1031 bytes)]
[ENTRY: src/types/array.ts -> types/array.mjs (621 bytes)]
[ENTRY: src/types/colors.d.ts -> types/colors.d.mts (1351 bytes)]
[ENTRY: src/types/colors.ts -> types/colors.mjs (621 bytes)]
[ENTRY: src/types/converter.d.ts -> types/converter.d.mts (1137 bytes)]
[ENTRY: src/types/converter.ts -> types/converter.mjs (621 bytes)]
[ENTRY: src/types/date.d.ts -> types/date.d.mts (3120 bytes)]
[ENTRY: src/types/date.ts -> types/date.mjs (621 bytes)]
[ENTRY: src/types/form.d.ts -> types/form.d.mts (891 bytes)]
[ENTRY: src/types/form.ts -> types/form.mjs (621 bytes)]
[ENTRY: src/types/hash.d.ts -> types/hash.d.mts (1341 bytes)]
[ENTRY: src/types/hash.ts -> types/hash.mjs (621 bytes)]
[ENTRY: src/types/http-status.d.ts -> types/http-status.d.mts (1021 bytes)]
[ENTRY: src/types/http-status.ts -> types/http-status.mjs (621 bytes)]
[ENTRY: src/types/index.d.ts -> types/index.d.mts (1697 bytes)]
[ENTRY: src/types/index.ts -> types/index.mjs (621 bytes)]
[ENTRY: src/types/number.d.ts -> types/number.d.mts (1896 bytes)]
[ENTRY: src/types/number.ts -> types/number.mjs (621 bytes)]
[ENTRY: src/types/object.d.ts -> types/object.d.mts (2043 bytes)]
[ENTRY: src/types/object.ts -> types/object.mjs (621 bytes)]
[ENTRY: src/types/pluralizer.d.ts -> types/pluralizer.d.mts (773 bytes)]
[ENTRY: src/types/pluralizer.ts -> types/pluralizer.mjs (621 bytes)]
[ENTRY: src/types/string.d.ts -> types/string.d.mts (2521 bytes)]
[ENTRY: src/types/string.ts -> types/string.mjs (621 bytes)]
[ENTRY: src/types/stylog.d.ts -> types/stylog.d.mts (886 bytes)]
[ENTRY: src/types/stylog.ts -> types/stylog.mjs (621 bytes)]
[ENTRY: src/types/utils.d.ts -> types/utils.d.mts (2653 bytes)]
[ENTRY: src/types/utils.ts -> types/utils.mjs (621 bytes)]
[ENTRY: src/types/verbalizer.d.ts -> types/verbalizer.d.mts (1019 bytes)]
[ENTRY: src/types/verbalizer.ts -> types/verbalizer.mjs (621 bytes)]
[ENTRY: src/verbalizer/index.d.ts -> verbalizer/index.d.mts (5443 bytes)]
[ENTRY: src/verbalizer/index.ts -> verbalizer/index.mjs (15453 bytes)]
```

### Chunks

```
[CHUNK: Color-bp5E6G85.d.mts (25550 bytes)]
[CHUNK: Stylog-DXyP10Dd.d.mts (21433 bytes)]
[CHUNK: area-DfL2_gb2.d.mts (15339 bytes)]
[CHUNK: array-DE8LqQnI.d.mts (6508 bytes)]
[CHUNK: basics-CMLA7Ma8.d.mts (3990 bytes)]
[CHUNK: case-Bub_44BH.mjs (21603 bytes)]
[CHUNK: case-CK3shNWW.d.mts (17218 bytes)]
[CHUNK: constants-B0zJiNqH.mjs (2013 bytes)]
[CHUNK: constants-BLAcLxOu.mjs (47741 bytes)]
[CHUNK: constants-BPeq21eD.d.mts (2285 bytes)]
[CHUNK: constants-CaESnVR6.mjs (2413 bytes)]
[CHUNK: constants-D8RzBjsL.d.mts (2061 bytes)]
[CHUNK: constants-DCZL77t-.mjs (1392 bytes)]
[CHUNK: constants-DNIXgBkz.d.mts (52697 bytes)]
[CHUNK: constants-GZL_CT1W.mjs (4646 bytes)]
[CHUNK: constants-ZyfpysiQ.mjs (9226 bytes)]
[CHUNK: convert-BPv05akN.mjs (14730 bytes)]
[CHUNK: countries-CMxHxKiK.mjs (25160 bytes)]
[CHUNK: css-colors-B-y4TmeC.mjs (4400 bytes)]
[CHUNK: css-colors-Dqz6Bfnp.d.mts (5958 bytes)]
[CHUNK: form-DzEfUeSF.d.mts (5323 bytes)]
[CHUNK: guards-CNG9gnvL.mjs (6012 bytes)]
[CHUNK: guards-CV5StNcy.mjs (5310 bytes)]
[CHUNK: guards-D5TPrR6_.mjs (28436 bytes)]
[CHUNK: hash-y4HVojCw.d.mts (6570 bytes)]
[CHUNK: http-status-BN8YgIo7.d.mts (3731 bytes)]
[CHUNK: index-CuYJv2Xe.d.mts (298660 bytes)]
[CHUNK: miscellaneous-CpACKZhr.d.mts (13009 bytes)]
[CHUNK: parse-CPrnHfTO.mjs (6363 bytes)]
[CHUNK: pluralizer-Bn4MUZAM.d.mts (1527 bytes)]
[CHUNK: primitives-B-n6Y61s.mjs (4366 bytes)]
[CHUNK: query-vGg2LRnF.d.mts (3832 bytes)]
[CHUNK: query-y0KFAAFD.mjs (22089 bytes)]
[CHUNK: string-BzpLOJGy.d.mts (24319 bytes)]
[CHUNK: timezone-avZ4TvDx.mjs (110535 bytes)]
[CHUNK: utilities-DH6-MgdV.mjs (14764 bytes)]
[CHUNK: uuid-UwpqLOtl.mjs (67186 bytes)]
[CHUNK: uuid-gvCzfLr7.d.mts (9646 bytes)]
```
