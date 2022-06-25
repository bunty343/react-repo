import Link from "./Link"

const LinkContainer = () => {

    const links = [
        {
            id: 1,
            href: "https://reactjs.org",
            content: "Learn React"
        },
        {
            id: 2,
            href: "https://youtube.com",
            content: "Go To Youtube"
        },
        {
            id: 3,
            href: "https://google.com",
            content: "Go To Google"
        },
        {
            id: 4,
            href: "https://apple.com",
            content: "Go To apple"
        },
        {
            id: 5,
            href: "https://amazon.com",
            content: "Go To amazon"
        }
    ]


    return (
        <ul>
            {links.map(({id, href, content}) => {
                return (
                    <li key={id}>
                        <Link href={href}>{content}</Link>
                        <br />
                    </li>    
                )
            })}
        </ul>
    )
}

export default LinkContainer
