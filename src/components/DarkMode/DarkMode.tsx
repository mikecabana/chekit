import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			{!theme || theme !== 'dark' ? (
				<button
					onClick={() => setTheme('dark')}
					className="w-8 h-8 text-gray-500 p-2 rounded-full hover:bg-gray-100 hover:text-gray-900">
					<MoonIcon />
				</button>
			) : (
				<button
					onClick={() => setTheme('light')}
					className="w-8 h-8 text-gray-500 p-2 rounded-full hover:bg-gray-700 hover:text-yellow-400">
					<SunIcon />
				</button>
			)}
		</div>
	);
};
