function Collapse(){
    return(
        <section id="collapse" className="my-5">
        <h1 className='text-center col-12 align-items-start'>餐飲美食</h1>
    <div className="container row mx-auto p-0" id="foodmenu">
        <div className="tab-content col-12 col-lg-6">
            <div className="tab-pane fade show active" id="room1">
                <img className="w-100 img-thumbnail" src="https://summer10920.github.io/book_BS_project_hotel/imgs/food1.jpg"/>
            </div>
            <div className="tab-pane fade" id="room2">         
                <img className="w-100 img-thumbnail" src="https://summer10920.github.io/book_BS_project_hotel/imgs/food3.jpg"/>
            </div>
            <div className="tab-pane fade" id="room3">
                <img className="w-100 img-thumbnail" src="https://summer10920.github.io/book_BS_project_hotel/imgs/food4.jpg"/> 
            </div>
        </div>

        <div className="list-group col-12 col-lg-6 mb-5 accordion">
            <div className="card" data-toggle="tab" data-target="#room1">
                <a href="#food1" className="card-header alert-info" data-toggle="collapse">中歐頂級豪華早餐 (自助式)<small className="float-right text-muted">in 2F 食堂</small></a>
                <div id="food1" className="collapse show" data-parent="#foodmenu">
                    <div className="card-body">
                        <p>百道經典美食早午餐就在這裡，嚴選泰山當地食材精心烹調充滿在地風味的特色小吃，菜色美味有口皆碑，由三星米其林主廚團隊為您廚房把關一整天最重要的精氣早餐。
                            座位高達500人用餐空間，另也適合工商宴席、婚禮宴客、家庭聚餐、大宴小酌、台菜、客家菜、風味套餐色、香、味美，是用餐之好所在!，多種餐飲選擇滿足您挑剔的味蕾並歡迎親臨品嚐!!</p>
                        <p className='text-right text-danger small'>定價： 大人 NT500 / 小孩 NT300</p>
                        <p className='text-right text-danger small'>營業時間：AM 06:00 ~ AM 11:00</p>
                    </div>
                </div>
            </div>
            <div className="card" data-toggle="tab" data-target="#room2">
                <a href="#food2" className="card-header alert-info" data-toggle="collapse">咖啡複合式鋼琴酒吧<small className="float-right text-muted">in 1F 中庭</small></a>
                <div id="food2" className="collapse" data-parent="#foodmenu">
                    <div className="card-body">
                        <p>大飯店一樓的挑高中庭，瀰漫優雅的南洋休閒風，庭內雨林造景，融合水聲與天籟柔美樂音，供應各式花茶、咖啡、健康蔬果汁、英式下午茶及宵夜，揉合自然音樂，是您輕鬆暢敘的最佳地點。
                            （假日二人樂團鋼琴、長笛、薩克斯風演奏）</p>
                        <p className='text-right text-danger small'>基本消費：NT150 + 10% / 位</p>
                        <p className='text-right text-danger small'>營業時間：PM 07:00 ~ AM 01:00</p>
                    </div>
                </div>
            </div>
            <div className="card" data-toggle="tab" data-target="#room3">
                <a href="#food3" className="card-header alert-info" data-toggle="collapse">桶仔雞BBQ 露營客最愛<small className="float-right text-muted">代訂預約</small></a>
                <div id="food3" className="collapse" data-parent="#foodmenu">
                    <div className="card-body">
                        <p>本季每日限量的私房美饌，經典台灣古早味美食桶仔雞為您準備，古早醬汁與獨家配方將其均勻裹上一層厚厚的蜂蜜楓糖後再送進烤爐燒烤。一口咬下細膩的肉質與酥脆表皮，享受這多層次卻不膩口的美味。
                            另還有BBQ豪華套餐組合(10人份)，讓你美味無窮享受榮高至上的味蕾享受。</p>
                        <p className='text-right text-danger small'>露營客代訂服務 (以利備食材，請於一週前預約)</p>
                        <p className='text-right text-danger small'>$800/隻 桶仔雞(全熟食)</p>
                        <p className='text-right text-danger small'>$3000/10人 BBQ豪華套餐(半熟冷藏)</p>
                    </div>
                </div>
            </div>
        </div>
          
    </div>

    </section>
    )
}