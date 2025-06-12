import { Logo } from './logo'
import { Container } from './container'

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
	}

	return (
		<footer className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
			{/* CSS анимации */}
			<style>{`
				@keyframes float-footer {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					50% { transform: translateY(-10px) rotate(3deg) scale(1.05); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-footer {
					animation: float-footer 6s ease-in-out infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
				}
			`}</style>

			{/* Космический LEGO-фон - адаптивный */}
			<div className='absolute inset-0 pointer-events-none'>
				{/* Звездное поле - уменьшено для мобильных */}
				<div className='hidden sm:block absolute top-10 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle'></div>
				<div className='absolute top-4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 sm:top-20 sm:left-1/3 bg-blue-400 rounded-full animate-twinkle delay-1000'></div>
				<div className='hidden sm:block absolute top-16 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-twinkle delay-2000'></div>
				<div className='absolute top-8 left-1/3 w-1 h-1 sm:w-2 sm:h-2 sm:top-32 sm:left-1/4 bg-green-400 rounded-full animate-twinkle delay-3000'></div>
				<div className='hidden sm:block absolute top-8 right-20 w-1 h-1 bg-pink-400 rounded-full animate-twinkle delay-4000'></div>
				<div className='absolute top-6 right-1/4 w-1 h-1 sm:top-24 sm:right-1/3 bg-cyan-400 rounded-full animate-twinkle delay-5000'></div>
				
				{/* Плавающие LEGO-элементы - скрыты на мобильных */}
				<div className='hidden md:block absolute top-8 left-16 animate-float-footer'>
					<div className='w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-2xl transform rotate-12 opacity-30'>
						<div className='absolute top-0.5 left-0.5 w-2 h-2 lg:top-1 lg:left-1 lg:w-3 lg:h-3 bg-white/40 rounded-full'></div>
						<div className='absolute top-0.5 right-0.5 w-2 h-2 lg:top-1 lg:right-1 lg:w-3 lg:h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-0.5 left-0.5 w-2 h-2 lg:bottom-1 lg:left-1 lg:w-3 lg:h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-0.5 right-0.5 w-2 h-2 lg:bottom-1 lg:right-1 lg:w-3 lg:h-3 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='hidden lg:block absolute top-20 right-20 animate-float-footer delay-2000'>
					<div className='w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-2xl transform -rotate-6 opacity-30'>
						<div className='absolute top-1 left-2 w-2 h-2 bg-white/40 rounded-full'></div>
						<div className='absolute top-1 right-2 w-2 h-2 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='hidden md:block absolute top-6 left-1/2 animate-float-footer delay-4000'>
					<div className='w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded shadow-2xl transform rotate-45 opacity-30'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 lg:w-2 lg:h-2 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 lg:w-2 lg:h-2 bg-white/40 rounded-full'></div>
					</div>
				</div>

				{/* Космические световые эффекты - уменьшены для мобильных */}
				<div className='absolute top-0 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse'></div>
				<div className='absolute top-0 right-1/4 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000'></div>
			</div>

			{/* Верхняя светящаяся граница */}
			<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 via-purple-400 via-pink-400 to-transparent'></div>

			<Container>
				<div className="relative py-6 sm:py-8 lg:py-12">
					{/* LEGO-брендинг футера - адаптивный */}
					<div className='flex justify-center items-center mb-6 sm:mb-8 lg:mb-12 px-2'>
						<div className='flex items-center space-x-2 sm:space-x-3 lg:space-x-4 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border border-indigo-400/30 shadow-2xl max-w-full'>
							<div className='flex space-x-1 sm:space-x-2'>
								<div className='w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full animate-pulse'></div>
								<div className='w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-200'></div>
								<div className='w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-400'></div>
							</div>
							<span className='text-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap'>
								LEGO® Community
							</span>
							<div className='hidden sm:flex items-center space-x-1'>
								<svg className='w-3 h-3 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
								</svg>
								<span className='text-green-400 text-xs font-bold'>VERIFIED</span>
							</div>
						</div>
					</div>

					{/* Основное содержимое футера */}
					<div className="relative mx-2 sm:mx-0">
						{/* Декоративная подложка - скрыта на маленьких экранах */}
						<div className='hidden sm:block absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl lg:rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
						
						<div className='relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-indigo-400/30'>
							{/* LEGO шипы - скрыты на мобильных */}
							<div className='hidden sm:flex absolute -top-3 sm:-top-4 left-6 sm:left-12 space-x-2 sm:space-x-4'>
								<div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-xl'></div>
								<div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
								<div className='hidden lg:block w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-xl'></div>
								<div className='hidden lg:block w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl'></div>
							</div>

							<div className="md:flex md:items-center md:justify-between">
								{/* Навигация - адаптивная сетка */}
								<div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-x-4 sm:gap-y-3 lg:gap-x-8 lg:gap-y-4 md:order-2 mb-6 md:mb-0">
									{navigation.main.map((item, index) => {
										const colors = [
											'from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700',
											'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
											'from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700',
											'from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
											'from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'
										]
										
										return (
											<div key={item.name} className='relative group w-full sm:w-auto'>
												{/* Светящийся эффект - скрыт на мобильных */}
												<div className={`hidden sm:block absolute -inset-2 bg-gradient-to-r ${colors[index]} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur`}></div>
												
												<a
													href={item.href}
													className={`relative flex items-center justify-center space-x-1 sm:space-x-2 bg-gradient-to-r ${colors[index]} text-white px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 w-full sm:w-auto`}
												>
													{/* LEGO шип - скрыт на мобильных */}
													<div className='hidden sm:block absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full'></div>
													
													{/* Иконки */}
													<div className='w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0'>
														{item.name === 'Home' && (
															<svg fill='currentColor' viewBox='0 0 20 20'>
																<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
															</svg>
														)}
														{item.name === 'About' && (
															<svg fill='currentColor' viewBox='0 0 20 20'>
																<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
															</svg>
														)}
														{item.name === 'Blog' && (
															<svg fill='currentColor' viewBox='0 0 20 20'>
																<path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
															</svg>
														)}
														{item.name === 'Contacts' && (
															<svg fill='currentColor' viewBox='0 0 20 20'>
																<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
																<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
															</svg>
														)}
														{item.name === 'Privacy Policy' && (
															<svg fill='currentColor' viewBox='0 0 20 20'>
																<path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
															</svg>
														)}
													</div>
													
													<span className="text-xs sm:text-sm font-bold truncate">{item.name}</span>
												</a>
											</div>
										)
									})}
								</div>

								{/* Логотип и копирайт */}
								<div className="md:order-1">
									<div className='relative group'>
										{/* Светящийся эффект - скрыт на мобильных */}
										<div className='hidden sm:block absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
										
										<div className='relative bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border border-indigo-400/30 transform group-hover:scale-105 transition-all duration-300'>
											{/* LEGO шипы - скрыты на мобильных */}
											<div className='hidden sm:flex absolute -top-2 sm:-top-3 left-3 sm:left-6 space-x-1 sm:space-x-2'>
												<div className='w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg'></div>
												<div className='w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
											</div>

											<div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-4">
												{/* Логотип */}
												<div className='relative'>
													<div className='hidden sm:block absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-xl'></div>
													<div className='relative'>
														<Logo variant="light" />
													</div>
												</div>
												
												{/* Копирайт */}
												<div className="text-center sm:text-left">
													<div className='relative bg-gradient-to-r from-white/10 to-white/5 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2 border border-white/20'>
														<p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
															&copy; {new Date().getFullYear()} 
															<strong className='text-indigo-300'> LEGO® Builder</strong>
															<br className='hidden sm:inline' />
															<span className='text-white/70 text-[10px] sm:text-xs block sm:inline'>
																All rights reserved.
																<span className='hidden lg:inline'> Recognized Fan Media.</span>
															</span>
														</p>
													</div>
												</div>
											</div>

											{/* Светящаяся граница - скрыта на мобильных */}
											<div className='hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full'></div>
										</div>
									</div>
								</div>
							</div>

							{/* Дополнительная информация сообщества */}
							<div className='mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20'>
								<div className='grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-center'>
									{/* Статистика сообщества - компактная версия */}
									<div className='relative group'>
										<div className='bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-indigo-400/30 group-hover:shadow-lg transition-all duration-300'>
											<div className='hidden sm:block absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400/60 rounded-full'></div>
											<div className='text-lg sm:text-2xl mb-0.5 sm:mb-1'>👥</div>
											<div className='text-sm sm:text-lg font-bold text-white'>25K+</div>
											<div className='text-white/70 text-[10px] sm:text-xs'>Builders</div>
										</div>
									</div>
									
									<div className='relative group'>
										<div className='bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-purple-400/30 group-hover:shadow-lg transition-all duration-300'>
											<div className='hidden sm:block absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/60 rounded-full'></div>
											<div className='text-lg sm:text-2xl mb-0.5 sm:mb-1'>🧱</div>
											<div className='text-sm sm:text-lg font-bold text-white'>1M+</div>
											<div className='text-white/70 text-[10px] sm:text-xs'>Bricks</div>
										</div>
									</div>
									
									<div className='relative group'>
										<div className='bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-pink-400/30 group-hover:shadow-lg transition-all duration-300'>
											<div className='hidden sm:block absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400/60 rounded-full'></div>
											<div className='text-lg sm:text-2xl mb-0.5 sm:mb-1'>⭐</div>
											<div className='text-sm sm:text-lg font-bold text-white'>500+</div>
											<div className='text-white/70 text-[10px] sm:text-xs'>Reviews</div>
										</div>
									</div>
								</div>

								{/* Социальные элементы - адаптивные */}
								<div className='mt-4 sm:mt-6 lg:mt-8 text-center'>
									<div className='inline-flex items-center flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border border-gray-600/30 max-w-full'>
										<div className='flex items-center space-x-1 sm:space-x-2 text-indigo-400'>
											<div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full animate-pulse'></div>
											<span className='text-[10px] sm:text-xs font-medium whitespace-nowrap'>Building Together</span>
										</div>
										<div className='flex items-center space-x-1 sm:space-x-2 text-purple-400'>
											<div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse delay-200'></div>
											<span className='text-[10px] sm:text-xs font-medium whitespace-nowrap'>Creating Dreams</span>
										</div>
										<div className='flex items-center space-x-1 sm:space-x-2 text-pink-400'>
											<div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full animate-pulse delay-400'></div>
											<span className='text-[10px] sm:text-xs font-medium whitespace-nowrap'>LEGO Universe</span>
										</div>
									</div>
								</div>
							</div>

							{/* Светящаяся граница - адаптивная */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full'></div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}
