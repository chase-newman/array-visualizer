import React from 'react';
import ArrayBuilder from './Components/ArrayBuilder/ArrayBuilder';
import './App.css';

class App extends React.Component {
  state = {
    randArr: [],
    counter: 0,
    colorCounter: 0
  }
  

  
  componentDidMount() {
    let addNum = () => {
      if(this.state.counter < 30) {
            let object = {}
            let num = Math.floor(Math.random() * 30);
            if(num === 0) {
              num = Math.floor(Math.random() * 30);
            } else {
                let array = this.state.randArr;
                object = {
                  randNum: num,
                  color: "#6699ff"
                }
                array.push(object);
                this.setState(prevState => {
                return ({
                  counter: prevState.counter + 1,
                  randArr: array
                });
              });        
            }               
          } else {
            console.log("counter is greater than 20");
            clearInterval(this.intervalID);
          }
        }
    
    this.intervalID = setInterval(addNum, 100);
  }


  sortArrayHandler = () => {
    let newArray = this.state.randArr.sort((a, b) => a.randNum - b.randNum);
    this.setState({
      randArr: newArray
    })
  }
  
  generateNewArrayHandler = () => {
      this.setState({
        randArr: [],
        counter: 0
      });
      let addNum = () => {
      if(this.state.counter < 30) {
            let object = {}
            let num = Math.floor(Math.random() * 30);
            if(num === 0) {
              num = Math.floor(Math.random() * 30);
            } else {
                let array = this.state.randArr;
                object = {
                  randNum: num,
                  color: "#6699ff"
                }
                array.push(object);
                this.setState(prevState => {
                return ({
                  counter: prevState.counter + 1,
                  randArr: array
                });
              });        
            }               
          } else {
            console.log("counter is greater than 20");
            clearInterval(this.intervalID);
          }
        }
        this.intervalID = setInterval(addNum, 100);
      }
  
  arrayColorHandler = () => {
    
    this.setState({colorCounter: 0})
    let changeColor = () => {
      if(this.state.colorCounter < this.state.randArr.length) {
        let num = this.state.randArr[this.state.colorCounter].randNum;
        let newObject = {randNum: num, color: "#ff5050"} 
        let newArray = this.state.randArr
        newArray.splice(this.state.colorCounter,1,newObject)
        console.log(newArray);
        this.setState(prevState => {
          return({
            randArr: newArray, 
            colorCounter: prevState.colorCounter + 1
          });
        });        
      } else {
          clearInterval(this.colorID);
        }
      }
    this.colorID = setInterval(changeColor, 100);
  }

    
  render() {
    let array = this.state.randArr.map((el, index) => {
      
      return <ArrayBuilder 
                key={index} 
                arrayHeight={el.randNum}
                arrayColor={el.color}
                />
    })
    
    return (
      <div className="App">
        {array}
        <div>
          <button onClick={this.sortArrayHandler}>Sort Array</button>
          <button onClick={this.generateNewArrayHandler}>Generate New Array</button>
          <button onClick={this.arrayColorHandler}>Color Array</button>
        </div>
      </div>
    );    
  }

}

export default App;
