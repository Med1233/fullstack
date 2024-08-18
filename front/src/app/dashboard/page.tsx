import { Metadata } from 'next';

import ClientSideDashboard from './ClientSideDashboard';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default (): JSX.Element => <ClientSideDashboard />;
