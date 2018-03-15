# Audit Bootstrap Documentation site

Test details:
* Network throttle: Slow 3G
* Cache: disabled

***
## CSS
First of all, I checked in Chrome Dev tools how many request are recorded. I found out that the CSS files (especially the bootstrap.css) are taking too long, with a time of 7.40s.

![alt text](https://github.com/s44s/performance-matters/blob/minify-css/src/images/screen2.png "Screen")

I decided to minify the three CSS files. Tool: https://cssminifier.com/ And this was the result:

![alt text](https://github.com/s44s/performance-matters/blob/minify-css/src/images/screen1.png "Screen")

So, minifying the CSS files saved 1.31sec.

***

## Custom fonts
Declan told us that they saved ~65% in custom web font file size using font subsetting. So I wanted to do the same for this site to see if I will get the same result. I started with subsetting the custom fonts. Tool: https://www.fontsquirrel.com/tools/webfont-generator

The weird thing I found out is that you can't pick the .woff, .woff2 and .svg font types. So I subset the font files that are able to generate. I downloaded the kit and this was the result:

![alt text](https://github.com/s44s/performance-matters/blob/custom-fonts/src/images/screen3.png "Screen")

I replaced the old .woff and .woff2 files for the subsetting files.


Secondly, I checked if the fonts only uses the font types .woff and .woff2. Other font types (.eot, .ttf, .otf) have been deleted.

The result:
* sourcesanspro-regular.woff2
(9.47sec & 75.3kb > 3.11sec & 26.8kb)

* sourcesanspro-light.woff2
(11.70sec & 74.5kb > 6.18sec & 26.3kb)

Before:
![alt text](https://github.com/s44s/performance-matters/blob/custom-fonts/src/images/before.png "Screen")

After:
![alt text](https://github.com/s44s/performance-matters/blob/custom-fonts/src/images/after.png "Screen")

***
## Javascript
With the tool: https://jscompress.com/ I minified two Javascript files. This is the result:

* bootstrap.js (5.39sec > 3.95sec)
* ie10-viewport-bug-workaround.js (2.08sec > 2.08sec)

Before:
![alt text](https://github.com/s44s/performance-matters/blob/minify-js/src/images/JS-before.png "Screen")

After:
![alt text](https://github.com/s44s/performance-matters/blob/minify-js/src/images/JS-after.png "Screen")

***
## Images

On the homepage there are 7 different images. By using a simple compression method, the page will load faster. Tool: https://tinypng.com/
This results into a 57% compression.

![alt text](https://github.com/s44s/performance-matters/blob/images/src/images/tinypng.png "Screen")

You can see this compression in the site as well.

Before:
![alt text](https://github.com/s44s/performance-matters/blob/images/src/images/img-before.png "Screen")

After:
![alt text](https://github.com/s44s/performance-matters/blob/images/src/images/img-after.png "Screen")
