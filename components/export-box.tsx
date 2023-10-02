import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export const ExportBox = () => {
	return (
		<Card className="h-full pb-2 rounded-none border-none">
			<CardHeader>
				<CardTitle>Export</CardTitle>
				<CardDescription>Save your files locally.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<Button variant={"outline"}>Save file</Button>
			</CardContent>
		</Card>
	);
};
