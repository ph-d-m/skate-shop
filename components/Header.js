

export default function Header({children}) {
    return (
        <section className="h-auto grid place-items-center pt-5 pb-10 bg-black overflow-x-hidden">
            {children}
        </section>
    )
}