function Forwho() {


    return (
        <>
            <section className="container forwho">
                <h2>Komu pomagamy </h2>
                <div className="buffer"></div>
                <div className="forwho_options">
                    <a href="" className="forwho_fund options">Fundacjom </a>
                    <a href="" className="forwho_organizations options">Organizacjom pozarządowym </a>
                    <a href="" className="forwho_local options">Lokalnym Zbiórkom </a></div>

                <p className="forwho_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują. </p>

                <div className="forwho_fundations">



                   <div className="forwho_fundations_options">
                       <h4>Fundacja “Dbam o Zdrowie”</h4>
                       <p className="forwho_fundations_options_text">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>


                   </div>
                    <div className="forwho_fundations_options">

                        <h4>Fundacja “Dla dzieci”</h4>
                        <p className="forwho_fundations_options_text">ubrania, meble, zabawki</p>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>

                   </div>
                    <div className="forwho_fundations_options">
                        <h4>Fundacja “Bez domu”</h4>
                        <p className="forwho_fundations_options_text">ubrania, jedzenie, ciepłe koce</p>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>

                   </div>
                </div>
                <div className="forwho_pages">
                    <a href="" className="forwho_pages_a">1</a>
                    <a href="" className="forwho_pages_a">2</a>
                    <a href="" className="forwho_pages_a">3</a>
                </div>
            </section>
        </>
    )
}

export default Forwho