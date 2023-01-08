import Link from "next/link"

export default function AnotherPage() {
    return (
        <>
            <div>This is /anotherpage</div>
            <div><Link href="/">Back to <code>/index</code></Link></div>
        </>
    )
}