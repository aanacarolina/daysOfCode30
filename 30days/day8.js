function processData(input) {
    //tratando input to hackerrank, vou ja usar o array tratado aqui na IDE
    // const inputToArray = input.split("\n")
    // const removeNumberFromArray = inputToArray.shift()
    // console.log(inputToArray)

    //criando o array de objetos a ser populado com os primeiros 3 nomes mapeados no primeiro FOR
    const map = [];

    //encontrando o N = numero de entradas da agenda telefonica
    const inputSize = input.shift();
    //console.log(input)

    //iterando sobre os 3 primeiros itens, ja descartado o numero, e populando map
    for (let i = 0; i < inputSize; i++) {
        const name = input[i].split(" ")[0];
        const telephone = input[i].split(" ")[1];
        map.push({ name, telephone });
    }
    //iterando sobre os 3 ultimos itens para comparar com os nomes mapeados e dar resposta
    for (let k = inputSize; k < input.length; k++) {
        let found = map.find(e => e.name === input[k])

        if (found) {
            console.log(found.name + "=" + found.telephone);
        }
        else {
            console.log("Not found");
        }
    }
}

processData([
    3,
    "sam 99912222",
    "tom 11122222",
    "harry 12299933",
    "sam",
    "edward",
    "harry",
]);

processData([])