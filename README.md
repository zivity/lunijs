# Lunicorn!
###### handling iframes with grace and chill.

## installing

download the packaged files in /dist (.min.js should work, but may be buggy)
these files contain pym.js, so if your project already includes pym, you'll want to build an alternate.

or

you could npm at the github version of the module if you play that way.

## using
```html
<script src='lunicorn-0.1.0.js'></script>
<div id="gimme-an-iframe"></div>

<script>
  var domId="gimme-an-iframe" //domId sans #
  var url="luncicorn.biz/external_widget/datusertho")
  
  Luncicorn.createIframe(domId, url)
<script>
```

### et VIOLA!



#### Todo:
- We still have to make the flash messaging stuff work off of ziv.
- We should probably have it give a userId, rather than url
