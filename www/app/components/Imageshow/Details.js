import React, { Component } from 'react';
import classnames from "classnames";
import { connect } from "dva";
class Details extends Component {
    constructor({ id, type, target, material, color, height, base, body, people, semantics }) {
        super();

    }
    //fetch异步拉取数据 并且进行了state的修改！！！
    // componentWillReceiveProps(nextProps) {
    //     this.fetchdata(nextProps.id);
    //     // console.log(this.props.id);

    // async fetchdata(id) {
    //     const { result } = await fetch(`/winelike/${id}`).then(data => data.json());
    //     this.setState({ result });
    //     // console.log(result);
    render() {
        return (
            <div className="list">
                <div className="winelist">
                    正在查看第{" "}<b className="redword">{this.props.id}</b>{" "}号酒瓶设计&gt;&gt;
                    </div>
                <div className="mydetails">
                    <table className="mytable">
                        <tbody>
                            <tr>
                                <td className="short">设计类型</td>
                                <td>{this.props.type}</td>
                            </tr>

                            <tr>
                                <td className="short">目标酒品</td>
                                <td>{this.props.target}</td>
                            </tr>

                            <tr>
                                <td className="short">产品材质</td>
                                <td>{this.props.material}</td>
                            </tr>

                            <tr>
                                <td className="short">主要颜色</td>
                                <td>{this.props.color}</td>
                            </tr>

                            <tr>
                                <td className="short">瓶身高度</td>
                                <td>{this.props.height}</td>
                            </tr>

                            <tr>
                                <td className="short">瓶底类型</td>
                                <td>{this.props.base}</td>
                            </tr>

                            <tr>
                                <td className="short">瓶身形态</td>
                                <td>{this.props.body}</td>
                            </tr>

                            <tr>
                                <td className="short">适用人群</td>
                                <td>{this.props.people}</td>
                            </tr>

                            <tr>
                                <td className="short">设计语义</td>
                                <td>{this.props.semantics}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="comments">
                    <p className="commentword">记录、特征描述与设计启发：</p>
                    <div className="myform">
                        <textarea
                            style={{ resize: "none", height: "200px", width: "720px" }}

                        ></textarea>
                        <p className="button">
                            <button >保存</button>
                        </p> 
                    </div>


                </div>


            </div>
        )
    }

}

export default connect(
    ({ wineshow: { id, type, target, material, color, height, base, body, people, semantics } }) => ({

        id,
        type,
        target,
        material,
        color,
        height,
        base,
        body,
        people,
        semantics

    })
)(Details);