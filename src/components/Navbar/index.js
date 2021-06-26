import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/theme/action';
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

const Navbar = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const { mode } = useSelector((state) => state?.theme || {});

	const onSubmit = (event) => {
		event.preventDefault();
		/*search(text);*/
	};

	const onThemeChange = () => {
		dispatch(changeTheme(mode === 'light' ? 'dark' : 'light'));
	};
	return (
		<>
			<Nav mode={mode}>
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
					<NavTheme onClick={onThemeChange}>
						<i
							className={`${true === 'light' ? 'far' : 'fas'} fa-moon fav`}></i>
					</NavTheme>
					<NavBtnLink to='/favorites'>
						<i className='far fa-star fav'></i>
					</NavBtnLink>
				</NavBtn>
			</Nav>
			<NavHidden mode={mode}>
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
