import React from 'react';
import '../css/App.css';
import HeaderNavBar from './HeaderNavBar';
import Footer from './Footer';
import MainHeader from './MainHeader';
import RoomList from './RoomList';
import Features from './Features';

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
           <Features />
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
