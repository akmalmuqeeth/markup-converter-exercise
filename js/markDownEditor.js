import React from 'react'
import ReactDOM from 'react-dom'
import MarkUp from './markUp'

var MarkdownEditor = React.createClass({
    getInitialState : function() {
        return {
            newComment: ''
        }
    },

    render: function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">
                        ReactJS Markdown Editor
                    </h1>
                    <div className="col-xs-12 col-sm-6">
                        <h3>Markdown</h3>
                        <textarea ref={ (comment) => {this.newComment = comment} } onChange={this.handleChange} className="markdown">{this.props.comment}</textarea>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h3>Preview</h3>
                        <div id="preview">
                            <MarkUp comments={this.state.newComment}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    handleChange: function (evt) {
        this.setState({
            newComment: evt.target.value
        });
    }
})

export default MarkdownEditor