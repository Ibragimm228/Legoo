export function CallToActionSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-red-600 via-yellow-500 to-blue-600 py-20 sm:py-28'>
			{/* Динамический фон с LEGO-паттерном */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-red-600/20 via-yellow-500/20 to-blue-600/20'></div>
				<div className='absolute inset-0 opacity-10' 
					 style={{
						 backgroundImage: `radial-gradient(circle at 25px 25px, white 3px, transparent 3px)`,
						 backgroundSize: '50px 50px'
					 }}>
				</div>
			</div>

			{/* Плавающие LEGO элементы */}
			<div className='absolute top-10 left-10 animate-bounce-slow'>
				<div className='w-16 h-16 bg-red-500/30 rounded-2xl shadow-2xl transform rotate-12'>
					<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-20 right-16 animate-bounce-slow-delay-1'>
				<div className='w-12 h-12 bg-yellow-500/30 rounded-xl shadow-2xl transform -rotate-6'>
					<div className='absolute top-1 left-3 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-3 w-3 h-3 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute bottom-16 left-20 animate-bounce-slow-delay-2'>
				<div className='w-10 h-10 bg-blue-500/30 rounded-lg shadow-2xl transform rotate-45'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='lg:flex lg:items-center lg:justify-between'>
					{/* Левая часть с текстом */}
					<div className='flex-1 lg:pr-8'>
						{/* LEGO-стиль индикатор */}
						<div className='flex items-center mb-8'>
							<div className='flex space-x-2 mr-4'>
								<div className='w-4 h-4 bg-white/60 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-white/60 rounded-full animate-pulse animate-pulse-delay-1'></div>
								<div className='w-4 h-4 bg-white/60 rounded-full animate-pulse animate-pulse-delay-2'></div>
							</div>
							<span className='text-white/80 text-sm font-bold uppercase tracking-wider'>
								Join the LEGO® Community
							</span>
						</div>

						{/* Основной заголовок */}
						<div className='mb-8'>
							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4'>
								<span className='block relative'>
									Ready to Build
									{/* Декоративные элементы */}
									<div className='absolute -top-4 -right-8 w-8 h-8 bg-yellow-400/40 rounded-lg transform rotate-12 animate-spin-slow'></div>
								</span>
								<span className='block text-yellow-200 relative'>
									Something Amazing?
									<div className='absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full'></div>
								</span>
							</h2>

							{/* Подзаголовок в стиле LEGO-блока */}
							<div className='relative inline-block'>
								<div className='bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-2xl'>
									{/* LEGO шипы на блоке */}
									<div className='absolute -top-3 left-6 flex space-x-3'>
										<div className='w-6 h-6 bg-white/40 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-white/40 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-white/40 rounded-full shadow-lg'></div>
									</div>
									
									<p className='text-white/90 text-lg sm:text-xl leading-relaxed font-medium'>
										Get exclusive access to the latest <strong className='text-yellow-200'>LEGO® set reviews</strong>, 
										innovative <strong className='text-blue-200'>building techniques</strong>, and 
										creative <strong className='text-green-200'>brick model ideas</strong>. 
										Join thousands of passionate builders!
									</p>
								</div>
							</div>
						</div>

						{/* Статистика сообщества */}
						<div className='grid grid-cols-3 gap-4 mb-8 lg:mb-0'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-white'>15K+</div>
								<div className='text-white/70 text-sm'>Active Builders</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-yellow-200'>500+</div>
								<div className='text-white/70 text-sm'>Set Reviews</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-blue-200'>1000+</div>
								<div className='text-white/70 text-sm'>Build Guides</div>
							</div>
						</div>
					</div>

					{/* Правая часть с кнопкой */}
					<div className='mt-8 lg:mt-0 lg:flex-shrink-0'>
						<div className='relative group'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
							
							{/* Основная кнопка-кирпичик */}
							<div className='relative'>
								<a
									href='/contacts'
									className='group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-green-400/50'
								>
									{/* LEGO шипы на кнопке */}
									<div className='absolute -top-3 left-8 flex space-x-4'>
										<div className='w-6 h-6 bg-white/30 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-white/30 rounded-full shadow-lg'></div>
									</div>

									{/* Иконка */}
									<div className='mr-4 p-2 bg-white/20 rounded-lg'>
										<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
												  d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
										</svg>
									</div>

									<span className='relative z-10'>Join Our Community</span>

									{/* Стрелка */}
									<div className='ml-3 transform group-hover:translate-x-2 transition-transform'>
										<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
										</svg>
									</div>

									{/* Анимированный блеск */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

									{/* Hover фон */}
									<div className='absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-2xl'></div>
								</a>

								{/* Дополнительная информация под кнопкой */}
								<div className='mt-4 text-center'>
									<div className='flex items-center justify-center space-x-2 text-white/70 text-sm'>
										<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
											<path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
										</svg>
										<span>100% Free • No Spam • Instant Access</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Нижняя декоративная линия */}
				<div className='mt-16 flex justify-center'>
					<div className='flex space-x-3'>
						<div className='w-3 h-3 bg-red-400/60 rounded-full animate-pulse'></div>
						<div className='w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse animate-pulse-delay-1'></div>
						<div className='w-3 h-3 bg-blue-400/60 rounded-full animate-pulse animate-pulse-delay-2'></div>
						<div className='w-3 h-3 bg-green-400/60 rounded-full animate-pulse animate-pulse-delay-3'></div>
					</div>
				</div>
			</div>

			{/* CSS анимации - убрали jsx атрибут */}
			<style>{`
				@keyframes bounce-slow {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-15px) rotate(3deg); }
				}
				@keyframes spin-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				.animate-bounce-slow {
					animation: bounce-slow 4s ease-in-out infinite;
				}
				.animate-bounce-slow-delay-1 {
					animation: bounce-slow 4s ease-in-out infinite;
					animation-delay: 1s;
				}
				.animate-bounce-slow-delay-2 {
					animation: bounce-slow 4s ease-in-out infinite;
					animation-delay: 2s;
				}
				.animate-spin-slow {
					animation: spin-slow 8s linear infinite;
				}
				.animate-pulse-delay-1 {
					animation-delay: 0.1s;
				}
				.animate-pulse-delay-2 {
					animation-delay: 0.2s;
				}
				.animate-pulse-delay-3 {
					animation-delay: 0.3s;
				}
				.shadow-3xl {
					box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
				}
			`}</style>
		</section>
	)
}
