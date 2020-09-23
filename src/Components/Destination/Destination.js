import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import fakedata from '../../fakedata/index'

const Destination = () => {

    const { destinationid } = useParams();
    const hotelinformation = fakedata.find(data => data.id === destinationid)
    const { title, picture1, picture2, picture3,name1,name2,name3 } = hotelinformation;
    console.log(hotelinformation);
    return (
        <div>
            <div className="homeimage">

                <Header></Header>

                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <div style={{ color: 'white' }}>
                                <p>252 stays Apr 13-17 3 guests</p>
                                <h4>{title}</h4>
                            </div>
                            {/* First room information */}
                            <div className="d-flex">

                                <div>
                                    <img style={{ width: '200px',height:'130px' }} src={picture1} alt="" />
                                </div>

                                <div className="apartment" style={{ marginLeft: "35px" }}>
                                    <p style={{ color: "white" }}>{name1} </p>
                                    <p style={{ color: "white" }}>
                                        4 guests 2 bedrooms 2 beds 2 baths <br />
                                            Wifi Air conditioning Kitchen <br />
                                            Cancellation fexibility availiable <br />
                                        <span > 4.9 (20) &nbsp;&nbsp; $52/ night &nbsp;&nbsp; $167 total</span>
                                    </p>
                                </div>
                            </div>
                            {/* second room information */}
                            <div className="d-flex">

                                <div>
                                    <img style={{ width: '200px',height:'130px' }} src={picture2} alt="" />
                                </div>

                                <div className="apartment" style={{ marginLeft: "35px" }}>
                                    <p style={{ color: "white" }}>{name2} </p>
                                    <p style={{ color: "white" }}>
                                        4 guests 2 bedrooms 2 beds 2 baths <br />
                                            Wifi Air conditioning Kitchen <br />
                                            Cancellation fexibility availiable <br />
                                        <span > 4.9 (20) &nbsp;&nbsp; $52/ night &nbsp;&nbsp; $167 total</span>
                                    </p>
                                </div>
                            </div>
                            {/*Third room information  */}
                            <div className="d-flex">

                                <div>
                                    <img style={{ width: '200px',height:'130px' }} src={picture3} alt="" />
                                </div>

                                <div className="apartment" style={{ marginLeft: "35px" }}>
                                    <p style={{ color: "white" }}>{name3} </p>
                                    <p style={{ color: "white" }}>
                                        4 guests 2 bedrooms 2 beds 2 baths <br />
                                            Wifi Air conditioning Kitchen <br />
                                            Cancellation fexibility availiable <br />
                                        <span > 4.9 (20) &nbsp;&nbsp; $52/ night &nbsp;&nbsp; $167 total</span>
                                    </p>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2766243.7879151287!2d89.97055095426357!3d24.142547837459787!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1600294700894!5m2!1sen!2sbd"
                                width="470px" height="500px" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Destination;