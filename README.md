# Isomorphic CSS

This is a framework agnostic way of gathering up all the css you use in your app.
Useful if you're building static versions of your sites.

It uses a higher order component that adds a `pushCss()` method to the context.

Wrap your rendering method in The `IsomorphicCss` higher order component.

Everytime you call pushCss if the css doesn't yet exist it gets collected in 
an array to use later.

```js
import IsomorphicCss from 'isomorphic-css'

//...
var cssArray = []
var appHtml = renderToString(<IsomorphicCss cssArray={cssArray}>
	<MyReallyAwesomeApp />
</IsomorphicCss>)
var appCss = cssArray.join('')

return `<!DOCTYPE html>
	<html>
	  <head>
			<style id="my-css">${appCss}</style>
	  </head>
	  <body>
	  	<div id="my-app">${appHtml}</div>
	  </body>
	</html>`
//...
```