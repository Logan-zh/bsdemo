function Contact(){
    return(
        <section id="contact" className="bg-dark text-white pt-5">
        <div className="container">
            <header>
                <h2 className="text-info text-center">聯絡我們</h2>
            </header>
            <article className="py-3">
                    <form action="" method="post" className="form-group row ">
                        <div className="col-12 form-group col-sm-6">
                            <label htmlFor="name">訪客姓名</label>
                            <div className="input-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="Full Name"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <div className="form-check-inline">
                                            <input className="form-check-input" type="radio" name="sex" id="man"/>
                                            <label className="form-check-label" htmlFor="man">男性</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <input className="form-check-input" type="radio" name="sex" id="woman"/>
                                            <label className="form-check-label" htmlFor="woman">女性</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 form-group col-sm-6">
                            <label htmlFor="phone">連絡電話</label>
                            <div className="input-group">
                                <input className="form-control" type="number" name="phone" id="phone" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="col-12 form-group col-sm-6">
                            <label htmlFor="email">電子信箱</label>
                            <div className="input-group">
                                <input className="form-control" type="email" name="email" id="email" placeholder="E-mail"/>
                            </div>
                        </div>
                        <div className="col-12 form-group col-sm-6">
                            <label htmlFor="que">問題類型</label>
                            <div className="input-group">
                                <select className="form-control custom-select" name="que" id="que">
                                    <option value="1">住宿相關</option>
                                    <option value="2">婚宴訂桌</option>
                                    <option value="other">其他</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <label htmlFor="message">需求說明</label>
                            <div className="input-group">
                                <textarea className="form-control"  name="message" id="message" cols="30" rows="10" placeholder="Write your message"></textarea>
                            </div>
                        </div>                
                        <div className="input-group col-12 justify-content-center">
                            <small className="text-muted col-12 text-center border-bottom py-3 mb-3">請如實填寫便於信件回覆，我們保證不隨意公開您的留言資訊</small>
                            <input className="btn btn-primary" type="button" value="確認送出"/>
                        </div>
                    </form>
            </article>
        </div>
    </section>
    )
}