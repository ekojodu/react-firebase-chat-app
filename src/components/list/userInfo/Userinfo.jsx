import './useInfo.css';
const Userinfo = () => {
	return (
		<div className='userInfo'>
			<div className='user'>
				<img src='/avatar.png' alt='' />
				<h4>John Doe</h4>
			</div>
			<div className='icons'>
				<img src='/more.png' alt='' />
				<img src='/video.png' alt='' />
				<img src='/edit.png' alt='' />
			</div>
		</div>
	);
};

export default Userinfo;
