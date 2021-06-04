import React, { Component } from 'react';
class Aboutus extends Component {
    state = {}
    render() {
        return <div className="faq">

            <section className="sectionFaq">
                <h1><center>FAQ</center></h1>
                <br />
                <p> Hur ansöker jag?Väg-adress till skolorna?</p>
                <p> Vad behöver jag för att komma in på utbildningen?</p>
                <p>Hur mycket CSN kommer jag få?</p>
                <p>Kan man studera på Distans?</p>
                <p>Hur mycket närvaro måste jag ha för att bli godkänd?</p>
            </section>


            <div className="square"></div> <div className="sqLine"><hr /></div>
            <div><h1>Hittade du det du sökte?</h1>
                <p>Om du inte hittade svaret på din fråga kan du kontakta oss via vår livechatt eller skicka ett mail!</p>
                <div className="box1"><h3>Skicka Mail</h3>
                    {/*  <img src={Mail} alt="Mail" /> */}
                    <p>Du kan även ställa dina frågor via mail!</p></div>
                <div className="box2"><h3>Live Chatt</h3>
                    <p>Chatta gärna direkt med oss via live chatten på messenger!</p></div>
            </div>

        </div>
    }
}

export default Aboutus;