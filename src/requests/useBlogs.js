import { useCallback, useState } from "react";
import "regenerator-runtime/runtime";


export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getAllBlogs = useCallback(async () => {
        const endpoint = "/o/headless-delivery/v1.0/sites/20117/blog-postings/";

        const response = await Liferay.Util.fetch(`${endpoint}`, {
            method: "GET"
        });

        setBlogs(response);

    }, []);

    return {
        getAllBlogs,
        blogs
    };
};