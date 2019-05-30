import React from 'react';
import './App.css';
//import coverImg from './img/cover.png';
import mdesLogoImg from './img/mdes_logo.png';

function App() {
  return (
    <div className="App">
      <nav class="navbar sticky-top navbar-dark bg-dark shadow-sm">
        <span class="navbar-brand text-truncate d-inline-block"><i class="fas fa-search-dollar text-success"></i> งบประมาณกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม</span>
      </nav>
      <main>
        <div className="cover-wrapper bg-white">
          {
            // <div className="div-cover" style={{ backgroundImage: `url(${coverImg})`, backgroundPosition: 'center', filter: 'brightness(60%)' }}></div>
          }
          <div className="container">
            <div className="row py-5 p-lg-5">
              <div className="col-lg-4 text-center order-lg-last">
                <img src={mdesLogoImg} alt="mdes_logo" className="img-fluid rounded bg-white p-3 my-n3"></img>
              </div>
              <div className="col-lg-8 mt-4 mt-lg-0 order-lg-first">
                <h1>กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม</h1>
                <h3 className="text-secondary">Ministry of Digital Economy and Society</h3>
                <p className="lead mt-4">มีอำนาจหน้าที่เกี่ยวกับการวางแผน ส่งเสริม พัฒนา และดำเนินกิจการที่เกี่ยวกับเทคโนโลยีสารสนเทศและการสื่อสาร การอุตุนิยมวิทยา และการสถิติ</p>
                <a class="btn btn-primary btn-lg mt-3" href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%A5%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A1">ข้อมูลเพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center" style={{ backgroundColor: '#e9ecef' }}>
          <div className="div-title d-inline-block mt-3 p-3">
            <h2>กราฟแสดงข้อมูลทางสถิติ</h2>
            <hr className="text-muted"></hr>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <iframe className="d-block mx-3 my-3 shadow-sm border rounded bg-white" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTeOBSfsKrjFVzaIpmGX_LIpQfgSQYajUFjnDp6_PKG1OBvz_XRu_GmcxrWCD1oB070JTm16to6zPNh/pubchart?oid=1920476824&amp;format=interactive"></iframe>
            <iframe className="d-block mx-3 my-3 shadow-sm border rounded bg-white" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZUP1yRlr4dizcMElBRLNRyY1aqmYU9HYD4G0VoqJAuTbggcx51laZL91_Y-2exPvWyNtHQpYjh7y/pubchart?oid=523828327&amp;format=interactive"></iframe>
            <iframe className="d-block mx-3 my-3 shadow-sm border rounded bg-white" width="600" height="474" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5INLYjrbmaIoIO4iDztjOCIIwCk7B_gord2mi3rR5vzexxl6PS9DV9B_4OjCqSpwJmxwCTgVNY22/pubchart?oid=267339736&amp;format=interactive"></iframe>
          </div>
        </div>
      </main>
      <footer className="bg-white py-3 shadow">
        <div className="container">
          <span className="d-block text-muted text-center"><i class="fas fa-user-edit"></i> จัดทำโดย <span className="text-primary">รวิชญ์ ปานเจริญ</span></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
