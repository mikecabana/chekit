import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';

export const Footer: FunctionComponent<any> = ({}) => {
	const date = new Date().getFullYear();
	return (
		<div className="relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<footer className="flex justify-between items-center border-t-2 border-gray-100 dark:border-gray-800 py-6 md:justify-start md:space-x-10">
					<div className="flex-1">
						<p className="text-center text-xs font-medium text-gray-500">MC © {date} </p>
					</div>
				</footer>
			</div>
		</div>
	);
};
