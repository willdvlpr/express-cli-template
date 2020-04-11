import React from 'react';
import ReactDom from 'react-dom';
import App from './components';
export default function initReact(container) {
    ReactDom.render(React.createElement(App, null), container);
}
window.onload = function () {
    var el = document.getElementById('app-container');
    initReact(el);
};
//# sourceMappingURL=gui.js.map