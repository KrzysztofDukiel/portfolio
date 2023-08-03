
function HomeLeyout() {


    return (
        <>
            <div className="start">
                <img className="title_photo"  src="../assets/Hero%20Image.png" alt=""/>
                <div className="container_nav_title">
                    <div className="nav">
                        <div className="nav_acc">
                            <button className="nav_acc_log">Zaloguj</button>
                            <button className="nav_acc_create">Załóż konto</button>
                        </div>
                        <div className="nav_option">
                            <p>Start</p><p>O Co Chodzi</p><p>O nas</p><p>Fundacja i organizacje</p><p>Kontakt</p>
                        </div>
                        </div>
                        <div className="title">
                            <div className="title_text">
                            <h1>Zacznij pomagać!
                               </h1>
                                <h1> Oddaj niechciane rzeczy w zaufane rece</h1>
                            <img className="buffer"  src="../assets/Decoration.svg" alt=""/>
                            <div className="title_option">

                            </div>
                                <div className="title_btn">
                                <button className="btn_give">oddaj rzeczy</button>
                                <button className="btn_org">zorganizuj zbiórkę</button>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLeyout
