# Sistema de Barbearia

Sistema de gerenciamento para barbearia desenvolvido com Astro e Clerk para autenticação.

## 🚀 Tecnologias

- **Astro** - Framework web moderno
- **Clerk** - Autenticação e gerenciamento de usuários
- **TypeScript** - Tipagem estática
- **React** - Para componentes Clerk

## 📁 Estrutura do Projeto

```
/
├── public/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── login.astro
│   │   └── cadastro.astro
│   └── env.d.ts
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🔧 Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
copy .env.example .env
```

### 3. Obter chaves do Clerk

1. Acesse [Clerk Dashboard](https://dashboard.clerk.com/)
2. Crie um novo aplicativo ou use um existente
3. Copie suas chaves:
   - `PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Cole as chaves no arquivo `.env`

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:4321`

## 📄 Páginas Disponíveis

- `/` - Página inicial com links para login e cadastro
- `/login` - Tela de login com Clerk
- `/cadastro` - Tela de cadastro com Clerk

## 🔐 Autenticação

O sistema utiliza o Clerk para autenticação completa, incluindo:
- Login/Cadastro
- Recuperação de senha
- Verificação de e-mail
- Gerenciamento de sessão
- Proteção de rotas

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Próximos Passos

1. Configure suas chaves do Clerk no arquivo `.env`
2. Personalize os componentes conforme necessário
3. Adicione proteção de rotas para páginas autenticadas
4. Implemente funcionalidades específicas da barbearia

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

