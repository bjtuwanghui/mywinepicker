 import React from 'react';
import { Tag } from 'antd';
import { connect } from 'dva';
import "./WineFilterBoard.less";

class WineFilterBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const wineboard = () => {
      var ARR = [];
      for (var k in this.props.filter) {
        //对于遍历的结果进行分类讨论  按需加载 显示 上树
        if (k == "type") {
          var value = this.props.filter["type"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["type"] }) }}>
              <span className="colorset">设计类型:</span>
              {value.join(" 或 ")}

            </Tag>
          );
        } else if (k == "target") {
          var value = this.props.filter["target"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["target"] }) }}>
              <span className="colorset">目标酒品:</span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "material") {
          var value = this.props.filter["material"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["material"] }) }}>
              <span className="colorset">产品材质: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "color") {
          var value = this.props.filter["color"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["color"] }) }}>
              <span className="colorset">主要颜色: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "height") {
          var value = this.props.filter["height"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["height"] }) }}>
              <span className="colorset">瓶身高度: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "base") {
          var value = this.props.filter["base"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["base"] }) }}>
              <span className="colorset">瓶底类型: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "body") {
          var value = this.props.filter["body"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["body"] }) }}>
              <span className="colorset">瓶身形态: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "people") {
          var value = this.props.filter["people"];
          ARR.push(

            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["people"] }) }}>
              <span className="colorset">适用人群: </span>
              {value.join(" 或 ")}
            </Tag>
          );
        } else if (k == "semantics") {
          var value = this.props.filter["semantics"];
          ARR.push(
            <Tag className="mytag" key={k} closable onClose={() => { this.props.dispatch({ "type": "winelist/delfilter", "names": ["semantics"] }) }}>
              <span className="colorset">设计语义:</span>
              {value.join(" 或 ")}
            </Tag>
          );
        }

      }
      return ARR;
    }
    return (
      <div className="myboard">
        {wineboard()}
      </div>
    );
  }
}
export default connect(
  ({ winelist: { filter } }) => ({
    filter
  })

)(WineFilterBoard);