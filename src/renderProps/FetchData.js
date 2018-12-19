import { useState, useEffect } from 'react';
import api from './api';

function FetchData({ render, url }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(
        async () => {
            setLoading(true);
            const data = await api.fetch(url);
            setData(data);
            setLoading(false);
        },
        [url]
    );

    return render ? render({ loading, data }) : null;
}

export default FetchData;
