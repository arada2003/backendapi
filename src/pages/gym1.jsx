import React, { useState } from 'react';
import Navbar from "../component/navbar";
import "../style.css";
import "../bootstrap.min.css";
import "./gym.css";

const Gym1 = () => {
    const [selectedContent, setSelectedContent] = useState("GET 1");

    const renderContent = () => {
        switch (selectedContent) {
            case "GET 1":
                return (
                    <div className="" style={{ marginTop: "180px" }} >
                        <h2>GET คลาสทั้งหมดของยิม1</h2>
                        <div className="col-lg-7">
                            <h4>Request</h4>
                            <p>GET http://localhost:8088/gymclass/1</p>

                            <h5>คำอธิบาย</h5>
                            <p>ใช้เพื่อดึงข้อมูลคลาสทั้งหมดของยิมที่มีไอดีเป็น 1</p>

                            <h5>Response: 200 OK</h5>
                            <div style={{
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #ccc",
                                padding: "15px",
                                borderRadius: "8px",
                                fontFamily: "monospace",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                                maxHeight: "400px",
                                overflowY: "auto"
                            }}>
                                <pre>
                                    {JSON.stringify({
                                        class_id: 7,
                                        class_name: "Body Pump",
                                        description: "ยกน้ำหนักที่ผสมผสานกับการเคลื่อนไหวตามจังหวะเพลง เสริมสร้างกล้ามเนื้อและความแข็งแรงทั่วร่างกาย",
                                        class_type: "Strength and Conditioning",
                                        class_duration: "60",
                                        class_schedule: "2025-05-03",
                                        class_price: 300,
                                        class_level: "ปานกลาง"
                                    }, null, 2)}
                                </pre>
                            </div>
                        </div>
                    </div>
                );
            case "GET 2":
                return (
                    <div className="" style={{ marginTop: "180px" }} >
                        <h2>GET 2</h2>
                        <p>ข้อมูลจาก API ที่ 2</p>
                        <table border="1" cellPadding="10">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Sample data 1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sample data 2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case "GET 3":
                return (
                    <div className="" style={{ marginTop: "180px" }} >
                        <h2>GET 3</h2>
                        <p>แสดงข้อมูลเกี่ยวกับ พรบ.สินทรัพย์ดิจิทัล</p>
                        <p>การให้บริการเป็นศูนย์ซื้อขายสินทรัพย์ดิจิทัล</p>
                    </div>
                );
            case "GET 4":
                return (
                    <div className="" style={{ marginTop: "180px" }} >
                        <h2>GET 4</h2>
                        <p>รายละเอียดการอนุญาตประกอบธุรกิจทรัสต์</p>
                    </div>
                );
            case "GET 5":
                return (
                    <div className="" style={{ marginTop: "180px" }} >
                        <h2>GET 5</h2>
                        <p>ข้อมูลเพิ่มเติม เช่น ข่าว หรือการเปลี่ยนแปลงล่าสุด</p>
                    </div>
                );
            default:
                return <div>กรุณาเลือกเมนู</div>;
        }
    };

    return (
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white" style={{ marginTop: "90px" }}>
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a href="#" onClick={() => setSelectedContent("GET 1")} className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>GET 1</span>
                        </a>
                        <a href="#" onClick={() => setSelectedContent("GET 2")} className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3"></i>
                            <span>GET 2</span>
                        </a>
                        <a href="#" onClick={() => setSelectedContent("GET 3")} className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-lock fa-fw me-3"></i>
                            <span>GET 3</span>
                        </a>
                        <a href="#" onClick={() => setSelectedContent("GET 4")} className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-line fa-fw me-3"></i>
                            <span>GET 4</span>
                        </a>
                        <a href="#" onClick={() => setSelectedContent("GET 5")} className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-cog fa-fw me-3"></i>
                            <span>GET 5</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div>
                <Navbar />
            </div>
            <div style={{ marginLeft: "250px", padding: "20px" }}>
                {renderContent()}
            </div>
        </header>
    );
};

export default Gym1;
