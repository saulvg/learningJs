function writeStatement(statement) {

    const statementHTML = statement.map(st => `<p>${st}</p>`).join('')

    document.getElementById('statement').innerHTML = statementHTML
}

