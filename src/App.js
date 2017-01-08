import React, { Component } from 'react';
import styles from './styles/layout.css';
import ReactZtree from './ztree-for-react';
const nodes= [
	{name: "父节点1",
    id:0,
     children: [
		{name: "子节点1",
    id:1},
		{name: "子节点2",id:2,children:[
      {name:"子节点3",id:3}
    ]}
	]}
];

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactZtree nodes={nodes} events={this.getEvents()}/>
      </div>
    );
  }
  getEvents(){
    return {
      'onClick':this.handleClick
    }
  }
  handleClick(event,treeId,treeNode){
    console.log(treeNode);
  }
}
