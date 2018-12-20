const bidList = [{
    id: 1,
    projectId: 1,
    userId: '1',
    price: '100'
},
{
    id: 2,
    projectId: 1,
    userId: '2',
    price: '105'
},
{
    id: 3,
    projectId: 1,
    userId: '5',
    price: '40'
},
{
    id: 4,
    projectId: 2,
    userId: '2',
    price: '60'
}]

function getBidList(){
    const localBidList = JSON.parse(localStorage.getItem('bidList'));
    let data = [];
    if (localBidList){
        data = [ ...localBidList];
    } else{
        data = [ ...bidList];
    }
    return data
}


export function getPrice(proId) {
    let data = getBidList();
    if (proId) {
        let filteredBidList = data.filter((bid) => {
            return (bid.projectId === parseInt(proId))
        })
        if (filteredBidList.length > 0) {
            let winingBid = Math.min.apply(Math, filteredBidList.map(function (o) { return o.price; }))
            return winingBid
        } else {
            return '0';
        }
    } else {
        return '0';
    }
}

export function getPriceObj(proId) {
    let data = getBidList();

    if (proId) {
        let filteredBidList = data.filter((bid) => {
            return (bid.projectId === parseInt(proId))
        })
        if (filteredBidList.length > 0) {
            let winner = Math.min.apply(Math, filteredBidList.map(function (o) { return o.price; }))
            if (filteredBidList.find(bid => bid.price === winner.toString())) {
                return filteredBidList.find(bid => bid.price === winner.toString())
            } else {
                return {}
            }
        } else {
            return {}
        }
    } else {
        return {}
    }
}

export function addBid(price, userId, projectId) {
    let data = getBidList();

    if (price && userId && projectId) {
        const bid = {}
        bid.id = data.length + 1;
        bid.price = price;
        bid.userId = userId;
        bid.projectId = projectId;
        data.push(bid)
        localStorage.setItem('bidList', JSON.stringify(data));
        return bid;
    } else {
        return null;
    }
}