"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { TRANSFORMERS } from '@lexical/markdown';
import { HashtagNode } from '@lexical/hashtag'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';

import exampleTheme from "./themes";

const editorConfig = {
	namespace: "MyEditor",
	// The editor theme
	theme: exampleTheme,
	// Handling of errors during update
	onError(error: any) {
		throw error;
	},
	nodes: [
		HeadingNode,
		ListNode,
		ListItemNode,
		QuoteNode,
		CodeNode,
		CodeHighlightNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		AutoLinkNode,
    	HashtagNode,
		LinkNode,
	],
};

export const Editor = () => {
	return (
		<LexicalComposer initialConfig={editorConfig}>
			<RichTextPlugin
				contentEditable={
					<ContentEditable
						spellCheck
            			tabIndex={4}
						className="mx-6 p-4 border-none font-[200] overflow-y-scroll outline-none focus:outline-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-md"
						style={{ width: "1220px", height: "550px" }}
					/>
				}
				placeholder={<div className="absolute top-[82px] left-10 text-muted-foreground font-semibold tracking-wide">Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin />
			<HistoryPlugin />
			<AutoFocusPlugin />
			<ListPlugin />
			<LinkPlugin />
      		<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
		</LexicalComposer>
	);
};
