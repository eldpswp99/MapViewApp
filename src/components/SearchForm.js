import React from "react";

class SearchForm extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			search : undefined
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e){
		this.setState({
			search : e.target.value
		});
	}
	
	handleSubmit(e){
		e.preventDefault();
		
		this.props.action(this.state.search);
		
		this.setState({
			search : ""
		})
	}
	
	render(){
		const {search} = this.state;
		
		return (
			<form className = "searchform" onSubmit = {this.handleSubmit}>
				<input placeholder = "검색" value = {search} onChange = {this.handleChange} />
			</form>
		)
	}
}

export default SearchForm;