import React,{Component} from 'react'
import MarkUpPreview from './MarkUpPreview'
import MarkUpEdit from './MarkUpEdit'


class MarkUpContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
			newMarkUp: ''
		}

		this.handleChange = this.handleChange.bind(this);
    }

	handleChange(evt){
		this.setState({
			newMarkUp: evt.target.value
		});
    }

    render(){
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
    }
}

export default MarkUpContainer