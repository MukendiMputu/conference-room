import React from 'react';
import '../css/App.css';
import HeaderNavBar from './HeaderNavBar';
import Footer from './Footer';
import MainHeader from './MainHeader';
import RoomList from './RoomList';
import Features from './Features';
import BoardMembers from './BoardMembers';

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
                <div className="am-container">
                    <img alt="" onMouseDown={()=>{ return false; }} src="./img/phone-app.png" className="img-phone" />
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
            <BoardMembers />
        </section>
        
        <Footer /> 
    </div>
  );
}

export default App;
