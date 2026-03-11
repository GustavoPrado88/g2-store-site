# G2 Store - Site catálogo

Projeto estático inspirado no fluxo de catálogo do site de referência enviado, mas com identidade própria da G2 Store.

## Estrutura

- `index.html` — página principal
- `styles.css` — estilos
- `script.js` — catálogo, filtros e dados dos produtos

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve.

## Como editar produtos

Abra o arquivo `script.js` e altere o array `products`.

Exemplo:
```js
{
  id: 1,
  name: 'Nome do produto',
  category: 'Camisetas',
  price: 'R$ 79,90',
  sizes: 'M / G',
  stock: 10,
  label: 'Premium',
  description: 'Descrição curta',
  tone: 'light',
}
```

## Personalizações rápidas

- WhatsApp: troque o link `https://wa.me/5500000000000`
- Instagram: atualize o link no `index.html` e em `script.js`
- Endereço: atualize a seção de contato no `index.html`

