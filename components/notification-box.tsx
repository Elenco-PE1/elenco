"use client";
import { useRef } from "react";

export const NotificationBox: React.FC<{
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isVisible, setIsVisible }) => {
	const notifButtonRef = useRef(null);

	return (
		<div>
			N
		</div>
	);
};
