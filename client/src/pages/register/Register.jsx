import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"

const Register = () => {
	return (
		<div className='register'>

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
						Do you have an Account
					</span>
					<Link to="/login">
						<button>
							Login
						</button>
					</Link>					
				</div>

				<div className='right'>
					<h1>Login</h1>
					<form action="">
						<input type="text" placeholder='UserName' name="" id="" />
						<input type="email" placeholder='email' name="" id="" />
						<input type="text" placeholder='Name' name="" id="" />
						<input type="password" placeholder='Password' name="" id="" />
						<button>Login</button>
					</form>
				</div>
			</div>

		</div>
	)
}

export default Register