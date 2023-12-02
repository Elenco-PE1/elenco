"use client";

import { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './editortool';
import { ScrollArea } from './ui/scroll-area';

const Editor = () => {
    const [isMounted, setIsMounted] = useState(true)
    const ref = useRef<EditorJS | null>(null);

    const initializeEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        if(!ref.current) {
            const editor = new EditorJS({
                holder: "editorjs",
                onReady: () => {
                    ref.current = editor;
                },
                autofocus: true,
                tools: EDITOR_TOOLS,
            });
            ref.current = editor;
        }
    }

    useEffect(() => {
        if (ref.current === null) {
            initializeEditor();
        }
        return () => {
            ref?.current?.destroy();
            ref.current = null;
        }
    }, []);
    
    return (
		<ScrollArea className='max-h-full h-full'>
        	<div id="editorjs" className='prose max-w-full h-full max-h-full'></div>
		</ScrollArea>
    )
}

export default Editor