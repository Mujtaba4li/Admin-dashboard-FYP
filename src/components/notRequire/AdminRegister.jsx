import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function App() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:420/api/registeradmin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/Dashboard')
		}
	}

	return (
		<div>
			<form onSubmit={registerUser} style={{justifyContent:'center',textAlign:'center',top:'5rem'}}>
			<h1>Add Admin </h1>
				<input style={{border:'1px solid blue'}}
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<br />
				<input style={{border:'1px solid blue'}}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
                style={{border:'1px solid blue'}}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input style={{cursor:'pointer'}} type="submit" value="Register" />
			</form>
		</div>
	)
}

export default App
