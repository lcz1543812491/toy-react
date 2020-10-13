
import {createElement, render, Component} from "./toy-react";

class Mycomponent extends Component{
    constructor(){
        super();
        this.state = { a:1, b:2}
    }
    render(){
        return <div>
                <h1>my component</h1>
               <button onclick={() => { this.setState( {a: this.state.a + 1}) }}>add</button>
                <span>{this.state.a.toString()}</span>
             </div>
    }
}


render(<Mycomponent id="a" class="a11">
    <div>abc</div>
    <div></div>
    <div></div>
    </Mycomponent>, document.body);
