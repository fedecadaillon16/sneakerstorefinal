// src/components/Loading/Loading.jsx
const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}}>
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;