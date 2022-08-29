## Doctype in HTML5

The correct syntax of HTML5 doctype is

```
<!Doctype HTML>
```

Doctype is the first piece of code to write in HTML5 to inform a browser that the document being rendered is an HTML document. `<!doctype html>`, `<!Doctype HTML>` or `<!DOCTYPE HTML>` all are the same because the `doctype` keyword is **not** case sensitive.


The `<!DOCTYPE html>` declaration is not an HTML tag. It is an “information” to the browser about what document type to expect.



## Layout engines in web browsers

**Quirks mode** refers to a strategy used by some web browsers to preserve backward compatibility with web pages built for old web browsers, rather than solely complying with standard W3C and IETF requirements in the standards mode.

**"Almost standards"** mode rendering matches “full standards” mode in all details except, the image layout inside table cells is treated in the same way that “quirks” mode works. This means that sliced image-in-table layouts are less likely to collapse in browsers in either “quirks” or “almost normal” mode than in “full standards” mode.

**Full standards mode** In this mode, the behavior described is the same as described by HTML and CSS specifications. Most of the modern browsers use full standard mode.

With DOCTYPE placed at the start of the HTML markup, **Full standards** mode is enabled in web browsers,

### Will adding any non-executing code, e.g. comments, before the DOCTYPE declaration have any effect?

Yes, anything before the `DOCTYPE`, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

The `DOCTYPE` must, therefore, be right at the beginning of our HTML document.



## How do you define HTML5?

HTML5 is the most recent version of the Hypertext Markup Language, it introduces some new features including:

- Adding new parsing rules to enhance flexibility.
- Adding New attributes.
- Allow offline editing.
- Support (Web SQL)
- Support Protocol and MIME handler registration. These features can be used to change the way of user interaction with documents.



## What is an ‘attribute’ in HTML?

All HTML elements can have attributes that give added information about an element.

Attributes are placed directly after the name of a tag, **inside the two angled brackets**. Attributes only appear in opening tags or in self-closing tags. They can not be used within closing tags. Attributes usually come in name/value pairs, like `name="value"`.

*For example:*

HTML **links** are specified with the `<a>` tag. The link address is specified in the `href` attribute:

```html
<a href="https://www.educative.io">This is a link</a>
```

HTML **images** also have `width` and `height` attributes, which specify the width and height of the image respectively:

```html
 <img src="img.jpg" width="250" height="100">
```

The `alt` attribute details an alternative text to be used if an image cannot be displayed.

Screen readers can interpret the value of the `alt` attribute. This allows users, e.g. those with visual impairments, to “listen” to the webpage and hear its value.

```html
<img src="img.jpg" alt="e-learning">
```

In the above example, `"e-learning"` can be read by a screen reader.



## Please name the media element tags introduced by HTML5.

The new media element tags introduced by HTML5 are listed below:

- `<audio>`: Used for multimedia like sounds, audio streams, or music, embed audio content without any additional plug-in requirement like the flash player.
- `<video>`: Used for video content like video streams or movie clips, embed video content, etc.
- `<source>`: Used for multiple media resources in media elements, such as audio, video, picture, etc.
- `<embed>`: Used for external applications or embedded content (a plug-in).
- `<track>`: Used for adding subtitles or other files containing text in video or audio elements as the respective media play on a web page.



## How many types of headings can an HTML document support?

HTML documents can support 6 levels of headings from level 1 `<h1>` to level 6 `<h6>`.



## What does the HTML anchor tag `<a>` define?

The HTML anchor tag `<a>` defines a hyperlink that links one page to another page. The `href` attribute is the most important attribute of the HTML anchor tag that determines the link’s destination. Search engines use the anchor tag to decide the subject matter of the destination URL.

```html
<a href = "..........."> Link Text </a> 
```



## What are ‘semantic elements’ in HTML5?

Semantic HTML provides meaning to the web page as opposed to just presentation. A `<p>` tag, for example, indicates that the enclosed text is a paragraph. This is both semantic and presentational as we as humans know what paragraphs are, and the browsers know how to display them.

On the other hand, tags such as `<b>` and `<i>` are not semantic markup. They only tell the browser how the text should look (bold or italic), and do not add meaning to the markup. In semantic HTML, these are replaced by `<strong>` for strong text and `<em>` for emphasized text respectively.

