import React, { Component } from 'react';
import ReactZtree from '../lib/ztree-for-react';
const nodes= [
	{name: '父节点1',
    id:0,
     children: [
		{name: '子节点1',
    id:1},
		{name: '子节点2',id:2,children:[
      {name:'子节点3',id:3}
    ]}
	]}
];
const check={
  enable:true
}
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTree:true
    }
  }
  render() {
    const tree = this.state.showTree?(
      <div>
      <ReactZtree nodes={nodes} events={this.getEvents()} check={check} ref="ztree" treeName={'tree1'}/>
      <ReactZtree nodes={nodes} events={this.getEvents()} check={check} ref="ztree"/>
      </div>
    ):null
    return (
      <div>
        {tree}
      </div>
    );
  }
  getEvents(){
    return {
      'onClick':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)},
      'onCheck':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)}
    }
  }
  handleClick(event,treeId,treeNode){
    console.log(treeNode);
    console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  handleCheck(event,treeId,treeNode){
    console.log(treeNode);
  }
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({
    //     showTree:false
    //   })
    // },2000)
  }
}
