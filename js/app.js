console.log('conetado...')

const productData = [
{
index: '01',
name: 'Yellow One',
Image: 'img1.jpg',
des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'
}
,
{
index: '02',
name: 'Yellow Two',
Image: 'img2.jpg',
des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'
}
,
{
index: '03',
name: 'Yellow Three',
Image: 'img3.jpg',
des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'
}
]

const nextBtn = document.querySelector('.nxt-btn')
//console.log('Boton', nextBtn)

let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')
let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')
let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nextBtn.addEventListener('click', () => {
    if(currentProduct >=  productData.length-1){
        currentProduct = 0
    }
    else
    {
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('slide')
    productDetail.classList.add('slide')
})