---
title: 3 CSS button style with hover and active effects
description: The button is the action things on the website. We the user clicks the button it promote to action. Good buttons give a neat and cleaner look to your website. We use CSS hover and active effects to create good-looking button.
date: 2019-01-23T02:35:14.219Z
tags:
  - CSS
  - CSS button
  - CSS style
  - hover effects
  - active effects
featuredimage: CSS-button.jpg
featuredpost: false
---

Button is the action things on the website and important part of front-end development. We the user clicks the button it promote to action. Good buttons give a neat and cleaner look to your website. We will divide the styling of buttons into 3 steps:

*   When user see the button and does not hover on it.
*   When user see the button and hover on it.
*   When user see the button and click on it.

We use SUDO selector to handle 3 types of CSS styling effects of the button. We will be creating 3 buttons in the blog post

*   Flat CSS button
*   Gradient CSS Button
*   Border CSS button

## Flat CSS button

Flat CSS button are use in many website and are just plain color button In order to make this button, paste this line of code in HTML file. 

```html
<div class="flat-button">Flat CSS Button</div>
```

```css
.flat-button {
	font-weight: bold;
	display: inline-block;
	padding: 10px 15px;
	cursor: pointer;
	background-color: #E51A1A;
	color: white;
}

.flat-button:hover {
	background-color: #C11515;
}

.flat-button:active {
	color: #FFB2B2;
}
```

## Gradient CSS Button

In order to create gradient CSS button, you first have to choose your gradient color for your button. One option is to choose gradient color manually or select it from [uigradients](https://uigradients.com/) or [colorzilla gradient editor](http://www.colorzilla.com/gradient-editor/) website. In this file, we will be creating a CSS gradient button such that whenever user click over the button the gradient color changes and when user click to the button the button text color changes. In order to make a CSS gradient button, paste this line of code in the HTML file.

```html
<div class="gradient-button">Gradient CSS Button</div>
```

```css
.gradient-button {
	font-weight: bold;
	display: inline-block;
	padding: 10px 15px;
	cursor: pointer;
	background-image: linear-gradient(to bottom, #EFAE71, #C20000);
	color: white;
}

.gradient-button:hover {
	background-image: linear-gradient(to bottom, #733E0D, #B20000);
}

.gradient-button:active {
	color: #FFB2B2;
}
```

## Border CSS button

Border CSS button is also used in most of the websites. In this button, whenever the user hovers over the button the color at the border of the button become the background color of the button. In order to make this button, paste this line of code in the HTML file.

```html
<div class="border-button">Border CSS Button</div>
```

Paste this code in CSS file 

```css
.border-button {
	font-weight: bold;
	display: inline-block;
	padding: 10px 15px;
	cursor: pointer;
	border: 4px solid #E51A1A;
	color: black;
}

.border-button:hover {
	transition: 0.3s all;
	border: none;
	border: 4px solid white;
	background-color: #E51A1A;
	color: white;
}

.border-button:active {
	color: #FFB2B2;
}
```

If you like this post, Check out our similar post:

*   [Animation with CSS](http://104.198.254.238/blogs/css-keyframe-animation-without-using-javascript/)

👏