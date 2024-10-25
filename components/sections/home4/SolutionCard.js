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
                className="card-header card-header-custom"
                onClick={() => toggleSection("productionPlanning")}
              >
                <button
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                className="card-header card-header-custom"
                onClick={() => toggleSection("maintenanceManagement")}
              >
                <button
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                  Content for Maintenance Management
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
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                  Content for Inventory Management
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
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                <div className="card-body">Content for Quality Management</div>
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
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                  Content for Engineering and Product Lifecycle
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
                  className="btn btn-link w-100 text-left"
                  style={{ color: "white", fontSize: "18px" }}
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
                  Content for Supply Chain Management
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
