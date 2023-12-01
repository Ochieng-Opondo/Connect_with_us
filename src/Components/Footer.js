import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div class="contact-box">
        <div class="contact-left">
            <h3 style={{fontWeight: 'bold', color: 'rgb(89, 87, 87)'}}>Get in touch</h3>
            <form>
                <div class="input-row">
                    <div class="input group">
                        <label>Name</label>
                        <input type="" placeholder="John Doe" />
                    </div>
                    <div class="input group">
                        <label>Phone</label>
                        <input type="" placeholder="+254780897675" />
                    </div>
                </div>
                <div class="input-row">
                    <div class="input group">
                        <label>Email</label>
                        <input type="" placeholder="emailgoogle@gmail.com" />
                    </div>
                    <div class="input group">
                        <label>Subject</label>
                        <input type="" placeholder="Product name" />
                    </div>
                </div>
                <label>Message</label>
                <textarea rows="5" placeholder="Your Message"></textarea>

                <button style={{marginTop: '10px'}} type="submit">Submit</button>
            </form>


        </div>
        <div class="contact-right">
            <h3 style={{fontWeight: 'bold', color: 'rgb(89, 87, 87)'}}>Reach Us</h3>

            <table>
                <tr>
                    <td>Email</td>
                    <td>tobias.opondo@strathmore.edu</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>+254710702411</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>Sarit Plaza, 5th floor<br />
                        Karuna Road, Westlands, Nairobi.</td>
                </tr>
            </table>



        </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '10px', backgroundColor: 'aliceblue', borderTop: '1px solid rgb(208, 202, 202)'}}>
        <p>HFO &copy; 2023 All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;