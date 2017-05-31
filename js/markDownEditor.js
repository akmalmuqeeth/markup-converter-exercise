import React from 'react'
import ReactDOM from 'react-dom'
import MarkUpPreview from './MarkUpPreview'
import MarkUpEdit from './MarkUpEdit'

var MarkdownEditor = React.createClass({
    getInitialState : function() {
        return {
			newMarkUp: ''
        }
    },

    render: function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">
                        ReactJS Markdown Editor
                    </h1>
                    <MarkUpEdit handleChange={this.handleChange}  newMarkUp={this.state.newMarkUp}/>
                    <MarkUpPreview markUp={this.state.newMarkUp}/>
                </div>
            </div>
        )
    },
    handleChange: function (evt) {
        this.setState({
            newMarkUp: evt.target.value
        });
    }
})

export default MarkdownEditor