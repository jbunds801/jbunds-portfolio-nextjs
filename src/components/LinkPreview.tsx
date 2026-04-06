import Link from "next/link";

interface LinkPreviewProps {
    url: string;
    title?: string;
}

function LinkPreview({ url, title }: LinkPreviewProps) {
    return (
        <Link
            href={url}
            target="_blank"
            className="w-full h-full cursor-pointer flex items-center justify-center rounded-3xl overflow-hidden"
        >
            <div className="h-full w-full pointer-events-none">
                <iframe
                    src={url}
                    title={title || "Website Preview"}
                    className="w-full h-full border-0 pointer-events-none iframe-preview"
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                />
            </div>
        </Link>
    );
}

export default LinkPreview;