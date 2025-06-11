export function NotFoundPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden flex items-center justify-center'>
			{/* CSS анимации - перенесены в начало */}
			<style>{`
				@keyframes float-broken {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					25% { transform: translateY(-20px) rotate(15deg) scale(1.1); }
					50% { transform: translateY(-40px) rotate(-10deg) scale(0.9); }
					75% { transform: translateY(-15px) rotate(25deg) scale(1.05); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-broken {
					animation: float-broken 8s ease-in-out infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
				}
				.shadow-3xl {
					box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
				}
			`}</style>

			{/* Космический LEGO-фон */}
			<div className='absolute inset-0 pointer-events-none'>
				{/* Звездное поле */}
				<div className='absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle'></div>
				<div className='absolute top-40 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-1000'></div>
				<div className='absolute top-60 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-twinkle delay-2000'></div>
				<div className='absolute bottom-40 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle delay-3000'></div>
				<div className='absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-twinkle delay-4000'></div>
				<div className='absolute top-80 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle delay-5000'></div>
				
				{/* Рассыпанные LEGO-элементы (эффект разрушения) */}
				<div className='absolute top-32 left-16 animate-float-broken'>
					<div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl transform rotate-45 opacity-60'>
						<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-48 right-20 animate-float-broken delay-2000'>
					<div className='w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-2xl transform -rotate-30 opacity-60'>
						<div className='absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute top-1 right-2 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-broken delay-4000'>
					<div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl transform rotate-75 opacity-60'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-20 right-1/3 animate-float-broken delay-6000'>
					<div className='w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-2xl transform -rotate-45 opacity-60'>
						<div className='absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute top-1 right-1 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-1/3 left-1/2 animate-float-broken delay-1000'>
					<div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded shadow-2xl transform rotate-90 opacity-60'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-1/3 right-1/4 animate-float-broken delay-3000'>
					<div className='w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded shadow-2xl transform -rotate-60 opacity-60'>
						<div className='absolute center w-2 h-2 bg-white/40 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
					</div>
				</div>

				{/* Космические эффекты разрушения */}
				<div className='absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
			</div>

			<section className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
				{/* LEGO-брендинг страницы */}
				<div className='flex justify-center items-center mb-12'>
					<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-red-400/30 shadow-2xl'>
						<div className='flex space-x-2'>
							<div className='w-4 h-4 bg-red-400 rounded-full animate-pulse'></div>
							<div className='w-4 h-4 bg-orange-400 rounded-full animate-pulse delay-200'></div>
							<div className='w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-400'></div>
						</div>
						<span className='text-white/90 font-bold text-sm uppercase tracking-wider'>
							LEGO® Build Error
						</span>
						<div className='flex items-center space-x-1'>
							<svg className='w-4 h-4 text-red-400' fill='currentColor' viewBox='0 0 20 20'>
								<path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
							</svg>
							<span className='text-red-400 text-xs font-bold'>CRITICAL</span>
						</div>
					</div>
				</div>

				{/* Главный 404 блок */}
				<div className='relative mb-16'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl transform rotate-2 scale-110 blur-sm'></div>
					
					<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-red-400/30'>
						{/* LEGO шипы на главном блоке */}
						<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
							<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg animate-pulse'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg animate-pulse delay-200'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg animate-pulse delay-400'></div>
						</div>

						{/* Гигантская 404 */}
						<div className='relative mb-8'>
							<h1 className='text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none'>
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 drop-shadow-2xl animate-pulse'>
									4
								</span>
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 drop-shadow-2xl animate-pulse delay-300'>
									0
								</span>
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-orange-400 drop-shadow-2xl animate-pulse delay-600'>
									4
								</span>
							</h1>
							
							{/* Эффект разрушения вокруг цифр */}
							<div className='absolute -top-8 -left-8 w-6 h-6 bg-red-400 rounded opacity-60 animate-ping'></div>
							<div className='absolute -top-4 -right-12 w-4 h-4 bg-orange-400 rounded opacity-60 animate-ping delay-1000'></div>
							<div className='absolute -bottom-6 left-1/4 w-5 h-5 bg-yellow-400 rounded opacity-60 animate-ping delay-2000'></div>
							<div className='absolute -bottom-8 right-1/3 w-3 h-3 bg-red-400 rounded opacity-60 animate-ping delay-3000'></div>
						</div>

						{/* Заголовок ошибки */}
						<h2 className='text-4xl sm:text-5xl font-black text-white mb-6'>
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300'>
								LEGO Build Collapsed!
							</span>
						</h2>

						{/* Описание в LEGO-блоке */}
						<div className='max-w-3xl mx-auto mb-8'>
							<div className='relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-400/30'>
								{/* LEGO шипы на описании */}
								<div className='absolute -top-3 left-8 flex space-x-3'>
									<div className='w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg'></div>
									<div className='w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg'></div>
								</div>

								<p className='text-xl text-white/90 leading-relaxed font-medium'>
									Oops! This LEGO construction site is missing some critical pieces! 
									The page you're looking for has been 
									<strong className='text-red-300'> disassembled</strong>, 
									<strong className='text-orange-300'>relocated to another build area</strong>, or 
									<strong className='text-yellow-300'>never existed in our LEGO universe</strong>. 
									Let's rebuild your journey from the main hub!
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full'></div>
							</div>
						</div>

						{/* Статистика ошибки */}
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
							{[
								{ icon: '🧱', label: 'Missing Bricks', value: '404', color: 'from-red-500 to-red-600' },
								{ icon: '⚠️', label: 'Build Status', value: 'BROKEN', color: 'from-orange-500 to-orange-600' },
								{ icon: '🔧', label: 'Repair Mode', value: 'ACTIVE', color: 'from-yellow-500 to-yellow-600' }
							].map((stat, index) => (
								<div key={index} className='relative group'>
									<div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-white/20`}>
										<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
										<div className='text-2xl mb-2'>{stat.icon}</div>
										<div className='text-lg font-black text-white'>{stat.value}</div>
										<div className='text-white/80 text-sm font-medium'>{stat.label}</div>
									</div>
								</div>
							))}
						</div>

						{/* Кнопка возврата - главный LEGO-кирпичик */}
						<div className='relative group'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
							
							<a href='/' className='relative inline-block'>
								<div className='relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-green-400/50'>
									{/* LEGO шипы на кнопке */}
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
										<div className='w-8 h-8 bg-white/30 rounded-full shadow-lg'></div>
										<div className='w-8 h-8 bg-white/30 rounded-full shadow-lg'></div>
										<div className='w-8 h-8 bg-white/30 rounded-full shadow-lg'></div>
									</div>

									<div className='flex items-center space-x-4'>
										{/* Иконка дома */}
										<div className='p-3 bg-white/20 rounded-xl'>
											<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
											</svg>
										</div>

										<div className='text-left'>
											<div className='text-2xl font-black text-white'>
												Rebuild from Home Base
											</div>
											<div className='text-white/80 text-sm font-medium'>
												Return to LEGO Universe Hub
											</div>
										</div>

										{/* Стрелка */}
										<div className='ml-4 transform group-hover:translate-x-2 transition-transform'>
											<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
											</svg>
										</div>
									</div>

									{/* Анимированный блеск */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

									{/* Hover фон */}
									<div className='absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-3xl'></div>
								</div>
							</a>
						</div>

						{/* Дополнительная информация */}
						<div className='mt-8 text-center'>
							<div className='inline-flex items-center space-x-2 text-white/60 text-sm'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
								</svg>
								<span>Error Code: LEGO-404-MISSING-BRICKS • Auto-rebuild in progress</span>
							</div>
						</div>

						{/* Светящаяся граница главного блока */}
						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full'></div>
					</div>
				</div>

				{/* Нижняя панель помощи */}
				<div className='relative'>
					<div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-yellow-400/30'>
						{/* LEGO шипы на панели помощи */}
						<div className='absolute -top-3 left-8 flex space-x-3'>
							<div className='w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg'></div>
							<div className='w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg'></div>
						</div>

						<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8'>
							<div className='flex items-center space-x-2 text-yellow-400'>
								<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
									<path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
								<span className='font-medium text-sm'>Safe Navigation</span>
							</div>
							<div className='flex items-center space-x-2 text-green-400'>
								<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd' />
								</svg>
								<span className='font-medium text-sm'>Auto-Repair Active</span>
							</div>
							<div className='flex items-center space-x-2 text-blue-400'>
								<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
									<path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' />
								</svg>
								<span className='font-medium text-sm'>LEGO Support Ready</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
