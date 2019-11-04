import React from 'react';


class AddBuilding extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { addBuilding, data} = this.props;

		return (
			<form className="AddBuilding" onSubmit={event => {
				event.preventDefault()
			 	this.refs.name.value = ''
			 	this.refs.code.value = ''
			 	this.refs.address.value = ''
			 	this.refs.coordinateslat.value = ''
			 	this.refs.coordinateslong.value = ''
			}}>
			
				
				<input type="text" ref="name" placeholder="Name" />
				<input type="text" ref="code" placeholder="Code" />
				<input type="text" ref="address" placeholder="Address" />
				<input type="text" ref="coordinateslat" placeholder="Coordinates: Latitude"/>
				<input type="text" ref="coordinateslong" placeholder="Coordinates: Longitude"/>

 				
				

				<button onClick={() => { 
					addBuilding(this.refs.name.value, this.refs.code.value, this.refs.address.value, this.refs.coordinateslat.value, this.refs.coordinateslong.value)}}> Add Building</button>
			</form>


			);
	}
}
export default AddBuilding;
