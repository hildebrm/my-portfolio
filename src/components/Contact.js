import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import pfp from "../documents/pfp.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="page shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={pfp}
                    alt="pfp"
                    style={{ width: "40%", borderRadius: "50%" }}
                  />
                  <br />
                  <a href="https://twitter.com/MaxHildebrand6" style={{ color: "gray", fontSize: "smaller" }}>
                    <i className="fa fa-twitter" style={{ fontSize: "larger", marginRight: "3px" }} />@maxhildebrand6
                  </a>
                  <a href="https://www.linkedin.com/in/maxwell-hildebrand-b9276328b/" style={{ color: "gray", fontSize: "smaller", marginLeft: "5px", marginRight: "5px" }}>
                   <i className="fa fa-linkedin" style={{ fontSize: "larger", marginRight: "3px" }} /> @maxwell
                  </a>
                  <a href="https://github.com/hildebrm" style={{ color: "gray", fontSize: "smaller" }}>
                    <i className="fa fa-github" style={{ fontSize: "larger", marginRight: "3px" }} />@hildebrm
                  </a>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2>Maxwell Hildebrand</h2>
                  <p>Boston College</p>
                  <p style={{ marginTop: "3px", marginBottom: "3px" }}>Boston, Massachusetts</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4"> </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio" style={{marginRight: "10px", marginLeft: "10px", marginTop: "15px" }}>
                      Hello! I am a Computer Science and Mathematics Undergraduate student focusing on Software Development 
                      and Data Science. I am passionate about learning new technologies and building projects that help people. I
                       am currently looking for an internship opportunity in the field of Software Development or Data Science. I am 
                       also interested in collaborating on projects, so feel free to reach out to me!
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div class="bottom-container" style={{ textAlign: "center" }}>
          <h4
            style={{
              paddingBottom: "1%",
              paddingTop: "3%",
              color: "rgb(70, 131, 192)"
            }}
          >
            {" "}
            Professional Experience
          </h4>
          <table className="wider-table">
            <tr>
              <th>Position</th>
              <th>Company</th>
              <th>Company Website</th>
            </tr>
            <tr>
              <td>Software Engineer</td>
              <td>Grapher</td>
              <td>
                <a href="https://www.linkedin.com/company/graphercollectibles/about/" class="links" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </td>
            </tr>
            <tr>
              <td>Coding Staff</td>
              <td>The Heights</td>
              <td>
                <a href="https://www.bcheights.com/" class="links" target="_blank" rel="noopener noreferrer">
                  bcheights.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Technology Integration Intern</td>
              <td>Kured</td>
              <td>
                <a href="https://www.kured.co/" class="links" target="_blank" rel="noopener noreferrer">
                  kured.co
                </a>
              </td>
            </tr>
          </table>
          <div class="bottom-link">
            <Link to="/projects">Check out some of my projects!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;