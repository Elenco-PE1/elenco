import { BreadcrumbsBar } from "./breadcrumbs-bar"
import { Editor } from "./editor"

export const Workspace = ({currentFolder, currentFile}: {currentFolder: number, currentFile: number}) => {
    return (
        <div className="absolute left-[260px] top-[64px] w-auto h-auto">
            <BreadcrumbsBar currentFolder={currentFolder} currentFile={currentFile}  />
            <Editor />
        </div>
    )
}