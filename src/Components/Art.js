import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Art1 from '../images/art/art_1.png';
import Art2 from '../images/art/art_2.png';
import Art3 from '../images/art/art_3.png';
import Art4 from '../images/art/art_4.png';




class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <>
            <Header/>
            <div>

            {/* <section class="bradcrumb-area">
         <div class="container">
            <div class="row">
               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="bradcrumb-main">
                     <div class="bradcrumb-title">
                        <h1>Art</h1>
                     </div>
                     <div class="bradcrumb-right clearfix">
                        <ul class="clearfix">
                           <li><a href="index.html">Home</a></li>
                           <li>Art</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
     
      <section class="browse-product-area page-paddings" style={{paddingTop: "70px"}}>
         <div class="container">
            <div class="row">
               <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div class="browse-product-filter">
                     <div class="filter-box">
                        <h3 class="theme-title">Categories</h3>
                        <div class="filter-menu">
                           <ul>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                                 <label for="styled-checkbox-1"><span>Art</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-2"><span>Collectibles</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-3"><span>Game Items</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-4"><span>Music</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-5"><span>Domains</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-6"><span>Templates</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-7"><span>Videos</span></label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="filter-box">
                        <h3 class="theme-title">Other options</h3>
                        <div class="filter-menu">
                           <ul>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-8" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-8"><span>Copyright transfer</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-9" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-9"><span>Resellable</span></label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="filter-box">
                        <h3 class="theme-title">Sort by</h3>
                        <div class="filter-menu">
                           <ul>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value1" checked=""/>
                                 <label for="styled-checkbox-10"><span>Newest</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-11" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-11"><span>Oldest</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-12" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-12"><span>Price - Low to high</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-13" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-13"><span>Price - High to low</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-14" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-14"><span>Auctions only</span></label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="filter-box">
                        <h3 class="theme-title">Price</h3>
                        <div class="filter-menu">
                           <ul>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-15" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-15"><span>$1 - $5.99</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-16" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-16"><span>$6 - $14.99</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-17" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-17"><span>$15 - $29.99</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-18" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-18"><span>$30 - $74.99</span></label>
                              </li>
                              <li>
                                 <input class="styled-checkbox" id="styled-checkbox-19" type="checkbox" value="value1"/>
                                 <label for="styled-checkbox-19"><span>$75 - $100+</span></label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                  <div class="browse-product-top">
                     <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                           <div class="browse-product-left">
                              <p>Showing 25/50 Items</p>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                           <div class="browse-product-right clearfix">
                              <ul class="nav nav-tabs" role="tablist">
                                 <li class="nav-item"><a class="browse-list" href="/Minitem" data-toggle="tooltip" data-placement="top" title="Store"><i class="fas fa-store"></i></a></li>
                                 <li class="nav-item"><a class="browse-list nav-link active" data-toggle="tab" href="#item-grid" role="tab" href="javascript:void(0)"><i class="fas fa-th-large"></i></a></li>
                                 <li class="nav-item"><a class="browse-list nav-link" data-toggle="tab" href="#item-list" role="tab" href="javascript:void(0)"><i class="fas fa-list"></i></a></li>
                                  {/* <li>
                                    <div class="browse-filter-list">
                                       <span>$</span>
                                       <div class="default-switch">
                                          <label class="switch"><span></span><input type="checkbox"><span class="slider round"></span></label>
                                       </div>
                                       <span>$</span>
                                    </div>
                                    </li>  */}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="browse-product-box">
                     <div class="tab-content">
                        <div class="tab-pane active" id="item-grid" role="tabpanel">
                           <div class="row">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art1} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="view-detail.html">Amazing oil painting of man in grey hat</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                          <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art2} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Most astonishing painting of tiger</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art3} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="view-detail.html">The depicting buddha painting</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                          <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art4} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Mirage illustration of white and red strips</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art1} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Absurd but still eye-catching illustration</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art2} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">An abstract oil painting of girl</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art3} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Perfect cartoon graphic of man</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art4} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Most vibrant and colorful cat illutration</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                 <div class="item-group">
                                    <div class="item-group-content">
                                       <div class="items-like">
                                          <i class="far fa-heart"></i>
                                       </div>
                                       <div class="item-group-avtar">
                                          <img src={Art1} alt=""/>
                                       </div>
                                       <h3 class="theme-title"><a href="buy-detail.html">Look at this flamboyance panda photo</a></h3>
                                       <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                       <h2 class="item-price">$20.680</h2>
                                       <div class="item-group-btn">
                                          <a class="theme-btn" href="checkout.html">Buy Now</a>
                                          <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="item-list" role="tabpanel">
                           <div class="row">
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art1} /></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="view-detail.html">Amazing oil painting of man in grey hat</a></h3>
                                          <p class="theme-description">This painting is complete made with oil paint showcasing a man with grey hat, you can see all the fine details cearly and this paithing one of it kind</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art2}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">Most astonishing painting of tiger</a></h3>
                                          <p class="theme-description">Fine tiger oil paint, avaliable in portrait size view the best of the painters idea and it efforts to bring the painting live.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art3}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="view-detail.html">The depicting buddha painting</a></h3>
                                          <p class="theme-description">If you believe in buddha then this painting is speacialy made for you, it depicting style will catch you eyes and others too.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art4}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">Mirage illustration of white and red strips</a></h3>
                                          <p class="theme-description">This mirage illustration of white and red strips will blow your mind and with its dilusional characterstics it will look great at any photo gallery.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art1}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">Absurd but still eye-catching illustration</a></h3>
                                          <p class="theme-description">This graphical image illustrate how world is ruin our thoughts and pouring tones of nonsensical things in our head.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art2}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">An abstract oil painting of girl</a></h3>
                                          <p class="theme-description">This piece of beauty is made with oil paint and have really good details carve on it, a perfect piece to gift.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art3}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">Perfect cartoon graphic of man</a></h3>
                                          <p class="theme-description">We have brought perfect cartoon graphic of man with really vibrant color and texture on it buy it for youeself or for friends</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                 <div class="item-group item-group-list">
                                    <div class="item-group-content">
                                       <div class="item-group-media">
                                          <a href=""><img src={Art4}/></a>
                                       </div>
                                       <div class="item-group-info">
                                          <h3 class="theme-title"><a href="buy-detail.html">Most vibrant and colorful cat illutration</a></h3>
                                          <p class="theme-description">Get this most vibrant and colorful cat illutration, it is so modern in color selection and design you cannot not neglect it.</p>
                                          <h2 class="item-price">$20.680</h2>
                                          <div class="item-group-box">
                                             <div class="item-group-timer">
                                                <ul class="clearfix">
                                                   <li><span>01</span> Hour</li>
                                                   <li><span>55</span> Min</li>
                                                   <li><span>00</span> Sec</li>
                                                </ul>
                                             </div>
                                             <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="pagination-box text-center">
                              <ul class="clearfix">
                                 <li class="current"><span>1</span></li>
                                 <li><a href="index.html">2</a></li>
                                 <li><a href="index.html">3</a></li>
                                 <li><a href="index.html">Next <i class="fas fa-long-arrow-alt-right"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

            </div>
            <Footer/>
            </>
        )
    }
};


export default Art;