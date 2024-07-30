import ReactDOM from 'react-dom/client';


// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import './mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';
import { Root } from './components/Root.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
