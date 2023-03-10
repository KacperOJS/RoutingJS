const  route = (e)=>{
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, "",e.target.href);
    handleLocation();
};
const routes = {
    404: "/404.html",
    "/": "/index.html",
    "/about": "/about.html",
    "/lorem": "/lorem.html",
}

const handleLocation = async () =>{
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html  = await fetch(route).then((data)=>data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route =  route;

handleLocation();

