import { useCallback } from "react";
import "regenerator-runtime/runtime";


export const useBlogsActions = () => {
    const createOneBlog = useCallback(async ({ headline, articleBody }) => {
        const endpoint = "/o/headless-delivery/v1.0/sites/20117/blog-postings/";
        const requestData = {
            headline,
            articleBody
        };

        await Liferay.Util.fetch(`${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
    }, []);

    return {
        createOneBlog
    };
};