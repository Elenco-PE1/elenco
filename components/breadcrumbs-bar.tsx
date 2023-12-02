import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export const BreadcrumbsBar = ({currentFolder, currentFile}: {currentFolder: number, currentFile: number}) => {
    const navigation = [
        {
            title: "Team Documentation "+(currentFolder+1),
            url: '/',
        },
        {
            title: "Document "+(currentFile+1),
            url: '/',
        },
    ]

    return (
        <div className="pb-3 pt-[2px] flex items-center gap-3 sticky top-0">
            <div className="flex items-center">
                <ChevronLeftIcon width={18} className="stroke-[3px] hover:cursor-pointer hover:stroke-muted stroke-muted-foreground" />
                <ChevronRightIcon width={18} className="stroke-[3px] hover:cursor-pointer hover:stroke-muted stroke-muted-foreground" />
            </div>
            <div className="flex items-center">
			{navigation.map(({ title, url }, id) => (
				<div className="flex gap-1 mr-1" key={id}>
					<Link
						href={`${url}`}
						className="text-sm text-muted-foreground hover:text-accent font-[500] capitalize"
					>
						{title}
					</Link>
					{navigation.length > 1 && id != navigation.length - 1 && (
						<ChevronRightIcon width={14} className="stroke-muted-foreground stroke-[3px]" />
					)}
				</div >
			))}
            </div>
        </div>
    )
}