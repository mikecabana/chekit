import { FunctionComponent } from 'react';

export interface ChecklistTableProps {
    items: any[];
}

const ChecklistItem: FunctionComponent = () => {
    return <></>;
};

export const ChecklistTable: FunctionComponent<ChecklistTableProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li></li>
            ))}
        </ul>
    );
};
