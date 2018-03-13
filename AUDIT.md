# Audit

## Step 1: Minifying css
I noticed that the CSS was blocking, and https://developers.google.com/speed/ indicated that minifying the css would improve the rendering
![before-minifying](auditimg/before-minified-css.png)
Statistics: 
* Fonts.css 2.01s
* bootstrap.css 7.37s
* docs.css 3.73s
> First render 7.47s

![after-minifying](auditimg/css-after-minification.png)
Statistics: 
* Fonts.min.css 2.04s(+0.03s)
* boostrap.min.css 6.753s
* docs.min.css 3.27s
> First render 6.87s

So, minifying the CSS had a positive impact on both the overall rendering as the initial render  

## Step 2: Minifying images
Tool used to minify: https://tinypng.com/
![before-minifyin-img](auditimg/before-minified-images.png)
Statistics: 
* expo-lyft.jpg 2.08s
* expo-vogue.jpg 2.05s
* expo-riot.jpg 2.08s
* expo-newsweek.jpg 2.11s
> First render 6.87s
Total time: 30.34s  

![after-minifyin-img]
(auditimg/b4-images.png)
Statistics:
* expo-lyft.jpg 2.11s
* expo-vogue.jpg 2.11s
* expo-riot.jpg 2.11s
* expo-newsweek.jpg 2.11s
> First render 6.83s
Total time: 22.18s  
This one i don't fully understand, even though the image times didn't go down drastically, the total time did. The render time also slightly improved. Not that relevant for the first render.