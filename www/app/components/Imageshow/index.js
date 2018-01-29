import React, { Component } from 'react';
import { connect } from 'dva';
import "./Imageshow.less"
import BigImage from "./BigImage.js";
import Details from "./Details.js";

class Imageshow extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        var self = this;
        return (
            
                <div className="wineshow">
                    <div className="inner">
                        <span className="close"
                            onClick={
                                () => {
                                    self.props.changeShowPicshow(false)
                                }
                            }
                        >X</span>
                        <BigImage></BigImage>
                        <Details></Details>
                    </div>
                </div>
          


        )
    }

}
export default connect()(Imageshow);