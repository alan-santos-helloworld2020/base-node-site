
let navegador = {


    template:`
    <nav>
        <div class="nav-wrapper green">
            <a href="/" class="brand-logo center">VueJS</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="/produtos.html">Produtos</a></li>
                <li><a href="/cadastro.html">Cadastro</a></li>
                <li><a href="/sobre.html">Sobre</a></li>
            </ul>
        </div>
    </nav>

    `
}

let rodape = {

    template:`
    <footer class="page-footer green">
    <p class="center"> © 2020 Onload-Tecnologia</p>
    </footer>
    
    `

}



let root = new Vue({

    el: "#root",
    data: {
        nome: ""

    },
    created: () => {



    },
    components: {
        'navegador': navegador,
        'rodape': rodape
    },
    methods: {
        saudar: () => {

            alert(`Hello: ${this.nome}`);
        }

    }
});