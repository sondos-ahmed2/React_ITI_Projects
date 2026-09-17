# HTML Summary
**What is HTML?**
HTML is used to structure web pages.
It stands for HyperText Markup Language.

## 1. DOCTYPE
`<!DOCTYPE html>` tells the browser that the document uses HTML5 **the version of html** 
## 2. HTML Document Structure
### 1.`<html>`
The `<html>` tag is the root element of the HTML document and contains the `<head>` and `<body>`.

### 2.`<head>`
The `<head>` contains information and settings about the HTML document.
It also contains elements that help the browser understand and load the page.

- #### `<title>`
The `<title>` defines the title of the page.
It appears in the browser tab.

- #### Meta Tags
Meta tags provide information and instructions about the page.
Common meta tags include:
- `charset` defines the character encoding.
- `description` provides a short description of the page.
- `keywords` contains keywords related to the page content that can help with SEO.
- `author` specifies the author of the page.
- `viewport` helps the page work properly on different screen sizes and is related to responsive design.

- #### `<link>` 
links external resources to the HTML document, such as:
- External CSS files.
- Favicon.
- Other external resources.
- **`<style>`** contains internal CSS.
- **`<script>`** links or contains JavaScript code.

### 3. `<body>`
The `<body>` contains the visible content of the web page.
#### Types of Elements
HTML elements can be divided into three types:
1. **Block elements**
2. **Inline elements**
3. **Inline-block elements**

#### Types of Tags
Tags can be divided into:
1. **Semantic tags**
2. **Non-semantic tags (structured)**

#### 1. Semantic Tags
Semantic tags describe the meaning and purpose of their content.
- `<header>` represents the header of a page or section.
- `<nav>` contains navigation links.
- `<main>` represents the main content of the page.
- `<section>` represents a section of the page.
- `<article>` represents independent content.
- `<aside>` represents side content.
- `<footer>` represents the footer of a page.

#### 2. Non Semantic Tags
Non semantic tags do not describe the specific meaning of their content.
- `<div>` a block container used to group elements.
- `<span>` a inline container used to group or style part of the content.
- `<p>` represents a paragraph.
- `<form>` contains controls for collecting user input.
- `<table>` represents data arranged in rows and columns.
- `<table>` can be structured using:
  - Semantic structure using **`<thead>`**, **`<tbody>`** and **`<tfoot>`** to define the different parts of the table.
  - Basic structure using **`<tr>`** and **`<td>`** without defining the table sections.

#### 3. Text Formatting
Text formatting tags can be **semantic** or **non semantic**.
- `<b>` non semantic bold, `<strong>` semantic bold.
- `<i>` non semantic italic, `<em>` semantic italic (emphasis).

#### 4. Input and Button
- `<input>` can be used in forms as a button with specific types, such as `submit` and `reset`.
- `<button>` can perform different actions and is more flexible than `<input>`.

#### 5. Forms
The `<form>` tag is used to collect and submit user input.
- `action` specifies where the form data is sent.
- `method` specifies how the form data is sent, such as `GET` or `POST`.

#### 6. Form Elements
- `<label>` defines a label for a form element.
- `<input>` creates an input field for different types of user data.
- `<textarea>` creates a multi line text input field.
- `<fieldset>` groups related form elements together.

#### 7. Input Types
The `<input>` tag can have different types depending on the required input.
Common input types include:
- `text` for entering text.
- `password` for entering a password.
- `email` for entering an email address.
- `number` for entering a number.
- `date` for selecting a date.
- `time` for selecting a time.
- `file` for selecting a file.
- `radio` for selecting one option from a group by using the same name in inputs.
- `checkbox` for selecting one or more options.
- `submit` for submitting the form.
- `reset` for resetting the form.

#### 8. Media Elements
- `<img>` displays an image.
- `<audio>` embeds audio content.
- `<video>` embeds video content , video attributes(controls, autoplay, loop, muted).
- `<iframe>` embeds another web page or external content inside the page.
- `<figure>` groups media content with its caption **`<figcaption>`**.

#### 9. Lists
- `<ul>` creates an unordered list using bullet points.
- `<ol>` creates an ordered list using numbers or letters.
- `<li>` represents an item inside a list.

#### 10. HTML Entities
HTML entities can be written using names, numbers, or symbols.
- `\&copy;` copyright symbol, `\&nbsp;` white space, `\&lt;` less than sign, `\&gt;` greater than sign, `\&amp;` ampersand(&).
