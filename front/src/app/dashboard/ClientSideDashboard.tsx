'use client';

import withAuth from '../Components/hoc/withAuth';

const Dashboard = (): JSX.Element => {
  return <div>Welcome to the Dashboard</div>;
};

export default withAuth(Dashboard);
