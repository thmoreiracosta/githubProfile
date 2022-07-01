import { useState } from 'react';
import githubImage from '../assets/octocat.png';

export function Home() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  console.log(userData);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="container text-center ">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="py-2" htmlFor="">Github user</label>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Entre com o usuário do github"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Seach
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            className="responsive rounded-circle pt-2"
            src={githubImage}
            alt="Foto perfil github"
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              className="responsive rounded-circle pt-2"
              src={userData.avatar_url}
              alt="Foto perfil github"
              height="200px"
            />
            <h1 className="pt-4">
              <a
                href={userData.html_url}
                target="_blank"
                className="text-decoration-none"
              >
                {userData.name}
              </a>
            </h1>
            <h3>
              {userData.location}
            </h3>
            <p>
              <a
                href={userData.html_url}
                target="_blank"
                className="text-decoration-none text-info"
              >
                @{userData.login}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}