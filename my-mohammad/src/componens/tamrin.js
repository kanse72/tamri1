import React, { Component } from 'react';
import "../style/style.css"

class comp1 extends Component {
  constructor(){
    super()
    this.state={
        flag:false
    }
   }

   changestate=()=>{
    this.setState({
        flag:!this.state.flag
    })
   }
    render() {
        const{pic,title,baha,children}=this.props
        return (
      <div className='box1'>
      <img src={pic}/>
      <h2>{title}</h2>
      <h2> <mark>{baha}$</mark></h2>
      <div> {children}</div>
      <h2 onClick={this.changestate}>{this.state.flag?(<h2>&#10084;&#65039;    </h2> ):(<h2> &#129293;</h2>)}</h2>
      
      
      </div>
        );
    }
}

export default comp1;