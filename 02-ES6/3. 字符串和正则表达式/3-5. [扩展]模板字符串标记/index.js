const container = document.getElementById("container");
const txt = document.getElementById("txt");
const btn = document.getElementById("btn");

btn.onclick = function(){
    container.innerHTML = safe`<p>
        ${txt.value}
    </p>
    <h1>
        ${txt.value}
    </h1>
    `;
}

function safe(parts){
    const values = Array.prototype.slice.apply(arguments).slice(1);
    let str = "";
    for (let i = 0; i < values.length; i++) {
        const v = values[i].replace(/</g, "&lt;").replace(/>/g, "&gt;");
        str += parts[i] + v;
        if (i === values.length - 1) {
            str += parts[i + 1];
        }
    }
    return str;
}