import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <div>
            {/* Top Profile */}
            <div
                className="container-fluid col-9 py-3 rounded"
                style={{ marginTop: "50px", backgroundColor: "#e9ecef" }}
            >
                <div className="d-flex align-items-center">
                    <img
                        src="img/L.jpg"
                        className="img-fluid rounded-circle rounded-circle me-5"
                        alt=""
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginLeft: "15px",
                        }}
                    />
                    <h1 className="text-black">Profile</h1>
                </div>
            </div>

            {/* other Class */}
            <div className="container-fluid contact py-5">
                <div className="container">
                    <div className="p-5 rounded bg-light" >
                        <div className="row g-4">
                            {/* Contact Info */}
                            <div className="d-flex justify-content-center ">
                                <div className="card mb-4 p-4 shadow-sm" style={{ maxWidth: "1000px", width: "100%",padding: "10px" }}>
                                    <div className="row g-0 align-items-center">
                                        {/* รูปด้านซ้าย */}
                                        <div className="col-md-4 text-center">
                                            <img src="img/L.jpg" className="img-fluid " alt="Profile"
                                                style={{ width: "150px", height: "150px",}}
                                            />
                                        </div>

                                        {/* รายละเอียดด้านขวา */}
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">คลาสออกอะไร</h5>
                                                <p className="card-text mb-1">
                                                    เวลา : นาที
                                                </p>
                                                <p className="card-text mb-1">วันที่ : </p>
                                                <p className="card-text text-muted">
                                                    ชื่อ Gym:
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
