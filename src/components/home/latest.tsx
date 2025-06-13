import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'
import ArticleCardMediumSkeleton from '../shared/article-card/article-card-medium-skeleton'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className='relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'>
			{/* Декоративный LEGO-фон */}
			<div className='absolute inset-0 pointer-events-none'>
				{/* Большие декоративные блоки */}
				<div className='absolute top-20 left-12 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl opacity-20 transform rotate-12'></div>
				<div className='absolute top-60 right-16 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl opacity-20 transform -rotate-6'></div>
				<div className='absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-xl opacity-20 transform rotate-45'></div>
				
				{/* Паттерн из LEGO-кирпичиков */}
				<div className='absolute inset-0 opacity-5'>
					<div className='w-full h-full' 
						 style={{
							 backgroundImage: `radial-gradient(circle at 30px 30px, #059669 3px, transparent 3px)`,
							 backgroundSize: '60px 60px'
						 }}>
					</div>
				</div>
			</div>

			{/* Плавающие LEGO-элементы */}
			<div className='absolute top-32 left-20'>
				<div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl transform rotate-12 opacity-60'>
					<div className='absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-2 right-2 w-4 h-4 bg-white/40 rounded-full'></div>
				</div>
			</div>
			<div className='absolute top-48 right-24'>
				<div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-xl transform -rotate-6 opacity-60'>
					<div className='absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute top-1 right-2 w-3 h-3 bg-white/40 rounded-full'></div>
					<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Заголовочная секция */}
				<div className='text-center mb-20'>
					{/* LEGO-индикатор новизны */}
					<div className='flex justify-center items-center mb-8'>
						<div className='flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-emerald-200/50'>
							<div className='flex space-x-2'>
								<div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
								<div className='w-3 h-3 bg-teal-500 rounded-full'></div>
								<div className='w-3 h-3 bg-cyan-500 rounded-full'></div>
							</div>
							<span className='text-emerald-700 font-bold text-sm uppercase tracking-wider'>
								Fresh LEGO® Content
							</span>
							<div className='w-2 h-2 bg-red-500 rounded-full'></div>
						</div>
					</div>

					{/* Главный заголовок */}
					<div className='relative mb-8'>
						<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-tight'>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-2'>
								Latest LEGO
							</span>
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'>
								Innovations
							</span>
						</h2>
						
						{/* Декоративные элементы */}
						<div className='absolute -top-6 -right-8 w-6 h-6 bg-emerald-400 rounded-full opacity-60'></div>
						<div className='absolute top-1/2 -left-6 w-4 h-4 bg-cyan-400 rounded-full opacity-60'></div>
					</div>

					{/* Подзаголовок в LEGO-блоке */}
					<div className='max-w-4xl mx-auto'>
						<div className='relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-l-4 border-emerald-500'>
							{/* LEGO шипы */}
							<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg'></div>
							</div>
							
							<p className='text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium'>
								Explore the newest developments in the LEGO universe! From 
								<strong className='text-emerald-600'> groundbreaking set reviews</strong> and 
								<strong className='text-teal-600'>cutting-edge building techniques</strong> to 
								<strong className='text-cyan-600'>revolutionary brick innovations</strong> and 
								<strong className='text-blue-600'>community masterpieces</strong> – 
								stay ahead of the building curve!
							</p>

							{/* Светящаяся граница */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full'></div>
						</div>
					</div>

					{/* Категории новых статей */}
					<div className='flex flex-wrap justify-center gap-4 mt-8'>
						{[
							{ label: 'New Sets', color: 'from-emerald-500 to-teal-500', icon: '🆕' },
							{ label: 'Build Guides', color: 'from-teal-500 to-cyan-500', icon: '🔧' },
							{ label: 'Reviews', color: 'from-cyan-500 to-blue-500', icon: '⭐' },
							{ label: 'Community', color: 'from-blue-500 to-purple-500', icon: '👥' }
						].map((category, index) => (
							<div key={index} className='group'>
								<div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
									<span className='text-lg'>{category.icon}</span>
									<span className='font-medium text-sm'>{category.label}</span>
									<div className='w-2 h-2 bg-white/60 rounded-full'></div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Сетка статей */}
				<div className='relative'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-emerald-100/60 via-teal-100/60 to-cyan-100/60 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
					
					<div className='relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-200/50'>
						{/* Заголовок сетки */}
						<div className='text-center mb-12'>
							<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl px-8 py-4 border border-emerald-300/30'>
								<div className='w-4 h-4 bg-emerald-500 rounded-full'></div>
								<h3 className='text-2xl font-bold text-gray-800'>Hottest Updates</h3>
								<div className='w-4 h-4 bg-cyan-500 rounded-full'></div>
							</div>
						</div>

						{/* Сетка с LEGO-стилизацией */}
						<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
							{isLoading ? (
								<>
									{Array.from({ length: 6 }).map((_, index) => {
										const colors = [
											'from-emerald-500/20 to-teal-500/20 border-emerald-400/30',
											'from-teal-500/20 to-cyan-500/20 border-teal-400/30',
											'from-cyan-500/20 to-blue-500/20 border-cyan-400/30',
											'from-blue-500/20 to-purple-500/20 border-blue-400/30',
											'from-purple-500/20 to-pink-500/20 border-purple-400/30',
											'from-pink-500/20 to-rose-500/20 border-pink-400/30'
										]
										
										return (
											<div key={index} className='relative group'>
												<div className={`bg-gradient-to-br ${colors[index]} rounded-2xl p-6 shadow-lg border-2`}>
													{/* LEGO шипы на скелетоне */}
													<div className='absolute -top-3 left-6 flex space-x-2'>
														<div className='w-6 h-6 bg-gray-300 rounded-full shadow'></div>
														<div className='w-6 h-6 bg-gray-300 rounded-full shadow'></div>
													</div>
													
													{/* Индикатор загрузки */}
													<div className='absolute top-3 right-3'>
														<div className='w-6 h-6 bg-gray-300 rounded-lg'></div>
													</div>
													
													<ArticleCardMediumSkeleton />
												</div>
											</div>
										)
									})}
								</>
							) : (
								articles?.slice(0, 6).map((article, index) => {
									const colors = [
										'from-emerald-500/20 to-teal-500/20 border-emerald-400/30 shadow-emerald-500/20',
										'from-teal-500/20 to-cyan-500/20 border-teal-400/30 shadow-teal-500/20',
										'from-cyan-500/20 to-blue-500/20 border-cyan-400/30 shadow-cyan-500/20',
										'from-blue-500/20 to-purple-500/20 border-blue-400/30 shadow-blue-500/20',
										'from-purple-500/20 to-pink-500/20 border-purple-400/30 shadow-purple-500/20',
										'from-pink-500/20 to-rose-500/20 border-pink-400/30 shadow-pink-500/20'
									]
									const gradients = [
										'from-emerald-500 to-teal-500',
										'from-teal-500 to-cyan-500',
										'from-cyan-500 to-blue-500',
										'from-blue-500 to-purple-500',
										'from-purple-500 to-pink-500',
										'from-pink-500 to-rose-500'
									]
									
									return (
										<div key={article.id} className='relative group'>
											{/* Светящийся эффект */}
											<div className={`absolute -inset-2 bg-gradient-to-r ${colors[index].split(' ')[0]} ${colors[index].split(' ')[1]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
											
											<div className={`relative bg-gradient-to-br ${colors[index]} backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 transition-all duration-300`}>
												{/* LEGO шипы */}
												<div className='absolute -top-3 left-6 flex space-x-2'>
													<div className={`w-6 h-6 bg-gradient-to-br ${gradients[index]} rounded-full shadow-lg`}></div>
													<div className={`w-6 h-6 bg-gradient-to-br ${gradients[index]} rounded-full shadow-lg`}></div>
												</div>

												{/* Статус NEW */}
												<div className='absolute top-3 right-3'>
													<div className={`flex items-center space-x-1 bg-gradient-to-r ${gradients[index]} text-white px-2 py-1 rounded-lg text-xs font-bold`}>
														<div className='w-2 h-2 bg-white rounded-full'></div>
														<span>NEW</span>
													</div>
												</div>

												{/* Номер статьи */}
												<div className='absolute bottom-3 left-3'>
													<div className={`w-8 h-8 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center shadow-lg`}>
														<span className='text-white font-bold text-sm'>{index + 1}</span>
													</div>
												</div>

												{/* Контейнер статьи */}
												<div className='relative z-10'>
													<ArticleCardMedium article={article} />
												</div>

												{/* Декоративная линия */}
												<div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${gradients[index]} rounded-full opacity-60`}></div>
											</div>
										</div>
									)
								})
							)}
						</div>

						{/* Нижняя информационная панель */}
						<div className='mt-12 text-center'>
							<div className='inline-flex items-center space-x-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200'>
								<div className='flex items-center space-x-2 text-emerald-600'>
									<div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
									<span className='text-sm font-medium'>Latest Reviews</span>
								</div>
								<div className='flex items-center space-x-2 text-teal-600'>
									<div className='w-3 h-3 bg-teal-500 rounded-full'></div>
									<span className='text-sm font-medium'>Building Tips</span>
								</div>
								<div className='flex items-center space-x-2 text-cyan-600'>
									<div className='w-3 h-3 bg-cyan-500 rounded-full'></div>
									<span className='text-sm font-medium'>Community Builds</span>
								</div>
								<div className='flex items-center space-x-2 text-blue-600'>
									<div className='w-3 h-3 bg-blue-500 rounded-full'></div>
									<span className='text-sm font-medium'>LEGO News</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}