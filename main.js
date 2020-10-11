
import {createElement, render, Component} from "./toy-react";

class Mycomponent extends Component{
    render(){
        return <div>
                <h1>my component</h1>
                  {this.children}
             </div>
    }
}


render(<Mycomponent id="a" class="a11">
    <div>abc</div>
    <div></div>
    <div></div>
    </Mycomponent>, document.body);
