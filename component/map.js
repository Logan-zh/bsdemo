function Maps(){
    return(
        <section id="map" className="py-5 embed-responsive">
        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.707878086168!2d121.41714895073459!3d25.04398584396596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1590558414800!5m2!1szh-TW!2stw"></iframe>
            <article className="container mb-5">
                <div className="flex-column">
                    <header className="card col-12 col-lg-6 mb-3 text-center text-info card">
                        <h2 >交通資訊</h2>
                    </header>
                    <div className="col-12 col-lg-6 card">
                        <div className="card-body">
                            <strong>公車、捷運</strong>
                            <ul>
                                <li>公車：三重客運(637、638)、指南客運(797、798、801、858、880、883、1501、1503)，至明志科技大學站下車。</li>
                                <li>新北市泰山區免費公車(泰山區F216明志國小-台北車站(北三門搭車))：至貴子路下車後，步行至貴子路口左轉明志路3段，明志路直行約100公尺至工專路右轉，再直行即可至明志科技大學。</li>
                                <li>捷運：臺北捷運中和新蘆線至丹鳳站1號出口或桃園捷運機場線至泰山貴和站（明志科大）1號出口，再轉乘公車或騎乘YouBike微笑單車（約10~15分鐘）至明志科技大學。</li>
                            </ul>
                            <strong>自行開車</strong>
                            <ul>
                                <li>高速公路五股交流道下(往新莊、泰山)，經新五路至新北大道右轉，直行至貴子路口右轉，貴子路直行至明志路左轉。於明志路繼續前行約100公尺右轉工專路，即可抵達明科技大學。</li>
                                <li>由台北車站走忠孝橋，直行高架道路，下到平面道路之後直行至貴子路口右轉，貴子路直行至明志路左轉，於明志路繼續前行約100公尺右轉工專路，即可抵達明科技大學。</li>
                                <li>明志科大「汽車」停車費30元/小時，請儘量搭乘大眾交通工具或機車(免停車費)。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}