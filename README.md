# Isomorphic CSS

This is a styling framework agnostic way of gathering up all the css you use in your app. Useful if you're building static versions of your sites.

It uses a higher order component that adds a `pushCss()` method to each of your components.

## Usage

Wrap your rendering method in The `IsomorphicCss` higher order component and pass it an array, this array will gather up strings of your css.

```js
import IsomorphicCss from 'isomorphic-css'

//...
var cssArray = []
var appHtml = renderToString(<IsomorphicCss cssArray={cssArray}>
	<MyReallyAwesomeApp />
</IsomorphicCss>)
// Concatenate your css into one string
var appCss = cssArray.join('')

// You might use it to generate page markup
var myStaticPageHtml = `<!DOCTYPE html>
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

To populate the css array you need to call pushCss inside your components.

Here's a simple example.
```js
class App extends Component {

  static contextTypes = {
    pushCss: React.PropTypes.func,
  };

  componentWillMount = () => {
    this.context.pushCss(sheet.toString())
    // sheet.toString() is an example of jss code, but you can use whatever styling provider you like, pushCss just accepts a string of css.
  };

  //...
}
```

It doesn't matter if you call pushCss multiple times with the same css string duplicates will be ignored. This is useful when you're using components more than once.

That's it!

## Troubleshooting
#### My client code throws a pushCss run time error, what gives ?!?
Unless you wrap your client code in the same `<Isomporphic />` component the `pushCss` method won't be available in the context, this is effectively just providing a noop to avoid runtime errors. Alternatively you can do checks to see if your on the server before called pushCss.
