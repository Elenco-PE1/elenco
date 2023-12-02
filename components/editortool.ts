import CheckList from "@editorjs/checklist";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";

const CloudImage = async (form_data: FormData) => {
	const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
	const cloudName = process.env.NEXT_PUBLIC_CLOUDNAME;
	try {
		const imgUpload = await fetch(
			`${cloudinary_url}/${cloudName}/image/upload`,
			{
				method: "POST",
				body: form_data,
			}
		);
		const data = await imgUpload.json();
		if (data) {
			return data.secure_url;
		}
	} catch (err) {}
};

const onFileChange = async (file: File) => {
	const form_data = new FormData();
	let preset = process.env.NEXT_PUBLIC_PRESET;
	if (preset) {
		form_data.append("upload_preset", preset);
	}
	if (file) {
		form_data.append("file", file as File);

		const imageUrl = await CloudImage(form_data);

		if (imageUrl) {
			console.log(imageUrl);
			return imageUrl;
		} else {
			return "";
		}
	}

	return "";
};

export const EDITOR_TOOLS = {
    checklist: {
		class: CheckList,
		inlineToolbar: true,
	},
	code: CodeTool,
	delimiter: Delimiter,
	embed: Embed,
	header: {
		class: Header,
		inlineToolbar: true,
		config: {
			placeholder: "Header",
		},
		shortcut: "CMD+SHIFT+H",
	},
    image: {
		class: ImageTool,
		inlineToolbar: true,
		config: {
			uploader: {
				async uploadByFile(file: File) {
					console.log(file, "file by upload");
					return onFileChange(file).then(imageUrl => {
						return {
							success: 1,
							file: {
								url: imageUrl,
							},
						};
					});
				},
			},
			inlineToolbar: true,
		},
	},
    inlineCode: {
		class: InlineCode,
		shortcut: "CMD+SHIFT+M",
	},
	linkTool: Link,
	list: {
		class: List,
		inlineToolbar: true,
		shortcut: "CMD+SHIFT+L",
	},	
	paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
	quote: {
		class: Quote,
		inlineToolbar: true,
		shortcut: "CMD+SHIFT+O",
		config: {
			quotePlaceholder: "Enter a quote",
			captionPlaceholder: "Quote's author",
		},
	},
	simpleImage: SimpleImage,
    table: {
		class: Table,
		inlineToolbar: true,
		shortcut: "CMD+ALT+T",
	},
	warning: {
		class: Warning,
		inlineToolbar: true,
		shortcut: "CMD+SHIFT+W",
		config: {
			titlePlaceholder: "Title",
			messagePlaceholder: "Message",
		},
	},
    Marker: {
		class: Marker,
		shortcut: "CMD+SHIFT+M",
	},
};
