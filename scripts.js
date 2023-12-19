
// Capturando o valor digitado no INPUT
var username = document.querySelector('#usuario')

function getRepositorios()
{
    axios
        // Chamando a API
        .get(`https://api.github.com/users/${username.value}/repos`)
        // Se chamar com sucesso, vai para o .then

        // O .then traz a resposta da api e passa  conteúdo para o (response)
        
        .then((response) => {
            // O dado da resposta será passada para uma costante 'const'
            // que será enviada para o console.log(repos)
            const repos = response.data;
            console.log(repos);

            // Aqui capturamos a <ul> do HTML e passamos para a variável 'lista'
            var lista = document.querySelector('#repos');

            // Criaremos um laço, onde pegaremos todos os repositório
            // e armazenaremos em 'items'
            for(items in repos)
            {
                // Mostrando todos os repositórios em todos os indices
                console.log(repos[items]);

                // Criaremos o elemento <li> e armazenaremos na variável 'elemento'
                var elemento = document.createElement('li');

                // passa os valores dos repositorios em todos os indices para o <li>
                // o valor passado será a URL
                // o valor será passado com string JSON.
                elemento.innerHTML = JSON.stringify(repos[items].url);

                // Pega a <ul> e insere todos os elementos criados com a <li>.
                lista.appendChild(elemento);
            }
        })
        // Caso exista erro.
        .catch((error) => console.error(error));
}
