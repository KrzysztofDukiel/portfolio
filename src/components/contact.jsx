
function Contact() {


    return (
        <>
            <section className="contact">
                <div className="photo"></div>
                <div className="contact_box">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="buffer"></div>
                    <div className="contact_box_info">
                        <div className="1">
                            <p>Wpisz swoje imię</p>
                            <input type="text"/></div>
                        <div className="1">
                            <p>wpisz swój email</p>
                            <input type="text"/></div>
                    </div>
                    <div className="contact_box_message">
                        <p>Wpisz swoją wiadomość</p>
                        <input type="text"/></div>
                </div>
                <button>Wyślij</button>
            </section>
                <footer>
                    <h5></h5>
                    <div></div>
                    <div></div>
                </footer>
        </>
    )
}

export default Contact
