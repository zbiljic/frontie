import { describe, it } from 'bun:test';
import { createRoot } from 'react-dom/client';

import { ColorSchemeToggle } from './ColorSchemeToggle';

describe('@frontie/mantine/components/ColorSchemeToggle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<ColorSchemeToggle />);
    root.unmount();
  });
});
