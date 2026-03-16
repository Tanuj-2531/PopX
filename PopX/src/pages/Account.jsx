import { useEffect, useState } from "react";

function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div className="container">
      <h2>Account Settings</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          width="80"
          height="80"
          style={{ borderRadius: "50%" }}
        />

        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Company:</strong> {user.company}
      </p>
      <p>
        <strong>Agency:</strong> {user.agency}
      </p>

      <p style={{ marginTop: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </div>
  );
}

export default Account;