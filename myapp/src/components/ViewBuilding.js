import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class ViewBuilding extends React.Component {

	render() {
		const {data, id} = this.props;

		const selectedBuilding = data.filter(directory => {return directory.id === id})[0]

		let output = ''
		if (selectedBuilding) {
			output =
			
			<div>
				<p>
					<b>Name:</b> {selectedBuilding.name}
					<br/>
					<b>Code:</b> {selectedBuilding.code}
					<br/>					
					{selectedBuilding.address ? <div><b>Address:</b> {selectedBuilding.address}  </div> : ''}
					
					{selectedBuilding.coordinates ? <div> <b>Coordinates:</b> {selectedBuilding.coordinates.latitude}, {selectedBuilding.coordinates.longitude} </div> : ''}
				</p>
				
			</div>
		} else {
			output = <i>Click on a name to view more information</i>
		}
		
		return (
			<div>
					{output}
			</div>
		);
	}
}
export default ViewBuilding;
