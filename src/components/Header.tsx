import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return (
        <div className="header">
            <div className="titre">
                <Image src="/ntc2.png" alt="ntc" width={150} height={150} />
                <h3>Nautical Training Corps</h3>
            </div>

            <div className="buttons">
                <Link href="/" className="buttons-L">Home</Link>
                <Link href="/structure" className="buttons-L">Structure</Link>
                <Link href="/division" className="buttons-L">Divisions</Link>
                <Link href="/GetInvolved" className="buttons-L">Involved</Link>
                <Link href="/history" className="buttons-L">History</Link>
                <Link href="/news" className="buttons-L">Newsletter</Link>
                <Link href="/event" className="buttons-L">Event</Link>
                <Link href="/faq" className="buttons-L">FAQ</Link>
            </div>

            <div className="search">
                <button type="submit">
                    <Image src="/search.png" alt="Search" width={24} height={24} />
                </button>
                <input type="text" maxLength={200} placeholder="Search" />
            </div>
        </div>
    )
}