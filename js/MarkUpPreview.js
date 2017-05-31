import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class MarkUp extends Component {
  constructor(props) {
    super(props);
  }

  getMarkdownText(value) {
    var rawMarkup = marked(value, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <h3>Preview</h3>
        <div id="preview">
          <div className="row">
            <div dangerouslySetInnerHTML={this.getMarkdownText(this.props.markUp)} />
          </div>
        </div>
      </div>
    );
  }
}

export default MarkUp;
