import React, {Component} from 'react';


class Princing extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        return (
          <div className="price-cards">
            <div className="price-card-cont">
              <div className="price-card">
                <div className="pc-title">Starter</div>
                <div className="pc-desc">Some random list</div>
                <div className="pc-feature odd-feat">+ Starter feature 1</div>
                <div className="pc-feature">+ Starter feature 2</div>
                <div className="pc-feature odd-feat">+ Starter feature 3</div>
                <div className="pc-feature">+ Starter feature 4</div>
                <div className="pc-amount odd-feat">$ 9,90/mo</div>
              </div>
            </div>
            <div className="price-card-cont">
              <div className="price-card pc-regular">
                <div className="pc-title">Regular</div>
                <div className="pc-desc">Some random list</div>
                <div className="pc-feature odd-feat">+ Regular feature 1</div>
                <div className="pc-feature">+ Regular feature 2</div>
                <div className="pc-feature odd-feat">+ Regular feature 3</div>
                <div className="pc-feature">+ Regular feature 4</div>
                <div className="pc-amount odd-feat">$ 19,90/mo</div>
              </div>
            </div>
            <div className="price-card-cont">
              <div className="price-card pc-enterprise">
                <div className="pc-title">Enterprise</div>
                <div className="pc-desc">Some random list</div>
                <div className="pc-feature odd-feat">
                  + Enterprise feature 1
                </div>
                <div className="pc-feature">+ Enterprise feature 2</div>
                <div className="pc-feature odd-feat">
                  + Enterprise feature 3
                </div>
                <div className="pc-feature">+ Enterprise feature 4</div>
                <div className="pc-amount odd-feat">$ 29,90/mo</div>
              </div>
            </div>
          </div>
        );
    }
}
export default Princing;