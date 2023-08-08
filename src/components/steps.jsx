

function Steps() {


    return (
        <>
            <section className="steps">
                <div className="steps_title">
                    <h2>Wystarczą 4 proste kroki </h2>
                    <div className="buffer"><br/><br/><br/><br/></div>
                </div>
                    <div className="steps_options">
                        <div className="container">
                            <div className="steps_options_chose">
                               <div className="photo"></div>
                                <h4>Wybierz rzeczy</h4>
                                <div className="string"></div>
                                <p>ubrania, zabawki sprzęt i inne</p>
                            </div>
                            <div className="steps_options_pack">
                                <div className="photo"></div>
                                <h4>Spakuj je</h4>
                               <div className="string"></div>
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                            <div className="steps_options_who">
                                <div className="photo"></div>
                                <h4>Zdecyduj komu chcesz pomóc</h4>
                                <div className="string"></div>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                            <div className="steps_options_order">
                                <div className="photo"></div>
                                <h4>Zamów kuriera</h4>
                                <div className="string"></div>
                                <p>kurier przyjdzie dogodnym terminie</p>
                            </div>
                        </div>
                    </div>
                    <div className="steps_giveaway"><a href="#">oddaj rzeczy</a></div>
            </section>
        </>
    )
}

export default Steps
