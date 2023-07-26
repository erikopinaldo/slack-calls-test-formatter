import { useState } from "react"

export default function TextInput({ content, handleChange }) {
    return (
        <section>
            <form>
                <label className="inline-block my-4 font-bold">Input:</label>
                <textarea
                    value={content.content}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Enter call test results"
                    className="min-w-full p-4 border border-gray-800 rounded"
                />
            </form>
        </section>
    )
}