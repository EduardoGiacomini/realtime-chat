import React from 'react'
import Routes from './globals/routes'
import {Provider} from 'react-redux'
import store from './commons/store'

export default function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	)
}
