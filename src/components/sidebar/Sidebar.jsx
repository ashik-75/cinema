import './sidebar.scss';

const Sidebar = ({ active }) => {
  return (
    <div className={active ? 'sidebar active' : 'sidebar'}>
      <ul>
        <li>
          <i className="fas fa-search"></i>
        </li>
        <li>
          <i className="fas fa-home"></i>
        </li>
        <li>
          <i className="fas fa-users"></i>
        </li>
        <li>
          <i className="fas fa-bookmark"></i>
        </li>
        <li>
          <i className="fas fa-tv"></i>
        </li>
        <li>
          <i className="fas fa-cart-plus"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
