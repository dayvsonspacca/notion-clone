import React from "react";
import Notion from "./notion";

type NotionsProps = {
    data: Array<{
        id: number,
        title: string,
        url?: string,
    }>,
}

function Notions(props: NotionsProps) {

    return (
        <div className="w-full flex flex-col items-center mt-10">
            {props.data.map((notion) => (<Notion title={notion.title} url={notion.url + '/' + notion.id} />))}
            {props.data.length < 5 ?
                <a className="bg-darklight hover:bg-dark 
                               w-5/6 max-w-full overflow-hidden 
                               rounded my-2 text-white p-2
                               flex justify-center items-center"
                    href="/new"><i className="fa fa-plus"></i></a> : ''}
        </div>
    );
}

export default Notions;