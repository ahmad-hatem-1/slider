
let content = [
    {
        title: "mercedes",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
        src: "./asets/img/1.jpg"
    },
    {
        title: "mercedes-1",
        p: "Lorem ipsum dolor sit amvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
        src: "./asets/img/2.jpg"
    },
    {
        title: "mercedes-2",
        p: "Lorem ipsum dodfhgggggggggggggggggggggggggggggggggggglor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
        src: "./asets/img/3.jpg"
    },
    {
        title: "mercedes-3",
        p: "Lorem ipsum dodfhgggggggggggggggggggggggggggggggggggglor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
        src: "./asets/img/4.jpg"
    }
]
let count = 0


let img_con = document.createElement("img")
img_con.classList.add("img_cont")
cont()
function cont(count = 0) {
    document.querySelector(".img-cont-d").innerHTML = ""
    document.querySelector(".img-cont-d").append(img_con)
    document.querySelector(".img_cont").src = content[count].src
    img_con.style.cssText = `animation: swing-in-top-fwd 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;`
    document.body.style.cssText = `background-image: url(${content[count].src});`
    document.querySelector(".img-cont-d").style.cssText = `opacity: 0;`
    document.querySelector(".text").style.cssText = `opacity: 0;`
    document.querySelector(".text h2").innerText = content[count].title
    document.querySelector(".text p").innerText = content[count].p
    document.querySelector(".text").style.cssText = `opacity: 1;`
    document.querySelector(".img-cont-d").style.cssText = `opacity: 1;`
}
function arrow(type) {
    document.querySelectorAll(".spans span").forEach(element => {
        element.classList.remove("active")
    });
    if (type.classList[1] == "arrow-left") {
        // count++
        count == content.length - 1 ? count = 0 : count++
        cont(count)
        document.querySelectorAll(".spans span")[count].classList.add("active")
    } else {
        count == 0 ? count = content.length - 1 : count--
        cont(count)
        document.querySelectorAll(".spans span")[count].classList.add("active")

    }
}
function span(num, el) {
    document.querySelectorAll(".spans span").forEach(element => {
        element.classList.remove("active")
    });
    console.log(el)
    cont(num)
    el.classList.add("active")

}
let i = 0
while (i < content.length) {
    document.querySelector(".spans").innerHTML += `<span onclick='span(${i},this)'></span>`
    console.log()
    i++
}
document.querySelector(".spans").firstElementChild.classList.add("active")
setInterval(() => {
    document.querySelector(".arrow-left").click()
}, 5000);



