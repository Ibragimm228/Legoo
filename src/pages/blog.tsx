import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import { useMemo } from 'react'

// CSS анимации и стили для текста статей
const CSS_ANIMATIONS = `
	@keyframes float-orbit {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(5deg); }
	}
	@keyframes twinkle {
		0%, 100% { opacity: 0.4; }
		50% { opacity: 1; }
	}
	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	.animate-float-orbit {
		animation: float-orbit 12s ease-in-out infinite;
	}
	.animate-twinkle {
		animation: twinkle 2s ease-in-out infinite;
	}
	.animate-spin-slow {
		animation: spin-slow 15s linear infinite;
	}

	/* Стили для темного текста в статьях */
	.article-content {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 16px;
		padding: 20px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
	}
	
	.article-content * {
		color: #1a1a1a !important;
	}
	
	.article-content h1,
	.article-content h2,
	.article-content h3,
	.article-content h4,
	.article-content h5,
	.article-content h6 {
		color: #0d1117 !important;
		font-weight: 700 !important;
	}
	
	.article-content p,
	.article-content span,
	.article-content div:not(.article-meta) {
		color: #24292f !important;
		line-height: 1.6 !important;
	}
	
	.article-content a {
		color: #0969da !important;
		font-weight: 500 !important;
		text-decoration: none !important;
	}
	
	.article-content a:hover {
		color: #0550ae !important;
		text-decoration: underline !important;
	}
	
	.article-content .article-meta,
	.article-content .article-date,
	.article-content .article-category {
		color: #656d76 !important;
		font-size: 0.875rem !important;
	}
	
	.article-content strong,
	.article-content b {
		color: #0d1117 !important;
		font-weight: 600 !important;
	}
	
	.article-content em,
	.article-content i {
		color: #24292f !important;
		font-style: italic !important;
	}
`

// Константы для цветовых схем карточек
const CARD_COLORS = [
	{
		bg: 'from-red-500/20 to-orange-500/20 border-red-400/30',
		gradient: 'from-red-500 to-orange-500'
	},
	{
		bg: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
		gradient: 'from-blue-500 to-cyan-500'
	},
	{
		bg: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
		gradient: 'from-green-500 to-emerald-500'
	},
	{
		bg: 'from-purple-500/20 to-pink-500/20 border-purple-400/30',
		gradient: 'from-purple-500 to-pink-500'
	}
]

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	// Мемоизируем отфильтрованные статьи
	const filteredArticles = useMemo(() => {
		return type
			? articles?.filter(article => article.type === type)
			: articles
	}, [articles, type])

	// Мемоизируем декоративные звезды
	const backgroundStars = useMemo(() => (
		<>
			<div className='absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle'></div>
			<div className='absolute top-40 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle'></div>
			<div className='absolute top-60 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-twinkle'></div>
			<div className='absolute bottom-40 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle'></div>
			<div className='absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-twinkle'></div>
		</>
	), [])

	// Мемоизируем плавающие LEGO-элементы (упрощенные)
	const floatingElements = useMemo(() => (
		<>
			<div className='absolute top-32 left-16 animate-float-orbit opacity-20'>
				<div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl'>
					<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-48 right-20 animate-float-orbit opacity-20' style={{ animationDelay: '4s' }}>
				<div className='w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl'>
					<div className='absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute top-1 right-2 w-3 h-3 bg-white/40 rounded-full'></div>
				</div>
			</div>
		</>
	), [])

	if (isLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center'>
				<style>{CSS_ANIMATIONS}</style>
				<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-400/30'>
					<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
						<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-pulse'></div>
						<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-pulse'></div>
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
							<div className='w-4 h-4 bg-purple-400 rounded-full animate-bounce'></div>
							<div className='w-4 h-4 bg-pink-400 rounded-full animate-bounce'></div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 flex items-center justify-center'>
				<style>{CSS_ANIMATIONS}</style>
				<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-red-400/30'>
					<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
						<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg'></div>
						<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg'></div>
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
				</div>
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
			<style>{CSS_ANIMATIONS}</style>

			{/* Оптимизированный космический LEGO-фон */}
			<div className='absolute inset-0 pointer-events-none'>
				{backgroundStars}
				{floatingElements}
			</div>

			<Container>
				<section className='py-16 relative'>
					{/* LEGO-брендинг страницы */}
					<div className='flex justify-center items-center mb-12'>
						<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-cyan-400/30 shadow-2xl'>
							<div className='flex space-x-2'>
								<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-pink-400 rounded-full animate-pulse'></div>
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
							</div>
						</div>
					</div>

					{/* Фильтр активных типов */}
					{type && (
						<div className='mb-12'>
							<div className='flex justify-center'>
								<div className='relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-yellow-400/30'>
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
												<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
												<XIcon strokeWidth={2} className='w-5 h-5 text-white' />
											</Link>
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
								{/* Статистика */}
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
									</div>
								</div>

								{/* Оптимизированная сетка статей с темным текстом */}
								<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/30'>
									<div className='absolute -top-4 left-12 flex space-x-4'>
										<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-xl'></div>
									</div>

									{/* Заголовок сетки */}
									<div className='text-center mb-8'>
										<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl px-6 py-3 border border-cyan-300/30'>
											<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse'></div>
											<h2 className='text-2xl font-bold text-white'>
												{type ? `${type} Collection` : 'Complete LEGO Library'}
											</h2>
											<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse'></div>
										</div>
									</div>

									{/* Сетка статей с темным читаемым текстом */}
									<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
										{filteredArticles?.map((article, index) => {
											const colorScheme = CARD_COLORS[index % CARD_COLORS.length]
											
											return (
												<div key={article.id} className='relative group'>
													<div className={`relative bg-gradient-to-br ${colorScheme.bg} backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 transform group-hover:scale-105 transition-all duration-300`}>
														{/* LEGO шипы на карточке */}
														<div className='absolute -top-3 left-6 flex space-x-2'>
															<div className={`w-6 h-6 bg-gradient-to-br ${colorScheme.gradient} rounded-full shadow-lg`}></div>
															<div className={`w-6 h-6 bg-gradient-to-br ${colorScheme.gradient} rounded-full shadow-lg`}></div>
														</div>

														{/* Номер статьи */}
														<div className='absolute top-3 right-3'>
															<div className={`w-8 h-8 bg-gradient-to-br ${colorScheme.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
																<span className='text-white font-bold text-sm'>{index + 1}</span>
															</div>
														</div>

														{/* Контейнер для компонента статьи с темным читаемым текстом */}
														<div className='article-content relative z-10'>
															<ArticleCardMedium article={article} />
														</div>
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
												<div className='w-3 h-3 bg-purple-500 rounded-full animate-pulse'></div>
												<span className='text-sm font-medium'>Build Techniques</span>
											</div>
											<div className='flex items-center space-x-2 text-pink-400'>
												<div className='w-3 h-3 bg-pink-500 rounded-full animate-pulse'></div>
												<span className='text-sm font-medium'>Model Ideas</span>
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							/* Состояние "нет статей" */
							<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-orange-400/30 text-center'>
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
							</div>
						)}
					</div>
				</section>
			</Container>
		</div>
	)
}
