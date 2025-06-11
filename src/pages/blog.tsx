import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center'>
				{/* LEGO-стилизованный загрузочный экран */}
				<div className='relative'>
					{/* Плавающие LEGO-элементы при загрузке */}
					<div className='absolute -top-20 -left-20 animate-spin-slow'>
						<div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl opacity-60'>
							<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
							<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
							<div className='absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
							<div className='absolute bottom-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
						</div>
					</div>
					<div className='absolute -top-20 -right-20 animate-spin-slow delay-1000'>
						<div className='w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-2xl opacity-60'>
							<div className='absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full'></div>
							<div className='absolute top-1 right-2 w-3 h-3 bg-white/40 rounded-full'></div>
							<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
						</div>
					</div>
					<div className='absolute -bottom-20 left-0 animate-spin-slow delay-2000'>
						<div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl opacity-60'>
							<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
							<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
						</div>
					</div>

					{/* Центральный загрузочный блок */}
					<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-400/30'>
						{/* LEGO шипы */}
						<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
							<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-pulse'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-pulse delay-200'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg animate-pulse delay-400'></div>
						</div>
						
						<div className='text-center'>
							<div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4'>
								Loading LEGO
							</div>
							<div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8'>
								Universe
							</div>
							<div className='flex justify-center space-x-2'>
								<div className='w-4 h-4 bg-cyan-400 rounded-full animate-bounce'></div>
								<div className='w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-100'></div>
								<div className='w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-200'></div>
							</div>
						</div>

						{/* Светящаяся граница */}
						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
					</div>
				</div>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 flex items-center justify-center'>
				{/* LEGO-стилизованный экран ошибки */}
				<div className='relative'>
					<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-red-400/30'>
						{/* LEGO шипы */}
						<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
							<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg'></div>
						</div>
						
						<div className='text-center'>
							<div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4'>
								Oops! LEGO Blocks
							</div>
							<div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-8'>
								Are Scattered
							</div>
							<p className='text-white/80 text-lg mb-8'>
								Our LEGO building stations are temporarily offline. 
								Please rebuild the connection and try again!
							</p>
							<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg px-6 py-3'>
								<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
								</svg>
								<span className='text-white font-bold'>Building Error</span>
							</div>
						</div>

						{/* Светящаяся граница */}
						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full'></div>
					</div>
				</div>
			</div>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
			{/* Космический LEGO-фон */}
			<div className='absolute inset-0 pointer-events-none'>
				{/* Звездное поле */}
				<div className='absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle'></div>
				<div className='absolute top-40 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-1000'></div>
				<div className='absolute top-60 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-twinkle delay-2000'></div>
				<div className='absolute bottom-40 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle delay-3000'></div>
				<div className='absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-twinkle delay-4000'></div>
				
				{/* Плавающие LEGO-элементы */}
				<div className='absolute top-32 left-16 animate-float-orbit'>
					<div className='w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl transform rotate-12 opacity-30'>
						<div className='absolute top-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute top-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
					</div>
				</div>
				<div className='absolute top-48 right-20 animate-float-orbit delay-2000'>
					<div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-2xl transform -rotate-6 opacity-30'>
						<div className='absolute top-1 left-3 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute top-1 right-3 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/30 rounded-full'></div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-orbit delay-4000'>
					<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl transform rotate-45 opacity-30'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
					</div>
				</div>
			</div>

			<Container>
				<section className='py-16 relative'>
					{/* LEGO-брендинг страницы */}
					<div className='flex justify-center items-center mb-12'>
						<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-cyan-400/30 shadow-2xl'>
							<div className='flex space-x-2'>
								<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-200'></div>
								<div className='w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-400'></div>
							</div>
							<span className='text-white/90 font-bold text-sm uppercase tracking-wider'>
								LEGO® Knowledge Universe
							</span>
							<div className='flex space-x-1'>
								{[...Array(5)].map((_, i) => (
									<svg key={i} className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 20 20'>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
									</svg>
								))}
							</div>
						</div>
					</div>

					{/* Главный заголовок */}
					<div className='text-center mb-16'>
						<h1 className='text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-8'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2'>
								LEGO
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400'>
								Builder's Hub
							</span>
						</h1>

						{/* Подзаголовок в LEGO-блоке */}
						<div className='max-w-4xl mx-auto'>
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/30'>
								{/* LEGO шипы */}
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
									<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
									<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
								</div>
								
								<p className='text-xl sm:text-2xl text-white/90 leading-relaxed font-medium'>
									Explore our comprehensive collection of 
									<strong className='text-cyan-300'> LEGO® set reviews</strong>, 
									master <strong className='text-purple-300'>innovative building techniques</strong>, and 
									discover <strong className='text-pink-300'>amazing brick model ideas</strong>. 
									Your ultimate resource for everything LEGO!
								</p>

								{/* Светящаяся граница */}
								<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
							</div>
						</div>
					</div>

					{/* Фильтр активных типов */}
					{type && (
						<div className='mb-12'>
							<div className='flex justify-center'>
								<div className='relative group'>
									<div className='absolute -inset-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
									
									<div className='relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-yellow-400/30 transform group-hover:scale-105 transition-all duration-300'>
										{/* LEGO шипы на фильтре */}
										<div className='absolute -top-3 left-6 flex space-x-2'>
											<div className='w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg'></div>
											<div className='w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg'></div>
										</div>

										<div className='flex flex-col sm:flex-row items-center gap-4'>
											<div className='flex items-center space-x-3'>
												<div className='flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg px-3 py-1'>
													<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
														<path fillRule='evenodd' d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z' clipRule='evenodd' />
													</svg>
													<span className='text-white text-sm font-bold'>FILTERED</span>
												</div>
												<span className='text-white/80 font-medium'>
													Building content for:
												</span>
											</div>
											
											<div className='flex items-center gap-3'>
												<div className='relative bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl px-4 py-2 border border-cyan-400/30'>
													<strong className='text-cyan-300 text-lg font-bold break-all'>
														{type}
													</strong>
												</div>
												
												<Link 
													to='/blog'
													className='group relative inline-flex items-center justify-center p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'
												>
													{/* LEGO шип на кнопке */}
													<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
													
													<XIcon strokeWidth={2} className='w-5 h-5 text-white' />
													
													{/* Tooltip */}
													<div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
														Clear Filter
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Контент статей */}
					<div className='relative'>
						{!!filteredArticles && filteredArticles.length > 0 ? (
							<>
								{/* Статистика и индикаторы */}
								<div className='flex justify-center mb-12'>
									<div className='inline-flex items-center space-x-6 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-green-400/30 shadow-xl'>
										<div className='flex items-center space-x-2 text-green-400'>
											<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
											<span className='font-bold text-sm'>{filteredArticles.length} Articles Found</span>
										</div>
										<div className='flex items-center space-x-2 text-cyan-400'>
											<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' />
											</svg>
											<span className='font-bold text-sm'>Expert Content</span>
										</div>
										<div className='flex items-center space-x-2 text-purple-400'>
											<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
											</svg>
											<span className='font-bold text-sm'>Premium Quality</span>
										</div>
									</div>
								</div>

								{/* Сетка статей в LEGO-контейнере */}
								<div className='relative'>
									{/* Декоративная подложка */}
									<div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
									
									<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/30'>
										{/* LEGO шипы на контейнере */}
										<div className='absolute -top-4 left-12 flex space-x-4'>
											<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl'></div>
											<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
											<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-xl'></div>
											<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl'></div>
										</div>

										{/* Заголовок сетки */}
										<div className='text-center mb-8'>
											<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl px-6 py-3 border border-cyan-300/30'>
												<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse'></div>
												<h2 className='text-2xl font-bold text-white'>
													{type ? `${type} Collection` : 'Complete LEGO Library'}
												</h2>
												<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500'></div>
											</div>
										</div>

										{/* Сетка статей */}
										<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
											{filteredArticles?.map((article, index) => {
												const colors = [
													'from-red-500/20 to-orange-500/20 border-red-400/30',
													'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
													'from-green-500/20 to-emerald-500/20 border-green-400/30',
													'from-purple-500/20 to-pink-500/20 border-purple-400/30'
												]
												const gradients = [
													'from-red-500 to-orange-500',
													'from-blue-500 to-cyan-500',
													'from-green-500 to-emerald-500',
													'from-purple-500 to-pink-500'
												]
												const colorIndex = index % colors.length
												
												return (
													<div key={article.id} className='relative group'>
														{/* Светящийся эффект */}
														<div className={`absolute -inset-2 bg-gradient-to-r ${colors[colorIndex]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
														
														<div className={`relative bg-gradient-to-br ${colors[colorIndex]} backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 transform group-hover:scale-105 transition-all duration-300`}>
															{/* LEGO шипы на карточке */}
															<div className='absolute -top-3 left-6 flex space-x-2'>
																<div className={`w-6 h-6 bg-gradient-to-br ${gradients[colorIndex]} rounded-full shadow-lg`}></div>
																<div className={`w-6 h-6 bg-gradient-to-br ${gradients[colorIndex]} rounded-full shadow-lg`}></div>
															</div>

															{/* Номер статьи */}
															<div className='absolute top-3 right-3'>
																<div className={`w-8 h-8 bg-gradient-to-br ${gradients[colorIndex]} rounded-lg flex items-center justify-center shadow-lg`}>
																	<span className='text-white font-bold text-sm'>{index + 1}</span>
																</div>
															</div>

															{/* Контейнер для компонента статьи */}
															<div className='relative z-10'>
																<ArticleCardMedium article={article} />
															</div>

															{/* Декоративная нижняя линия */}
															<div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${gradients[colorIndex]} rounded-full opacity-60`}></div>
														</div>
													</div>
												)
											})}
										</div>

										{/* Нижняя информационная панель */}
										<div className='mt-12 text-center'>
											<div className='inline-flex items-center space-x-8 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-2xl px-8 py-4 border border-gray-600/30'>
												<div className='flex items-center space-x-2 text-cyan-400'>
													<div className='w-3 h-3 bg-cyan-500 rounded-full animate-pulse'></div>
													<span className='text-sm font-medium'>Set Reviews</span>
												</div>
												<div className='flex items-center space-x-2 text-purple-400'>
													<div className='w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200'></div>
													<span className='text-sm font-medium'>Build Techniques</span>
												</div>
												<div className='flex items-center space-x-2 text-pink-400'>
													<div className='w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-400'></div>
													<span className='text-sm font-medium'>Model Ideas</span>
												</div>
												<div className='flex items-center space-x-2 text-green-400'>
													<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse delay-600'></div>
													<span className='text-sm font-medium'>LEGO News</span>
												</div>
											</div>
										</div>

										{/* Светящаяся граница контейнера */}
										<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
									</div>
								</div>
							</>
						) : (
							/* Состояние "нет статей" */
							<div className='relative'>
								<div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
								
								<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-orange-400/30 text-center'>
									{/* LEGO шипы */}
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
										<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-lg'></div>
									</div>

									<div className='text-6xl mb-6'>🧱</div>
									<h3 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4'>
										No LEGO Content Found
									</h3>
									<p className='text-white/80 text-lg mb-8'>
										{type 
											? `We haven't built any "${type}" articles yet. Try exploring other categories!`
											: 'Our LEGO builders are working on new content. Check back soon!'
										}
									</p>
									
									{type && (
										<Link 
											to='/blog'
											className='inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
										>
											<svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
											</svg>
											<span className='text-white font-bold'>Explore All Categories</span>
										</Link>
									)}

									{/* Светящаяся граница */}
									<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full'></div>
								</div>
							</div>
						)}
					</div>
				</section>
			</Container>

			{/* CSS анимации */}
			<style jsx>{`
				@keyframes float-orbit {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					33% { transform: translateY(-25px) rotate(8deg) scale(1.1); }
					66% { transform: translateY(-10px) rotate(-5deg) scale(0.9); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				@keyframes spin-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				.animate-float-orbit {
					animation: float-orbit 15s ease-in-out infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
			`}</style>
		</div>
	)
}
