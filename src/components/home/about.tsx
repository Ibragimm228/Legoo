export function AboutSection() {
	return (
		<section className='relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50'>
			{/* Декоративные LEGO кирпичики на фоне */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-lg opacity-10 transform rotate-12'></div>
				<div className='absolute top-40 right-20 w-20 h-20 bg-yellow-500 rounded-lg opacity-10 transform -rotate-6'></div>
				<div className='absolute bottom-32 left-1/4 w-12 h-12 bg-blue-500 rounded-lg opacity-10 transform rotate-45'></div>
				<div className='absolute bottom-20 right-1/3 w-14 h-14 bg-green-500 rounded-lg opacity-10 transform -rotate-12'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
					{/* Левая колонка с текстом */}
					<div className='relative'>
						{/* LEGO-стиль заголовок с кирпичиками */}
						<div className='flex items-center mb-6'>
							<div className='flex space-x-1 mr-4'>
								<div className='w-3 h-3 bg-red-500 rounded-full'></div>
								<div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
								<div className='w-3 h-3 bg-blue-500 rounded-full'></div>
								<div className='w-3 h-3 bg-green-500 rounded-full'></div>
							</div>
							<span className='text-sm font-bold text-gray-600 uppercase tracking-wider'>
								Recognized LEGO® Fan Media
							</span>
						</div>

						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600 leading-tight mb-8'>
							Build Your 
							<span className='block text-green-600'>LEGO Dreams</span>
						</h2>

						<div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-red-500 mb-8'>
							<p className='text-lg text-gray-700 leading-relaxed'>
								Your ultimate destination for <strong className='text-red-600'>LEGO® pieces</strong>, 
								comprehensive <strong className='text-yellow-600'>new set reviews</strong>, 
								innovative <strong className='text-blue-600'>building techniques</strong>, and 
								inspiring <strong className='text-green-600'>brick model ideas</strong>. 
								Join our community of passionate builders!
							</p>
						</div>

						{/* Стилизованная кнопка в виде LEGO кирпичика */}
						<div className='flex items-center space-x-4'>
							<a
								href='/about'
								className='group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden'
							>
								{/* LEGO шипы на кнопке */}
								<div className='absolute top-1 left-4 w-2 h-2 bg-white/30 rounded-full'></div>
								<div className='absolute top-1 right-4 w-2 h-2 bg-white/30 rounded-full'></div>
								
								<span className='relative z-10 mr-2'>Explore Our World</span>
								<svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
								
								{/* Анимированный фон */}
								<div className='absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></div>
							</a>
						</div>

						{/* Статистика */}
						<div className='grid grid-cols-3 gap-4 mt-12'>
							<div className='text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm'>
								<div className='text-2xl font-bold text-red-600'>500+</div>
								<div className='text-sm text-gray-600'>Set Reviews</div>
							</div>
							<div className='text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm'>
								<div className='text-2xl font-bold text-yellow-600'>1000+</div>
								<div className='text-sm text-gray-600'>Build Techniques</div>
							</div>
							<div className='text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm'>
								<div className='text-2xl font-bold text-blue-600'>50K+</div>
								<div className='text-sm text-gray-600'>Brick Models</div>
							</div>
						</div>
					</div>

					{/* Правая колонка с изображением */}
					<div className='mt-12 lg:mt-0'>
						<div className='relative group'>
							{/* Декоративная рамка в стиле LEGO */}
							<div className='absolute -inset-4 bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur'></div>
							
							<div className='relative bg-white p-6 rounded-2xl shadow-2xl'>
								{/* LEGO шипы сверху */}
								<div className='absolute -top-3 left-8 flex space-x-4'>
									<div className='w-6 h-6 bg-red-500 rounded-full shadow-lg'></div>
									<div className='w-6 h-6 bg-yellow-500 rounded-full shadow-lg'></div>
									<div className='w-6 h-6 bg-blue-500 rounded-full shadow-lg'></div>
									<div className='w-6 h-6 bg-green-500 rounded-full shadow-lg'></div>
								</div>

								<img
									className='rounded-xl shadow-lg w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500'
									src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='LEGO Building Community'
								/>

								{/* Информационная плашка поверх изображения */}
								<div className='absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg'>
									<div className='flex items-center justify-between'>
										<div>
											<h3 className='font-bold text-gray-900'>Latest Build</h3>
											<p className='text-sm text-gray-600'>Modular City Collection</p>
										</div>
										<div className='flex space-x-1'>
											<div className='w-2 h-2 bg-red-500 rounded-full'></div>
											<div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
											<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
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
				<div className='w-8 h-8 bg-red-500 rounded-lg shadow-lg opacity-60'></div>
			</div>
			<div className='absolute top-1/3 right-16 animate-bounce delay-1000'>
				<div className='w-6 h-6 bg-yellow-500 rounded-lg shadow-lg opacity-60'></div>
			</div>
		</section>
	)
}
