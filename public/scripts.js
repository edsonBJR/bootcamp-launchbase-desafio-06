const Mask = {
    apply(input, func) {
        setTimeout(function() {
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatBRL(value) {
        value = value.replace(/\D/g, "")
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value / 100)
    }
}

const PhotosUpload = {
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 6,
    handleFileInput(event) {
        const { files: fileList } = event.target

        if (PhotosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image() // igual a criar a tag <img />
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)
                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })
    },
    hasLimit(event) {
        const { uploadLimit } = PhotosUpload

        if (fileList.length > uploadLimit) {
            alert(`Envie no máximo ${uploadLimit} fotos`)
            event.preventDefault()
            return true
        }

        return false
    },
    getContainer(image) {
        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick = () => alert('remover foto')

        div.appendChild(image)

        return div
    },
    getRemoveButton() {
        const button = document.createElement('i')
    }

}


// const input = document.querySelector('input[name="price"]') // Pegar na pagina os inputs com nome igual a price
// input.addEventListener("keydown", function(e) { // Com o input capturador passar para ele um evento e uma função

//     setTimeout(function() { // Definindo um tempo para a função executar
//         let { value } = e.target

//         value = value.replace(/\D/g, "") // Alterando o atributo value do campo input com uma expressão regular com o shorthadn \D que retira os que não for número da String
//         value = new Intl.NumberFormat('pt-BR', {
//                 style: 'currency',
//                 currency: 'BRL'
//             }).format(value / 100) // Aqui estamos utilizando o Constructor Intl.NumberFormat() para formatar a String com o formato da moeda utilizada no Brasil

//         e.target.value = value // Aqui alteramos o atributo value para o value do e.target
//     }, 1)

// })