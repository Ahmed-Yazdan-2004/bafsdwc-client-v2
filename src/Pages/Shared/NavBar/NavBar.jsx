const NavBar = () => {
  return (
    <div className="navbar" style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "999",
        width: "100%",
    }}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" style={{ color: "#FFD700" }}>
          <img
            src="../../../../Images/bafsdwc.png"
            alt="BAF Shaheen College Dhaka Writers' Club logo"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          BAFSDWC
        </a>
        <div style={{ marginLeft: "10%" }}>
          <a className="btn btn-ghost text-xl" style={{ color: "#6EBDEB" }}>
            Activities
          </a>
          <a className="btn btn-ghost text-xl" style={{ color: "#6EBDEB" }}>
            Panel
          </a>
          <a className="btn btn-ghost text-xl" style={{ color: "#6EBDEB" }}>
            Hall of Fame
          </a>
          <a className="btn btn-ghost text-xl" style={{ color: "#6EBDEB" }}>
            About Us
          </a>
        </div>
      </div>
      <div className="flex-none gap-2" style={{marginRight:"1%"}}>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/415924457_343168618663591_2420009044767073720_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHcRHsxz1B0hRduEiXmIK6jT4Gl2YBFsitPgaXZgEWyK78lbpxqDD6AaAAbhKAO3fSLpbqRuWsbxdFCKAKnh7t3&_nc_ohc=FXCo6APLxB4AX_dQFew&_nc_ht=scontent.fdac11-1.fna&oh=00_AfCDNs3KafSB2HElRy5dy5M0pLO30bJDnkZF4-qd1xduZQ&oe=659A4A81"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
