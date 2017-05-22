// https://evdokimovm.github.io/javascript/reactjs/localstorage/webstorage/2016/08/27/reactjs-markdown-editor-step-by-step.html
var MarkUp = React.createClass({

	getMarkdownText() {
		var rawMarkup = marked('This is _Markdown_.', {sanitize: true});
		return { __html: rawMarkup };
	},

	render : function(){
		return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
	}
});


var MarkdownEditor = React.createClass({

	render: function(){
		return (
			<div className="container-fluid">
				<MarkUp/>
				<div className="row">
					<h1 className="text-center">
						ReactJS Markdown Editor
					</h1>
					<div className="col-xs-12 col-sm-6">
						<h3>Markdown</h3>
						<textarea  className="markdown"></textarea>
					</div>
					<div className="col-xs-12 col-sm-6">
						<h3>Preview</h3>
						<div id="preview">
						</div>
					</div>
				</div>
			</div>
		)
	}
})

ReactDOM.render(<MarkdownEditor/>, document.getElementById('app'))