import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <p></p>
        <Link style={{ textDecoration: 'none', borderBlock: '4px solid black' }} to="/">Home</Link>
        <Link style={{ textDecoration: 'none', borderBlock: '4px solid black' }} to="/photos">Photos</Link>
        <Link style={{ textDecoration: 'none', borderBlock: '4px solid black' }} to="/traits">What I Love About You</Link>
        <Link style={{ textDecoration: 'none', borderBlock: '4px solid black' }} to="/blindbox">Blindbox</Link>
        <p></p>
    </div>
  );
};

export default Appbar;