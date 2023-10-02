import { BreadcrumbsBar } from "@/components/breadcrumbs-bar";
import { Editor } from "@/components/editor";
import { FileExplorer } from "@/components/file-explorer";
import { NavigationBar } from "@/components/navigation-bar";
import { SideNavigationBar } from "@/components/side-navigation-bar";

export default function Home() {
	return (
		<main className="bg-foreground text-secondary h-screen w-screen flex flex-col">
			<SideNavigationBar />
			<NavigationBar />
			<FileExplorer />
			<div className="absolute left-[260px] top-[64px] w-auto h-auto">
				<BreadcrumbsBar />
				<Editor />
			</div>
		</main>
	);
}
