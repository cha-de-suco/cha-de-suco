
let input = document.getElementById("input");


//const chaveSSH = document.getElementById("chaveSSH");
//const gerandoChave = document.getElementById("gerandoChave")
//const adicionar_chave = document.getElementById("adicionar_chave")

let texto1 = 1
let texto2 = 2
let texto3 = 3
let texto4 = 4
let texto5 = 5
let texto6 = 6
let texto7 = 7
let texto8 = 8


function copiarCodigo(texto) {
    switch(texto) {
        case 1:
            navigator.clipboard.writeText("ls -al ~/.ssh")
        break;

        case 2:
            navigator.clipboard.writeText("ssh-keygen -t ecdsa -b  521 -f ~/.ssh/id_ecdsa")
        break;

        case 3: 
        navigator.clipboard.writeText("ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519")
        break;

        case 4:
            navigator.clipboard.writeText("ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa")
        break;

        case 5:
                navigator.clipboard.writeText("ls -al ~/.ssh")
        break;

        case 6:
            navigator.clipboard.writeText("ssh-keygen -t ed25519 -C ")
        break;
        
        case 7:
            navigator.clipboard.writeText("ssh-keygen -t rsa -b 4096 -C ")
        break;

        case 8:
            navigator.clipboard.writeText("clip < ~/.ssh/id_ed25519.pub")
        break;

        default:
        }
    }


function procurarInformacao(valor) {

    switch (valor) {
        case "chave se tem ssh":
        case "chave se tem chave ssh":
        case "chave se tem a chave ssh":
        case "chave se tem chave":
        case "verificar chave":
        case "verificar arquivos":
        case "chave ssh":
        case "chavessh":

            window.scroll(0, 1007)

        break;

        case"gerar chave":
        case"como gerar chave":
        case"como gerar a chave":
        case"como gerar chave ssh":
        case"como gerar a chave ssh":
        case"como gerar a chavessh":
        case"como gerar chavessh":

            window.scroll(0, 2843)

        break;
            
        case"adicionar chave":
        case"como adicionar a chave":
        case"como adicionar chave":
        case"copiar chave":
        case"copiar a chave":
        case"copiar chave ssh":
        case"copiar a chavessh":
        case"copiar a chave ssh":
        case"como copiar a chave ssh":
        case"como copiar chavessh":

            window.scroll(0, 3906)

        default:

            input.classList.remove("procurar:hover")
            input.classList.remove("procurar::-webkit-input-placeholder")
            input.classList.remove("procurar:focus")
            input.classList.add("incorreto");
            input.classList.add("incorreto::-webkit-input-placeholder");
            input.placeholder = "incorreto";
            input.value = "";

            input.addEventListener("click", () => {
                input.classList.remove("incorreto");
                input.classList.remove("incorreto::-webkit-input-placeholder");
                input.placeholder = "Oque deseja?";
                input.value = "";
            })
        }
}

document.addEventListener("click", function(event) {

    let elemento = event.target
    let id = elemento.getAttribute("id")
    let section = document.getElementById(id)
    console.log(section.offsetTop)
})

document.addEventListener("keypress", (chave) => {
    if(chave.key === "Enter" && input.value) {
        procurarInformacao(input.value.toLowerCase())
    }
})