
type NotionProps = {
    title: string;
    url?: string;
}

function Notion(props: NotionProps) {
    return (
        <a href={props.url} className="bg-dark min-h-5 hover:bg-darklight w-5/6 max-w-full overflow-hidden rounded my-2 text-white p-2 ">
            {props.title}
        </a>
    );
}

export default Notion;