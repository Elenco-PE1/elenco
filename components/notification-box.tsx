"use client";

import { useUser } from "@clerk/nextjs";
import {
	KnockFeedProvider,
	NotificationIconButton,
	NotificationFeedPopover,
	NotificationFeed,
	// @ts-ignore
} from "@knocklabs/react-notification-feed";
import { useRef } from "react";

export const NotificationBox: React.FC<{
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isVisible, setIsVisible }) => {
	const { user } = useUser();

	if (!user) return null;

	const notifButtonRef = useRef(null);

	return (
		<KnockFeedProvider
			apiKey={process.env.KNOCK_PUBLIC_API_KEY}
			feedId={process.env.KNOCK_FEED_CHANNEL_ID}
			userId={user.id}
		>
			<NotificationIconButton
				ref={notifButtonRef}
				onClick={() => setIsVisible(!isVisible)}
			/>

			<div className="popover">
				<NotificationFeedPopover
					buttonRef={notifButtonRef}
					isVisible={isVisible}
					onClose={() => setIsVisible(false)}
				/>
			</div>
		</KnockFeedProvider>
	);
};
