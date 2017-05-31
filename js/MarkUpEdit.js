import React, {Component} from 'react'

class MarkUpEdit extends Component {
	render(){
		const {handleChange, newMarkUp} = this.props;
		return (
			<div className="col-xs-12 col-sm-6">
				<h3>Edit your markup</h3>
				<textarea onChange={ (event) => { handleChange(event) } } className="markdown" value={newMarkUp}></textarea>
			</div>
		)
	}
}

export default MarkUpEdit