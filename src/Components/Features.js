import React, { Component } from 'react';
import Princing from './Pricing';


class Features extends Component {
    constructor () {
        super();
        this.state = {};
    }

    render() {
        return (
          <div className="container-width">
            <div className="blk-title">Blocks</div>
            <div className="blk-desc">
              Each element in HTML page could be seen as a block. On the left
              panel you could find different kind of blocks that you can create,
              move and style
            </div>
            <Princing/>
          </div>
        );
    }

}

export default Features;