import * as React from "react";
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Hello from "./components/Hello";



// class App  extends React.Component<any,any>{

// 	render() {
// 		return (
// 			<div>
// 				<Hello />
// 			</div>
// 		)
// 	}
// }

ReactDOM.render(<Hello />, document.getElementById("root"))
registerServiceWorker();