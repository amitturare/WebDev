const paginate = (followers) => {
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

    const ArrOfArr = Array.from({ length: numberOfPages }, (_, i) => {
        const start = i * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    });
    return ArrOfArr;
};

export default paginate;
