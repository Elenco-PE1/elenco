import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const navigation = [
    {
        title: "Team Documentation 1",
        url: '/',
    },
    {
        title: "Document 1",
        url: '/',
    },
]

export const BreadcrumbsBar = () => {
    return (
        <div className="p-6 flex items-center gap-5 sticky top-0">
            <div className="flex items-center">
                <ChevronLeftIcon width={18} className="stroke-[3px] hover:cursor-pointer hover:stroke-muted stroke-muted-foreground" />
                <ChevronRightIcon width={18} className="stroke-[3px] hover:cursor-pointer hover:stroke-muted stroke-muted-foreground" />
            </div>
            <div className="flex items-center">
			{navigation.map(({ title, url }, id) => (
				<div className="flex gap-2 mr-2" key={id}>
					<Link
						href={`${url}`}
						className="text-sm text-muted-foreground hover:text-accent font-normal capitalize"
					>
						{title}
					</Link>
					{navigation.length > 1 && id != navigation.length - 1 && (
						<ChevronRightIcon width={14} className="stroke-muted-foreground" />
					)}
				</div >
			))}
            </div>
        </div>
    )
}