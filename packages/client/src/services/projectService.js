import {getPriceObj} from '../services/bidingService'

const projectList = [
    {   ProjectId:1,
        ProjectTitle: "Logo design required",
        ProjectDescription: "We need to have logo redesigned for our brand which is more modern",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$1000",
        ProjectBidEndDateTime: "Wed Dec 26 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Thu Nov 29 2018 12:11:11 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "2",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "0",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:2,
        ProjectTitle: "Need to make our website responsive",
        ProjectDescription: "With less budget and quick turnaound we need to make our website responsive",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$15000",
        ProjectBidEndDateTime: "Tue Dec 25 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Mon Dec 17 2018 19:21:14 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "1",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "5",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:3,
        ProjectTitle: "Data Entry",
        ProjectDescription: "Sequence of automated jobs and manual entry works to be done to port our data from old system to new system",
        ProjectBidType: "Hourly",
        ProjectBidRate: "$15/hr",
        ProjectBidEndDateTime: "Mon Dec 24 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Sat Dec 15 2018 15:22:16 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "5",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "3",
        ProjectTags: "",
        ProjectLabel: ""
    },
    {   ProjectId:4,
        ProjectTitle: "Web application development",
        ProjectDescription: "We need to built a web application for our unique business needs",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$17500",
        ProjectBidEndDateTime: "Thu Dec 27 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Fri Dec 14 2018 13:11:12 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "4",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "50",
        ProjectTags: "web cms authoring application developer",
        ProjectLabel: ""
    },
    {   ProjectId:5,
        ProjectTitle: "Production Support",
        ProjectDescription: "We need to someone on routine to provide production support to our systems",
        ProjectBidType: "Hourly",
        ProjectBidRate: "$65/hr",
        ProjectBidEndDateTime: "Sun Dec 30 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Thu Nov 29 2018 12:11:11 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "3",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "33",
        ProjectTags: "on-call, SDLC, Engneering",
        ProjectLabel: ""
    },    
    {   ProjectId:6,
        ProjectTitle: "Proof Reading",
        ProjectDescription: "Need proof reader of our editing unit",
        ProjectBidType: "Fixed",
        ProjectBidRate: "$500",
        ProjectBidEndDateTime: "Sun Dec 30 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedon: "Sat Dec 22 2018 23:23:23 GMT-0800 (Pacific Standard Time)",
        ProjectPostedBy: "6",
        ProjectStatus: "",
        ProjectSkills: "",
        ProjectBidsReceived: "23",
        ProjectTags: "editing publishing printing books",
        ProjectLabel: "" 
    }
]

export function getProjects(){
    return projectList;
}

export function searchProjects(keyword){
    if (keyword){
        let filteredProjectList = projectList.filter((project) =>{
            return (project.ProjectTitle.toLowerCase().includes(keyword.toLowerCase()) ||
            project.ProjectLabel.toLowerCase().includes(keyword.toLowerCase()) ||
            project.ProjectTags.toLowerCase().includes(keyword.toLowerCase()) )
        })
        return filteredProjectList;
    } else{
        return projectList;
    }
}

export function searchWiningProjects(user){
    console.log("user" + user.id)
    if (user){
        let filteredProjectList = projectList.filter((project) =>{
            console.log('winner' + getPriceObj(project.ProjectId));
            return (getPriceObj(project.ProjectId).userId == user.id)
        })
        return filteredProjectList;
    } else{
        return [];
    }
}

export function getProject(id){
    if (id) {
        const project  = projectList.find(project => project.ProjectId === parseInt(id));;
        return project;
    } else{
        return {};
    }
}

export function addProject(project , user){
    const projectObj = {};
    projectObj.ProjectId = projectList.length + 1 ;
    projectObj.ProjectTitle = project.title;
    projectObj.ProjectDescription = project.description;
    projectObj.ProjectBidType = project.bidType;
    projectObj.ProjectBidEndDateTime = project.expiresOn;
    projectObj.ProjectPostedon = new  Date();
    projectObj.ProjectPostedBy = user.id;
    projectObj.category = project.category;
    projectObj.ProjectTags = project.tags;
    projectList.push(projectObj)
    console.log(projectObj)
}