import Link from "next/link"

const Footer = () => {
    return (
        <div className='-full flex justify-end p-2'>
            <Link
                href="https://github.com/jbunds801" target="_blank" rel="noopener noreferrer"
                className='text-xs flex font-extralight text-pink-cstm/75 glow-pink justify-end px-4 pb-2'
            >
                GitHub
            </Link>
            <Link
                href="https://https://www.linkedin.com/in/jessica-bundy-46a753a9/" target="_blank" rel="noopener noreferrer"
                className='text-xs font-extralight text-cyan-cstm/75 glow-cyan px-4 pb-2'
            >
                LinkedIn
            </Link>
            <p className='text-xs font-extralight text-current/75 px-4 pb-2'>© Jessica Bundy 2026</p>
        </div>
    )
}

export default Footer