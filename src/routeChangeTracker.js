import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';


const RouteChangeTracker = ({ history }) => {

  useEffect(() => {
    history.listen((location, action) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  })


  return <div></div>;
};

export default withRouter(RouteChangeTracker);