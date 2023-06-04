import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
    if (req.method === 'DELETE') {
        const { fileName } = req.query;
        const dir = "./public/db";

        try {
            const filePath = path.join(process.cwd(), `${dir}/${fileName}.json`);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the task' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
