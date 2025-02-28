export default function LinkItem({ url, text }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {text}
        </a>
    );
}