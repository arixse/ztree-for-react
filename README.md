# ztree-for-react

[![Build Status](https://travis-ci.org/arixse/ztree-for-react.svg?branch=master)](https://travis-ci.org/arixse/ztree-for-react)  ![DUB](https://img.shields.io/dub/l/vibe-d.svg)


>对jQuery zTreeV3.x 插件做react封装
>>

# install 
```sh
npm install ztree-for-react --save-dev
```

# useage
```javascript
import React,{Component} from 'react';
import ReactZtree from 'ztree-for-react';
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
          <ReactZtree nodes={nodes} events={this.getEvents()} check={check} ref="ztree" treeName={'tree1'}/>
          <ReactZtree nodes={nodes} events={this.getEvents()} check={check} ref="ztree"/>
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
    //you can add treeName prop to set this treeObj to the window 
    console.log(window.ztree);
    /**
     * 
     * {tree1: {…}}
        tree1
        :
        {setting: {…}, addNodes: ƒ, cancelSelectedNode: ƒ, destroy: ƒ, expandAll: ƒ, …}
        __proto__
        :
        Object
     * /
  }
}
```

# quick start
```sh
npm install

npm start
```
open [http://127.0.0.1:3000](http//127.0.0.1:3000) in you browser

# component props
- **`treeName`** (string)
the global attribute name  
- **`nodes`** (required, object)
the zTreee Nodes data
- **`events`** (object)
the zTree Nodes event(the zTree callback setting)
- **`async`** (object)
to load zTree Nodes as async(the zTree async setting)
- **`check`** (object)
the zTree check setting(the zTree check setting)
- **`data`** (object)
the zTree data setting
- **`edit`** (object)
the zTree eidt setting
- **`view`** (object)
the zTree view setting

please go [jQuery zTree](http://www.treejs.cn/v3/api.php) to get more infomations!

# LICENSE
MIT
