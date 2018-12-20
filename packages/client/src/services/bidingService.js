const bidList = [{
    id:1,
    projectId:1,
    userId:'1',
    price:'100'
},
{
    id:2,
    projectId:1,
    userId:'2',
    price:'105'
},
{
    id:3,
    projectId:1,
    userId:'5',
    price:'40'
},
{
    id:4,
    projectId:2,
    userId:'2',
    price:'60'
}]
    

export function getPrice(proId){
    console.log(proId,bidList.length)
    if (proId) {
        let filteredBidList = bidList.filter((bid) =>{
            return (bid.projectId === parseInt(proId))
        })

        console.log(filteredBidList);
        if (filteredBidList.length > 0) {
            let winingBid = Math.min.apply(Math, filteredBidList.map(function(o) { return o.price; }))
            return winingBid
        } else {
            return '0';
        }
    } else{
        return '0';
    }
}

export function getPriceObj(proId){
    if (proId) {
        let filteredBidList = bidList.filter((bid) =>{
            return (bid.projectId === parseInt(proId))
        })
        if (filteredBidList.length > 0) {
            let winner = Math.min.apply(Math, filteredBidList.map(function(o) { return o.price; }))
             if (filteredBidList.find(bid => bid.price === winner.toString())){
                return filteredBidList.find(bid => bid.price === winner.toString())
             } else{
                 return {}
             }
        } else {
            return {}
        }
    } else{
        return {}
    }
}

export function addBid(price,userId,projectId){
    if(price && userId && projectId){
        const bid ={}
        bid.id = bidList.length + 1 ;
        bid.price = price;
        bid.userId = userId;
        bid.projectId = projectId;
        bidList.push(bid)
        return bid;
    } else {
        return null;
    }
}