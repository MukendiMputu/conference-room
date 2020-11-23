import React from 'react';
import '../css/App.css';
import HeaderNavBar from './HeaderNavBar';
import Footer from './Footer';
import MainHeader from './MainHeader';
import RoomList from './RoomList';

function App() {
  return (
      <div>
      <HeaderNavBar/>
      <MainHeader/>
        <section className="flex-sect">
            <RoomList />
        </section>

        <section className="am-sect">
            <div className="container-width">
                <div className="am-container"><img alt="" onMouseDown={()=>{ return false; }} src="./img/phone-app.png" className="img-phone" />
                    <div className="am-content">
                        <div className="am-pre">ASSET MANAGER</div>
                        <div className="am-title">Manage your images with Asset Manager</div>
                        <div className="am-desc">You can create image blocks with the command from the left panel and edit them with double click</div>
                        <div className="am-post">Image uploading is not allowed in this demo</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="blk-sect">
            <div className="container-width">
                <div className="blk-title">Blocks</div>
                <div className="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style</div>
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
                            <div className="pc-feature odd-feat">+ Enterprise feature 1</div>
                            <div className="pc-feature">+ Enterprise feature 2</div>
                            <div className="pc-feature odd-feat">+ Enterprise feature 3</div>
                            <div className="pc-feature">+ Enterprise feature 4</div>
                            <div className="pc-amount odd-feat">$ 29,90/mo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bdg-sect">
            <div className="container-width">
                <h1 className="bdg-title">The team</h1>
                <div className="badges">
                    <div className="badge">
                        <div className="badge-header"></div><img alt="" src="img/team1.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">Adam Smith</div>
                            <div className="badge-role">CEO</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot"><span className="badge-link">f</span><span className="badge-link">t</span><span className="badge-link">ln</span></div>
                    </div>
                    <div className="badge">
                        <div className="badge-header"></div><img alt="" src="img/team2.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">John Black</div>
                            <div className="badge-role">Software Engineer</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot"><span className="badge-link">f</span><span className="badge-link">t</span><span className="badge-link">ln</span></div>
                    </div>
                    <div className="badge">
                        <div className="badge-header"></div><img alt="" src="img/team3.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">Jessica White</div>
                            <div className="badge-role">Web Designer</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot"><span className="badge-link">f</span><span className="badge-link">t</span><span className="badge-link">ln</span></div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer /> 
    </div>
  );
}

export default App;
