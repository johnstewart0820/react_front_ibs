import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import auth from './apis/auth';
import constants from './utils/constants';

// A simple component that shows the pathname of the current location
function validateToken() {
	return auth.validateToken();
}
class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {flag: false};
  }

  componentWillMount() {
    // this.setState({flag: false});
    for (let i = 0; i < constants.unauthenticated_url.length; i ++) {
      if (constants.unauthenticated_url[i] === this.props.location.pathname) {
          this.setState({flag: true});
          return;
      }
    }
    auth
    .validateToken()
    .then(response => {
      if (response.code !== 401)
        this.setState({flag: true}) 
      else {
        this.setState({flag: false})
        this.props.history.push('/login');
      }
    })
  }
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
      // this.setState({flag: false});
      for (let i = 0; i < constants.unauthenticated_url.length; i ++) {
        if (constants.unauthenticated_url[i] === this.props.location.pathname) {
            this.setState({flag: true});
            return;
        }
      }
      for (let i = 0; i < constants.unauthenticated_url.length; i ++) {
        if (constants.unauthenticated_url[i] === prevProps.location.pathname) {
            this.setState({flag: false});
        }
      }
      auth
      .validateToken()
      .then(response => {
        if (response.code !== 401)
          this.setState({flag: true}) 
        else {
          this.setState({flag: false})
          this.props.history.push('/login');
        }

      })
		}
	}
	render() {
		const { match, location, history } = this.props;

		return this.state.flag ? <>{this.props.children}</> : <></>;
	}
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default AppContainer = withRouter(AppContainer);