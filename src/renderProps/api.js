const data = {
    user: { name: 'Christian', surname: 'Martínez' },
    todos: [{ title: 'Play ping-pong', id: 1 }, { title: 'Go on holidays', id: 2 }]
};

export default {
    fetch: url =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(data[url]);
            }, 1000);
        })
};
