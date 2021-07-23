---
title: Web Typography, Text and font in CSS
description: Web Typography is how text appears on the website. It maintains balance, hierarchy, white space and good design.
date: 2019-01-21T02:35:14.219Z
tags:
  - typography
  - font
  - text
  - css
featuredpost: false
---

Web Typography is how text appears on the website. It maintains balance, hierarchy, white space and good design. We can use CSS properties to affect the web typography out of the font like. As good typography design, the user is more comfortable with your product.

## Font family

A font family is a set of fonts that have a common design. Fonts within a family differ in weight (light, normal, bold, semi-bold, etc.) and the style (roman, italic and oblique etc.). We define font family in CSS like this

```css
.text{
  font-family: Helvetica, Arial, sans-serif;
}
```

The first item in the list is the default; the rest are used as fallbacks. If Helvetica is not font on the local computer, it looks for Arial font, as Arial font is not found it looks for sans-serif font. Common Categories of the font are

*   Serif
*   Sans Serif
*   Display
*   Handwriting
*   Monospace

[![Font Family](./font-family.jpg)

Good resources to download font are mention below

*   [Font Squirrel](https://www.fontsquirrel.com/)
*   [Google Fonts](https://fonts.google.com/)

## Font Weight

Font-weight specifies you the weight or boldness of the font. Different font-family comes with different font-weight. Common font-weight is as follow.

*   Black
*   Bold
*   Regular
*   Light
*   Thin

[![Font Weight](./font-weight.jpg)](./font-weight.jpg)

In CSS, we define font weight like this 

```css
.text{
  font-family: Helvetica, Arial, sans-serif;
}
```

## Font Style

Different fonts have different styles within their families. These fonts styles usually define the bending or slant of the font. There are commonly three types of fonts styles.

*   Normal - Displays font a normal style or straight.
*   Italic - Displays font an italic style or bent.
*   Oblique - Displays an oblique style or slant.

There is another property in CSS which is **initial font style** which sets this property to its default value. [![Font Style](./font-style.jpg)](./font-style.jpg) Check different [font style here](https://www.w3schools.com/cssref/playit.asp?filename=playcss_font-style).

## Font size

Font size is defined as the height of the font. You can either define the font height in pixel(px), point(pt) or in percentage(%). Percentage(%) define the size increase or decrease with respect to the default position. [![Font Size](./font-size.jpg)](./font-size.jpg) Too small font size is not good for readability perspective. Case study shows that 10px - 12px is good for readability.

## Line-height

line-height in CSS control the spacing between the line of text. Below you can see the spacing of different paragraph with different line height. [![line height in css](./line-height.jpg)](./line-height.jpg) In CSS it is defined as:


```css
.text{
  line-height: 1.4;
}
```

## Letter spacing in CSS

Letter spacing in CSS controls the spacing with respect to the letter. Below you can see the spacing of letter for different lines. In CSS it is defined as:

```css
.text{
  letter-spacing: 4px;
}
```

## Word Spacing in CSS

Word spacing differ with the letter spacing in such a way it applies gaps between the words. In CSS it is defined as:

```css
.text{
  word-spacing: 50px;
}
```

A little difference between word and letter spacing is that Letter spacing applies to gaps between letter and word but word spacing only applies to word gap.

##Text Indent

Text-indent defines the indentation of the first line of text block or paragraph. [![Text Indent](./text-indent.jpg)](./text-indent.jpg)

## Text Shadow

Text Shadow adds the shadow to the object. It is often used to apply depth to the text. For example, if your image background and text color do not make contrast then text-shadow is often handy. In CSS it is defined as

```css
.text{
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
}
```

## Color in Font

Color defines the visual aspect of color. Below image show different color present rainbow in text. [![Rainbow color](./Rainbow-color.jpg)](./Rainbow-color.jpg) In CSS you have a different range of color.


```css
.text{
  color:rgb(255, 99, 71);
  color:#ff6347;
  color:hsl(9, 100%, 64%);
  color:rgba(255, 99, 71, 0.5);
  color:hsla(9, 100%, 64%, 0.5);
}
```