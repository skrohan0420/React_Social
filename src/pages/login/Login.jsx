import React from 'react'
import { Link } from 'react-router-dom'
import "./login.scss"

const Login = () => {
	return (
		<div className="login">
			<div className='card'>
				<div className='left'>
					<h1>Hello World!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Aspernatur sequi nesciunt praesentium itaque
						debitis delectus inventore? Et necessitatibus quibusdam 
						exercitationem consequuntur alias nihil cumque mollitia
						non, rerum, quia perferendis iure!
					</p>
					<span>
						Don't you have an Account
					</span>
					<Link to="/register">
						<button>
							Register
						</button>
					</Link>
				</div>

				<div className='right'>
					<h1>Login</h1>
					<form action="">
						 <input type="text" placeholder='UserName' name="" id="" />
						 <input type="password" placeholder='Password' name="" id="" />
						 <button>Login</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login