import "./CommonTitle.css";

const CommonTitle = ({ title, height }) => {
  console.log(height);

  return (
    // <div className="low-opacity-bg-image">
    <div className="mb-10">
      <h1 style={{ fontSize: "3.5rem", color:"#6FBEEA" }}>{`${title}`}</h1>
    </div>
  );
};

export default CommonTitle;
