import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'


class MarkUp extends React.Component {
    constructor(props) {
        super(props)
    }

    getMarkdownText(value) {
        var rawMarkup = marked(value, {sanitize: true});
        return { __html: rawMarkup };
    }

    render(){
        return (
            <div className="row">
                <div dangerouslySetInnerHTML={this.getMarkdownText(this.props.comments)} />
            </div>
        )
    }

}

export default MarkUp