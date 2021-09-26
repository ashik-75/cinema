import './footer.scss';

const Footer = ({ active }) => {
  return (
    <div className={active ? 'footer active' : 'footer'}>
      <div className="footer-container">
        <div className="footer-title">
          {' '}
          <a href="#about">Question? Contact Us</a>
        </div>
        <div className="links-container">
          <div className="links">
            <ul>
              <li>
                <a href="#a">FAQ</a>
              </li>
              <li>
                <a href="#b">Investor Relation</a>
              </li>
              <li>
                <a href="google.com">Policy</a>
              </li>
              <li>
                <a href="#f">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#a">FAQ</a>
              </li>
              <li>
                <a href="#b">Investor Relation</a>
              </li>
              <li>
                <a href="google.com">Policy</a>
              </li>
              <li>
                <a href="#f">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#a">FAQ</a>
              </li>
              <li>
                <a href="#b">Investor Relation</a>
              </li>
              <li>
                <a href="google.com">Policy</a>
              </li>
              <li>
                <a href="#f">Speed Test</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
