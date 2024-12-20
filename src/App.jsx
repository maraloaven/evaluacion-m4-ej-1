import React, { useState } from "react";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";

import dr1 from "./assets/dr1.jpg";
import dr2 from "./assets/dr2.jpg";
import dr3 from "./assets/dr3.jpg";
import dr4 from "./assets/dr4.jpg";

import ser1 from "./assets/ser1.jpg";
import ser2 from "./assets/ser2.jpg";
import ser3 from "./assets/ser3.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("doctors"); // sección actual

  const doctors = [
    { name: "Dr. Mario", specialty: "Cardiología", experience: 10, image: dr1 },
    { name: "Dra. Ana Polo", specialty: "Medicina Interna", experience: 8, image: dr2 },
    { name: "Dr. Nick", specialty: "Cirugía General", experience: 5, image: dr3 },
    { name: "Dra. Simi", specialty: "Oftalmología", experience: 15, image: dr4 },
  ];

  const services = [
    { name: "Cardiología", image: ser1 },
    { name: "Pediatría", image: ser2 },
    { name: "Radiología", image: ser3 },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Clínica Clínica</h1>

      {/* navbar */}
      <nav className="mb-4">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "doctors" ? "active" : ""}`}
              onClick={() => setActiveSection("doctors")}
            >
              Doctores
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              onClick={() => setActiveSection("services")}
            >
              Servicios
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "form" ? "active" : ""}`}
              onClick={() => setActiveSection("form")}
            >
              Agendar Cita
            </button>
          </li>
        </ul>
      </nav>

      <div>
        {activeSection === "doctors" && (
          <div className="row">
            {doctors.map((doc, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <DoctorCard
                  name={doc.name}
                  specialty={doc.specialty}
                  experience={doc.experience}
                  image={doc.image}
                />
              </div>
            ))}            
          </div>
        )}
        {activeSection === "services" && <ServiceList services={services} />}
        {activeSection === "form" && <AppointmentForm />}
      </div>
    </div>
  );
}

export default App;
