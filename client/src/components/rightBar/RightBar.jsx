import React from 'react'
import './rightBar.scss'

const RightBar = () => {
	return (
		<div className='rightBar'>
			<div className="container">
				<div className="item">
					<span>Suggestions For You </span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<span>jaen Doe</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<span>jaen Doe</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
				</div>

				<div className="item">
					<span>Latest Activitis</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<p>
								<span>jaen Doe </span>
								 changed their photo
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<p>
								<span>jaen Doe </span>
								changed their photo
							</p>
						</div>
						<span>1 min ago</span>
					</div>
				</div>

				<div className="item">
					<span>Online Freinds</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
							<div className='online'></div>
							<span>Jane Doe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightBar