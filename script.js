

function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}


function main(){

    let data = fazGet("https://api.thingspeak.com/channels/1970738/fields/1.json?api_key=TRMAI8TGUHMVK67P&results=1");

    data = JSON.parse(data);
    

    console.log(data.feeds[0].field1);

    data1 = data.feeds[0].field1

    console.log(data1)

    data1 =  data1.slice(0,-1)
    console.log(data1)

    data1 = JSON.parse(data1)

    console.log(data1)

    const tabela = document.getElementById("tabela");

    const header = document.createElement("div")

    header.classList.add("header")


    const headerSenderNode = document.createElement("div");

    headerSenderNode.classList.add("headerSenderNode");

    headerSenderNode.innerHTML = `Sender Node`

    const headerNearNode = document.createElement("div")

    headerNearNode.classList.add("headerNearNode");

    headerNearNode.innerHTML = `Near Node`
    
    const headerRSSI = document.createElement("div");

    headerRSSI.classList.add("headerRSSI");

    headerRSSI.innerHTML = `RSSI`

    header.appendChild(headerSenderNode)
    header.appendChild(headerNearNode)
    header.appendChild(headerRSSI)

    tabela.appendChild(header)
    

    data1.nearNodes.forEach((element)=>{

        let linhaSenderNode = document.createElement("div")
        linhaSenderNode.classList.add("linhaSenderNode")
        linhaSenderNode.innerHTML = data1.senderNode
         
        let linhaNearNode = document.createElement("div")
        linhaNearNode.classList.add("linhaNearNode");
        linhaNearNode.innerHTML = element.SSID

        let linhaRSSI  = document.createElement("div")
        linhaRSSI.classList.add("linhaRSSI");
        linhaRSSI.innerHTML = element.RSSI

        let linha = document.createElement("div");
        linha.classList.add("linha")
        linha.appendChild(linhaSenderNode)
        linha.appendChild(linhaNearNode)
        linha.appendChild(linhaRSSI)

        tabela.appendChild(linha)

    })
}

main();