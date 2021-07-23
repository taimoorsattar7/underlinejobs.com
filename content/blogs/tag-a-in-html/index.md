---
title: How webpage look at the ‹a› tag in HTML
description: <a> tag in HTML is mainly used for the call to action. When the user clicks the <a> tag it promotes to action. 
date: 2019-01-23T02:35:14.219Z
tags:
  - Remote Jobs
featuredpost: false
---


<a> tag in HTML is mainly used for the call to action. When the user clicks the <a> tag it promotes to action. <a> tag like undergo with 3 stages when the user clicks it.

*   unvisited link
*   visited link
*   active link

These 3 stages can be selected using CSS as explain in [button style effect](/blogs/css-button-style-with-hover-and-active-effects). There are different attributes of <a> tag in HTML which are discussed below and certain activities are done when clicks are done. We can also write multiple attributes in a single <a> tag.


```html
<a href="./HSL.png" download>Your Custom text or image.</a>
```

## Visit URL

**HREF** attribute is used to identify the different section in the URL. It mainly consists of two sections. One section is the URL of the document and second section is the anchor text by which clickable text.

```html
<a href="http://104.198.254.238">Underline Jobs</a>
```

There are different types of anchor text. Here is the list of anchor text. The **hreflang** attribute specifies the language of the document in the link.

```html
<a href="http://104.198.254.238" hreflang="en">Underline Jobs</a>
```

## Relation Between document

Here we will specify the relationship with current document and linked document. The **nofollow** attributes are used by the search engine link Google to specify that search spider does not follow that link. To get SEO advantage many of the people do spam comments to link their website, nofollow tells the search engine not to follow that link. 

```html
<a rel="nofollow" href="http://104.198.254.238">Underline Jobs</a>
```

The **next** and **prev** attributes 

```html
<a rel="next" href="https://www.underlinejobs.com/next">NEXT</a>
<a rel="prev" href="https://www.underlinejobs.com/previous">PREVIOUS</a>
```

```html
<a rel="license" href="https://www.underlinejobs.com/license">Document license</a> <a rel="help" href="https://www.underlinejobs.com/help">Document help</a>
```

## Contact Link

We can use a tag in HTML for contact call to action. We contact people by their phone number and email address. It is better to write attributes because it allows people to contact by just clicking the links text. It saves people time to manually typing the number.

```html
<address> <a href="mailto:sample@email.com">sample@email.com</a> <a href="tel:1231231234">123-123-1234</a> <address>
```

Enclose the contact in <address> tag of HTML because it is good for SEO purpose and maintain the hierarchy. The <address> tag defines the contact information for the author/owner of a document or an article.

## Target the linked webpage

Opens the linked document in a new window or tab. <a href="https://www.underlinejobs.com/" target="\_blank">Underline Jobs</a>

*   **\_self** Opens the linked document in the same frame as it was clicked (this is default)
*   **\_parent** Opens the linked document in the parent frame
*   **\_top** Opens the linked document in the full body of the window
*   **frame name** Opens the linked document in a named frame