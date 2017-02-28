import React, { Component } from 'react'

class IsomorphicCss extends Component {

	static childContextTypes = {
		pushCss: React.PropTypes.func,
	};

	static propTypes = {
		cssArray: React.PropTypes.array,
  };

  static defaultProps = {
  	cssArray: [],
  };

	constructor(props, context) {
    super(props, context)
  };

	getChildContext = () => {
    return { 
    	pushCss: this.pushCss,
    }
  };

  pushCss = (css) => {
  	const { cssArray } = this.props
  	if (cssArray.indexOf(css) == -1)
  		cssArray.push(css)
  };

	render = () => {
		return React.Children.only(this.props.children)
	};
}

export default IsomorphicCss