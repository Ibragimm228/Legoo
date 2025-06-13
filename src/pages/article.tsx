import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center'>
				{/* CSS анимации - перенесены в начало */}
				<style>{`
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
					<div className='relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-400/30'>
						{/* LEGO шипы */}
						<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
							<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-pulse'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-pulse delay-200'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg animate-pulse delay-400'></div>
						</div>
						
						<div className='text-center'>
							<div className='text-4xl font-black text-black mb-4'>
								Building Your
							</div>
							<div className='text-4xl font-black text-black mb-8'>
								LEGO Experience
							</div>
							<Loading />
						</div>

						{/* Светящаяся граница */}
						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
					</div>
				</div>
			</div>
		)
	}

	if (!article) return null

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
			{/* CSS анимации - перенесены в начало основного компонента */}
			<style>{`
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
				<div className='py-16 relative'>
					{/* LEGO-брендинг страницы */}
					<div className='flex justify-center items-center mb-12'>
						<div className='flex items-center space-x-4 bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-4 border border-cyan-400/30 shadow-2xl'>
							<div className='flex space-x-2'>
								<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse'></div>
								<div className='w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-200'></div>
								<div className='w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-400'></div>
							</div>
							<span className='text-black font-bold text-sm uppercase tracking-wider'>
								LEGO® Expert Article
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

					{/* Article Header в LEGO-блоке */}
					<div className='relative mb-12'>
						<div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
						
						<div className='relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/30'>
							{/* LEGO шипы на заголовке */}
							<div className='absolute -top-4 left-8 flex space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
							</div>

							<div className='text-black'>
								<ArticleHeader article={article} />
							</div>

							{/* Светящаяся граница */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
						</div>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
						{/* Left Column - Article Content */}
						<div className='lg:col-span-8 space-y-8'>
							{/* Article Navigation в LEGO-стиле */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-400/30 transform group-hover:scale-105 transition-all duration-300'>
									{/* LEGO шипы на навигации */}
									<div className='absolute -top-3 left-6 flex space-x-2'>
										<div className='w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
									</div>

									<div className='text-black'>
										<ArticleNavigation currentArticle={article} articles={articles} />
									</div>
								</div>
							</div>

							{/* Article Content в главном LEGO-блоке */}
							<div className='relative group'>
								<div className='absolute -inset-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-purple-400/30'>
									{/* LEGO шипы на контенте */}
									<div className='absolute -top-4 left-12 flex space-x-4'>
										<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-xl'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-full shadow-xl'></div>
										<div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-xl'></div>
									</div>

									{/* Метка контента */}
									<div className='absolute top-6 right-6'>
										<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-3 py-1'>
											<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
											</svg>
											<span className='text-white text-xs font-bold'>EXPERT CONTENT</span>
										</div>
									</div>

									<div className='text-black'>
										<ArticleContent article={article} />
									</div>

									{/* Декоративная нижняя линия */}
									<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full'></div>
								</div>
							</div>
						</div>

						{/* Right Column - Articles & Comments */}
						<div className='lg:col-span-4 space-y-8'>
							{/* Comments Section в LEGO-блоке */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-green-400/30 transform group-hover:scale-105 transition-all duration-300'>
									{/* LEGO шипы на комментариях */}
									<div className='absolute -top-3 left-6 flex space-x-2'>
										<div className='w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg'></div>
									</div>

									{/* Заголовок секции */}
									<div className='absolute top-3 right-3'>
										<div className='inline-flex items-center space-x-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-2 py-1'>
											<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
												<path fillRule='evenodd' d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z' clipRule='evenodd' />
											</svg>
											<span className='text-white text-xs font-bold'>BUILDERS CHAT</span>
										</div>
									</div>

									<div className='text-black'>
										<ArticleComments article={article} />
									</div>
								</div>
							</div>

							{/* Latest Articles в LEGO-блоке */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-yellow-400/30 transform group-hover:scale-105 transition-all duration-300'>
									{/* LEGO шипы на последних статьях */}
									<div className='absolute -top-3 left-6 flex space-x-2'>
										<div className='w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg'></div>
									</div>

									{/* Новые статьи индикатор */}
									<div className='absolute top-3 right-3'>
										<div className='inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-2 py-1'>
											<div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
											<span className='text-white text-xs font-bold'>FRESH</span>
										</div>
									</div>

									<div className='text-black'>
										<ArticleLatest articles={articles} />
									</div>
								</div>
							</div>

							{/* Popular Articles в LEGO-блоке */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-red-400/30 transform group-hover:scale-105 transition-all duration-300'>
									{/* LEGO шипы на популярных статьях */}
									<div className='absolute -top-3 left-6 flex space-x-2'>
										<div className='w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg'></div>
									</div>

									{/* Популярность индикатор */}
									<div className='absolute top-3 right-3'>
										<div className='inline-flex items-center space-x-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-2 py-1'>
											<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
											</svg>
											<span className='text-white text-xs font-bold'>TRENDING</span>
										</div>
									</div>

									<div className='text-black'>
										<ArticlePopular articles={articles} />
									</div>
								</div>
							</div>

							{/* Featured Articles в LEGO-блоке */}
							<div className='relative group'>
								<div className='absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'></div>
								
								<div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-indigo-400/30 transform group-hover:scale-105 transition-all duration-300'>
									{/* LEGO шипы на рекомендуемых статьях */}
									<div className='absolute -top-3 left-6 flex space-x-2'>
										<div className='w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
									</div>

									{/* Featured индикатор */}
									<div className='absolute top-3 right-3'>
										<div className='inline-flex items-center space-x-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full px-2 py-1'>
											<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
											</svg>
											<span className='text-white text-xs font-bold'>FEATURED</span>
										</div>
									</div>

									<div className='text-black'>
										<ArticleFeatured articles={articles} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}