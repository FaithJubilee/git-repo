import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import * as ContentMgtURL from "../urls/Routing";
import Button from "../components/Button";
import avatar from "../assets/images/faith.jpg";
import './home.css';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const url = "https://api.github.com/users/faithjubilee/repos";

  const getUserRepo = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  // const navigator = useNavigate();
  // const handleClick = () => {
  //   navigator(`${ContentMgtURL.LANDING_ROUTE}/repositories`);
  // };
  return (
    <div className="container">
      <span>
        <Button
          clickHandler={getUserRepo}
          isActive={activeUser}
          btnText="Repositories"
        />
      </span>
      <nav>
        <p>Logo</p>
        <ul>
          <li>Home</li>
          <li>Repository</li>
          <li>Contact</li>
        </ul>
        <div className="user-profile"></div>
      </nav>
      <section className="landing-user">
        <div className="user-profile">
          <div className="user-pic">
            <img src={avatar} alt="img" />
          </div>
          <p className="user-name">Faith Jubilee</p>
          <p className="user-bio">A web Developer, ready to work</p>
        </div>
      </section>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div className="main" key={repo.owner.id}>
                <div className="user-profile">
                  <p className="user-name">{repo.owner.login} </p>
                </div>
                <Link className="user-repo" to={repo.svn_url} >{repo.html_url}</Link>
              </div>
            );
          })}
        </div>
      )}

      {/* <Button clickHandler={handleClick} /> */}
    </div>
  );
};

export default Home;