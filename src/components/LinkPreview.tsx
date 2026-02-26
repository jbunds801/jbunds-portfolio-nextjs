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
            className="w-full h-full cursor-pointer flex items-center justify-center border rounded-3xl overflow-hidden"
        >
            <div className="h-full w-full pointer-events-none">
                <iframe
                    src={url}
                    title={title || "Website Preview"}
                    className="w-full h-full border-0 pointer-events-none"
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                    style={{
                        transform: "scale(0.5)",
                        transformOrigin: "0 0",
                        width: "200%",
                        height: "200%",
                    }}
                />
            </div>
        </Link>
    );
}

export default LinkPreview;
