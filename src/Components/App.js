import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function App() {
  return (
    <div>
    <section class="flex-sect">
        <div class="container-width">
            <div class="flex-title">Flex is the new black</div>
            <div class="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity</div>
            <div class="cards">
                <div class="card">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <div class="card-title">Title one</div>
                        <div class="card-sub-title">Subtitle one</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header ch2"></div>
                    <div class="card-body">
                        <div class="card-title">Title two</div>
                        <div class="card-sub-title">Subtitle two</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header ch3"></div>
                    <div class="card-body">
                        <div class="card-title">Title three</div>
                        <div class="card-sub-title">Subtitle three</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header ch4"></div>
                    <div class="card-body">
                        <div class="card-title">Title four</div>
                        <div class="card-sub-title">Subtitle four</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header ch5"></div>
                    <div class="card-body">
                        <div class="card-title">Title five</div>
                        <div class="card-sub-title">Subtitle five</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header ch6"></div>
                    <div class="card-body">
                        <div class="card-title">Title six</div>
                        <div class="card-sub-title">Subtitle six</div>
                        <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="am-sect">
        <div class="container-width">
            <div class="am-container"><img onmousedown="return false" src="./img/phone-app.png" class="img-phone" />
                <div class="am-content">
                    <div class="am-pre">ASSET MANAGER</div>
                    <div class="am-title">Manage your images with Asset Manager</div>
                    <div class="am-desc">You can create image blocks with the command from the left panel and edit them with double click</div>
                    <div class="am-post">Image uploading is not allowed in this demo</div>
                </div>
            </div>
        </div>
    </section>
    <section class="blk-sect">
        <div class="container-width">
            <div class="blk-title">Blocks</div>
            <div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style</div>
            <div class="price-cards">
                <div class="price-card-cont">
                    <div class="price-card">
                        <div class="pc-title">Starter</div>
                        <div class="pc-desc">Some random list</div>
                        <div class="pc-feature odd-feat">+ Starter feature 1</div>
                        <div class="pc-feature">+ Starter feature 2</div>
                        <div class="pc-feature odd-feat">+ Starter feature 3</div>
                        <div class="pc-feature">+ Starter feature 4</div>
                        <div class="pc-amount odd-feat">$ 9,90/mo</div>
                    </div>
                </div>
                <div class="price-card-cont">
                    <div class="price-card pc-regular">
                        <div class="pc-title">Regular</div>
                        <div class="pc-desc">Some random list</div>
                        <div class="pc-feature odd-feat">+ Regular feature 1</div>
                        <div class="pc-feature">+ Regular feature 2</div>
                        <div class="pc-feature odd-feat">+ Regular feature 3</div>
                        <div class="pc-feature">+ Regular feature 4</div>
                        <div class="pc-amount odd-feat">$ 19,90/mo</div>
                    </div>
                </div>
                <div class="price-card-cont">
                    <div class="price-card pc-enterprise">
                        <div class="pc-title">Enterprise</div>
                        <div class="pc-desc">Some random list</div>
                        <div class="pc-feature odd-feat">+ Enterprise feature 1</div>
                        <div class="pc-feature">+ Enterprise feature 2</div>
                        <div class="pc-feature odd-feat">+ Enterprise feature 3</div>
                        <div class="pc-feature">+ Enterprise feature 4</div>
                        <div class="pc-amount odd-feat">$ 29,90/mo</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bdg-sect">
        <div class="container-width">
            <h1 class="bdg-title">The team</h1>
            <div class="badges">
                <div class="badge">
                    <div class="badge-header"></div><img src="img/team1.jpg" class="badge-avatar" />
                    <div class="badge-body">
                        <div class="badge-name">Adam Smith</div>
                        <div class="badge-role">CEO</div>
                        <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                    </div>
                    <div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>
                </div>
                <div class="badge">
                    <div class="badge-header"></div><img src="img/team2.jpg" class="badge-avatar" />
                    <div class="badge-body">
                        <div class="badge-name">John Black</div>
                        <div class="badge-role">Software Engineer</div>
                        <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                    </div>
                    <div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>
                </div>
                <div class="badge">
                    <div class="badge-header"></div><img src="img/team3.jpg" class="badge-avatar" />
                    <div class="badge-body">
                        <div class="badge-name">Jessica White</div>
                        <div class="badge-role">Web Designer</div>
                        <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                    </div>
                    <div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
