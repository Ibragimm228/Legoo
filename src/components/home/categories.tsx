import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	// LEGO цвета для категорий
	const legoColors = [
		'from-red-500 to-red-600 border-red-300 hover:from-red-600 hover:to-red-700',
		'from-yellow-500 to-yellow-600 border-yellow-300 hover:from-yellow-600 hover:to-yellow-700',
		'from-blue-500 to-blue-600 border-blue-300 hover:from-blue-600 hover:to-blue-700',
		'from-green-500 to-green-600 border-green-300 hover:from-green-600 hover:to-green-700',
		'from-purple-500 to-purple-600 border-purple-300 hover:from-purple-600 hover:to-purple-700',
		'from-orange-500 to-orange-600 border-orange-300 hover:from-orange-600 hover:to-orange-700',
		'from-pink-500 to-pink-600 border-pink-300 hover:from-pink-600 hover:to-pink-700',
		'from-teal-500 to-teal-600 border-teal-300 hover:from-teal-600 hover:to-teal-700'
	]

	return (
		<section className='relative py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 overflow-hidden'>
			{/* Декоративный фон с LEGO-паттерном */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-0 left-0 w-full h-full' 
					 style={{
						 backgroundImage: `radial-gradient(circle at 20px 20px, #000 2px, transparent 2px)`,
						 backgroundSize: '40px 40px'
					 }}>
				</div>
			</div>

			{/* Плавающие LEGO элементы */}
			<div className='absolute top-20 left-10 animate-float'>
				<div className='w-12 h-12 bg-red-500 rounded-lg shadow-lg opacity-20 transform rotate-12'>
					<div className='absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full'></div>
					<div className='absolute top-1 right-1 w-3 h-3 bg-white/30 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-40 right-16 animate-float delay-1000'>
				<div className='w-10 h-10 bg-yellow-500 rounded-lg shadow-lg opacity-20 transform -rotate-6'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full'></div>
				</div>
			</div>
			<div className='absolute bottom-32 left-1/4 animate-float delay-2000'>
				<div className='w-8 h-8 bg-blue-500 rounded-lg shadow-lg opacity-20 transform rotate-45'>
					<div className='absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full'></div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Заголовок секции */}
				<div className='text-center mb-16'>
					{/* LEGO логотип стиль */}
					<div className='flex justify-center items-center mb-6'>
						<div className='flex space-x-2'>
							<div className='w-4 h-4 bg-red-500 rounded-full shadow-lg'></div>
							<div className='w-4 h-4 bg-yellow-500 rounded-full shadow-lg'></div>
							<div className='w-4 h-4 bg-blue-500 rounded-full shadow-lg'></div>
							<div className='w-4 h-4 bg-green-500 rounded-full shadow-lg'></div>
						</div>
					</div>

					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600'>
							Build Your
						</span>
						<br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-purple-600'>
							LEGO Journey
						</span>
					</h2>

					<div className='max-w-3xl mx-auto'>
						<div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-red-500'>
							<p className='text-lg text-gray-700 leading-relaxed'>
								Discover amazing content organized by <strong className='text-red-600'>LEGO themes</strong>! 
								From detailed <strong className='text-yellow-600'>set reviews</strong> and 
								innovative <strong className='text-blue-600'>building techniques</strong> to 
								creative <strong className='text-green-600'>brick model ideas</strong> – 
								find exactly what sparks your building passion!
							</p>
						</div>
					</div>
				</div>

				{/* Сетка категорий */}
				<div className='relative'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-red-100 via-yellow-100 via-blue-100 to-green-100 rounded-3xl opacity-30 transform rotate-1'></div>
					
					<div className='relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl'>
						{/* Заголовок категорий */}
						<div className='text-center mb-8'>
							<h3 className='text-2xl font-bold text-gray-800 mb-2'>Choose Your Building Theme</h3>
							<div className='flex justify-center space-x-1'>
								<div className='w-2 h-2 bg-red-500 rounded-full'></div>
								<div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
							</div>
						</div>

						{/* Категории */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{isLoading
								? Array.from({ length: 8 }).map((_, index) => (
										<div key={index} className='group'>
											<div className='relative'>
												{/* LEGO загрузочный блок */}
												<div className='bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-6 shadow-lg animate-pulse'>
													{/* LEGO шипы */}
													<div className='absolute -top-2 left-4 flex space-x-2'>
														<div className='w-4 h-4 bg-gray-300 rounded-full shadow animate-pulse'></div>
														<div className='w-4 h-4 bg-gray-300 rounded-full shadow animate-pulse delay-100'></div>
													</div>
													<div className='h-6 bg-gray-300 rounded mb-2 animate-pulse'></div>
													<div className='h-4 bg-gray-200 rounded animate-pulse'></div>
												</div>
											</div>
										</div>
								  ))
								: categories.map((category, index) => (
										<div key={category} className='group'>
											<a
												href={`/blog?type=${encodeURIComponent(category || '')}`}
												className='block relative transform hover:scale-105 transition-all duration-300 hover:z-10'
											>
												{/* LEGO кирпичик */}
												<div className={`relative bg-gradient-to-br ${legoColors[index % legoColors.length]} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 group-hover:border-white/50`}>
													{/* LEGO шипы */}
													<div className='absolute -top-2 left-4 flex space-x-2'>
														<div className='w-4 h-4 bg-white/40 rounded-full shadow-lg'></div>
														<div className='w-4 h-4 bg-white/40 rounded-full shadow-lg'></div>
													</div>

													{/* Иконка категории */}
													<div className='mb-3'>
														<div className='w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center'>
															<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
																<path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' clipRule='evenodd' />
															</svg>
														</div>
													</div>

													{/* Название категории */}
													<h4 className='text-white font-bold text-lg mb-2 leading-tight'>
														{category}
													</h4>
													
													{/* Подпись */}
													<p className='text-white/80 text-sm leading-relaxed'>
														Explore amazing content
													</p>

													{/* Стрелка */}
													<div className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
														<svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
															<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
														</svg>
													</div>

													{/* Блеск при hover */}
													<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
												</div>
											</a>
										</div>
								  ))}
						</div>

						{/* Нижняя информация */}
						<div className='mt-8 text-center'>
							<div className='inline-flex items-center space-x-4 text-sm text-gray-600'>
								<div className='flex items-center space-x-1'>
									<div className='w-2 h-2 bg-red-500 rounded-full'></div>
									<span>Set Reviews</span>
								</div>
								<div className='flex items-center space-x-1'>
									<div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
									<span>Build Techniques</span>
								</div>
								<div className='flex items-center space-x-1'>
									<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
									<span>Model Ideas</span>
								</div>
								<div className='flex items-center space-x-1'>
									<div className='w-2 h-2 bg-green-500 rounded-full'></div>
									<span>LEGO News</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS для анимации */}
			<style jsx>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-20px) rotate(5deg); }
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
			`}</style>
		</section>
	)
}
