import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import stories from './stories/index';

ReactDOM.render(<Provider store={stories}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
