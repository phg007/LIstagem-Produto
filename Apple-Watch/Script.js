const productOptions =[
    {
        id: 1,
        src: "assets/watch-1.png",
        price: "5.299",
      },
      {
        id: 2,
        src: "assets/watch-2.png",
        price: "5.500",
      },
      {
        id: 3,
        src: "assets/watch-3.png",
        price: "5.400",
      },
      {
        id: 4,
        color: "#000000",
        src: "assets/watch-4.png",
        price: "5.500",
      },
];
function selectOptions(option){

    const appleWacthElement = document.getElementById("apple-watch");
    if(!appleWacthElement) return ;


    appleWacthElement.style =  "animation: none";
    appleWacthElement.src = option.src;

    setTimeout(()=>{
        appleWacthElement.style = 'animation: transform-apple-watch 3s forwards';
    },10);

    const priceElement = document.getElementById('price');

    if(!priceElement) return;
    priceElement.innerHTML = `${option.price}$`;



};
function renderProductOptions(){
    const element = document.getElementById('color-picker');

    if(!element) return ;

 
    productOptions.map(function(option){
        const newDiv= document.createElement('div');
        const id = `color_picker_${option.id}`;

        newDiv.id= id;
        newDiv.onclick = () => this.selectOptions(option);
        newDiv.className= 'color-picker-options';

        element.appendChild(newDiv);

    });

}
const

renderProductOptions();