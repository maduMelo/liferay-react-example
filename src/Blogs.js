import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import { useBlogs } from './requests/useBlogsData';
import { useBlogsActions } from './requests/useBlogsActions';
import { useForm } from './hooks/useForm';


function Blogs() {
    const { formData, handleInputChange } = useForm({
        headline: "",
        articleBody: ""
    });
	const { blogs, getAllBlogs } = useBlogs();
	const { createOneBlog } = useBlogsActions();

    const handleCreateBlog = async () => {
        await createOneBlog({
            headline: formData.headline,
            articleBody: formData.articleBody
        });

        getAllBlogs();
    };

	return (
		<div>
			<header>
                <h1>Blogs</h1>
            </header>

            <div style={{ display: 'flex' }}>
                <form>
                    <h3>Add a new blog</h3>

                    <ClayForm.Group>
                        <label htmlFor="headline">Headline</label>

                        <ClayInput
                            id="headline"
                            name="headline"
                            onChange={handleInputChange}
                            placeholder="headline"
                            type="text"
                            value={formData.headline}
                        />
                    </ClayForm.Group>

                    <ClayForm.Group>
                        <label htmlFor="articleBody">Description</label>

                        <ClayInput
                            id="articleBody"
                            name="articleBody"
                            onChange={handleInputChange}
                            type="textarea"
                            value={formData.articleBody}
                            rows={4}
                        />
                    </ClayForm.Group>

                    <button className="btn btn-primary" type='button' onClick={handleCreateBlog}>Create blog</button>
                </form>


                <section>
                    <h3>Your blogs</h3>

                    <div>
                        {blogs.map((blogItem, index) => (
                            <div key={`blog-component-${index}`}>
                                <header>{blogItem.headline}</header>
                                <p>{blogItem.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
		</div>
	);
}

export default Blogs;