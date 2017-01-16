# ztree-for-react

[![Build Status](https://travis-ci.org/arixse/ztree-for-react.svg?branch=master)](https://travis-ci.org/arixse/ztree-for-react)
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
        <ReactZtree nodes={nodes} events={this.getEvents()}/>
      </div>
    );
  }
  getEvents(){
    return {
      'onClick':this.handleNodeClick
    }
  }
  handleNodeClick(event,treeId,treeNode){
    console.log(treeNode);
  }
}
```

# run example
```sh
npm install
```

```sh
npm start
```
open [http://127.0.0.1:3000](http//127.0.0.1:3000) in you browser

# component props
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

#LICENSE
MIT
