const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <h1 class="heading">know what you enter </h1>
    <div class='color'>
     
    <table>
    <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key===' '? 'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    

    `
})