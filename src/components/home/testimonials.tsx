const TESTIMONIALS = [
	{
		quote:
			'This LEGO fan site is absolutely incredible! The detailed set reviews and innovative building techniques have transformed my approach to creating MOCs. Every article is a masterpiece!',
		author: 'Ethan Blake',
		title: 'LEGO Master Builder',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		rating: 5,
		builds: '500+ MOCs',
		specialty: 'Architecture'
	},
	{
		quote:
			"I've been building with LEGO for 20 years, and this site offers the most comprehensive reviews and creative brick model ideas I've ever seen. It's my go-to resource for inspiration!",
		author: 'Lily Hart',
		title: 'Creative Building Expert',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		rating: 5,
		builds: '1000+ Creations',
		specialty: 'Technic & Space'
	},
]

export function TestimonialsSection() {
	return (
		<section className='relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
			{/* CSS анимации */}
			<style>{`
				@keyframes orbit {
					0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
					100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-orbit {
					animation: orbit 20s linear infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
				}
			`}</style>

			{/* Космический LEGO-фон */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10'></div>
				<div className='absolute inset-0 opacity-20'>
					{/* Звезды */}
					<div className='absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle'></div>
					<div className='absolute top-40 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-1000'></div>
					<div className='absolute top-60 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-twinkle delay-2000'></div>
					<div className='absolute bottom-40 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle delay-3000'></div>
					<div className='absolute bottom-20 right-20 w-2 h-2 bg-red-400 rounded-full animate-twinkle delay-4000'></div>
				</div>
			</div>

			{/* Плавающие LEGO-элементы */}
			<div className='absolute top-20 left-16 animate-orbit hidden lg:block'>
				<div className='w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-12 opacity-60'>
					<div className='absolute top-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
					<div className='absolute top-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-40 right-20 animate-orbit delay-2000 hidden lg:block'>
				<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-2xl transform -rotate-6 opacity-60'>
					<div className='absolute top-1 left-3 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute top-1 right-3 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/30 rounded-full'></div>
				</div>
			</div>
			<div className='absolute bottom-32 left-1/4 animate-orbit delay-4000 hidden lg:block'>
				<div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg shadow-2xl transform rotate-45 opacity-60'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Заголовочная секция */}
				<div className='text-center mb-16 lg:mb-20'>
					{/* LEGO-индикатор сообщества */}
					<div className='flex justify-center items-center mb-6 lg:mb-8'>
						<div className='relative'>
							<div className='flex items-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-purple-400/30 shadow-2xl'>
								<div className='flex space-x-1 sm:space-x-2'>
									<div className='w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full animate-pulse'></div>
									<div className='w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse delay-200'></div>
									<div className='w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full animate-pulse delay-400'></div>
								</div>
								<span className='text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wider'>
									LEGO® Community Voices
								</span>
								<div className='flex space-x-1'>
									{[...Array(5)].map((_, i) => (
										<svg key={i} className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current' viewBox='0 0 20 20'>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
										</svg>
									))}
								</div>
							</div>
							{/* Светящийся эффект */}
							<div className='absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-xl sm:rounded-2xl opacity-30 blur-lg'></div>
						</div>
					</div>

					{/* Мегазаголовок */}
					<div className='relative mb-6 lg:mb-8'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-1 lg:mb-2'>
								Master Builders
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400'>
								Love Our Content
							</span>
						</h2>
						
						{/* Декоративные элементы */}
						<div className='absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-4 h-4 lg:w-6 lg:h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce'></div>
						<div className='absolute top-1/2 -left-4 lg:-left-8 w-3 h-3 lg:w-4 lg:h-4 bg-pink-400 rounded-full opacity-60 animate-bounce delay-500'></div>
					</div>

					{/* Подзаголовок */}
					<div className='max-w-4xl mx-auto'>
						<div className='relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-purple-400/30'>
							{/* LEGO шипы */}
							<div className='absolute -top-2 lg:-top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-4'>
								<div className='w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg'></div>
								<div className='w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
								<div className='w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
							</div>
							
							<p className='text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed font-medium'>
								Hear from our passionate community of 
								<strong className='text-indigo-300'> LEGO enthusiasts</strong>, 
								<strong className='text-purple-300'>master builders</strong>, and 
								<strong className='text-pink-300'>creative innovators</strong> who 
								trust our platform for the latest in LEGO set reviews, 
								building techniques, and brick model inspirations!
							</p>

							{/* Светящаяся граница */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 lg:w-40 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full'></div>
						</div>
					</div>

					{/* Статистика сообщества */}
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12 max-w-4xl mx-auto'>
						{[
							{ number: '25K+', label: 'Happy Builders', icon: '👥' },
							{ number: '98%', label: 'Satisfaction', icon: '⭐' },
							{ number: '5000+', label: 'Reviews', icon: '📝' },
							{ number: '50M+', label: 'Bricks Built', icon: '🧱' }
						].map((stat, index) => (
							<div key={index} className='relative group'>
								<div className='bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-xl border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105'>
									<div className='absolute -top-1 lg:-top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-purple-400/60 rounded-full'></div>
									<div className='text-xl lg:text-3xl mb-1 lg:mb-2'>{stat.icon}</div>
									<div className='text-lg lg:text-2xl font-black text-white'>{stat.number}</div>
									<div className='text-white/70 text-xs lg:text-sm font-medium'>{stat.label}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Сетка отзывов */}
				<div className='relative'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-800/40 via-purple-800/40 to-pink-800/40 rounded-2xl lg:rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
					
					<div className='relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-purple-400/30'>
						{/* Заголовок секции отзывов */}
						<div className='text-center mb-8 lg:mb-12'>
							<div className='inline-flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-xl lg:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border border-purple-300/30'>
								<div className='w-3 h-3 lg:w-4 lg:h-4 bg-indigo-400 rounded-full animate-pulse'></div>
								<h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white'>Builder Testimonials</h3>
								<div className='w-3 h-3 lg:w-4 lg:h-4 bg-pink-400 rounded-full animate-pulse delay-500'></div>
							</div>
						</div>

						{/* Сетка отзывов */}
						<div className='space-y-6 lg:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
							{TESTIMONIALS.map((testimonial, index) => {
								const gradients = [
									'from-indigo-500/30 to-purple-600/30 border-indigo-400/40',
									'from-purple-500/30 to-pink-600/30 border-purple-400/40'
								]
								const glowColors = [
									'shadow-indigo-500/20',
									'shadow-pink-500/20'
								]
								const chipColors = [
									'from-indigo-500 to-purple-600',
									'from-purple-500 to-pink-600'
								]
								
								return (
									<div key={testimonial.author} className='relative group'>
										{/* Светящийся эффект */}
										<div className={`absolute -inset-2 lg:-inset-3 bg-gradient-to-r ${gradients[index]} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
										
										<div className={`relative bg-gradient-to-br ${gradients[index]} backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 ${glowColors[index]} shadow-2xl border-2 transform group-hover:scale-105 transition-all duration-300`}>
											{/* LEGO шипы */}
											<div className='absolute -top-2 lg:-top-4 left-4 lg:left-8 flex space-x-2 lg:space-x-3'>
												<div className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${chipColors[index]} rounded-full shadow-xl`}></div>
												<div className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${chipColors[index]} rounded-full shadow-xl`}></div>
												<div className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${chipColors[index]} rounded-full shadow-xl`}></div>
											</div>

											{/* Рейтинг звезд */}
											<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0 mb-4 lg:mb-6'>
												<div className='flex space-x-1'>
													{[...Array(testimonial.rating)].map((_, i) => (
														<svg key={i} className='w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current' viewBox='0 0 20 20'>
															<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
														</svg>
													))}
												</div>
												<div className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${chipColors[index]} rounded-full text-white text-xs font-bold`}>
													VERIFIED BUILDER
												</div>
											</div>

											{/* Цитата */}
											<blockquote className='relative mb-6 lg:mb-8'>
												<div className='absolute -top-1 lg:-top-2 -left-1 lg:-left-2 text-4xl lg:text-6xl text-white/20 font-serif'>"</div>
												<p className='text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed relative z-10 italic px-2 lg:px-0'>
													{testimonial.quote}
												</p>
												<div className='absolute -bottom-2 lg:-bottom-4 -right-1 lg:-right-2 text-4xl lg:text-6xl text-white/20 font-serif rotate-180'>"</div>
											</blockquote>

											{/* Информация об авторе */}
											<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0'>
												<div className='flex items-center space-x-3 lg:space-x-4'>
													<div className='relative flex-shrink-0'>
														<div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 aspect-square'>
															<img
																className='w-full h-full object-cover rounded-full border-3 lg:border-4 border-white/30 shadow-lg'
																src={testimonial.image}
																alt={testimonial.author}
															/>
														</div>
														<div className={`absolute -bottom-0.5 lg:-bottom-1 -right-0.5 lg:-right-1 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${chipColors[index]} rounded-full border-2 border-white flex items-center justify-center`}>
															<svg className='w-2.5 h-2.5 lg:w-3 lg:h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
																<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
															</svg>
														</div>
													</div>
													<div className='min-w-0 flex-1'>
														<p className='text-base lg:text-lg font-bold text-white truncate'>
															{testimonial.author}
														</p>
														<p className='text-white/70 text-sm font-medium truncate'>
															{testimonial.title}
														</p>
														<p className={`text-xs font-bold bg-gradient-to-r ${chipColors[index]} bg-clip-text text-transparent truncate`}>
															{testimonial.specialty}
														</p>
													</div>
												</div>
												
												{/* Статистика строителя */}
												<div className='text-center sm:text-right flex-shrink-0'>
													<div className={`inline-flex items-center space-x-1 lg:space-x-2 bg-gradient-to-r ${chipColors[index]} rounded-lg px-2 lg:px-3 py-1.5 lg:py-2`}>
														<svg className='w-3 h-3 lg:w-4 lg:h-4 text-white flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
															<path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' />
														</svg>
														<span className='text-white text-xs lg:text-sm font-bold'>{testimonial.builds}</span>
													</div>
												</div>
											</div>

											{/* Декоративная нижняя линия */}
											<div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 lg:w-32 h-1 bg-gradient-to-r ${chipColors[index]} rounded-full opacity-60`}></div>

											{/* Эффект блеска */}
											<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl lg:rounded-3xl'></div>
										</div>
									</div>
								)
							})}
						</div>

						{/* Призыв к действию */}
						<div className='mt-8 lg:mt-12 text-center'>
							<div className='inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-xl lg:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 border border-purple-400/30'>
								<div className='text-xl lg:text-2xl'>🧱</div>
								<span className='text-white font-medium text-sm sm:text-base text-center sm:text-left'>
									Join thousands of builders sharing their LEGO journey!
								</span>
								<div className='w-3 h-3 bg-pink-400 rounded-full animate-ping'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
