import React from "react";
import './App.css';
class App extends React.Component {

  constructor(props){
  super(props)
  this.state={items:[], 
  loading:false
  }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items:response.results,
        loading:true
      })
      console.log("šis ir setState: "+this.setState);
      console.log("šis ir results: "+response);
      
    })
  }

  render(){

    var {items, loading}= this.state;
    console.log("This ir loading: "+loading);
    console.log("This ir items "+items);

 

    if(!loading){
      return(
        <div>Iesprūda...</div>
        
      )
    }
    else{

    return(    
      <div className="container">
        {items.map(item => (
        <div className="container2">
          <div >{item.gender}</div>
          <div >{item.name.title} {item.name.first} {item.name.last}</div>


        </div>
        
        ))}
        
      </div>)

  }}
}
export default App;
