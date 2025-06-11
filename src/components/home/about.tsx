export function AboutSection() {
	return (
		<section className='relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50'>
			{/* CSS анимации - добавлены в начало */}
			<style>{`
				@keyframes float-gentle {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-10px) rotate(5deg); }
				}
				@keyframes pulse-glow {
					0%, 100% { opacity: 0.6; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.05); }
				}
				.animate-float-gentle {
					animation: float-gentle 4s ease-in-out infinite;
				}
				.animate-pulse-glow {
					animation: pulse-glow 3s ease-in-out infinite;
				}
			`}</style>

			{/* Декоративные LEGO кирпичики на фоне */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-lg opacity-10 transform rotate-12 animate-float-gentle'></div>
				<div className='absolute top-40 right-20 w-20 h-20 bg-yellow-500 rounded-lg opacity-10 transform -rotate-6 animate-float-gentle delay-1000'></div>
				<div className='absolute bottom-32 left-1/4 w-12 h-12 bg-blue-500 rounded-lg opacity-10 transform rotate-45 animate-float-gentle delay-2000'></div>
				<div className='absolute bottom-20 right-1/3 w-14 h-14 bg-green-500 rounded-lg opacity-10 transform -rotate-12 animate-float-gentle delay-3000'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
					{/* Левая колонка с текстом */}
					<div className='relative'>
						{/* LEGO-стиль заголовок с кирпичиками */}
						<div className='flex items-center mb-6'>
							<div className='flex space-x-1 mr-4'>
								<div className='w-3 h-3 bg-red-500 rounded-full animate-pulse-glow'></div>
								<div className='w-3 h-3 bg-yellow-500 rounded-full animate-pulse-glow delay-200'></div>
								<div className='w-3 h-3 bg-blue-500 rounded-full animate-pulse-glow delay-400'></div>
								<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse-glow delay-600'></div>
							</div>
							<div className='bg-white/70 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-200 shadow-sm'>
								<span className='text-sm font-bold text-gray-600 uppercase tracking-wider'>
									Recognized LEGO® Fan Media
								</span>
							</div>
						</div>

						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600 drop-shadow-sm'>
								Build Your
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 drop-shadow-sm'>
								LEGO Dreams
							</span>
						</h2>

						<div className='relative group mb-8'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-2 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
							
							<div className='relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-red-500'>
								{/* LEGO шипы на информационном блоке */}
								<div className='absolute -top-2 left-6 flex space-x-2'>
									<div className='w-4 h-4 bg-red-500/60 rounded-full'></div>
									<div className='w-4 h-4 bg-yellow-500/60 rounded-full'></div>
									<div className='w-4 h-4 bg-blue-500/60 rounded-full'></div>
								</div>

								<p className='text-lg text-gray-700 leading-relaxed'>
									Your ultimate destination for <strong className='text-red-600'>LEGO® pieces</strong>, 
									comprehensive <strong className='text-yellow-600'>new set reviews</strong>, 
									innovative <strong className='text-blue-600'>building techniques</strong>, and 
									inspiring <strong className='text-green-600'>brick model ideas</strong>. 
									Join our community of passionate builders!
								</p>
							</div>
						</div>

						{/* Стилизованная кнопка в виде LEGO кирпичика */}
						<div className='flex items-center space-x-4 mb-12'>
							<div className='relative group'>
								{/* Светящийся эффект кнопки */}
								<div className='absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
								
								<a
									href='/about'
									className='relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-red-400/50'
								>
									{/* LEGO шипы на кнопке */}
									<div className='absolute -top-2 left-6 flex space-x-3'>
										<div className='w-4 h-4 bg-white/30 rounded-full shadow-sm'></div>
										<div className='w-4 h-4 bg-white/30 rounded-full shadow-sm'></div>
									</div>
									
									<span className='relative z-10 mr-2'>Explore Our World</span>
									<svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
									</svg>
									
									{/* Анимированный блеск */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
								</a>
							</div>

							{/* Дополнительная информация */}
							<div className='flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200'>
								<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
								<span className='text-sm text-gray-600 font-medium'>25K+ Active Builders</span>
							</div>
						</div>

						{/* Статистика */}
						<div className='grid grid-cols-3 gap-4'>
							{[
								{ number: '500+', label: 'Set Reviews', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50', textColor: 'text-red-600' },
								{ number: '1000+', label: 'Build Techniques', color: 'from-yellow-500 to-yellow-600', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
								{ number: '50K+', label: 'Brick Models', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' }
							].map((stat, index) => (
								<div key={index} className='relative group'>
									<div className={`${stat.bgColor} p-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 text-center`}>
										{/* LEGO шип */}
										<div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
											<div className={`w-4 h-4 bg-gradient-to-br ${stat.color} rounded-full shadow-md`}></div>
										</div>
										
										<div className={`text-2xl font-bold ${stat.textColor}`}>{stat.number}</div>
										<div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Правая колонка с изображением */}
					<div className='mt-12 lg:mt-0'>
						<div className='relative group'>
							{/* Декоративная рамка в стиле LEGO */}
							<div className='absolute -inset-4 bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg'></div>
							
							<div className='relative bg-white p-6 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500'>
								{/* LEGO шипы сверху */}
								<div className='absolute -top-3 left-8 flex space-x-4'>
									<div className='w-6 h-6 bg-red-500 rounded-full shadow-lg animate-pulse-glow'></div>
									<div className='w-6 h-6 bg-yellow-500 rounded-full shadow-lg animate-pulse-glow delay-200'></div>
									<div className='w-6 h-6 bg-blue-500 rounded-full shadow-lg animate-pulse-glow delay-400'></div>
									<div className='w-6 h-6 bg-green-500 rounded-full shadow-lg animate-pulse-glow delay-600'></div>
								</div>

								<div className='relative overflow-hidden rounded-xl'>
									<img
										className='w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700'
										src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='LEGO Building Community'
									/>
									
									{/* Градиентный оверлей */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
								</div>

								{/* Информационная плашка поверх изображения */}
								<div className='absolute bottom-8 left-8 right-8'>
									<div className='bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/50'>
										{/* LEGO шипы на плашке */}
										<div className='absolute -top-2 left-4 flex space-x-2'>
											<div className='w-3 h-3 bg-red-500/80 rounded-full'></div>
											<div className='w-3 h-3 bg-yellow-500/80 rounded-full'></div>
											<div className='w-3 h-3 bg-blue-500/80 rounded-full'></div>
										</div>

										<div className='flex items-center justify-between'>
											<div>
												<h3 className='font-bold text-gray-900'>Latest Build</h3>
												<p className='text-sm text-gray-600'>Modular City Collection</p>
											</div>
											<div className='flex items-center space-x-3'>
												<div className='flex space-x-1'>
													<div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
													<div className='w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200'></div>
													<div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-400'></div>
												</div>
												<div className='bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full'>
													LIVE
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Плавающие LEGO кирпичики */}
			<div className='absolute top-1/4 left-12 animate-bounce'>
				<div className='w-8 h-8 bg-red-500 rounded-lg shadow-lg opacity-60 transform rotate-12'>
					<div className='absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full'></div>
					<div className='absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1 w-2 h-2 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 right-1 w-2 h-2 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-1/3 right-16 animate-bounce delay-1000'>
				<div className='w-6 h-6 bg-yellow-500 rounded-lg shadow-lg opacity-60 transform -rotate-6'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute bottom-1/4 left-20 animate-bounce delay-2000'>
				<div className='w-5 h-5 bg-blue-500 rounded shadow-lg opacity-60 transform rotate-45'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/40 rounded-full'></div>
				</div>
			</div>
		</section>
	)
}
