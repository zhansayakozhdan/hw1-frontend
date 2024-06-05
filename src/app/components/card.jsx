import Link from "next/link";

const Card = ({id, date, author, title, description}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <time dateTime={date} className="text-gray-500">
                  {date}
            </time>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>
    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    <p className="mb-3 font-semibold text-gray-900">Author: {author}</p>
    <Link href={`/posts/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
    </Link>
</div>
    )
}


export default Card;