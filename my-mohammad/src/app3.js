import React, { Component } from 'react';
import Comp1 from './componens/tamrin'
import stylet from "styled-components"
import Pic1 from "./pic/picture/pic1.jpg"
import Pic2 from "./pic/picture/pic2.jpg"
import Pic3 from "./pic/picture/pic3.jpg"
import Pic4 from "./pic/picture/pic4.jpg"
import "./style/style.css"


const DIV = stylet.div`
background:${(props) => (props.flag ? 'rgb(69, 138, 234)' : 'wihte')};
 
    width:90%;
    height:40px;
    margin:0 auto;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color:${(props) => (props.flag ? 'white' : 'black')};
    text-align: center;
    border-radius:${(props) => (props.flag ? '0' : '0 0 5px 5px')}
    
    

`
const DIV2 = stylet.div`
background:white;
    width:90%;
    height:500px;
    margin:0 auto;
   display: ${(props) => (props.flag ? 'flex' : 'none')};
    justify-content: space-around;
    border: 1px solid black;
    text-align: center;
    overflow: hidden;
   

`
const DIV3 = stylet.div`
transform:rotate( ${(props) => (props.flag ? '180deg' : '0deg')});
margin-right: 10px;
text-align: center;
`

class compnew extends Component {
    constructor() {
        super()
        this.state = {
            flag: false
        }
    }

    changestate = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <>

                <DIV on onClick={this.changestate} flag={this.state.flag}>
                    <div>Digital products</div>
                    <DIV3 flag={this.state.flag}>&or;</DIV3>
                </DIV>
                <DIV2 flag={this.state.flag} >
                    <Comp1 pic={Pic1} title="Product_1" baha="230" > محصول از گوشت تازه ماهی</Comp1>
                    <Comp1 pic={Pic2} title="Product_2" baha="410" > محصول از گوشت تازه ماهی</Comp1>
                    <Comp1 pic={Pic3} title="Product_3" baha="32" > محصول از گوشت تازه ماهی  </Comp1>
                    <Comp1 pic={Pic4} title="Product_4" baha="75" > محصول از گوشت تازه ماهی</Comp1>


                </DIV2>
            </>
        );
    }
}

export default compnew;