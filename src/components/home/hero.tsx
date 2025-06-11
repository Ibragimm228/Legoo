import { Container } from '@/components/shared/container'
import { useState, useEffect } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)
	const [activeBlock, setActiveBlock] = useState(0)

	// Анимация переключения активных блоков
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveBlock(prev => (prev + 1) % 4)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'>
			{/* Динамический LEGO-фон */}
			<div className='absolute inset-0'>
				{/* Базовое изображение с эффектом */}
				<div
					className={`absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 transition-opacity duration-500 ${
						loaded ? 'opacity-0' : 'opacity-100'
					}`}
					style={{ zIndex: 1 }}
				/>
				<img
					src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop'
					alt='LEGO Building Universe'
					decoding='async'
					loading='eager'
					fetchPriority='high'
					className='w-full h-full object-cover opacity-30'
					srcSet='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1000w'
					sizes='100vw'
					onLoad={() => setLoaded(true)}
					style={{ zIndex: 2, position: 'relative' }}
				/>
				
				{/* Многослойные градиенты */}
				<div className='absolute inset-0 bg-gradient-to-r from-red-900/20 via-yellow-900/20 via-blue-900/20 to-green-900/20' style={{ zIndex: 3 }}></div>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900/90' style={{ zIndex: 4 }}></div>
			</div>

			{/* Плавающие LEGO-элементы */}
			<div className='absolute inset-0 pointer-events-none' style={{ zIndex: 5 }}>
				{/* Большие LEGO блоки */}
				<div className='absolute top-20 left-16 animate-float-mega'>
					<div className='w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl transform rotate-12 opacity-40'>
						<div className='absolute top-3 left-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute top-3 right-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-3 left-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-3 right-3 w-6 h-6 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-40 right-20 animate-float-mega delay-1000'>
					<div className='w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-2xl transform -rotate-6 opacity-40'>
						<div className='absolute top-2 left-4 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute top-2 right-4 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/25 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-mega delay-2000'>
					<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-2xl transform rotate-45 opacity-40'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-20 right-1/3 animate-float-mega delay-3000'>
					<div className='w-18 h-18 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl transform -rotate-12 opacity-40'>
						<div className='absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute center-2 center-2 w-5 h-5 bg-white/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
					</div>
				</div>

				{/* Мелкие летающие кирпичики */}
				<div className='absolute top-60 left-1/3 animate-spin-slow'>
					<div className='w-8 h-8 bg-purple-500 rounded-lg shadow-lg opacity-30'></div>
				</div>
				<div className='absolute top-80 right-1/4 animate-spin-slow delay-1500'>
					<div className='w-6 h-6 bg-pink-500 rounded shadow-lg opacity-30'></div>
				</div>
			</div>

			{/* Основной контент */}
			<Container className='py-20 sm:py-32 relative' style={{ zIndex: 10 }}>
				<div className='relative flex max-lg:flex-col'>
					<div className='max-w-5xl'>
						{/* LEGO брендинг */}
						<div className='flex items-center mb-8'>
							<div className='flex space-x-3 mr-6'>
								{[
									{ color: 'from-red-500 to-red-600', active: activeBlock === 0 },
									{ color: 'from-yellow-500 to-yellow-600', active: activeBlock === 1 },
									{ color: 'from-blue-500 to-blue-600', active: activeBlock === 2 },
									{ color: 'from-green-500 to-green-600', active: activeBlock === 3 }
								].map((block, index) => (
									<div key={index} className={`relative transition-all duration-500 ${block.active ? 'scale-125' : 'scale-100'}`}>
										<div className={`w-6 h-6 bg-gradient-to-br ${block.color} rounded-full shadow-lg ${block.active ? 'animate-pulse' : ''}`}></div>
										{block.active && (
											<div className={`absolute inset-0 bg-gradient-to-br ${block.color} rounded-full opacity-50 animate-ping`}></div>
										)}
									</div>
								))}
							</div>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20'>
								<span className='text-white/90 text-sm font-bold uppercase tracking-wider'>
									Recognized LEGO® Fan Media
								</span>
							</div>
						</div>

						{/* Мегазаголовок */}
						<div className='relative mb-8'>
							<h1 className='text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6'>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 drop-shadow-2xl'>
									Build Your
								</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-2xl'>
									LEGO® Dreams
								</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 drop-shadow-2xl'>
									Into Reality
								</span>
							</h1>
							
							{/* Декоративные элементы */}
							<div className='absolute -top-8 -right-12 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce'></div>
							<div className='absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full opacity-60 animate-bounce delay-500'></div>
							<div className='absolute -bottom-4 right-1/4 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-bounce delay-1000'></div>
						</div>

						{/* Подзаголовок в космическом LEGO-блоке */}
						<div className='max-w-4xl mb-12'>
							<div className='relative bg-gradient-to-r from-slate-800/90 via-blue-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-8 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl'></div>
								</div>
								
								<p className='text-2xl sm:text-3xl text-slate-200 leading-relaxed font-medium'>
									Discover the ultimate destination for 
									<strong className='text-red-400'> LEGO® pieces</strong>, 
									comprehensive <strong className='text-yellow-400'>new set reviews</strong>, 
									innovative <strong className='text-blue-400'>building techniques</strong>, and 
									inspiring <strong className='text-green-400'>brick model ideas</strong>. 
									Join our community of passionate builders and creators!
								</p>

								{/* Светящаяся нижняя граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
							</div>
						</div>

						{/* Кнопки-кирпичики */}
						<div className='flex flex-col sm:flex-row gap-6'>
							{/* Основная кнопка */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
								<a
									href='/blog'
									className='relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-red-400/50'
								>
									{/* LEGO шипы на кнопке */}
									<div className='absolute -top-3 left-8 flex space-x-3'>
										<div className='w-6 h-6 bg-white/30 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-white/30 rounded-full shadow-lg'></div>
									</div>

									{/* Иконка */}
									<div className='mr-4 p-2 bg-white/20 rounded-lg'>
										<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
												  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
										</svg>
									</div>

									<span className='relative z-10'>Explore LEGO Universe</span>

									{/* Анимированный блеск */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
								</a>
							</div>

							{/* Вторичная кнопка */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
								<a
									href='/about'
									className='relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-slate-900 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-white/80'
								>
									{/* LEGO шипы на кнопке */}
									<div className='absolute -top-3 left-8 flex space-x-3'>
										<div className='w-6 h-6 bg-blue-400/40 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-purple-400/40 rounded-full shadow-lg'></div>
									</div>

									{/* Иконка */}
									<div className='mr-4 p-2 bg-blue-500/20 rounded-lg'>
										<svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
												  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
									</div>

									<span className='relative z-10 text-blue-600'>Discover Our Story</span>

									{/* Анимированный блеск */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
								</a>
							</div>
						</div>

						{/* Статистика внизу */}
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl'>
							{[
								{ number: '10K+', label: 'LEGO Sets', color: 'from-red-500 to-red-600' },
								{ number: '500+', label: 'Reviews', color: 'from-yellow-500 to-yellow-600' },
								{ number: '2K+', label: 'Techniques', color: 'from-blue-500 to-blue-600' },
								{ number: '50K+', label: 'Builders', color: 'from-green-500 to-green-600' }
							].map((stat, index) => (
								<div key={index} className='relative group'>
									<div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-white/20`}>
										<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
										<div className='text-2xl font-black text-white'>{stat.number}</div>
										<div className='text-white/80 text-sm font-medium'>{stat.label}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>

			{/* CSS анимации */}
			<style jsx>{`
				@keyframes float-mega {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					33% { transform: translateY(-30px) rotate(5deg) scale(1.05); }
					66% { transform: translateY(-15px) rotate(-3deg) scale(0.95); }
				}
				@keyframes spin-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				.animate-float-mega {
					animation: float-mega 12s ease-in-out infinite;
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
				.shadow-3xl {
					box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
				}
			`}</style>
		</div>
	)
}
