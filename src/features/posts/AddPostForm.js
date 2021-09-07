import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'
import { postAdded } from './postsSlice'

export const AddPostForm = ({ match }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const divStyle = {
        margin: '0 5px 0 0'
    }

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle('')
            setContent('')
        }
    }

    const onCancel = () => {
        history.push('/')
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button type="button" onClick={onSavePostClicked} style={divStyle}>Save Post</button>
                <button type="button" onClick={onCancel} style={divStyle}>Cancel</button>
            </form>
        </section>
    )
}
