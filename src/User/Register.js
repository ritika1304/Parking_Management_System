import React, { useState, useEffect } from "react";
import apiServices from "../General/apiServices";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const override = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "53%",
    bottom: "50%",
    zIndex: "1",
  };
  const nav = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  const save = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
      contact: contact,
      address: address,
    };
    apiServices
      .register(data)
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
        if (response.data.success) {
          toast.success(response.data.message);
          setTimeout(() => {
            nav("/login");
          }, 1500);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={loading} css={override} size={120} />
      </div>
      <div className={loading ? "disabled-screen-full" : ""}>
        <section className="h-100">
          <div className="container py-5 h-100  animated slideInDown">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-5 d-none d-xl-block">
                      <img
                        src="assets/images/bg-reg.jpg"
                        alt="Sample photo"
                        className="img-fluid my-5"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem",
                        }}
                      />
                    </div>
                    <div className="col-xl-7">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-primary">
                          REGISTER YOURSELF
                        </h3>
                        <form onSubmit={save}>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  className="form-control form-control-lg"
                                  value={name}
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="form-outline">
                              <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  Email
                                </label>
                                <input
                                type="text" id="form3Example1n" className="form-control form-control-lg"
                                value={email} onChange={(e) => {
                                  setEmail(e.target.value);
                                }}/>
                                
                              </div>
                              <div className="form-outline">
                              <label
                              className="form-label"
                              htmlFor="form3Example1n">
                                password
                              </label>
                              <input
                              type="password"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}/>
                                
                              </div>
                              <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example8"
                              >
                                Contact
                              </label>
                              <input
                                type="number"
                                id="form3Example8"
                                className="form-control form-control-lg"
                                value={contact}
                                onChange={(e) => {
                                setContact(e.target.value);
                                }}
                              />
                              </div>
                              <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example8"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                id="form3Example8"
                                className="form-control form-control-lg"
                                value={address}
                                onChange={(e) => {
                                setAddress(e.target.value);
                                }}
                              />
                              <div className="d-flex justify-content-center pt-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-lg "
                                >REGISTER</button>
                              </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    </>
  )
}
          
            
              


                            
