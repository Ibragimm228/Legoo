import { cn } from '@/lib/utils'
import { Link } from 'react-router'

export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
	return (
		<Link to='/' className='flex items-center gap-3 no-underline group'>
			{/* LEGO кирпичик */}
			<div className='relative'>
				{/* Светящийся эффект */}
				<div className='absolute -inset-2 bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur'></div>
				
				{/* Основной LEGO блок */}
				<div className='relative bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300 w-10 h-10 border-2 border-red-400/50'>
					{/* LEGO шипы */}
					<div className='absolute -top-2 left-1 flex space-x-1'>
						<div className='w-3 h-3 bg-white/40 rounded-full shadow-lg'></div>
						<div className='w-3 h-3 bg-white/40 rounded-full shadow-lg'></div>
					</div>
					<div className='absolute -top-2 left-1 mt-4 flex space-x-1'>
						<div className='w-3 h-3 bg-white/40 rounded-full shadow-lg'></div>
						<div className='w-3 h-3 bg-white/40 rounded-full shadow-lg'></div>
					</div>

					{/* Центральная иконка */}
					<div className='absolute inset-0 flex items-center justify-center'>
						<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
							<path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z' />
						</svg>
					</div>

					{/* Анимированный блеск */}
					<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl'></div>
				</div>
			</div>

			{/* LEGO текст */}
			<div className='relative'>
				{/* Декоративная подложка */}
				<div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-yellow-500/10 to-green-500/10 rounded-xl transform rotate-1 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
				
				<div className='relative'>
					{/* Главный текст */}
					<div className='flex flex-col'>
						<span className={cn(
							'text-xl font-black leading-tight tracking-tight',
							variant === 'dark' 
								? 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600' 
								: 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400'
						)}>
							LEGO
						</span>
						<span className={cn(
							'text-sm font-bold leading-tight tracking-wide',
							variant === 'dark' 
								? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-purple-600' 
								: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400'
						)}>
							BUILDERS
						</span>
					</div>

					{/* Подпись */}
					<div className={cn(
						'text-xs font-medium mt-1 transition-opacity duration-300',
						variant === 'dark' ? 'text-gray-600' : 'text-white/70',
						'opacity-0 group-hover:opacity-100'
					)}>
						Expert Hub
					</div>
				</div>

				{/* Декоративные LEGO точки */}
				<div className='absolute -top-1 -right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<div className={cn(
						'w-1 h-1 rounded-full animate-pulse',
						variant === 'dark' ? 'bg-red-500' : 'bg-red-400'
					)}></div>
					<div className={cn(
						'w-1 h-1 rounded-full animate-pulse delay-100',
						variant === 'dark' ? 'bg-yellow-500' : 'bg-yellow-400'
					)}></div>
					<div className={cn(
						'w-1 h-1 rounded-full animate-pulse delay-200',
						variant === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
					)}></div>
				</div>
			</div>

			{/* Дополнительные LEGO элементы */}
			<div className='absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
				<div className='w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded shadow transform rotate-45'>
					<div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/40 rounded-full'></div>
				</div>
			</div>
		</Link>
	)
}
