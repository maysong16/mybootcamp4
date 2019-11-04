import React from 'react';


class RemoveBuilding extends React.Component {
render() {

	const {data, id, removeBuilding} = this.props;

	const selectedBuilding = data.filter(directory => {return directory.id === id})[0]

		return (
			
		
			<button class="button" onClick={() => { 
					removeBuilding(selectedBuilding.id)}}> Remove Selected Building</button>
		);
	}
}


export default RemoveBuilding;
