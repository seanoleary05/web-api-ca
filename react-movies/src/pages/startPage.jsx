import { Link } from "react-router";

const StartPage = () => {
  
    return(
        <>
            <p>
                Welcome to The Movies App! View your <Link to="/movies">Movies</Link> or your <Link to="/profile">Profile</Link>.
            </p>
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to create movie lists!
            </p>
        </>
    );
  };

export default StartPage;
