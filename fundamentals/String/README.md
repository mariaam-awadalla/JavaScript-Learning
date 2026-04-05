#  String Utilities — JavaScript Practice

A curated collection of **string manipulation utilities** implemented in JavaScript, covering fundamental operations, real-world use cases, and developer-level problem solving.

---

##  Project Structure

```bash
string/
├── core/
│   ├── capitalize.js
│   ├── capitalizeFirst.js
│   ├── reverseString.js
│
├── transformations/
│   ├── cleanName.js
│   ├── formatTitle.js
│   ├── truncateText.js
│
├── analysis/
│   ├── countWord.js
│   ├── countWords.js
│   ├── countVowels.js
│   ├── checkWord.js
│
├── extraction/
│   ├── extractUsername.js
│   ├── getLastChar.js
│
├── security/
│   ├── hideEmail.js
│   ├── isValidEmail.js
│
├── utilities/
│   ├── palindrome.js
│   ├── reverseWord.js
```

---

##  Concept Coverage

This project demonstrates practical usage of:

* **String Methods**

  * `trim()`
  * `slice()`
  * `toUpperCase()`
  * `toLowerCase()`
  * `includes()`
  * `startsWith()`

* **Array Methods**

  * `split()`
  * `map()`
  * `filter()`
  * `join()`

* **Core Concepts**

  * Immutability of strings
  * Functional transformations
  * Data normalization
  * Defensive programming (input validation)

---

##  Functional Categories

###  Core Operations

Basic string manipulation functions:

* Uppercasing entire strings
* Capitalizing first character
* Reversing strings

---

###  Transformations

Used for formatting and preparing user-facing text:

* Normalizing names (`cleanName`)
* Title casing (`formatTitle`)
* Truncating long text (`truncateText`)

---

###  Analysis

Functions that inspect and measure string content:

* Word counting
* Vowel counting
* Keyword detection

---

###  Extraction

Extracting specific parts of a string:

* Username from email
* Last character retrieval

---

###  Security / Validation

Handling sensitive or structured data:

* Email masking (`hideEmail`)
* Email validation (`isValidEmail`)

---

###  Utilities

General-purpose helpers:

* Palindrome check
* Word reversal

---

##  Edge Cases Handled

* Empty strings (`""`)
* Multiple spaces between words
* Missing delimiters (e.g., no `@` in email)
* Short strings vs truncation length
* Case normalization inconsistencies

---

##  Example Patterns

### Pattern 1: Normalize Text

```js
str.trim().split(" ").map(...).join(" ")
```

### Pattern 2: Extract Substring

```js
str.slice(0, str.indexOf("@"))
```

### Pattern 3: Validate Input

```js
str.includes("@") && str.includes(".")
```

---

##  Purpose

This repository is designed to:

* Strengthen JavaScript fundamentals
* Build problem-solving patterns
* Transition from beginner logic to developer thinking

---
