import { Link } from 'react-router'
import { Container } from './container'
import { Logo } from './logo'

const LINKS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
]

export function Header() {
	return (
		<header className='sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'>
			<Container>
				<div className='flex items-center justify-between py-4'>
					{/* Логотип слева */}
					<div className='flex items-center'>
						<div className='relative group'>
							{/* Тонкий LEGO-акцент */}
							<div className='absolute -inset-1 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-blue-500/20 to-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							
							<div className='relative bg-white/60 backdrop-blur-sm rounded-xl p-2 shadow-sm border border-gray-200/50 group-hover:shadow-md transition-all duration-300'>
								{/* Минимальные LEGO-точки */}
								<div className='absolute -top-1 left-2 flex space-x-1'>
									<div className='w-2 h-2 bg-red-500/60 rounded-full'></div>
									<div className='w-2 h-2 bg-blue-500/60 rounded-full'></div>
								</div>
								
								<Logo variant="dark" />
							</div>
						</div>
					</div>

					{/* Навигация справа */}
					<nav className='hidden md:flex'>
						<ul className='flex items-center space-x-2'>
							{LINKS.map((item, index) => {
								const colors = [
									'hover:bg-red-50 hover:text-red-600 hover:border-red-200',
									'hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200',
									'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200',
									'hover:bg-green-50 hover:text-green-600 hover:border-green-200'
								]
								
								return (
									<li key={item.label}>
										<Link
											to={item.href}
											className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/50 border border-gray-200/50 rounded-lg backdrop-blur-sm transition-all duration-200 ${colors[index]} group`}
										>
											{/* Тонкий LEGO-акцент */}
											<div className='absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full opacity-0 group-hover:opacity-50 transition-opacity'></div>
											
											{/* Иконки */}
											<div className='w-4 h-4 mr-2'>
												{item.label === 'Home' && (
													<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
													</svg>
												)}
												{item.label === 'About' && (
													<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
													</svg>
												)}
												{item.label === 'Blog' && (
													<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
													</svg>
												)}
												{item.label === 'Contacts' && (
													<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
													</svg>
												)}
											</div>
											
											{item.label}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>

					{/* Мобильное меню */}
					<div className='md:hidden'>
						<div className='relative group'>
							<button className='inline-flex items-center justify-center p-2 text-gray-700 bg-white/50 border border-gray-200/50 rounded-lg backdrop-blur-sm hover:bg-gray-50 transition-all duration-200'>
								{/* Тонкий LEGO-акцент */}
								<div className='absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500/60 rounded-full'></div>
								
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Мобильная навигация */}
				<div className='md:hidden border-t border-gray-200/50 bg-white/80 backdrop-blur-sm'>
					<div className='py-3 space-y-1'>
						{LINKS.map((item, index) => {
							const mobileColors = [
								'hover:bg-red-50 hover:text-red-600 hover:border-l-red-500',
								'hover:bg-yellow-50 hover:text-yellow-600 hover:border-l-yellow-500',
								'hover:bg-blue-50 hover:text-blue-600 hover:border-l-blue-500',
								'hover:bg-green-50 hover:text-green-600 hover:border-l-green-500'
							]
							
							return (
								<Link
									key={item.label}
									to={item.href}
									className={`flex items-center px-4 py-2 text-sm font-medium text-gray-700 border-l-4 border-transparent transition-all duration-200 ${mobileColors[index]} group`}
								>
									{/* Иконки для мобильной версии */}
									<div className='w-4 h-4 mr-3'>
										{item.label === 'Home' && (
											<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
											</svg>
										)}
										{item.label === 'About' && (
											<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
											</svg>
										)}
										{item.label === 'Blog' && (
											<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
											</svg>
										)}
										{item.label === 'Contacts' && (
											<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
											</svg>
										)}
									</div>
									
									{item.label}
								</Link>
							)
						})}
					</div>
				</div>
			</Container>
		</header>
	)
}
