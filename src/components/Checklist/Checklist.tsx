import { FunctionComponent, useEffect, useState } from 'react';
import { H5 } from '../Headers';

interface ChecklistItemProps {
	label: string;
	isChecked: boolean;
	tags?: string[];
	description?: string;
	owner?: string;
}

export interface ChecklistProps {
	items: ChecklistItemProps[];
	tags: string[];
}

const ChecklistItem: FunctionComponent<ChecklistItemProps> = ({ isChecked, label, description, owner, tags }) => {
	const [checked, setChecked] = useState(isChecked);

	useEffect(() => {
		isChecked = checked;
	}, [checked]);
	return (
		<div className="flex md:flex-row flex-col py-4">
			<div className="flex flex-row flex-1">
				<input
					type="checkbox"
					className="h-6 w-6 mr-4 mt-1 rounded-md checked:bg-blue-600 checked:border-transparent dark:border-transparent text-current text-indigo-600 dark:bg-gray-800"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<div>
					<H5>{label}</H5>
					{description && <p className="text-gray-600">{description}</p>}
					<div className="flex flex-row justify-between items-center">
						{owner && <div className="text-sm text-gray-400 italic mt-1">Checked by: {owner}</div>}
					</div>
				</div>
			</div>
			<div className="ml-10 mt-1 md:ml-0">
				{tags.map((tag, i) => (
					<span
						key={i}
						className="bg-gray-200 dark:bg-gray-800 text-indigo-500 dark:text-indigo-300  rounded-full text-xs font-bold uppercase px-2 py-1">
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export const Checklist: FunctionComponent<ChecklistProps> = ({ items }) => {
	return (
		<div>
			{items.map((item, i) => (
				<ChecklistItem
					key={i}
					label={item.label}
					isChecked={item.isChecked}
					description={item.description}
					owner={item.owner}
					tags={item.tags}
				/>
			))}
		</div>
	);
};
