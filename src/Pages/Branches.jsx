import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

const Branches = () => {
    return ( 
        <div>
            <Navbar/>
            <section id="container">
                <Sidebar/>
                <div className="content">
                    <h2>BAŞLIK</h2>
                </div>
            </section>
            <Footer/>
        </div>
     );
}
 
export default Branches;