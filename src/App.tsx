import { FaChevronRight } from "react-icons/fa6";
import "./App.scss";
import {} from "react-icons";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="header">
          <h1>Market leader in product</h1>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-header">
              <p>
                G2 Grid for Cloud-Native Application Protection Platforms
                (CNAPP)
              </p>
            </div>
            <div className="card-graphic">
              <div className="card-graphic-wrapper">
                <div id="grid-graphic">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              G2 CNAPP Report Spring 2024: Still the #1 CNAPP platform.
            </div>
            <div className="card-actions">
              <button className="card-button">
                Get Report <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <p>The forester wave</p>
              <p>Cloud Workload Security, Q1 2024</p>
            </div>
            <div className="card-graphic">
              <div className="card-graphic-wrapper">
                <div id="quarter-graphic">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              Wiz recognized with top score for the current offering category in
              The Forrester Wave™: Cloud Workload Security, Q1, 2024.
            </div>
            <div className="card-actions">
              <button className="card-button">
                Get Report <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <p>Frost Radar™</p>
              <p>Cloud Security Posture Management, 2024</p>
            </div>
            <div className="card-graphic">
              <div className="card-graphic-wrapper">
                <div id="radar-graphic">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>

                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              Frost & Sullivan recognizes Wiz as Cloud Security Posture
              Management leader.
            </div>
            <div className="card-actions">
              <button className="card-button">
                Get Report <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
