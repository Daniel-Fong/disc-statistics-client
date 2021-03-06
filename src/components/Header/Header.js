import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import styles from './Header.module.scss';

class Header extends Component {
  state = {
    loading: true,
    user: {}
  };

  static defaultProps = {
    match: {},
    location: {}
  };

  static contextType = UserContext;

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    let user = this.context.user;
    return (
      <div className={styles.logoutDiv}>
        <Link to="/" className={styles.homeLink}>
          <h1 className={styles.cupOfSugarHeader}>
            Disc Statistics
          </h1>
        </Link>
        {/* <Link className={styles.headerIcon} to="/">
          <img
            className={styles.headerIcon}
            src={require('../../images/give.svg')}
            alt="disc statistics icon"
            aria-label="home link"
            name="home link"
          />
        </Link> */}
        <nav className={styles.linksContainer}>
          <Link className={styles.directoryLink} to="/">
            Directory
          </Link>
          <Link className={styles.addDiscLink} to="/addDisc">
            Add Disc
          </Link>
          <Link className={styles.discsLink} to="/discs">
            Discs
          </Link>
          <img
            className={styles.avatarImg}
            src={user.img_src}
            alt={user.img_alt}></img>
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
            className={styles.logoutLink}>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    const { location } = this.props;
    return (
      <nav className={styles.loginDiv}>
        {location.pathname === '/register' ? (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        ) : (
          <Link to="/register" className={styles.signUpLink}>
            Sign up
          </Link>
        )}
      </nav>
    );
  }

  render() {
    const { location } = this.props;
    if (this.state.loading === true) {
      return <></>;
    }

    const { pathname } = location;

    return (
      <header
        className={
          pathname === '/register' || pathname === '/login'
            ? styles.Header
            : styles.HeaderWithUnderline
        }>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
