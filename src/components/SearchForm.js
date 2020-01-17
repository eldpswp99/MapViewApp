import React from "react";
import "./SearchForm.css";

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
				<div className = "search">
					<input placeholder = "매장 검색" value = {search} onChange = {this.handleChange} />
					<button type = "submit">검색</button>	
				</div>
			</form>
		)
	}
}

export default SearchForm;