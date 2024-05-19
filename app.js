// // First Type 
function swapImage(event, type){
    event.target.src = "https:st.depositphotos.com/28789600/51824/i/450/depositphotos_518242018-stock-photo-golden-colors-most-beautiful-sunset.jpg"
    console.log(type)

    if (type === "over"){
        event.target.src = "https:st.depositphotos.com/28789600/51824/i/450/depositphotos_518242018-stock-photo-golden-colors-most-beautiful-sunset.jpg"
    }else{
        event.target.src = "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
    }
}


// // Second Type
// var count = 0;
// function swapImage(){
//     if (count == 0){
//         event.target.src = "https:st.depositphotos.com/28789600/51824/i/450/depositphotos_518242018-stock-photo-golden-colors-most-beautiful-sunset.jpg"
//     count = 1;
//     }else{
//         event.target.src = "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
//         count = 0;
//     }
// }

// // Third Type
// function swapImage(){
//     console.log(event.type)
//     if (event.type == "mouseover"){
//         event.target.src = "https:st.depositphotos.com/28789600/51824/i/450/depositphotos_518242018-stock-photo-golden-colors-most-beautiful-sunset.jpg"
//     }else{
//         event.target.src = "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
//     }
// }