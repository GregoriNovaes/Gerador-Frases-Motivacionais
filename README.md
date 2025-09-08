# Gerador de Frases Motivacionais

Uma aplicação web construída em **React** que consome uma API de frases motivacionais com mais de 250 frases.  

O objetivo é apresentar frases inspiradoras para o usuário, permitindo gerar novas frases sem recarregar a página e favoritar as preferidas.

[Acesso o Gerador de Frases](https://gerador-frases-motivacionais-three.vercel.app/)


## 💻 Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. Clone este repositório: git clone https://github.com/GregoriNovaes/Gerador-Frases-Motivacionais.git

2. Acesse a pasta do projeto: cd Gerador-Frases-Motivacionais

3. npm install

4. npm run dev


## 🚀 Funcionalidades
- Gerar frases motivacionais aleatórias
- Favoritar frases
- Listar frases favoritadas no lado direito da tela
- Remover frases favoritadas
- Persistência de dados no **LocalStorage**



## 🛠 Construção do Projeto

A página foi dividida em **dois containers**:

### 🔹 Lado esquerdo
- Consome a API: [MeMotive](https://moraislucas.github.io/MeMotive/phrases.json)  
- A API retorna um arquivo `.json` com mais de 250 frases.  
- Utilizei `Math.random()` combinado com `Math.floor()` para gerar índices aleatórios e selecionar frases da lista.  
- Implementei um limite de 100 frases para este projeto.  
- **Botão de recarregar:** gera uma nova frase sem precisar atualizar a página.  
- **Botão de favoritar:** adiciona a frase a um array que será exibido no lado direito.

### 🔹 Lado direito
- Mostra a lista de frases favoritadas.
- Cada frase é renderizada pelo componente `FavoritePhrase`.
- É possível **remover frases**: o método `filter()` cria um novo array excluindo a frase selecionada.



## ⚙️ Tecnologias utilizadas
- useState
- useEffect
- map()
- filter()
- async/await
- LocalStorage



## 📚 Conclusão
Durante o desenvolvimento utilizei:
- `useEffect()` → para exibir uma frase ao carregar a página.
- `useState()` → para atualizar frases e lista de favoritos dinamicamente.
- `.map()` → para renderizar listas.
- `.filter()` → para remover itens.
- `async/await` → para consumir a API de forma assíncrona.
- `localStorage()` → para salvar as frases favoritadas entre sessões.



## 🎨 Imagens do Projeto
<img width="873" alt="image" src="https://github.com/GregoriNovaes/Gerador-Frases-Motivacionais/blob/main/src/assets/Captura%20de%20Tela%202025-09-04%20%C3%A0s%2017.50.29.png">
<img width="873" alt="image" src="https://github.com/GregoriNovaes/Gerador-Frases-Motivacionais/blob/main/src/assets/Captura%20de%20Tela%202025-09-08%20%C3%A0s%2014.40.13.png">

Design feito por mim no **Figma** 🚀