import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <h1>About Quality Aluminium Fabricator Company</h1>

      <div className="content-wrapper">
        <div className="content-left">
          <p>Dealers in:</p>
          <ul>
            <li>Office partitioning</li>
            <li>Sliding Doors, Sliding windows and Project windows</li>
            <li>Window blinds</li>
            <li>All kinds of Glass (Obs, clear glass, 1 way &amp; Tinted Glass)</li>
            <li>Quotation making</li>
            <li>Office planning (Plane Drawing)</li>
            <li>Glass tinting</li>
            <li>Office maintenance</li>
            <li>All aluminium accessories (locks, hinges, rubbers)</li>
          </ul>
        </div>
        <div className='aside-image'>
          <img src='https://img.freepik.com/premium-photo/window-manufacturer-showcasing-its-product-range-capabilities-with-focus-plastic-windows_124507-112400.jpg?size=626&ext=jpg' alt='aside' />
        </div>
      </div>

      <div>
        <h3>Our Partners</h3>
        <div className="partners-images">
          <a href="https://www.hebatullah.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgPgYYl-uVx6DB2yg8jZDymCRTZkkTX590Qxye2oz&s" alt="partners" />
          </a>
          <a href="https://canonaluminium.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4GszmO604qqH3hb6ylxpo_TXyb_DWsKkdGPw_BJt2Q&s" alt="partners" />
          </a>
          <a href="https://impalaglass.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ563ISM-GPV0gqBlKyFtwakM4vPbGX5jx0JtNfY77q&s" alt="partners" />
          </a>
          <a href="https://find-and-update.company-information.service.gov.uk/company/03957929" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYiOR0BmSk2qOXy1s9CatOHRAc35_I3zVZ9_LrMP1&s" alt="partners" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
