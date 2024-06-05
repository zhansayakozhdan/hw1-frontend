"use client";
import Card from "../components/card"
import { useState, useEffect } from "react";

export default function Posts () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data/data.json')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching the JSON:', error));
    }, []);

    return (
        <div className="bg-white py-5 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">All posts</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your startup with our expert advice.
            </p>
          </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((obj) => (
                <Card 
                    key={obj.id}
                    id={obj.id}
                    author={obj.author}
                    date={obj.date}
                    title={obj.title}
                    description={obj.description}
                />
            ))}
        </div>
        </div>
    </div>
    );
}
