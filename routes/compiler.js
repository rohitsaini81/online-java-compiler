import express from "express"
const router = express.Router();
import fs from 'fs'
import {spawnSync} from 'child_process'



router.get('/',(req,res)=>{
    res.status(400).redirect('/main')
})
router.post('/compile/code',async(req,res)=>{
    const data = atob(req.body.codeobject);
    console.log(data)
    try {
        await fs.writeFileSync('compile.java',data);
        var child = await spawnSync("java",["compile.java"]);
        console.log(child.output.toString())
        res.send(child.output.toString())

        
    } catch (error) {
        // console.log(error);
        res.send("error").status(404);
    }


    // console.log(data)
})

router.get('/compile/run',async(req,res)=>{
    try {
        var child = await spawnSync("java",["compile.java"]);
        console.log(child.output.toString())
       res.send(child.output.toString())
    }catch(error){
        // console.log(error)
        res.send("err while running program ").status(405)
    }

})

export default router;