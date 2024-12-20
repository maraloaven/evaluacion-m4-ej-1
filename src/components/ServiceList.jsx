function ServiceCard({ name, image }) {
  const cardImageStyle = {
    maxHeight: "100px",
    width: "100%",
    objectFit: "contain",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const cardBodyStyle = {
    textAlign: "center",
  };

  return (
    <div className="card h-100">
      <img src={image} alt={`Imagen del servicio ${name}`} style={cardImageStyle} />
      <div className="card-body" style={cardBodyStyle}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ofrecemos servicios especializados en {name}, con nuestro equpo altamente capacitado.</p>
      </div>
    </div>
  );
}

function ServiceList({ services }) {
  return (
    <div className="row">
      {services.map((service, index) => (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
          <ServiceCard name={service.name} image={service.image} />
        </div>
      ))}
    </div>
  );
}

export default ServiceList;