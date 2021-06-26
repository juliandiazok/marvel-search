import React, { useState } from 'react';
import {
	Nav,
	NavLink,
	NavMenu,
	NavBtn,
	NavTheme,
	NavSearch,
	InputSearch,
	NavHidden,
	NavHiddenSearch,
	NavHiddenInput,
	NavBtnLink,
} from './styles';
import logoMarvel from '../../assets/marvel.svg';

const theme = 'ligth';

const Navbar = () => {
	const [text, setText] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		/*search(text);*/
	};
	return (
		<>
			<Nav mode={theme}>
				<NavLink to='/'>
					<img src={logoMarvel} alt='logo' height='60%' />
				</NavLink>
				<NavMenu>
					<form className='search' onSubmit={onSubmit}>
						<NavSearch>
							<i className='fas fa-search' onClick={onSubmit} />
							<InputSearch>
								<input
									type='text'
									placeholder='Search'
									onChange={(event) => setText(event.target.value)}
									value={text}
								/>
							</InputSearch>
						</NavSearch>
					</form>
				</NavMenu>
				<NavBtn>
					{/* <NavTheme onClick={changeTheme}> */}
					<NavTheme>
						<i
							className={`${true === 'light' ? 'far' : 'fas'} fa-moon fav`}></i>
					</NavTheme>
					<NavBtnLink to='/favorites'>
						<i className='far fa-star fav'></i>
					</NavBtnLink>
				</NavBtn>
			</Nav>
			<NavHidden mode={theme}>
				<form className='search' onSubmit={onSubmit}>
					<NavHiddenSearch>
						<i className='fas fa-search' onClick={onSubmit} />
						<NavHiddenInput>
							<input
								type='text'
								placeholder='Buscar'
								onChange={(event) => setText(event.target.value)}
								value={text}
								size='14'
							/>
						</NavHiddenInput>
					</NavHiddenSearch>
				</form>
			</NavHidden>
		</>
	);
};

export default Navbar;
