document.addEventListener('DOMContentLoaded', function () {
    const body = document.body,
        container = document.createElement('div')

    container.classList.add('container')


    function createElement(data) {
        data.map(item => {
            const image = document.createElement('img'),
                title = document.createElement('h3'),
                price = document.createElement('h1'),
                button = document.createElement("button"),
                description = document.createElement("p")
            innerContainer = document.createElement('div')
            innerContainer.classList.add('inner-container')

            image.classList.add('image')
            title.classList.add('title')
            price.classList.add('price')
            description.classList.add('description')
            button.classList.add("button")


            image.innerHTML = item.image
            image.src = item.image
            title.innerHTML = item.title
            price.innerHTML = `$${item.price}`
            button.innerHTML = "About"

            innerContainer.appendChild(image)
            innerContainer.appendChild(title)
            innerContainer.appendChild(price)
            innerContainer.appendChild(button)
            innerContainer.appendChild(description)
            container.appendChild(innerContainer)

            button.addEventListener('click', () => {
                description.innerHTML = item.description
            })
        })



    }




    function getData() {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(json => createElement(json))
    }

    body.appendChild(container)
    getData()
})