import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className='relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'>
			{/* Космический LEGO фон */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10'></div>
				<div className='absolute inset-0 opacity-20'>
					{/* Звездное поле */}
					<div className='absolute top-20 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle'></div>
					<div className='absolute top-40 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-1000'></div>
					<div className='absolute top-60 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-twinkle delay-2000'></div>
					<div className='absolute bottom-40 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle delay-3000'></div>
					<div className='absolute bottom-20 right-20 w-1 h-1 bg-red-400 rounded-full animate-twinkle delay-4000'></div>
				</div>
			</div>

			{/* Плавающие LEGO космические элементы */}
			<div className='absolute top-16 left-12 animate-float-slow'>
				<div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl transform rotate-12 opacity-60'>
					<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute center-2 center-2 w-6 h-6 bg-white/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
				</div>
			</div>
			<div className='absolute top-32 right-16 animate-float-slow delay-1000'>
				<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl transform -rotate-6 opacity-60'>
					<div className='absolute top-1 left-3 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute top-1 right-3 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
				</div>
			</div>
			<div className='absolute bottom-24 left-1/4 animate-float-slow delay-2000'>
				<div className='w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-2xl transform rotate-45 opacity-60'>
					<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full'></div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Заголовочная секция */}
				<div className='text-center mb-20'>
					{/* Космический LEGO логотип */}
					<div className='flex justify-center items-center mb-8'>
						<div className='relative'>
							<div className='flex space-x-3'>
								<div className='w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg animate-pulse'></div>
								<div className='w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg animate-pulse delay-200'></div>
								<div className='w-6 h-6 bg-gradient-to-br from-red-400 to-orange-400 rounded-full shadow-lg animate-pulse delay-400'></div>
								<div className='w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg animate-pulse delay-600'></div>
							</div>
							{/* Светящийся эффект */}
							<div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30 blur-lg'></div>
						</div>
					</div>

					{/* Мегазаголовок */}
					<div className='relative'>
						<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black mb-8'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 leading-tight'>
								Elite LEGO
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 leading-tight'>
								Masterpieces
							</span>
						</h2>
						
						{/* Декоративные элементы вокруг заголовка */}
						<div className='absolute -top-8 -left-8 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-ping'></div>
						<div className='absolute -top-4 -right-12 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-ping delay-1000'></div>
					</div>

					{/* Подзаголовок в космическом блоке */}
					<div className='max-w-4xl mx-auto'>
						<div className='relative bg-gradient-to-r from-slate-800/80 via-blue-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/20'>
							{/* LEGO шипы на блоке */}
							<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-lg'></div>
							</div>
							
							<p className='text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium'>
								Discover our handpicked collection of 
								<strong className='text-cyan-400'> extraordinary LEGO® builds</strong>, 
								featuring <strong className='text-purple-400'>exclusive set reviews</strong>, 
								<strong className='text-pink-400'>advanced techniques</strong>, and 
								<strong className='text-emerald-400'>mind-blowing creations</strong> that 
								will elevate your building journey to new heights!
							</p>

							{/* Светящаяся нижняя граница */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full'></div>
						</div>
					</div>

					{/* Статистика достижений */}
					<div className='grid grid-cols-1 sm:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto'>
						{[
							{ number: '1K+', label: 'Epic Builds', color: 'from-cyan-400 to-blue-500' },
							{ number: '500+', label: 'Set Reviews', color: 'from-purple-400 to-pink-500' },
							{ number: '2K+', label: 'Techniques', color: 'from-pink-400 to-red-500' },
							{ number: '50K+', label: 'Builders', color: 'from-green-400 to-emerald-500' }
						].map((stat, index) => (
							<div key={index} className='relative group'>
								<div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}>
									<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
									<div className='text-2xl font-black text-white'>{stat.number}</div>
									<div className='text-white/80 text-sm font-medium'>{stat.label}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Сетка статей с космическим оформлением */}
				<div className='relative'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-slate-800/40 via-blue-900/40 to-purple-900/40 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
					
					<div className='relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50'>
						{/* Заголовок секции статей */}
						<div className='text-center mb-12'>
							<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl px-6 py-3 border border-cyan-400/30'>
								<div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse'></div>
								<h3 className='text-2xl font-bold text-slate-200'>Featured Builds</h3>
								<div className='w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500'></div>
							</div>
						</div>

						{/* Сетка статей */}
						<div className='grid gap-8 lg:grid-cols-3'>
							{isLoading ? (
								<>
									{/* Стилизованные скелетоны */}
									{Array.from({ length: 3 }).map((_, index) => (
										<div key={index} className='relative group'>
											<div className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700/50'>
												<div className='absolute -top-3 left-6 flex space-x-2'>
													<div className='w-6 h-6 bg-slate-600 rounded-full animate-pulse'></div>
													<div className='w-6 h-6 bg-slate-600 rounded-full animate-pulse delay-100'></div>
												</div>
												<ArticleCardSmallSkeleton />
											</div>
										</div>
									))}
								</>
							) : (
								articles?.slice(0, 3).map((article, index) => {
									const colors = [
										'from-cyan-500/20 to-blue-500/20 border-cyan-400/30',
										'from-purple-500/20 to-pink-500/20 border-purple-400/30',
										'from-pink-500/20 to-red-500/20 border-pink-400/30'
									]
									const glowColors = [
										'shadow-cyan-500/20',
										'shadow-purple-500/20',
										'shadow-pink-500/20'
									]
									
									return (
										<div key={article.id} className='relative group'>
											{/* Светящийся эффект при hover */}
											<div className={`absolute -inset-2 bg-gradient-to-r ${colors[index]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
											
											<div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl ${glowColors[index]} border ${colors[index]} transform group-hover:scale-105 transition-all duration-300`}>
												{/* LEGO шипы на карточке */}
												<div className='absolute -top-3 left-6 flex space-x-2'>
													<div className={`w-6 h-6 bg-gradient-to-br ${colors[index].split(' ')[0]} ${colors[index].split(' ')[1]} rounded-full shadow-lg`}></div>
													<div className={`w-6 h-6 bg-gradient-to-br ${colors[index].split(' ')[0]} ${colors[index].split(' ')[1]} rounded-full shadow-lg`}></div>
												</div>

												{/* Номер статьи */}
												<div className='absolute top-3 right-3'>
													<div className={`w-8 h-8 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center`}>
														<span className='text-white font-bold text-sm'>{index + 1}</span>
													</div>
												</div>

												{/* Контейнер для компонента статьи */}
												<div className='relative z-10'>
													<ArticleCardSmall article={article} />
												</div>

												{/* Декоративная нижняя линия */}
												<div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${colors[index]} rounded-full opacity-50`}></div>
											</div>
										</div>
									)
								})
							)}
						</div>

						{/* Нижняя информационная панель */}
						<div className='mt-12 text-center'>
							<div className='inline-flex items-center space-x-6 bg-slate-800/50 rounded-2xl px-8 py-4 border border-slate-700/50'>
								<div className='flex items-center space-x-2 text-cyan-400'>
									<div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></div>
									<span className='text-sm font-medium'>New Reviews</span>
								</div>
								<div className='flex items-center space-x-2 text-purple-400'>
									<div className='w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200'></div>
									<span className='text-sm font-medium'>Build Guides</span>
								</div>
								<div className='flex items-center space-x-2 text-pink-400'>
									<div className='w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400'></div>
									<span className='text-sm font-medium'>MOC Showcases</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS анимации */}
			<style jsx>{`
				@keyframes float-slow {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-25px) rotate(5deg); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-slow {
					animation: float-slow 8s ease-in-out infinite;
				}
				.animate-twinkle {
					animation: twinkle 3s ease-in-out infinite;
				}
			`}</style>
		</section>
	)
}
