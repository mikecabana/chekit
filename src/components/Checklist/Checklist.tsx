import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { H5 } from '../Headers';

import _ from 'lodash';
import { useSession } from 'next-auth/client';

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
	const [session, loading] = useSession();

	const [checked, setChecked] = useState(isChecked);
	const [checkOwner, setCheckOwner] = useState(owner);
	const [debounceChecked, setDebounceChecked] = useState(isChecked);

	const debounce = useCallback(
		_.debounce((val: boolean) => {
			setDebounceChecked(val);
			// update request here
			console.log('update request here');
		}, 1000),
		[]
	);

	const handleCheck = (event: any) => {
		const value: boolean = event.target.checked;
		setChecked(value);
		setCheckOwner(value ? session.user.name : null);
		debounce(value);
	};

	return (
		<div className="flex flex-row mb-6">
			<input
				type="checkbox"
				className="h-6 w-6 mr-4 mt-1 rounded-md checked:bg-blue-600 checked:border-transparent dark:border-transparent text-current text-indigo-600 dark:bg-gray-800"
				checked={checked}
				onChange={handleCheck}
			/>
			<div>
				<H5>{label}</H5>
				{description && <p className="text-gray-600">{description}</p>}
				<div className="flex flex-row justify-between items-center">
					{checkOwner && <div className="text-sm text-gray-400 italic mt-1">Checked by: {checkOwner}</div>}
				</div>
				<div className="mt-2">
					{tags.map((tag, i) => (
						<span
							key={i}
							className="bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-300 rounded-full text-xs font-bold uppercase px-2 py-1">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export const Checklist: FunctionComponent<ChecklistProps> = ({ items, tags }) => {
	const handleOnFilter = (e: any, tag: string) => {
		e.preventDefault();
	};
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="col-span-2">
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
			<div className="relative">
				<div className="sticky p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
					<H5>Filter by Tags</H5>
					<div className="mt-4">
						{tags.map((tag, i) => (
							<a
								href="#"
								onClick={(e) => handleOnFilter(e, tag)}
								key={i}
								className="text-right py-1 px-3 my-1 mr-1 cursor-pointer uppercase text-md font-semibold text-indigo-500 dark:text-indigo-300 hover:bg-white dark:hover:bg-gray-900 rounded-full transition-colors">
								{tag}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
