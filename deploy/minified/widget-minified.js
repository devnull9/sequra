const lastSection=document.querySelector(".section:last-child"),activeProduct=document.querySelector(".active"),productPrice=activeProduct.getAttribute("data-price"),priceInCents=productPrice.replace(/[^ 0-9.]/g,"");function fetchData(t){fetch(`http://localhost:8080/credit_agreements?totalWithTax= ${t}`,{mode:"cors"}).then(t=>t.text()).then(t=>{createNewSection(JSON.parse(t))}).catch(t=>{console.log("!error!",t)})}function createNewSection(t){const e=['<select class="widget-select">',"</select>"];t.map((t,c)=>e.splice(c+1,0,`<option value=${t.instalment_count}>${t.instalment_count} cuotas de ${t.instalment_total.string}/mes</option>`));const c=e.join("");lastSection.insertAdjacentHTML("beforeend",c)}fetchData(priceInCents);