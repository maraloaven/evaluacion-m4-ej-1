import { useState } from "react";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
  });
  const [appointments, setAppointments] = useState([]); // guardar citas

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.doctor || !formData.date) {
      alert("Hay campos sin completar.");
      return;
    }
    setAppointments([...appointments, formData]);
    setFormData({ patientName: "", doctor: "", date: "" });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Nombre del Paciente:
          </label>
          <input
            type="text"
            className="form-control"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Doctor:
          </label>
          <input
            type="text"
            className="form-control"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Fecha de la Cita:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agendar Cita
        </button>
      </form>

      {/* mostrar citas */}
      <div className="mt-4">
        <h5>Citas Agendadas:</h5>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.patientName} tiene una cita con {appointment.doctor} el {appointment.date}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentForm;
