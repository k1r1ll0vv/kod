document.addEventListener("DOMContentLoaded", ()=>{

    let showFilter = document.querySelector("#filter--item-none");
    let filterList = document.querySelectorAll(".filter--box");
    showFilter.addEventListener("click", ()=>{
        if(!showFilter.classList.contains("active")){
            showFilter.innerHTML = "Раскрыть фильтр";
            showFilter.classList.add("active");
            filterList.forEach((item)=>{
                if(!item.classList.contains("filter--box-none")){
                    item.style.display = "none"
                }
            });
        }
        else{
            showFilter.innerHTML = "Свернуть фильтр";
            showFilter.classList.remove("active");
            filterList.forEach((item)=>{
             
                    item.style.display = "flex";
              
            });
        }
        
    });

    let filterListItem = document.querySelectorAll(".filter--item__list");
    filterListItem.forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.classList.toggle("active");
            item.querySelector(".filter--list").classList.toggle("active");
            item.querySelectorAll(".filter--item__list--item").forEach((j)=>{
                j.addEventListener("click", ()=>{
                    item.querySelector("p").innerHTML = j.innerHTML;
                });
            });
        });
    });
    let filterDual = document.querySelectorAll(".filter--box-dual .filter--item");
    filterDual.forEach((item)=>{
       item.addEventListener("click", ()=>{
        item.classList.toggle("active");
       });
    })
})