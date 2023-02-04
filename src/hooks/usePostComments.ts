import { useEffect, useState } from "react";
import axios from 'axios';
import { TokenWrapper } from "../shared/TokenWrapper";

export function usePostComments(postId: string) {
    const [comments, setComments] = useState([]);
    const token = TokenWrapper()
    
    useEffect(() => {
        if (token && token.length > 0 && token !== 'undefined' && postId) {
            axios.get(`https://oauth.reddit.com/comments/${postId}`, {
                headers: { Authorization: `bearer ${token}` },
            }).then((resp) => {
                const commentsData = resp.data[1].data.children;
                setComments(commentsData);
                //console.log(commentsData)
            }).catch(console.log);

        }
    }, [token, postId])

    return [comments];
}