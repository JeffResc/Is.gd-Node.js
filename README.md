# Is.gd
[http://is.gd](http://is.gd) URL Shortener Node.js Module

Example Shorten:

First run ```npm install isgd``` to install the Is.gd package to your system.

```javascript
var isgd = require('isgd');

isgd.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://is.gd/OwycZW
});
```