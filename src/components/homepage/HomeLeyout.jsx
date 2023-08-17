import { Link as ScrollLink } from "react-scroll";

function HomeLeyout() {


    return (
        <>
            <div className="start">
                <div className="title_photo"/>
                <div className="container_nav_title">
                    <div className="nav">
                        <div className="nav_acc">
                            <a href="" className="nav_acc_log">Zaloguj</a>
                            <a href="" className="nav_acc_create">Załóż konto</a>
                        </div>
                        <div className="nav_option">
                            <ScrollLink to="counter_sec" smooth={true} duration={500}>
                               <p className="nav_option_button">Start</p>
                            </ScrollLink>
                            <ScrollLink to="steps" smooth={true} duration={500}>
                                 <p className="nav_option_button">O co chodzi?</p>
                            </ScrollLink>
                            <ScrollLink to="aboutus" smooth={true} duration={500}>
                                 <p className="nav_option_button">O nas</p>
                            </ScrollLink>
                            <ScrollLink to="forwho" smooth={true} duration={500}>
                                 <p className="nav_option_button">Fundacja i organizacje</p>
                            </ScrollLink>
                            <ScrollLink to="contact" smooth={true} duration={500}>
                                 <p className="nav_option_button">Kontakt</p>
                            </ScrollLink>




                        </div>
                    </div>
                    <div className="title">
                        <div className="title_text">
                            <h1>Zacznij pomagać!
                            </h1>
                            <h1> Oddaj niechciane rzeczy w zaufane rece</h1>
                            <div className="buffer"></div>

                            <div className="title_option">

                            </div>
                            <div className="title_a">
                                <a href="" className="a_give">oddaj rzeczy</a>
                                <a href="" className="a_org">zorganizuj zbiórkę</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLeyout
