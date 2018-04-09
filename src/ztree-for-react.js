import React,{Component} from 'react';
import $ from 'jquery';
import 'ztree';
let ztreeIndex=0;
export default class ReactZtree extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.renderZtreeDom();
  }
  componentDidUpdate(){
    this.renderZtreeDom();
  }
  componentWillUnmount(){
    this.ztreeObj && this.ztreeObj.destroy();
  }
  renderZtreeDom(){
    let ztreeObj = this.ztreeObj=$.fn.zTree.init(this.getTreeDom(),this.getTreeSetting(),this.props.nodes);
    return ztreeObj;
  }
  getTreeDom(){
    return $(this.refs.ztree);
  }
  getTreeSetting(){
    let props=this.props;
    return {
      treeId:props.treeId,
      treeObj:props.treeObj,
      async:props.async,
      callback:props.events,
      check:props.check,
      data:props.data,
      edit:props.edit,
      view:props.view
    }
  }
  getTreeObj(){
    return this.ztreeObj;
  }
  render(){
    return (
      <div className="ztree" ref="ztree" id={`ztree_${ztreeIndex++}`}>

      </div>
    )
  }
}
