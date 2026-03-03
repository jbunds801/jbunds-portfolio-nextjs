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
                    className="w-full h-full border-0 pointer-events-none"
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                    style={{
                        transform: "scale(.3)",
                        transformOrigin: "center center",
                        width: "333.33%",
                        height: "333.33%",
                        marginLeft: "-116.67%",
                        marginTop: "-116.67%",
                    }}
                />
            </div>
        </Link>
    );
}

export default LinkPreview;


/* Change scale(.3) - this is your zoom percentage(.3 = 30 %, .5 = 50 %, etc.)

Calculate the other values based on scale:

width and height: 1 / scale * 100 = 333.33 % (for .3 scale)
marginLeft and marginTop: -(width - 100 %) / 2 = -116.67 % */