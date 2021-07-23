export function changeTabs(sectionsData: any, forward = true){
    let sData = [...sectionsData]
    let activeTab = -1;
    for(let i = 0; i<sData.length; i++){
        if(sData[i].active == true){
            activeTab = i;
            sData[i].active = false;
        }
    }

    if(
        ((activeTab + 1) >= sData.length) &&
         forward == true ){
            sData[activeTab].active = true;
    }else{
        if ((activeTab > -1) && (forward == true)){
            sData[activeTab+1].active = true;
            console.log('forward')
        }else{
            sData[activeTab-1].active = true;
            console.log('back')
        }

    }

    return sData;
}

export function checkActiveTab(sectionsData: any){
    for(let i = 0; i<sectionsData.length; i++){
        if(sectionsData[i].active == true){
            return i;
        }
    }
    return -1;
}



export function reset(sectionsData: any){
    let sData = [...sectionsData]
    for(let i = 0; i<sData.length; i++){
        if(sData[i].active == true){
            sData[i].active = false;
        }
    }
    sData[0].active = true;
    return sData;
}