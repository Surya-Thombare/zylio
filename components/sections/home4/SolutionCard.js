import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const SolutionsLayout = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="services-container">
      <div className="container mt-4">
        <h2
          className="text-left mb-4"
          style={{ fontSize: "32px", color: "white", fontWeight: "400" }}
        >
          Our Comprehensive Solutions
        </h2>
        <div className="row">
          {/* Production Planning and Control */}
          <div className="col-md-4 ">
            <div className="card card-custom ">
              <div
                className="card-header card-header-custom text-start"
                onClick={() => toggleSection("productionPlanning")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Production Planning and Control
                </button>
                <i
                  className={`bi ${
                    openSections["productionPlanning"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["productionPlanning"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Production scheduling</li>
                    <li>2. Shop floor control</li>
                    <li>3. Work order management</li>
                    <li>4. Bill of materials (BOM) management</li>
                    <li>5. Material requirements planning (MRP)</li>
                    <li>6. Capacity planning</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Maintenance Management */}
          <div className="col-md-4 ">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom "
                onClick={() => toggleSection("maintenanceManagement")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Maintenance Management
                </button>
                <i
                  className={`bi ${
                    openSections["maintenanceManagement"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["maintenanceManagement"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Preventive and predictive maintenance</li>
                    <li>2. Maintenance scheduling</li>
                    <li>3. Work order management</li>
                    <li>4. Equipment and asset management</li>
                    <li>5. Spare parts inventory managemen</li>
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Inventory Management */}
          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("inventoryManagement")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Inventory Management
                </button>
                <i
                  className={`bi ${
                    openSections["inventoryManagement"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["inventoryManagement"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Preventive and predictive maintenance</li>
                    <li>2. Maintenance scheduling</li>
                    <li>3. Work order management</li>
                    <li>4. Equipment and asset management</li>
                    <li>5. Spare parts inventory managemen</li>
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {/* Quality Management */}
          <div className="col-md-4 ">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("qualityManagement")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Quality Management
                </button>
                <i
                  className={`bi ${
                    openSections["qualityManagement"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["qualityManagement"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Quality control and assurance</li>
                    <li>2. Inspection and testing</li>
                    <li>3. Non-conformance tracking</li>
                    <li>4. Compliance management</li>
                    {/* <li>5. Spare parts inventory managemen</li> */}
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Add more sections as per the original design */}
          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("engineeringProductLifecycle")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Engineering and Product Lifecycle
                </button>
                <i
                  className={`bi ${
                    openSections["engineeringProductLifecycle"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["engineeringProductLifecycle"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Product data management (PDM)</li>
                    <li>2. Change management</li>
                    <li>3. Product lifecycle management (PLM)</li>
                    <li>4. Configuration management</li>
                    <li>5. Document management</li>
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("supplyChainManagement")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Supply Chain Management
                </button>
                <i
                  className={`bi ${
                    openSections["supplyChainManagement"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["supplyChainManagement"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Preventive and predictive maintenance</li>
                    <li>2. Maintenance scheduling</li>
                    <li>3. Work order management</li>
                    <li>4. Equipment and asset management</li>
                    <li>5. Spare parts inventory managemen</li>
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("Collaboration_Tools")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Collaboration Tools
                </button>
                <i
                  className={`bi ${
                    openSections["Collaboration_Tools"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["Collaboration_Tools"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Document management and sharing</li>
                    <li>2. Workflow automation</li>
                    <li>
                      3. Integration with third-party collaboration platforms
                    </li>
                    {/* <li>4. Equipment and asset management</li> */}
                    {/* <li>5. Spare parts inventory managemen</li> */}
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("Analytics_and_Reporting")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Analytics and Reporting:
                </button>
                <i
                  className={`bi ${
                    openSections["Analytics_and_Reporting"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["Analytics_and_Reporting"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Real-time data analytics</li>
                    <li>2. Customizable reports and dashboards</li>
                    <li>3. Key performance indicators (KPIs) tracking</li>
                    {/* <li>4. Equipment and asset management</li> */}
                    {/* <li>5. Spare parts inventory managemen</li> */}
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div
                className="card-header card-header-custom"
                onClick={() => toggleSection("Integration_Capabilities")}
              >
                <button
                  className="btn btn-link w-100 text-start"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  Integration Capabilities
                </button>
                <i
                  className={`bi ${
                    openSections["Integration_Capabilities"]
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } arrow-icon`}
                ></i>
              </div>
              {openSections["Integration_Capabilities"] && (
                <div className="card-body">
                  <ul>
                    <li>1. Integration with other software and tools</li>
                    <li>2. API for custom integrations</li>
                    <li>3. Data import/export capabilities</li>
                    {/* <li>4. Equipment and asset management</li> */}
                    {/* <li>5. Spare parts inventory managemen</li> */}
                    {/* <li>6. Capacity planning</li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;
