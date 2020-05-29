function Nav(){
    return (
        <section className="container-lg mt-5" id="room">
        <h2 className="text-info my-5 text-center">房型介紹</h2>
        <nav className="nav nav-tabs justify-content-around border-info ">      
            <a className="alert-info nav-item nav-link active border-0 mb-0" data-toggle="tab" href="#roomA">行政本館</a>
            <a className="alert-info nav-item nav-link border-0 shadow-sm" data-toggle="tab" href="#roomB">雙墓川館</a>
            <a className="alert-info nav-item nav-link border-0 shadow-sm" data-toggle="tab" href="#roomC">繪影湯屋</a>
            <a className="alert-info nav-item nav-link border-0 shadow-sm" data-toggle="tab" href="#roomPrice">價目表</a>
            <a className="alert-info nav-item nav-link border-0 shadow-sm" data-toggle="tab" href="#roomRule">訂房須知</a>
        </nav>
        <div className="tab-content my-5" id="myTabContent">
            <div className="tab-pane fade show active" id="roomA">
                <div className="row">
                    <div className="col-12 text-center mb-5">溫馨典雅的行政本館，給您簡約的度假享受。<br/>
                        使用大片落地窗，採光極佳，每房皆設有觀景陽台，讓您遠眺高山、與大自然一親芳澤。</div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card mb-5">
                            <img src="https://picsum.photos/300/200/?random=1" 
                            className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>行政本館</h5>
                                <p className="card-text">
                                    溫馨雙人房
                                    <small className="float-right text-muted">1 大床 | 6.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card mb-5">
                            <img src="https://picsum.photos/300/200/?random=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>行政本館</h5>
                                <p className="card-text">
                                    精緻雙人房
                                    <small className="float-right text-muted">1 大床 | 10.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card mb-5">
                            <img src="https://picsum.photos/300/200/?random=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>行政本館</h5>
                                <p className="card-text">
                                    親子四人房
                                    <small className="float-right text-muted">2 大床 | 12 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="roomB">
                <div className="row">
                    <div className="text-center col-12 mb-5">
                        <p>雙幕川館位於擁有大量的綠地腹地花園，房外種植有柏樹，每房皆為獨棟湯屋設計。<br/>打開房門就見到綠油油的寬廣草地，呼吸一口大自然最新鮮的空氣，三五好友一起夜晚裡賞月觀星，聊天談心，是最愜意的享受。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="card">
                            <img src="https://picsum.photos/300/200/?random=2" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>雙幕川館</h5>
                                <p className="card-text">
                                    溫馨雙人房
                                    <small className="float-right text-muted">1 大床 | 6.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="card">
                            <img src="https://picsum.photos/300/200/?random=2" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>雙幕川館</h5>
                                <p className="card-text">
                                    溫馨雙人房
                                    <small className="float-right text-muted">1 大床 | 10.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="roomC">
                <div className="row">
                    <div className="col-12 mb-5 text-center">
                        <p>每房皆為獨棟式小屋設計，鋪設進口大理石防滑地板安心使用，浪漫典雅。<br/>房內設有溫泉浴槽，私享您的奢華溫泉浴時光。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="card">
                            <img src="https://picsum.photos/300/200/?random=3" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>繪影湯屋</h5>
                                <p className="card-text">
                                    溫馨雙人房
                                    <small className="float-right text-muted">8.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="card">
                            <img src="https://picsum.photos/300/200/?random=3" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>繪影湯屋</h5>
                                <p className="card-text">
                                    溫馨雙人房
                                    <small className="float-right text-muted">12.5 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="card">
                            <img src="https://picsum.photos/300/200/?random=3" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>繪影湯屋</h5>
                                <p className="card-text">
                                    親子四人房
                                    <small className="float-right text-muted">附1 大床 | 20 坪</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="roomPrice">
                <h3>[ 行政本館 ]</h3>
                <table className="table table-sm text-center">
                    <thead className="alert-info">
                        <tr>
                            <th className="border-info">房型</th>
                            <th className="border-info">平日</th>
                            <th className="border-info">假日</th>
                            <th className="border-info">連續國定假日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>溫馨雙人房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                        <tr>
                            <th>精緻雙人房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                        <tr>
                            <th>親子四人房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                    </tbody>
                </table>
                <h3>[ 雙幕川館 ]</h3>
                <table className="table text-center">
                <thead className="alert-info">
                        <tr>
                            <th className="border-info">房型</th>
                            <th className="border-info">平日</th>
                            <th className="border-info">假日</th>
                            <th className="border-info">連續國定假日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>湖畔仙屋</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                        <tr>
                            <th>芬多森屋</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                    </tbody>
                </table>
                <h3>[ 繪影湯屋 ]</h3>
                <table className="table text-center">
                <thead className="alert-info">
                        <tr>
                            <th className="border-info">房型</th>
                            <th className="border-info">平日</th>
                            <th className="border-info">假日</th>
                            <th className="border-info">連續國定假日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>溫馨蜜月房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                        <tr>
                            <th>親子家庭房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                        <tr>
                            <th>豪華尊爵房</th>
                            <td>NT3000</td>
                            <td>NT3000</td>
                            <td>NT3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="roomRule">
                <div className="container">
                <h3 className="border-bottom border-info text-right">入住須知</h3>
                    <h5 className="text-info">[ 飯店設備 ]</h5>
                    <br/>
                    <p>
                    客房無線網路、有線第四台、自助洗衣機、免費烘乾機、免費停車場
                    </p>
                    <br/>
                    <h5 className="text-info">[ 入住須知 ]</h5>
                    <br/>
                    <p>
                    進房時間（Check In )時間為15:00以後；退房時間（Check Out）時間為11:00以前。
                    住宿時請攜帶本人身分證正本、駕照以利核對。
                    一般住宿附贈早餐、SPA券（依住宿房型開立），特殊專案依專案條件辦理。
                    超過退房時間一個小時將以一個小時200元計費，超過半個小時將以一個小時計算。
                    請注意住宿人數勿超過客房設定之人數，若有超過客房設定人數，飯店有權拒絕入住。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 平假日定義 ]</h5>
                    <br/>
                    <p>
                    平日時間：星期日~星期五；假日時間：星期六、連續假日結束前一日，依飯店公告為準。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 加人服務 ]</h5>
                    <br/>
                    <p>
                    本飯店繪圖湯屋房型提供加人服務（含軟墊、備品、早餐、溫泉SPA券），每加一人NT$600（春節期間不適用）。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 其他注意事項 ]</h5>
                    <br/>
                    <p>
                    為維護住宿品質，室內空間全面禁菸，禁止攜帶貓狗等寵物入住，如經查獲加收清潔費5000元。
                    為維護公共及個人安全，禁止在房間內烹煮食物，或攜帶瓦斯、電磁爐等同性質用具，敬請房客務必配合。
                    客房地面為木質地板，請勿擅自移動房內傢俱，如發現自行搬動客房家具造成木質地面損傷，需付損毁費用。
                    房型擺設僅供參考，以實體房間為主。
                    免費停車場（僅供免費停車，不負保管之責）。
                    行政本館及雙幕川館內衛浴設備皆為一般熱水，如需使用溫泉需至戶外大眾池或改訂繪圖湯屋房型。
                    </p>
                    <br/>
                    <h3 className="border-bottom border-info">官網訂房規範</h3>
                    <br/>
                    <p>- 僅適用官網訂房，專案如有特殊需求，依專案為主</p>
                    <br/>
                    <h5 className="text-info">[ 線上訂房須知 ]</h5>
                    <br/>
                    <p>
                    線上訂房交易價格均已含營業稅及服務費，若您選擇線上刷卡，交易成功後將由您的信用卡帳戶直接扣款。
                    線上訂房不接受國民旅遊卡刷卡訂房，若需使用國民旅遊卡訂房請直接電洽櫃台辦理。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 延遲入住手續 ]</h5>
                    <br/>
                    <p>
                    若您在住宿當日，因塞車或其他的因素有所耽擱，無法在當日下午六點以前辦理住房手續，請您先以電話聯繫，否則飯店將視為您當日取消訂房，恕不退費。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 更改入住日期 ]</h5>
                    <br/>
                    <p>
                    訂房後如欲更改訂房日期，請電話聯絡協助處理。
                    同一筆訂單限更改一次，且更改後的訂單恕不接受退房，否則視同取消訂房，依取消訂房規範處理。
                    如更改後訂單金額大於原訂單金額，旅客需現場另行支付差額；如更改後金額小於原訂單金額，恕不退還差額。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 取消訂房 ]</h5>
                    <br/>
                    <p>
                    取消訂房將依以下規範酌收定金，請特別注意：
                    住宿日 當日 取消訂房，扣定金總金額100%
                    住宿日 1 天前（不含當日）取消訂房，扣定金總金額80%
                    住宿日 2~3 天前（不含當日）取消訂房，扣定金總金額70%
                    住宿日 4~6 天前（不含當日）取消訂房，扣定金總金額60%
                    住宿日 7~9 天前（不含當日）取消訂房，扣定金總金額50%
                    住宿日 10~13 天前（不含當日）取消訂房，扣定金總金額30%
                    住宿日 14 天前（不含當日）取消訂房，扣除匯款手續費後，剩餘定金退還。
                    線上訂房若有需求取消，請直接與我們「電話」聯繫進行取消訂房。
                    若您使用信用卡付款，我們將由系統進行刷退動作；若您使用臨櫃匯款或ATM轉帳，請您傳真訂房者之任一銀行存摺封面至089-515026。
                    </p>
                    <br/>
                    <h5 className="text-info">[ 特殊因素之退房處理 ]</h5>
                    <br/>
                    <p>
                    若因天然災害等不可抗拒之因素（如地震、颱風等，以飯店所在地縣市政府公告為準）無法如期前往住宿請於原訂住宿日３日（含當日）內與飯店之訂房中心連絡改期（得保留6個月）或是辦理退費。
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}