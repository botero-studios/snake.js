"use client";

import React from "react";

const HomePage = () => {
	const MenuButton = ({
		className,
		href,
		children,
	}: {
		className?: string;
		href: string;
		children: string;
	}) => (
		<a href={href}>
			<div
				className={`px-8 py-4 rounded-md bg-cyan-200 text-gray-800 text-center hover:bg-cyan-500 shadow-md shadow-gray-700 ${className}`}>
				<h2 className='text-xl'>{children}</h2>
			</div>
		</a>
	);

	return (
		<div className='flex flex-col w-full h-screen items-center bg-gray-900 justify-center'>
			<div className='flex flex-col w-full h-full max-h-[600px] py-4 items-center'>
				<h1 className='flex items-center text-8xl font-bold'>
					<span>Snake</span>
					<span className='text-green-500'>.js</span>
				</h1>
				<div className='flex flex-col gap-8 h-full justify-center'>
					<MenuButton href='/snake'>PLAY</MenuButton>
					<MenuButton href='/settings'>SETTINGS</MenuButton>
				</div>
				<div>
					<p className='text-gray-300 text-sm'>
						Made with ❤️ by{" "}
						<a
							href='https://github.com/botero-studios'
							target='_blank'
							rel='noreferrer'
							className='text-blue-500'>
							Botero Studios
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
