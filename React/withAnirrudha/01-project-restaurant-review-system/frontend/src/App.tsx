import { AuthProvider } from "./pages/Login/auth.context";
import { RootProvider } from "./common/root/root.context";

import Router from "./router/router";
import Toast from "./components/Toast/Toast";

const App = () => {
	return (
		<AuthProvider>
			<RootProvider>
				<Router />
				<Toast />
			</RootProvider>
		</AuthProvider>
	);
};

export default App;
