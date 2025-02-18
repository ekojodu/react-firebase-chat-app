import { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
	const [open, setOpen] = useState(false); //usestate for emoji
	const [text, setText] = useState(''); //usestate for text
	const handleEmoji = (e) => {
		setText((prev) => prev + e.emoji);
		setOpen(false);
	};
	return (
		<div className='chat'>
			<div className='top'>
				<div className='user'>
					<img src='./avatar.png' alt='' />
					<div className='texts'>
						<span>Jane Doe</span>
						<p>Lorem ipsum dolor, sit amet</p>
					</div>
				</div>
				<div className='icons'>
					<img src='./phone.png' alt='' />
					<img src='./video.png' alt='' />
					<img src='./info.png' alt='' />
				</div>
			</div>
			<div className='center'>
				<div className='message'>
					<img src='./avatar.png' alt='' />
					<div className='texts'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className='message own'>
					{/* <img src='./avatar.png' alt='' /> */}
					<div className='texts'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className='message'>
					<img src='./avatar.png' alt='' />
					<div className='texts'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className='message own'>
					{/* <img src='./avatar.png' alt='' /> */}
					<div className='texts'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className='message'>
					<img src='./avatar.png' alt='' />
					<div className='texts'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className='message own'>
					{/* <img src='./avatar.png' alt='' /> */}
					<div className='texts'>
						<img src='./avatar.png' alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							sed voluptas neque odio sequi, perferendis excepturi assumenda
							voluptates corporis, suscipit quisquam sunt deserunt! Repellendus
							iusto, veniam tempora aut dicta earum?
						</p>
						<span>1 min ago</span>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<div className='icons'>
					<img src='./img.png' alt='' />
					<img src='./camera.png' alt='' />
					<img src='./mic.png' alt='' />
				</div>
				<input
					type='text'
					placeholder='Type a message...'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<div className='emoji'>
					<img
						src='./emoji.png'
						alt=''
						onClick={() => setOpen((prev) => !prev)}
					/>
					<div className='picker'>
						<EmojiPicker open={open} onEmojiClick={handleEmoji} />
					</div>
				</div>
				<button className='sendButton'>Send</button>
			</div>
		</div>
	);
};

export default Chat;
