import './topbar.scss';

const Topbar = ({ active, setActive }) => {
  return (
    <div className={active ? 'topbar active' : 'topbar'}>
      <div className="container">
        <div className="left">Cinema</div>
        <div className="center">
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Popular</li>
            <li>Trends</li>
          </ul>
        </div>
        <div className="right">
          <div className="profile-img">
            <img src="img/profile.jpg" alt="" />
          </div>
          <div className="profile-details">
            <span>Profile</span>
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="toggle">
            <i className="fas fa-sun"></i>
            <div
              className="toggle-ball"
              onClick={() => setActive((dt) => !dt)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
