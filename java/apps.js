


const loadData=async()=>{
const response=await fetch('https://forbes400.onrender.com/api/forbes400');
const data=await response.json()
displayLoad(data.slice(0,6))
showHandler(data)
}


// *********display load*********

const displayLoad=(data)=>{
    const imageContainer=document.getElementById('image-container')
    imageContainer.innerHTML=''
    data.forEach(element => {
        const{personName,source,countryOfCitizenship,squareImage,state,city}=element;
        const{numberOfShares,sharePrice}=element.financialAssets[0];
        const div=document.createElement('div');
        div.classList.add('bg-blue','pb-10')
        div.innerHTML=`
        <h1 class="text-center text-white py-3">${personName}</h1>
       <div class="card card-side shadow-xl">
       
  <figure class="flex flex-col">
    <img
      src=${squareImage} />
       <span class="text-center mt-1 text-white">Source: ${source}</span>
      </figure>
  <div class="card-body ml-2 border-l-2 ">
    <h2 class="card-title text-white">Citizenship:${countryOfCitizenship}</h2>
    <h2 class="card-title text-lg text-white">State:${state}</h2>
    <h2 class="card-title text-white">City:${city}</h2>
    <h2 class="card-title text-white">Total Shares:${numberOfShares}</h2>
    <h2 class="card-title text-white">Share Price:${sharePrice}</h2>
  </div>
</div>
        `
        imageContainer.appendChild(div)
    });
}

// *******show all button onclick**********
const showHandler=(single)=>{
    

}



loadData()