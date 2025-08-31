# Amigo Secreto

Projeto simples em **JavaScript, HTML e CSS** para adicionar nomes de amigos e sortear um amigo secreto aleatoriamente.

---

## Funcionalidades

- Adicionar nomes de amigos em uma lista.
- Exibir a lista de amigos na tela.
- Sortear um amigo secreto aleatoriamente.

---

## Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o nome de um amigo no campo de entrada e clique em **Adicionar**.
3. Os nomes aparecem na lista abaixo.
4. Clique em **Sortear amigo** para ver quem foi sorteado.

---

## Estrutura HTML

```html
<input type="text" id="amigo" placeholder="Digite um nome">
<button onclick="adicionarAmigo()">Adicionar</button>
<ul id="listaAmigos"></ul>
<ul id="resultado"></ul>
<button onclick="sortearAmigo()">Sortear amigo</button>
