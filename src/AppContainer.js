import React from "react";
import { withRouter } from "react-router";
import auth from './apis/auth';
import constants from './utils/constants';
import SkipLinks from 'skip-links'

// A simple component that shows the pathname of the current location
class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: false };
    this.login_links = [
      { title: 'Przejdz do logowania', to: 'email' },
    ];
    this.links = [
      { title: 'Przejdz do tresci', to: 'main' },
    ];
  }

  keydownHandler(e) {
    if (e.keyCode === 36 && e.ctrlKey) {
      let dom = document.getElementsByClassName('c-links__item')[0];
      dom.focus();
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler);
  };

  componentDidMount() {
    // this.setState({flag: false});
    document.addEventListener('keydown', this.keydownHandler);
    for (let i = 0; i < constants.unauthenticated_url.length; i++) {
      if (constants.unauthenticated_url[i] === this.props.location.pathname) {
        this.setState({ flag: true });
        return;
      }
    }
    auth
      .validateToken()
      .then(response => {
        if (response.code !== 401) {
          if (this.props.location.pathname !== '/content_management') {
            this.setState({ flag: true })
          } else {
            if (Number(response.role) === 1) {
              this.setState({ flag: true })
            } else {
              this.setState({ flag: false })
              this.props.history.push('/login');
            }
          }
        }
        else {
          this.setState({ flag: false })
          this.props.history.push('/login');
        }
      })
  }
  componentDidUpdate(prevProps) {
    let dom = document.getElementsByClassName('c-links')[0];
    let child = document.getElementsByClassName('u-vs-hidden');
    if (child.length > 0)
      dom.removeChild(child[0]);
    let link_title = document.getElementsByClassName('c-links__item');
    if (link_title.length > 0)
      link_title[0].setAttribute('aria-label',
        this.props.location.pathname === '/login' || this.props.location.pathname === '/forgotpassword' ? this.login_links[0].title : this.links[0].title);
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // this.setState({flag: false});
      for (let i = 0; i < constants.unauthenticated_url.length; i++) {
        if (constants.unauthenticated_url[i] === this.props.location.pathname) {
          this.setState({ flag: true });
          return;
        }
      }
      for (let i = 0; i < constants.unauthenticated_url.length; i++) {
        if (constants.unauthenticated_url[i] === prevProps.location.pathname) {
          this.setState({ flag: false });
        }
      }
      auth
        .validateToken()
        .then(response => {
          if (response.code !== 401) {
            if (this.props.location.pathname === '/content_management' || this.props.location.pathname === '/import_job_offer') {
              if (Number(response.role) == 1) {
                this.setState({ flag: true })
              } else {
                this.setState({ flag: false })
                this.props.history.push('/login');
              }
            } else if (this.props.location.pathname === '/own_simulations' || this.props.location.pathname === '/saved_simulations') {
              if (Number(response.role) <= 2) {
                this.setState({ flag: true })
              } else {
                this.setState({ flag: false })
                this.props.history.push('/login');
              }
            } else {
              this.setState({ flag: true })
            }
          }
          else {
            this.setState({ flag: false })
            this.props.history.push('/login');
          }
        })
    }
  }

  render() {

    return this.state.flag ?
      <>
        <SkipLinks id="skip-link" links={this.props.location.pathname === '/login' || this.props.location.pathname === '/forgotpassword' || this.props.location.pathname === '/register' ? this.login_links : this.links}/>
        {this.props.children}
      </> : <></>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default AppContainer = withRouter(AppContainer);