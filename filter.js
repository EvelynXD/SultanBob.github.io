const filterItem = document.querySelector(".col-lg-12");
const filterImg = document.querySelectorAll(".portfolio-item");

window.onload = ()=>{
	filterItem.onclick = (selectedItem)=>{
		if(selectedItem.target.classList.contains("list")){
			filterItem.querySelector(".filter-active").classList.remove("filter-active");
			selectedItem.target.classList.add("filter-active");
			let filterName = selectedItem.target.getAttribute("data-name");
			filterImg.forEach((image)=>{
				let filterImages = image.getAttribute("data-name");
				if((filterImages == filterName) || filterName == "all"){
					image.classList.remove("hide");
					image.classList.add("show");
				}else{
					image.classList.add("hide");
					image.classList.remove("show");
				}
			})
		}
	}
	for (let index = 0; index < filterImg.length; index++){
		filterImg[index].setAttribute("onclick", "preview(this)");
	}
}

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".tulis p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
	let selectedPriviewImg = element.querySelector("img").src;
	let selectedImgCategory = element.getAttribute("id");
	categoryName.textContent = selectedImgCategory;
	previewImg.src = selectedPriviewImg;
	previewBox.classList.add("show");
	shadow.classList.add("show");
	closeIcon.onclick = ()=>{
		previewBox.classList.remove("show");
		shadow.classList.remove("show");
	}
}
