import React from 'react'
import { Container } from '../components/shared/container'

export const PrivacyPolicyPage: React.FC = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
			{/* CSS анимации - перенесены в начало */}
			<style>{`
				@keyframes float-secure {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					33% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
					66% { transform: translateY(-10px) rotate(-3deg) scale(0.95); }
				}
				@keyframes twinkle {
					0%, 100% { opacity: 0.3; transform: scale(1); }
					50% { opacity: 1; transform: scale(1.5); }
				}
				.animate-float-secure {
					animation: float-secure 10s ease-in-out infinite;
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
				
				{/* Плавающие LEGO-элементы безопасности */}
				<div className='absolute top-32 left-16 animate-float-secure'>
					<div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-2xl transform rotate-12 opacity-40'>
						<div className='absolute top-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute top-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 left-2 w-5 h-5 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-2 right-2 w-5 h-5 bg-white/40 rounded-full'></div>
						{/* Символ замка */}
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='w-6 h-6 bg-white/60 rounded border-2 border-white/80'></div>
						</div>
					</div>
				</div>
				<div className='absolute top-48 right-20 animate-float-secure delay-2000'>
					<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-2xl transform -rotate-6 opacity-40'>
						<div className='absolute top-1 left-3 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute top-1 right-3 w-4 h-4 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white/30 rounded-full'></div>
						{/* Символ щита */}
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='w-4 h-5 bg-white/60 rounded-t-full'></div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-32 left-1/4 animate-float-secure delay-4000'>
					<div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-2xl transform rotate-45 opacity-40'>
						<div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
						<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full'></div>
						{/* Символ ключа */}
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='w-2 h-4 bg-white/60 rounded-full'></div>
						</div>
					</div>
				</div>

				{/* Космические эффекты безопасности */}
				<div className='absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
			</div>

			<Container className='py-20 relative'>
				{/* LEGO-брендинг страницы */}
				<div className='flex justify-center items-center mb-12'>
					<div className='flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-blue-400/30 shadow-2xl'>
						<div className='flex space-x-2'>
							<div className='w-4 h-4 bg-blue-400 rounded-full animate-pulse'></div>
							<div className='w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-200'></div>
							<div className='w-4 h-4 bg-green-400 rounded-full animate-pulse delay-400'></div>
						</div>
						<span className='text-white/90 font-bold text-sm uppercase tracking-wider'>
							LEGO® Data Fortress
						</span>
						<div className='flex items-center space-x-1'>
							<svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
								<path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
							</svg>
							<span className='text-green-400 text-xs font-bold'>SECURED</span>
						</div>
					</div>
				</div>

				{/* Главный заголовок */}
				<div className='text-center mb-16'>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8'>
						<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-2'>
							LEGO Builder
						</span>
						<span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'>
							Privacy Shield
						</span>
					</h1>

					{/* Подзаголовок в LEGO-блоке */}
					<div className='max-w-4xl mx-auto'>
						<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-400/30'>
							{/* LEGO шипы */}
							<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full shadow-lg'></div>
								<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg'></div>
							</div>
							
							<p className='text-xl sm:text-2xl text-white/90 leading-relaxed font-medium'>
								Protecting your <strong className='text-blue-300'>building data</strong>, 
								<strong className='text-cyan-300'>creative innovations</strong>, and 
								<strong className='text-green-300'>LEGO journey</strong> is our fortress-level commitment. 
								Our advanced security protocols ensure your information remains as secure 
								as the strongest LEGO construction!
							</p>

							{/* Светящаяся граница */}
							<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full'></div>
						</div>
					</div>

					{/* Статистика безопасности */}
					<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto'>
						{[
							{ number: '256-bit', label: 'Encryption', icon: '🔐', color: 'from-blue-500 to-cyan-600' },
							{ number: '99.9%', label: 'Uptime', icon: '🛡️', color: 'from-cyan-500 to-green-600' },
							{ number: '24/7', label: 'Monitoring', icon: '👁️', color: 'from-green-500 to-emerald-600' },
							{ number: 'GDPR', label: 'Compliant', icon: '✅', color: 'from-emerald-500 to-teal-600' }
						].map((stat, index) => (
							<div key={index} className='relative group'>
								<div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-white/20`}>
									<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full'></div>
									<div className='text-2xl mb-2'>{stat.icon}</div>
									<div className='text-lg font-black text-white'>{stat.number}</div>
									<div className='text-white/80 text-sm font-medium'>{stat.label}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Основной контент */}
				<div className='relative'>
					{/* Декоративная подложка */}
					<div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-3xl transform rotate-1 scale-105 blur-sm'></div>
					
					<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-400/30'>
						{/* LEGO шипы на главном контейнере */}
						<div className='absolute -top-4 left-12 flex space-x-4'>
							<div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-xl'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full shadow-xl'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl'></div>
							<div className='w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-xl'></div>
						</div>

						{/* Заголовок контейнера */}
						<div className='text-center mb-12'>
							<div className='inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl px-8 py-4 border border-blue-300/30'>
								<div className='w-4 h-4 bg-blue-400 rounded-full animate-pulse'></div>
								<h2 className='text-2xl font-bold text-white'>Builder Data Protection Protocol</h2>
								<div className='w-4 h-4 bg-green-400 rounded-full animate-pulse delay-500'></div>
							</div>
						</div>

						{/* Контент политики */}
						<div className='space-y-8'>
							{/* Каждый параграф в отдельном LEGO-блоке */}
							{[
								{
									title: "Your LEGO Journey Privacy Matters",
									content: "Your privacy as a LEGO builder is paramount to us. This Privacy Shield explains how we collect, use, protect, and safeguard your building data, creative innovations, and personal information when you explore our LEGO universe.",
									color: "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
									chipColor: "from-blue-500 to-cyan-500"
								},
								{
									title: "Building Data Collection Methods",
									content: "We collect information about your LEGO journey in various ways, including building preferences you share directly, set reviews you submit, and construction data collected automatically through your interaction with our expert content and community features.",
									color: "from-cyan-500/20 to-green-500/20 border-cyan-400/30",
									chipColor: "from-cyan-500 to-green-500"
								},
								{
									title: "Creative Content Enhancement",
									content: "Your building information helps us personalize your LEGO experience, improve our set reviews and building techniques, provide expert construction advice, and enhance our brick model ideas. We never sell or rent your builder data to third parties.",
									color: "from-green-500/20 to-emerald-500/20 border-green-400/30",
									chipColor: "from-green-500 to-emerald-500"
								},
								{
									title: "Fortress-Level Security Measures",
									content: "We implement military-grade security protocols to maintain the safety of your building data and personal information. Our LEGO fortress uses advanced encryption, secure servers, and continuous monitoring. However, no digital fortress is 100% impenetrable.",
									color: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30",
									chipColor: "from-emerald-500 to-teal-500"
								},
								{
									title: "Privacy Evolution Updates",
									content: "We may update this Privacy Shield periodically to reflect enhancements to our building community practices, new LEGO features, or changes in operational, legal, or regulatory requirements. All updates maintain our commitment to protecting your builder privacy.",
									color: "from-teal-500/20 to-blue-500/20 border-teal-400/30",
									chipColor: "from-teal-500 to-blue-500"
								},
								{
									title: "Community Consent Agreement",
									content: "By joining our LEGO building community, you consent to this Privacy Shield and agree to its protective terms. Your participation helps us create a secure and inspiring environment for all master builders and creative innovators.",
									color: "from-purple-500/20 to-blue-500/20 border-purple-400/30",
									chipColor: "from-purple-500 to-blue-500"
								},
								{
									title: "Builder Data Accuracy",
									content: "We strive to keep your building preferences and personal information accurate and up-to-date. If you notice any inaccuracies in your builder profile or submitted content, please contact our support team for immediate corrections.",
									color: "from-indigo-500/20 to-purple-500/20 border-indigo-400/30",
									chipColor: "from-indigo-500 to-purple-500"
								},
								{
									title: "Third-Party LEGO Services",
									content: "Our platform may feature official LEGO content or services from authorized partners. Any information you provide to these third-party LEGO services is subject to their privacy policies, which we encourage you to review carefully.",
									color: "from-pink-500/20 to-purple-500/20 border-pink-400/30",
									chipColor: "from-pink-500 to-purple-500"
								},
								{
									title: "Young Builder Protection",
									content: "We are committed to protecting the privacy of young LEGO enthusiasts. Our services comply with COPPA regulations and are designed for builders aged 13 and above. We do not knowingly collect personal information from children under 13 without parental consent.",
									color: "from-red-500/20 to-pink-500/20 border-red-400/30",
									chipColor: "from-red-500 to-pink-500"
								}
							].map((section, index) => (
								<div key={index} className='relative group'>
									{/* Светящийся эффект */}
									<div className={`absolute -inset-2 bg-gradient-to-r ${section.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
									
									<div className={`relative bg-gradient-to-br ${section.color} backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 transform group-hover:scale-105 transition-all duration-300`}>
										{/* LEGO шипы на каждом блоке */}
										<div className='absolute -top-3 left-6 flex space-x-2'>
											<div className={`w-6 h-6 bg-gradient-to-br ${section.chipColor} rounded-full shadow-lg`}></div>
											<div className={`w-6 h-6 bg-gradient-to-br ${section.chipColor} rounded-full shadow-lg`}></div>
										</div>

										{/* Заголовок секции */}
										<div className='mb-4'>
											<div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${section.chipColor} rounded-lg px-4 py-2`}>
												<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
													<path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
												</svg>
												<h3 className='text-white font-bold text-sm'>{section.title}</h3>
											</div>
										</div>

										{/* Контент секции */}
										<p className='text-lg text-white/90 leading-relaxed'>
											{section.content}
										</p>

										{/* Декоративная нижняя линия */}
										<div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${section.chipColor} rounded-full opacity-60`}></div>

										{/* Эффект блеска */}
										<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl'></div>
									</div>
								</div>
							))}
						</div>

						{/* Нижняя контактная информация */}
						<div className='mt-12 text-center'>
							<div className='relative'>
								<div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-green-400/30'>
									{/* LEGO шипы на контактной панели */}
									<div className='absolute -top-3 left-8 flex space-x-3'>
										<div className='w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg'></div>
										<div className='w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg'></div>
									</div>

									<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8'>
										<div className='flex items-center space-x-2 text-green-400'>
											<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
												<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
											</svg>
											<span className='font-medium'>privacy@legobuilders.com</span>
										</div>
										<div className='flex items-center space-x-2 text-blue-400'>
											<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
												<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
											</svg>
											<span className='font-medium'>24/7 Privacy Support</span>
										</div>
										<div className='flex items-center space-x-2 text-purple-400'>
											<div className='w-2 h-2 bg-purple-400 rounded-full animate-ping'></div>
											<span className='font-medium'>Last Updated: June 2025</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Светящаяся граница контейнера */}
						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full'></div>
					</div>
				</div>
			</Container>
		</div>
	)
}
