const { prisma } = require('../prisma/prisma-client');

const all = async (req, res) => {
    try {
        const emploees = await prisma.emploee.findMany();

        res.status(200).json(emploees);
    } catch {
        res.status(500).json({ message: `Couldn't get all employees` })
    }
}

const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.comment) {
            return res.status(400).json({ message: 'Leave a comment' })
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        });
        return res.status(201).json(employee);
    } catch {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const remove = async (req, res) => {
    const  { id } = req.body;
    try {
        await prisma.employee.delete({
            where: {
                id
            }
        });
        res.status(204).json('Comment successfully deleted')
    } catch {
        res.status(500).json({ message: `Couldn't delete comment` });
    }
}

module.exports = {
    all,
    add,
    remove
}