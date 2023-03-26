const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return ["Hallo, Saya dipbot. Nama kamu siapa ?",
    `Halo ${data?.nama}, Umur kamu berapa ?`,
    `ohh umur kamu ${data?.umur}, Hoby kamu apa ?`,
    `oh hoby kamu ${data?.hoby} ya, btw udah punya pacar blom?`,
    `wkwk ${data?.pacar} ya, Ya uda deh kalau gitu, Byee`]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("Silahkan isi jawaban dulu")
    init++
    if(init === 1){
        botDelay({ nama : jawaban.value })
    }else if(init === 2){
        botDelay({ umur : jawaban.value })
    }else if(init === 3){
        botDelay({ hoby : jawaban.value })
    }else if(init === 4){
        botDelay({ pacar : jawaban.value })
    }else if(init === 5){
        finishing()
    }else{
        botEnd()
    }
}

function botDelay(jawabanUser){
    loading.style.display = "block"
    container[0].style.filter = "blur(6px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loading.style.display = "none"
        container[0].style.filter = "none"
    },[1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing(){
    pertanyaan.innerHTML = `thanks ya ${usersData[0]} uda mampir di dipbot`
    jawaban.value = "Siap thanks juga!"
}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} sudah berkunjung! Mari ke Halaman Utama`)
    window.location.reload()
}