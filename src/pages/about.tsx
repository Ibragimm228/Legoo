import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
			{/* CSS анимации - перенесены в начало */}
			<style>{`
				@keyframes float-mega {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					33% { transform: translateY(-30px) rotate(5deg) scale(1.05); }
					66% { transform: translateY(-15px) rotate(-3deg) scale(0.95); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-mega {
					animation: float-mega 12s ease-in-out infinite;
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
				
				{/* Плавающие LEGO-элементы */}
				<div className='absolute top-32 left-16 animate-float-mega'>
					<div className='w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl transform rotate-12 opacity-40'>
						<div className='absolute top-3 left-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute top-3 right-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-3 left-3 w-6 h-6 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-3 right-3 w-6 h-6 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-48 right-20 animate-float-mega delay-2000'>
					<div className='w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-2xl transform -rotate-6 opacity-40'>
						<div className='absolute top-2 left-4 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute top-2 right-4 w-4 h-4 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/25 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-mega delay-4000'>
					<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-2xl transform rotate-45 opacity-40'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full'></div>
					</div>
				</div>
			</div>

			<Container className='py-16 relative'>
				{/* Introduction Section */}
				<section className='mb-24'>
					{/* LEGO-брендинг */}
					<div className='flex justify-center items-center mb-8'>
						<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-red-400/30 shadow-2xl'>
							<div className='flex space-x-2'>
								<div className='w-4 h-4 bg-red-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-200'></div>
								<div className='w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-400'></div>
								<div className='w-4 h-4 bg-green-400 rounded-full animate-pulse delay-600'></div>
							</div>
							<span className='text-white/90 font-bold text-sm uppercase tracking-wider'>
								Recognized LEGO® Fan Media
							</span>
						</div>
					</div>

					<h1 className='text-6xl sm:text-7xl lg:text-8xl font-black text-center mb-12 leading-tight'>
						<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 mb-2'>
							About Our
						</span>
						<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400'>
							LEGO Universe
						</span>
					</h1>

					<div className='flex flex-col lg:flex-row items-center gap-12'>
						<div className='lg:w-1/2'>
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-8 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg'></div>
								</div>
								
								<p className='text-xl text-white/90 leading-relaxed mb-6 font-medium'>
									Welcome to the ultimate <strong className='text-red-300'>LEGO® destination</strong>! 
									Your premier source for comprehensive <strong className='text-yellow-300'>set reviews</strong>, 
									innovative <strong className='text-blue-300'>building techniques</strong>, and 
									inspiring <strong className='text-green-300'>brick model ideas</strong>. 
									Our mission is to fuel your passion for building and creating with LEGO®.
								</p>
								<p className='text-lg text-white/80 leading-relaxed'>
									Founded by passionate builders in 2023, we've created a community where 
									LEGO enthusiasts discover, learn, and share their incredible creations. 
									From beginner tips to master-level techniques, we're here to elevate your building journey.
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full'></div>
							</div>
						</div>
						<div className='lg:w-1/2'>
							<div className='relative group'>
								{/* Декоративная рамка */}
								<div className='absolute -inset-4 bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
								
								<div className='relative bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/30'>
									{/* LEGO шипы сверху */}
									<div className='absolute -top-3 left-8 flex space-x-4'>
										<div className='w-6 h-6 bg-red-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-yellow-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-blue-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-green-500 rounded-full shadow-lg'></div>
									</div>

									<img
										src='https://images.unsplash.com/photo-1499750310107-5fef28a66643'
										alt='LEGO Building Universe'
										className='w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Our Mission Section */}
				<section className='mb-24'>
					<div className='text-center mb-12'>
						<h2 className='text-5xl sm:text-6xl font-black mb-6'>
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
								Our Building Mission
							</span>
						</h2>
					</div>

					<div className='flex flex-col lg:flex-row-reverse items-center gap-12'>
						<div className='lg:w-1/2'>
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 right-8 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-lg'></div>
								</div>
								
								<p className='text-xl text-white/90 leading-relaxed mb-6 font-medium'>
									At our LEGO hub, we believe in the infinite power of creativity through bricks. 
									Our mission is to <strong className='text-blue-300'>empower builders</strong> by providing 
									meticulously researched <strong className='text-purple-300'>set reviews</strong>, 
									cutting-edge <strong className='text-pink-300'>building techniques</strong>, and 
									inspiring <strong className='text-green-300'>model showcases</strong>.
								</p>
								<p className='text-lg text-white/80 leading-relaxed'>
									We aim to be your trusted companion in the LEGO universe, covering everything 
									from the latest official sets to custom MOCs (My Own Creations), ensuring 
									every builder finds inspiration and knowledge to fuel their passion.
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full'></div>
							</div>
						</div>
						<div className='lg:w-1/2'>
							<div className='relative group'>
								{/* Декоративная рамка */}
								<div className='absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur'></div>
								
								<div className='relative bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/30'>
									{/* LEGO шипы сверху */}
									<div className='absolute -top-3 right-8 flex space-x-4'>
										<div className='w-6 h-6 bg-blue-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-purple-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-pink-500 rounded-full shadow-lg'></div>
									</div>

									<img
										src='https://images.unsplash.com/photo-1529070538774-1843cb3265df'
										alt='LEGO Building Mission'
										className='w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Meet Our Master Builders Section */}
				<section className='mb-16'>
					<div className='text-center mb-16'>
						<h2 className='text-5xl sm:text-6xl font-black mb-8'>
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'>
								Meet Our Master Builders
							</span>
						</h2>
						
						<div className='max-w-4xl mx-auto'>
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-green-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg'></div>
								</div>
								
								<p className='text-xl text-white/90 leading-relaxed font-medium'>
									Our passionate team of <strong className='text-green-300'>LEGO experts</strong> and 
									<strong className='text-emerald-300'>master builders</strong> brings decades of experience 
									in reviewing sets, developing techniques, and creating incredible brick models. 
									Meet the creative minds behind our comprehensive LEGO content!
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full'></div>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* Master Builder 1 */}
						<div className='relative group'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-3 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
							
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-400/30 text-center transform group-hover:scale-105 transition-all duration-300'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg'></div>
								</div>

								{/* Аватар */}
								<div className='relative mb-6'>
									<img
										src='/authors/1.avif'
										alt='Master Builder Amelia Brooks'
										className='w-24 h-24 rounded-full object-cover mx-auto border-4 border-red-400/50 shadow-lg'
									/>
									<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-2 border-white flex items-center justify-center'>
										<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
										</svg>
									</div>
								</div>

								<h3 className='text-2xl font-bold text-white mb-2'>Amelia Brooks</h3>
								<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg px-3 py-1 mb-4'>
									<span className='text-white font-bold text-sm'>Set Review Expert</span>
								</div>
								<p className='text-white/80 text-sm leading-relaxed mb-4'>
									Laura is our go-to expert for comprehensive LEGO set reviews. With over 10 years 
									of experience analyzing builds, she provides detailed insights into playability, 
									design innovation, and value for money.
								</p>
								<div className='flex justify-center space-x-4 text-xs text-white/60'>
									<span>🏆 500+ Reviews</span>
									<span>⭐ Expert Rating</span>
								</div>
							</div>
						</div>

						{/* Master Builder 2 */}
						<div className='relative group'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
							
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-400/30 text-center transform group-hover:scale-105 transition-all duration-300'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full shadow-lg'></div>
								</div>

								{/* Аватар */}
								<div className='relative mb-6'>
									<img
										src='/authors/2.avif'
										alt='Technique Master Lucas Reed'
										className='w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-400/50 shadow-lg'
									/>
									<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white flex items-center justify-center'>
										<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
											<path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' />
										</svg>
									</div>
								</div>

								<h3 className='text-2xl font-bold text-white mb-2'>Lucas Reed</h3>
								<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg px-3 py-1 mb-4'>
									<span className='text-white font-bold text-sm'>Building Techniques Master</span>
								</div>
								<p className='text-white/80 text-sm leading-relaxed mb-4'>
									David specializes in advanced building techniques and innovative construction methods. 
									His tutorials help builders master complex builds and develop their own unique 
									building style and expertise.
								</p>
								<div className='flex justify-center space-x-4 text-xs text-white/60'>
									<span>🔧 1000+ Techniques</span>
									<span>📚 Master Guide</span>
								</div>
							</div>
						</div>

						{/* Master Builder 3 */}
						<div className='relative group'>
							{/* Светящийся эффект */}
							<div className='absolute -inset-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
							
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-green-400/30 text-center transform group-hover:scale-105 transition-all duration-300'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full shadow-lg'></div>
								</div>

								{/* Аватар */}
								<div className='relative mb-6'>
									<img
										src='/authors/3.avif'
										alt='MOC Designer Sophie Lane'
										className='w-24 h-24 rounded-full object-cover mx-auto border-4 border-green-400/50 shadow-lg'
									/>
									<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center'>
										<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
											<path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd' />
										</svg>
									</div>
								</div>

								<h3 className='text-2xl font-bold text-white mb-2'>Sophie Lane</h3>
								<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg px-3 py-1 mb-4'>
									<span className='text-white font-bold text-sm'>MOC Design Specialist</span>
								</div>
								<p className='text-white/80 text-sm leading-relaxed mb-4'>
									Sophia creates stunning original LEGO models and explores creative building concepts. 
									She shares unique brick model ideas and inspires builders to push the boundaries 
									of what's possible with LEGO bricks.
								</p>
								<div className='flex justify-center space-x-4 text-xs text-white/60'>
									<span>🎨 300+ MOCs</span>
									<span>💡 Creative Genius</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</div>
	)
}
