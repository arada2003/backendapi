import React, { useState } from "react";
import NavbarRegis from "../component/navbarRegis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const User = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <NavbarRegis />
      <div className="container-fluid contact py-5" style={{ marginTop: "80px" }}>
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center" style={{ maxWidth: "100%" }}>
                  <h1 className="text-primary">Profile</h1>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <FontAwesomeIcon icon={faUser} size="2x" className="text-primary me-4" />
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-primary me-4" />
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">info@example.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <FontAwesomeIcon icon={faPhone} size="2x " className="text-primary me-4" />
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-7">
                <div className="d-flex p-4 rounded mb-4 bg-white position-relative" style={{ height: "100%" }}>
                  <div style={{ flex: 1 }}>
                    <h4>
                      Api Token Key <FontAwesomeIcon icon={faKey} className="text-primary me-2" />
                    </h4>
                    <p
                      className="mb-2"
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {isHidden
                        ? "******************************" // ซ่อนข้อความ
                        : "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA/FwuFV96nWeR9ursIV1YMswLoFdLbd585JHF6tMjlgw4oY2FPFGiHWRDcMJ6dGUPcBKo/z2NaSVWS1J4QoZzNdrnwsuxRvlCbWPaGOUzYK9hKZmBK1IO6zfl0vBt8VNmZMxgfHRo8i0p5uCeX3pK/2o0jffax/UE4Nuwy2Y0sS7bavNw+VXhJzvCgMqVjCYxSYWezqsDvTLy+y0miZmdWvsuLcDGoMVLFe4fi2eY97uWbc/NcBjwp0iPjRFAkZNArHA6bqadwznfDlMaE1MNljvgq+adQwW733gzxAwgqDQd1ngotZIeqQrm2Y6HIB+qYdAHRXQv5/KSLDTAOpT2SwIDAQAB"
                      }
                    </p>

                  </div>

                  <FontAwesomeIcon
                    icon={isHidden ? faEye : faEyeSlash}
                    className="text-secondary"
                    style={{
                      position: "absolute",
                      right: "15px",

                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsHidden(!isHidden)}
                  />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
