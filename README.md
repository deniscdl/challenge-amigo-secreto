# Amigo Secreto

Este é um projeto simples em **JavaScript, HTML e CSS** que permite adicionar nomes de amigos a uma lista e sortear um amigo secreto aleatoriamente.

---

## 📝 Funcionalidades

1. **Adicionar amigos**  
   - O usuário digita o nome do amigo no campo de entrada.
   - Ao clicar em **Adicionar**, o nome é incluído na lista.
   - Se o campo estiver vazio, um alerta é exibido solicitando que insira um nome válido.

2. **Exibir lista de amigos**  
   - Todos os nomes adicionados são exibidos em uma lista `<ul>` na tela.
   - A lista é atualizada sempre que um novo amigo é adicionado.

3. **Sortear amigo secreto**  
   - Ao clicar em **Sortear amigo**, um nome aleatório é selecionado da lista.
   - O resultado é exibido em destaque na tela.

---

## 💻 Estrutura do Código

### 1. Array de amigos
```javascript
let amigos = [];
