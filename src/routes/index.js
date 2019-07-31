import InputForm from "../components/InputForm"
import Confirmation from "../components/Confirmation"

export const routes = () => {
	return [
		{
			path: "/",
			component: InputForm,
			fetchInitialData: () => {}
		},
		{
			path: "/confirmation",
			component: Confirmation,
			fetchInitialData: () => {}
		}
	]
}
