"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export function Example() {
	const {
		data: todo,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["todo"],
		async queryFn() {
			const res = await api.get(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			return res.data;
		},
		initialData: {},
	});

	return (
		<div className="my-10">
			<h1>Example Component</h1>

			{isLoading && <p>Loading...</p>}
			{isError && <p>Error</p>}

			{todo.title && <p>Todo: {JSON.stringify(todo)}</p>}
		</div>
	);
}
