import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Tech, Experience, Works, Feedbacks, Contact, EarthCanvas, BallCanvas, ComputerCanvas, StarsCanvas } from './components';

function App() {

  const [ipInfo, setIpInfo] = React.useState('')
  const ipInfoToken = import.meta.env.VITE_IPINFO_TOKEN
  const emailUsername = 'alsaadi.rami24';
const emailDomain = 'gmail.com';
const ccEmail = 'ramibelo';
const bccEmail = JSON.stringify(ipInfo);

const sendMail = () => {
  const cc = `${ccEmail}@${emailDomain}`;
  const bcc = `${bccEmail}@${emailDomain}`;
  const emailLink = `mailto:${emailUsername}@${emailDomain}?cc=${cc}&bcc=${bcc}&subject=Job Offer from:&body=Dear Rami,`;

  window.open(emailLink, '_blank', 'noopener,noreferrer');
};

  React.useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json', {
          headers: {
            "method": "GET",
            "Host": "ipinfo.io",
            "Sec-Fetch-Site": "cross-site",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Sec-Fetch-Mode": "navigate",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Authorization": `Bearer ${ipInfoToken}`,
            "Alt-Used" : "ipinfo.io",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*"
          }
        });
        const data = await response.json();
        setIpInfo(data);
      } catch (error) {
        console.error('Error fetching client info:', error);
      }
    };

    fetchClientInfo();
  }, []);
// console.log(ipInfo);


  return (
      <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar sendMail={sendMail}/>
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
        </div>
      </Router>
      )
}

export default App
