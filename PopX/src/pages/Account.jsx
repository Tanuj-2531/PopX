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
    <div className="container account-container">
      {/* Header */}
      <div className="account-header">
        <h3>Account Settings</h3>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-img">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="profile"
          />
          <span className="camera-icon">📷</span>
        </div>

        <div className="profile-info">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Description */}
      <p className="profile-desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed
        Diam.
      </p>
    </div>
  );
}

export default Account;
