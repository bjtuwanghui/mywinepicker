import React, { Component } from 'react';
import { connect } from "dva";
import classnames from "classnames";

class BigImage extends Component {

//向右翻看的逻辑
    rightBtnHandler() {
        //验证是不是最后一张
        this.props.dispatch({ "type": "wineshow/gonext_async" ,"id":this.props.id})
    }

//向左翻看的逻辑
    leftBtnHandler() {
        //验证是不是最后一张
        this.props.dispatch({ "type": "wineshow/goprev_async","id":this.props.id})
    } 
    render() {
        var self=this;
        const { id } = this.props;
        return (
            <div className="bigImage">
                <img 
                src={`/wineimages/${id}.jpg`}
                    // onClick={() => {
                    //     self.props.dispatch({ "type": "wineshow/gonext_async","id":id })
                     
                    // }}
                    alt="" />
                <div className="rightBtn" onClick={this.rightBtnHandler.bind(this)}></div>
                <div className="leftBtn" onClick={this.leftBtnHandler.bind(this)}></div>
                
            </div>
        )
    }
}
export default connect(
    ({ wineshow: { id } }) => ({
        id
    })
)(BigImage);