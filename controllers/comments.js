const { prisma } = require('../prisma/prisma-client');

const all = async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();

        res.status(200).json(comments);
    } catch {
        res.status(500).json({ message: `Couldn't get all comments` })
    }
}

const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.comment) {
            return res.status(400).json({ message: 'Leave a comment' })
        }

        const comment = await prisma.comment.create({
            data: {
                ...data,
                userId: req.user.id
            }
        });
        return res.status(201).json(comment);
    } catch {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const remove = async (req, res) => {
    const { id } = req.body;
    try {
        await prisma.comment.delete({
            where: {
                id
            }
        });
        res.status(204).json('Comment successfully deleted')
    } catch {
        res.status(500).json({ message: `Couldn't delete comment` });
    }
}

const comment = async (req, res) => {
    const { id } = req.params; 
    try {
        const comment = await prisma.comment.findUnique({
            where: {
                id,
            },
        });

        res.status(200).json(comment);
    } catch {
        res.status(500).json({ message: `Couldn't get a comment` });
    }
};

module.exports = {
    all,
    add,
    remove,
    comment
}