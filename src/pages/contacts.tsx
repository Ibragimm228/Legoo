import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden'>
			{/* CSS анимации - перенесены в начало */}
			<style>{`
				@keyframes float-mega {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					33% { transform: translateY(-30px) rotate(8deg) scale(1.1); }
					66% { transform: translateY(-15px) rotate(-5deg) scale(0.9); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-mega {
					animation: float-mega 15s ease-in-out infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
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
				
				{/* Плавающие LEGO-элементы */}
				<div className='absolute top-32 left-16 animate-float-mega'>
					<div className='w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-12 opacity-40'>
						<div className='absolute top-3 left-3 w-6 h-6 bg-white/40 rounded-full'></div>
						<div className='absolute top-3 right-3 w-6 h-6 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-3 left-3 w-6 h-6 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-3 right-3 w-6 h-6 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-48 right-20 animate-float-mega delay-2000'>
					<div className='w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl transform -rotate-6 opacity-40'>
						<div className='absolute top-2 left-4 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute top-2 right-4 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-mega delay-4000'>
					<div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-2xl transform rotate-45 opacity-40'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-20 right-1/3 animate-float-mega delay-6000'>
					<div className='w-18 h-18 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl shadow-2xl transform -rotate-12 opacity-40'>
						<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute center-2 center-2 w-5 h-5 bg-white/25 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
					</div>
				</div>

				{/* Космические эффекты */}
				<div className='absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
			</div>

			<section className='py-20 sm:py-32 relative'>
				<div className='container mx-auto px-4 max-w-7xl'>
					{/* LEGO-брендинг страницы */}
					<div className='flex justify-center items-center mb-12'>
						<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-indigo-400/30 shadow-2xl'>
							<div className='flex space-x-2'>
								<div className='w-4 h-4 bg-indigo-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-200'></div>
								<div className='w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-400'></div>
							</div>
							<span className='text-white/90 font-bold text-sm uppercase tracking-wider'>
								LEGO® Community Hub
							</span>
							<div className='flex items-center space-x-1'>
								<svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
								</svg>
								<span className='text-green-400 text-xs font-bold'>VERIFIED</span>
							</div>
						</div>
					</div>

					{/* Главный заголовок */}
					<div className='text-center mb-16'>
						<h1 className='text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-8'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-2'>
								Connect With
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400'>
								LEGO Masters
							</span>
						</h1>

						{/* Подзаголовок в LEGO-блоке */}
						<div className='max-w-4xl mx-auto'>
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-indigo-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
								</div>
								
								<p className='text-xl sm:text-2xl text-white/90 leading-relaxed font-medium'>
									Ready to join our passionate <strong className='text-indigo-300'>LEGO® community</strong>? 
									Connect with fellow builders, share your amazing creations, get expert advice on 
									<strong className='text-purple-300'> building techniques</strong>, or suggest new 
									<strong className='text-pink-300'>set reviews</strong> and 
									<strong className='text-cyan-300'>brick model ideas</strong>. 
									We're here to help fuel your building passion!
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full'></div>
							</div>
						</div>

						{/* Статистика сообщества */}
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto'>
							{[
								{ number: '15K+', label: 'Active Builders', icon: '👥', color: 'from-indigo-500 to-purple-600' },
								{ number: '24/7', label: 'Support', icon: '🛟', color: 'from-purple-500 to-pink-600' },
								{ number: '500+', label: 'Expert Reviews', icon: '⭐', color: 'from-pink-500 to-red-600' },
								{ number: '1M+', label: 'Bricks Built', icon: '🧱', color: 'from-cyan-500 to-blue-600' }
							].map((stat, index) => (
								<div key={index} className='relative group'>
									<div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-white/20`}>
										<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
										<div className='text-2xl mb-2'>{stat.icon}</div>
										<div className='text-2xl font-black text-white'>{stat.number}</div>
										<div className='text-white/80 text-sm font-medium'>{stat.label}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Основной контент */}
					<div className='relative'>
						{/* Декоративная подложка */}
						<div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
						
						<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-indigo-400/30'>
							{/* LEGO шипы на главном контейнере */}
							<div className='absolute -top-4 left-12 flex space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-xl'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-xl'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl'></div>
							</div>

							{/* Заголовок контейнера */}
							<div className='text-center mb-12'>
								<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl px-8 py-4 border border-indigo-300/30'>
									<div className='w-4 h-4 bg-indigo-400 rounded-full animate-pulse'></div>
									<h2 className='text-2xl font-bold text-white'>Builder Communication Center</h2>
									<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500'></div>
								</div>
							</div>

							<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
								{/* Левая колонка - Изображение */}
								<div className='relative group'>
									{/* Светящийся эффект */}
									<div className='absolute -inset-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
									
									<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-cyan-400/30 transform group-hover:scale-105 transition-all duration-300'>
										{/* LEGO шипы на изображении */}
										<div className='absolute -top-3 left-8 flex space-x-3'>
											<div className='w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
											<div className='w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg'></div>
											<div className='w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg'></div>
										</div>

										{/* Статус онлайн */}
										<div className='absolute top-6 right-6'>
											<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg px-3 py-1'>
												<div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
												<span className='text-white text-xs font-bold'>ONLINE 24/7</span>
											</div>
										</div>

										<img
											src='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400'
											alt='LEGO Community Contact'
											className='rounded-xl shadow-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-500'
										/>

										{/* Информационная плашка поверх изображения */}
										<div className='absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg'>
											<div className='flex items-center justify-between'>
												<div>
													<h3 className='font-bold text-gray-900'>Expert Support Team</h3>
													<p className='text-sm text-gray-600'>Master Builders & Community Managers</p>
												</div>
												<div className='flex space-x-1'>
													<div className='w-2 h-2 bg-indigo-500 rounded-full animate-pulse'></div>
													<div className='w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100'></div>
													<div className='w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200'></div>
												</div>
											</div>
										</div>

										{/* Декоративная нижняя линия */}
										<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
									</div>
								</div>

								{/* Правая колонка - Форма */}
								<div className='relative group'>
									{/* Светящийся эффект */}
									<div className='absolute -inset-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
									
									<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-400/30 transform group-hover:scale-105 transition-all duration-300'>
										{/* LEGO шипы на форме */}
										<div className='absolute -top-3 left-8 flex space-x-3'>
											<div className='w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
											<div className='w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
											<div className='w-6 h-6 bg-gradient-to-br from-red-400 to-orange-500 rounded-full shadow-lg'></div>
										</div>

										{/* Заголовок формы */}
										<div className='mb-8'>
											<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-4 py-2 mb-4'>
												<svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
												</svg>
												<span className='text-white font-bold text-sm'>BUILDER CONTACT FORM</span>
											</div>
											<h3 className='text-2xl font-bold text-white mb-2'>
												Share Your LEGO Story
											</h3>
											<p className='text-white/70 text-sm'>
												Tell us about your builds, questions, or ideas. Our expert team is ready to help!
											</p>
										</div>

										{/* Форма в контейнере */}
										<div className='relative'>
											<ContactForm />
										</div>

										{/* Гарантии */}
										<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
											<div className='flex items-center space-x-2 text-white/70 text-xs'>
												<svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
													<path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
												</svg>
												<span>100% Secure & Private</span>
											</div>
											<div className='flex items-center space-x-2 text-white/70 text-xs'>
												<svg className='w-4 h-4 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
													<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
												</svg>
												<span>Quick Response Guaranteed</span>
											</div>
											<div className='flex items-center space-x-2 text-white/70 text-xs'>
												<svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
													<path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
												</svg>
												<span>Expert LEGO Advice</span>
											</div>
											<div className='flex items-center space-x-2 text-white/70 text-xs'>
												<svg className='w-4 h-4 text-pink-400' fill='currentColor' viewBox='0 0 20 20'>
													<path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
												</svg>
												<span>Community Focused</span>
											</div>
										</div>

										{/* Декоративная нижняя линия */}
										<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full'></div>
									</div>
								</div>
							</div>

							{/* Нижняя информационная панель */}
							<div className='mt-12 text-center'>
								<div className='inline-flex items-center space-x-8 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-2xl px-8 py-4 border border-gray-600/30'>
									<div className='flex items-center space-x-2 text-indigo-400'>
										<div className='w-3 h-3 bg-indigo-500 rounded-full animate-pulse'></div>
										<span className='text-sm font-medium'>Set Requests</span>
									</div>
									<div className='flex items-center space-x-2 text-purple-400'>
										<div className='w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200'></div>
										<span className='text-sm font-medium'>Build Help</span>
									</div>
									<div className='flex items-center space-x-2 text-pink-400'>
										<div className='w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-400'></div>
										<span className='text-sm font-medium'>Community Chat</span>
									</div>
									<div className='flex items-center space-x-2 text-cyan-400'>
										<div className='w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-600'></div>
										<span className='text-sm font-medium'>Expert Advice</span>
									</div>
								</div>
							</div>

							{/* Светящаяся граница контейнера */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full'></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
