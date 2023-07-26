import { useState } from "react";

export default function FormattedOutput({ content }) {
    const [isCopied, setIsCopied] = useState(false)

    const formattedText = content.replaceAll(/[;,]/g, '\n')

    function handleCopyClick() {
        navigator.clipboard.writeText(formattedText)
        setIsCopied(true)
    }

    return (
        <section>
            <h2 className="my-4 font-bold">Output:</h2>
            <div className="bg-gray-200 p-4">
                <pre className="whitespace-pre-line">{formattedText}</pre>
            </div>

            <button className="bg-green-500 rounded py-2 px-4 my-6 text-white font-bold" onClick={() => handleCopyClick()}>{isCopied ? 'Copied!' : 'Copy results'}</button>
        </section>
    )
}