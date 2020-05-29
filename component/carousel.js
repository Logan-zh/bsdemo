function Carousel(){
    return (
                <section id="slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#slider" data-slide-to="0" className="active"></li>
                      <li data-target="#slider" data-slide-to="1"></li>
                      <li data-target="#slider" data-slide-to="2"></li>
                      <li data-target="#slider" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item vh-100 active">
                        <img src="https://picsum.photos/1920/1080/?random=1" className="w-100 h-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center">
                          <h1>泰山咖啡廳 世界聞名而來</h1>
                          <p className="d-none d-md-block">泰山特產咖啡精選淬鍊而成，凡住宿者每人免費請你喝經典咖啡下午茶一份</p>
                        </div>
                      </div>
                      <div className="carousel-item vh-100">
                        <img src="https://picsum.photos/1920/1080/?random=2" className="w-100 h-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center">
                          <h1>寵愛有你 婚宴專案特惠</h1>
                          <p className="d-none d-md-block">本月活動喜宴專案滿10桌送一主桌，滿25桌再送沖繩雙人蜜月來回機票</p>
                        </div>
                      </div>
                      <div className="carousel-item vh-100">
                        <img src="https://picsum.photos/1920/1080/?random=3" className="w-100 h-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center">
                          <h1>外燴商餐 美食饗宴</h1>
                          <p className="d-none d-md-block">全台最豐富的國內外文化餐飲美食，與先進的視聽投影設備與企劃小組，歡迎商約洽</p>
                        </div>
                      </div>
                      <div className="carousel-item vh-100">
                        <img src="https://picsum.photos/1920/1080/?random=4" className="w-100 h-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center">
                          <h1>泰山渡假飯店 您的唯一首選</h1>
                          <p className="d-none d-md-block">忙碌的生活中，你有多久沒有好好的考賞自己呢？放慢腳步，來泰山好好度假吧</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                        <i className="fas fa-caret-left fa-3x"></i>
                    </a>
                    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                        <i className="fas fa-caret-right fa-3x"></i>
                    </a>
                </section>
    );
}