export const Blogs = {
    async getAllBlogs() {
        const endpoint = "/o/headless-delivery/v1.0/sites/20117/blog-postings/";

        return Liferay.Util.fetch(endpoint)
    },
};