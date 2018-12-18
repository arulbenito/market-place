const express = require ('express');
const app = express();

const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

const projectList = [
    {   ProjectId:1,
        ProjectTitle: "Logo design required",
        ProjectDescription: "We need to have logo redesigned for our brand which is more modern",
        ProjectImage: "",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$1000",
        ProjectBidEndDateTime: "Wed Dec 26 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Thu Nov 29 2018 12:11:11 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "Mark Peter",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "0",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:2,
        ProjectTitle: "Need to make our website responsive",
        ProjectDescription: "With less budget and quick turnaound we need to make our website responsive",
        ProjectImage: "",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$15000",
        ProjectBidEndDateTime: "Tue Dec 25 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Mon Dec 17 2018 19:21:14 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "Russel Stains",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "5",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:3,
        ProjectTitle: "Data Entry",
        ProjectDescription: "Sequence of automated jobs and manual entry works to be done to port our data from old system to new system",
        ProjectImage: "",
        ProjectBidType: "Hourly",
        ProjectBidRate: "$15/hr",
        ProjectBidEndDateTime: "Mon Dec 24 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Sat Dec 15 2018 15:22:16 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "Graham Brakebush",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "3",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:4,
        ProjectTitle: "Web application development",
        ProjectDescription: "We need to built a web application for our unique business needs",
        ProjectImage: "",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$17500",
        ProjectBidEndDateTime: "Thu Dec 27 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Fri Dec 14 2018 13:11:12 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "Flint Drake",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "50",
        ProjectTags: "web cms authoring application developer",
        ProjectLabel: ""
    },
    {   ProjectId:5,
        ProjectTitle: "Production Support",
        ProjectDescription: "We need to someone on routine to provide production support to our systems",
        ProjectImage: "",
        ProjectBidType: "Hourly",
        ProjectBidRate: "$65/hr",
        ProjectBidEndDateTime: "",
        ProjectBidEndDateTime: "Sun Dec 30 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Thu Nov 29 2018 12:11:11 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "John Sha",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "33",
        ProjectTags: "on-call, SDLC, Engneering",
        ProjectLabel: ""
    },    
    {   ProjectId:6,
        ProjectTitle: "Proof Reading",
        ProjectDescription: "Need proof reader of our editing unit",
        ProjectImage: "",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$500",
        ProjectPostedon: "Sat Dec 22 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Sun Dec 16 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "Lin chang",
        ProjectPostedBy: "",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "23",
        ProjectTags: "editing publishing printing books",
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

app.get('/api/search/:id',(req,res)=>{
    const project = projectList.find( project => project.ProjectId === parseInt(req.params.id));
    if (!project){
        res.status(404).send('Project with the given Id does not exist' + parseInt(req.params.id))
    }else{
        res.send(project);
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
