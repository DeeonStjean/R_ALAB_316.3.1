// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
//part1  
let mainEl=document.querySelector("main");
mainEl.style.backgroundColor="var(--main-bg)";
mainEl.innerHTML="<h1> DOM Manipulation </h1>";
mainEl.classList.add("flex-ctr");
//part 2
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
//part 3
menuLinks.forEach((link)=>{
    const a=document.createElement("a");
    a.setAttribute("href",link.href);
    a.textContent=link.text;
    topMenuEl.appendChild(a);
})

//lab rlab DOM manipualtion(part 2)    part3
let subMenuEl= document.getElementById("sub-menu");
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor="var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position="absolute";
subMenuEl.style.top="0";
// part4
// group : Deeon, elizbeth, major, karah, jalen
//let topMenuLinks= document.querySelectorAll("a");

const topMenuLinks = document.querySelectorAll("a")


topMenuEl.addEventListener('click',(event)=>{
  event.preventDefault();
  //check if target is a link "a"
  if(!event.target.matches("a")){
    //if not just return
    return
  }else{
    topMenuLinks.forEach((a)=>{
      if(a!==event.target)
        a.classList.remove("active");
    });
    if(event.target.classList.contains("active")){
      subMenuEl.style.top="0";
    }
    else{
      for (link of menuLinks) {
        if (link.text == event.target.text) {
          if (link.subLinks) {
            subMenuEl.style.top = "100%";
            buildSubmenu(link);
          } else {
            subMenuEl.style.top = "0%";
            console.log(link)
          }
        }
      }
      //subMenuEl.style.top="100%";
      //buildSubmenu(menuLinks);
    }
    event.target.classList.toggle("active");
  }
});
// lab part2  part5
function buildSubmenu(Links){ 
  subMenuEl.innerHTML='';
  for(subLink in Links.subLinks){
    const a=document.createElement("a");
    a.href=("href",Links.subLinks[subLink].href);
    a.textContent=Links.subLinks[subLink].text;
    subMenuEl.appendChild(a);
  }
}
subMenuEl.addEventListener('click',(event)=>{
  event.preventDefault();
  if(!event.target.matches("a")){
    return;
  }
  else{
    subMenuEl.style.top="0";
    topMenuLinks.forEach(link => {
      link.classList.remove("active")
  });
  }
});