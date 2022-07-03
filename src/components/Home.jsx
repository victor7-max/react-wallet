

const Home = () => {
  const connectWallet = () =>{}
    return (
        <div className="welcome-area bg-gradient" >
        <div className="welcome-area-inner welcome-img-1">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div id="main-menu">
                  <nav className="navbar navbar-expand-md navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#!" id="navdropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home <span className="sr-only">(current)</span></a>
                          <div className="dropdown-menu" aria-labelledby="navdropdown1">
                            <a className="dropdown-item" href="index-2.html">Landing page 01</a>
                            <a className="dropdown-item" href="landing-agency.html">Landing page 02</a>
                            <a className="dropdown-item" href="landing-light.html">Landing page 03</a>
                            <a className="dropdown-item" href="landing-dark.html">Landing page 04</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#!" id="navdropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navdropdown2">
                            <a className="dropdown-item" href="wallet.html">Wallet</a>
                            <a className="dropdown-item" href="chart.html">Charts</a>
                            <a className="dropdown-item" href="market.html">Market</a>
                            <a className="dropdown-item" href="helpdesk.html">Helpdesk</a>
                            <a className="dropdown-item" href="faq.html">FAQ</a>
                            <a className="dropdown-item" href="news.html">News</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo">
                  <a href="index-2.html">
                    <img src="assets/img/logo.png" alt="logo"/>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div id="select-menu">
                  <nav>
                    <ul>
                      <li>
                       <div className="dropdown">
                        <a className="dropdown-toggle" href="#!" role="button" id="dropdowncoin1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="selected-coin1">BTC</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-coin1" aria-labelledby="dropdowncoin1">
                          <a className="dropdown-item" href="#!">BTC</a>
                          <a className="dropdown-item" href="#!">ETH</a>
                          <a className="dropdown-item" href="#!">LCT</a>
                          <a className="dropdown-item" href="#!">DOC</a>
                        </div>
                      </div>
                      </li>
                      <li>
                       <div className="dropdown">
                        <a className="dropdown-toggle" href="#!" role="button" id="dropdownlanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="selected-language"><img src="assets/img/flags/en.jpg" alt="..."/>
                          English</span>
                        </a>
                        <div className="dropdown-menu dropdwon-language" aria-labelledby="dropdownlanguage">
                          <a className="dropdown-item" href="#!"><img src="assets/img/flags/br.jpg" alt="..."/>Brazil</a>
                          <a className="dropdown-item" href="#!"><img src="assets/img/flags/en.jpg" alt="..."/>
                          English</a>
                          <a className="dropdown-item" href="#!"><img src="assets/img/flags/gr.jpg" alt="..."/>Germany</a>
                          <a className="dropdown-item" href="#!"><img src="assets/img/flags/ch.jpg" alt="..."/>Chinese</a>
                        </div>
                      </div>
                      </li>
                      <li className="active"><a href="#!">Sign up</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-8">
                <div className="welcome-text">
                  <h1>Trade Forex and CFDs on Stock Indices, Oil and Gold.</h1>
                  <p>Invest in Bitcoin on the World’s Leading Social Trading Network</p>
                  {/* <form action="#!" className="wow fadeInUp" data-wow-delay=".2s">
                    <div className="btn-danger p-3 m5 btn-rounded btn-sm">Connect wallet</div>
                  </form> */}
                  <button
                  type="button"
                  onClick={connectWallet}
                  className="btn-danger" >
<p className="text-white text-base font-semibold">Connect wallet</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Home;