import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { App } from './App'
import SettingsContextProvider from './context/SettingsContext'

render(
	<SettingsContextProvider>
		<App />
	</SettingsContextProvider>,
	document.getElementById('root'),
)
