import './feature.scss';

const Feature = ({ backUrl, frontUrl }) => {
  return (
    <div
      className="feature"
      style={{
        background: `linear-gradient(to bottom,rgba(0,0,0,0),#151515), url(${backUrl})`,
      }}
    >
      <div className="feature-container">
        <img src={frontUrl} alt="" />
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint ex
          itaque dolores corrupti doloremque tempore. Expedita, velit at.
          Eligendi!
        </div>
        <button>watch</button>
      </div>
    </div>
  );
};

export default Feature;
