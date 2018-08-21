import React , {Component} from 'react';

class gameComponent extends Component{
	constructor(props) {
     	const valuesArray =  this.generateNewQuestion();
      	this.state = {
        	value1: valuesArray[0],
          	value2: valuesArray[1],
          	value3: valuesArray[2],
          	proposedAnswer: valuesArray[4] 
        }
    }
  
  	
}