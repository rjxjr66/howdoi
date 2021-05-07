// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cp from 'child_process';

export default (req, res) => {
    console.log(`howdoi ${req.body.text} ${req.body.lang}`)
    res.status(200).json(cp.execSync(`howdoi ${req.body.text} ${req.body.lang}`));
}