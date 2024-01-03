import MyParticles from "./MyParticles";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <img
        src="../../../../Images/bafsdwc.png"
        alt="BAF Shaheen College Dhaka Writers' Club logo"
        style={{
          width: "250px",
          height: "250px",
        }}
      />
      <h1
        style={{ fontSize: "60px", fontFamily: "sans-serif", color: "#FFD700", fontWeight:"600", textAlign:"center" }}
      >
        BAF SHAHEEN COLLEGE DHAKA WRITERS' CLUB
      </h1>
      <span style={{fontSize:"18px", color:"#FFFFFF"}}>
        Let your pen be the pioneer.
      </span>
      <MyParticles></MyParticles>
    </div>
  );
};
export default Home;
