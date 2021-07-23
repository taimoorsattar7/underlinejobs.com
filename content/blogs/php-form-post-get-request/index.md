---
title: PHP: GET, POST, REQUEST method in submit form
description: GET and POST is the method of PHP. Send information in HTTP headers is POST, or send the data in the URL of website link is GET.
date: 2019-01-09T02:35:14.219Z
tags:
  - php
  - php form
  - php post
  - php get
featuredpost: false
featuredimage: php-form.jpg
---

There is two method for browser client to send information data to the web server.

- The GET Method
- The POST Method
- The Request Method

GET and POST is the method of PHP for submitting the form. The difference of two methods is that whether you want to send information in HTTP headers called POST method which is physically hidden to the user, or pass the data information in the URL of website link called GET method. Before the browser sends the information, it encodes it using a scheme called URL encoding. In this scheme, name/value pairs are joined with equal signs and different pairs are separated by the ampersand.

GET method can't be used to send binary data like images or attached files.

Information via POST method is invisible to the user and the information of names and values is send through the body of HTTP request. You can send as many information as you want.

Sending information(names and values) using GET method are visible to everyone and seen on the URL of the website. Since the variables are displayed in the URL that's why there is the limitation of sending data(about 2000 characters). The advantage of the GET method is that you are not required to submit the form; paste and visit the URL information added to access the variables. If you are working on sensitive data like user password; you should prefer to use GET method as it is visible to everyone.


```html
<form action="actionGet.php" method="get">
  Name: <input type="text" name="name" /><br /><br />
  Age: <input type="text" name="age" /><br /><br />
  <input type="submit" name="submit" value="Submit" />
</form>
```

```php
echo "Hi ".$_GET['name'].". ";
echo "You are ".$_GET['age']." years old.";[/formatc]
```

PHP request method contains the content of both POST and GET method; it also stores cookie information. It can be used to retrieve data from

```php
if( $_REQUEST["name"] || $_REQUEST["age"] ) {
  echo "Welcome ". $_REQUEST['name']. "<br />";
  echo "You are ". $_REQUEST['age']. " years old.";
  exit();
}
```

```html
<form action = "<?php $_PHP_SELF ?>" method = "POST">
  Name: <input type = "text" name = "name" />
  Age: <input type = "text" name = "age" />
  <input type = "submit" />
</form>
```

$_PHP_SELF called self-script in which it is being called, or the browser loads the same page and then receives the data and display the data on the browser screen.