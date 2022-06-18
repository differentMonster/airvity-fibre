import { client } from 'client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

export default function Login() {
  const { useLogin } = client.auth;
  const [usernameEmail, setUserNameEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { login, isLoading, data, error } = useLogin();

  const errorMessage = data?.error || error?.message;

  if (data && data.code) {
    router.push('/');
  }

  return (
    <div className="ps-page--default">
      <div className="container">
        <div className="ps-page__header">
          <h3>Sign In</h3>
          <ul className="ps-breadcrumb">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>Sign In</li>
          </ul>
        </div>

        <div className="ps-page__content">
          <div className="ps-tab-root">
            <div className="container--login">
              <form
                className="ps-form--auth"
                id="login__tab"
                onSubmit={(e) => {
                  e.preventDefault();
                  login(usernameEmail, password);
                }}
              >
                <div className="ps-tabs">
                  <div className="ps-tab active" id="tab-1">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        value={usernameEmail}
                        onChange={(e) => setUserNameEmail(e.target.value)}
                        id="usernameEmail"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="remember"
                          name="remember"
                        />
                        <label>Remember Me</label>
                      </div>
                    </div>
                    <div className="form-group submit">
                      <button
                        type="submit"
                        className="ps-btn ps-btn--fullwidth ps-btn--black"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
                {errorMessage ? <p>Error: {errorMessage}</p> : null}
              </form>
            </div>

            <div className="ps-form--auth">
              <p>Connect with</p>
              <ul className="ps-list--social">
                <li>
                  <a className="facebook" href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="google-plus" href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
