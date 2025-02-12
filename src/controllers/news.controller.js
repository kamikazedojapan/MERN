import {createService, findAllService, countNews} from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !text || !banner) {
            return res.status(400).send({ message: "Submit all fields for registration" });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId
        });

        res.status(201).send({ message: "News created successfully" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        let {limit = 5, offset = 0} = req.query;
        
        limit = parseInt(limit);
        offset = parseInt(offset);
    
        if (isNaN(limit) || limit <= 0) limit = 5;
        if (isNaN(offset) || offset < 0) offset = 0;

        
        const news = await findAllService(offset, limit);
        const total = await countNews();
        const currentUrl = req.baseUrl;
        
        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?=limit${limit}&offset=${offset}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?=limit${limit}&offset=${previous}` : null;

        if (news.length === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }
        
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { create, findAll }