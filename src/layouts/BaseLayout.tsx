import { ReactNode } from 'react';

interface BaseProps {
  children?: ReactNode;
}

function BaseLayout({ children }: BaseProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default BaseLayout;
