const express = require ('express');
const app = express();

const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

const projectList = [
    {   ProjectId:1,
        ProjectTitle: "Logo design required",
        ProjectDescription: "We need to have logo redesigned for our brand which is more modern",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:2,
        ProjectTitle: "Need to make our website responsive",
        ProjectDescription: "With less budget and quick turnaound we need to make our website responsive",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:3,
        ProjectTitle: "Data Entry",
        ProjectDescription: "Sequence of automated jobs and manual entry works to be done to port our data from old system to new system",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:4,
        ProjectTitle: "Web application development",
        ProjectDescription: "We need to built a web application for our unique business needs",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:5,
        ProjectTitle: "Production Support",
        ProjectDescription: "We need to someone on routine to provide production support to our systems",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "on-call",
        ProjectLabel: ""
    },    
    {   ProjectId:6,
        ProjectTitle: "Proof Reading",
        ProjectDescription: "Need proof reader of our editing unit",
        ProjectImage: "",
        ProjectBidType: "",
        ProjectBidEndDateTime: "",
        ProjectPostedon: "",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "",
        ProjectTags: "editing",
        ProjectLabel: ""
    }
    ]

app.get('/', (req,res) => {
    res.send('Hello World 1')
});

app.get('/api/search',(req,res)=>{
    let keyword = req.query.keyword || '';
    if (keyword){
        let filteredProjectList = projectList.filter((project) =>{
            return (project.ProjectTitle.toLowerCase().includes(keyword.toLowerCase()) ||
            project.ProjectLabel.toLowerCase().includes(keyword.toLowerCase()) ||
            project.ProjectTags.toLowerCase().includes(keyword.toLowerCase()) )
        })
        res.json({projects:filteredProjectList})
    } else{
        res.json({projects:projectList})
    }
});

if (isInLambda){
    const serverlessExpress = require('aws-serverless-express');
    const server = serverlessExpress.createServer(app);
    exports.main = (event,context) => serverlessExpress.proxy(server,event,context)
}else{
    app.listen(5000,()=>{
        console.log("Listening on Port 5000");    
    })
}
