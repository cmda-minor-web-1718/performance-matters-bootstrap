# Loading font.
A part of critical css.

## Loading the custom font later.
With this piece of code it will be will focus on the  html rendering. When its done it will add a class to render  
the font.
```

  var font = new fontfaceobserver('source_sans_pro')
  var html = document.documentElement

  font.load().then(function(){
    html.className += 'fonts-loaded'
  })

```
