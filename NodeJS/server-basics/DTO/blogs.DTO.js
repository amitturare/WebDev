export class BlogsDto {
    title;
    snippet;
    body;

    constructor(data) {
        this.title = data.title.exists().isString().notEmpty();
        this.snippet = data.snippet.exists().isString().notEmpty();
        this.body = data.body.exists().isString().notEmpty();
    }
}
