import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";

export interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useContext(tokenContext)
    //console.log(data.name)
    useEffect(() => {
		if (token && token.length > 0 && token != 'undefined') {
			axios.get('https://oauth.reddit.com/api/v1/me', {
			headers: { 'Authorization': `bearer ${token}`  },
			}).then((resp) => {
				const userData = resp.data;
				setData({ name: userData.name, iconImg: userData.icon_img.split('?')[0] });
				//console.log(data);
			})//.catch(console.log);
		} 
    }, [token])
    return [data]
}


