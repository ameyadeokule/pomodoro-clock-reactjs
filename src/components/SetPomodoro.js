import { useState,useContext } from "react"
import { SettingsContext } from '../context/SettingsContext'

export default function SetPomodoro() {
	
	const {updateExecute} = useContext(SettingsContext)
	
	const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        long: 1,
        active: 'work'
    })
	
	const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
				
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
				
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
				
				default:
                break;
        }
    }
   
	const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
	
	return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        </div>
    )
}
