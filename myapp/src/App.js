import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data,
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText:value
    }) }

  

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding:id
    });
  }

  addBuilding(name, code, address, coordinateslat, coordinateslong){
    const dataSet = this.props.data;
   dataSet.push({id: dataSet[dataSet.length-1].id + 1, name:name, code: code, address: address, coordinates: {latitude: coordinateslat, longitude: coordinateslong}})
    this.setState({
      data: dataSet
    })
  }

  removeBuilding(id){
    let index = this.props.data.findIndex(x => x.id === id);
    const oData = this.props.data;
    const sData = oData.splice(index,1);
    this.setState({
      data: sData
    })
    console.log(index);

  }


  render() {
    
    return (
      <div className="bg">
        <div className="header">
          <h1>UF Directory App</h1>
        </div>
          <Search 
           filterVal={this.props.filterText}
          filterUpdate={this.filterUpdate.bind(this)} />
         
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filter={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data = {this.props.data}
              id = {this.state.selectedBuilding}
              selectedUpdate={this.selectedUpdate.bind(this)}
             
              />
              <b></b>
        <div className="column3">
              <RemoveBuilding 
              data = {this.props.data}
              id = {this.state.selectedBuilding}
              selectedUpdate={this.selectedUpdate.bind(this)}
              removeBuilding={this.removeBuilding.bind(this)}
              />
        
            </div>

             <div className="column4">
            <i> Add Building </i>
              <AddBuilding 
              addBuilding={this.addBuilding.bind(this)}
              />
              
          </div>
            </div>
             
           
          <Credit />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
