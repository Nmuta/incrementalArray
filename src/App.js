import logo from './logo.svg';
import './App.css';
import Map from './map';
import React from 'react';


const items = [
  {id: 234, location: "Munich"},
  {id: 235, location: "Stuttgart"},
  {id: 267, location: "Berlin"},
  {id: 346, location: "City3"},
  {id: 399, location: "adsfadsf"},
  {id: 456, location: "asaafdfadfs"},
  {id: 490, location: "gloasfd"},
  {id: 599, location: "didmdm"},
  {id: 834, location: "alafas"},
];


class App extends React.Component {

  state = {upperLimit: 2, lowerLimit: 0, allStationsLoaded: false, locations: []};
  interval = null;

  componentDidMount(){
    this.interval = setInterval(() => {
      this.getMoreStations();
    },4000);

  }

  getMoreStations = () =>{
  
    if (this.state.upperLimit >= items.length){
      console.log("limit")
      this.setState({allStationsLoaded: true});
      this.interval = null; // cancel the interval 
      return;
    } else if(this.state.allStationsLoaded == false){
      console.log("loading more", this.state.lowerLimit, this.state.upperLimit)
      this.setState({upperLimit: this.state.upperLimit + 2, 
                     lowerLimit: this.state.lowerLimit+2,
                     locations: items.slice(0,this.state.upperLimit)});

    }
  }

  render () {

    return(
    <div className="full">
      <Map items={this.state.locations} />
    </div>)
}
}

export default App;
