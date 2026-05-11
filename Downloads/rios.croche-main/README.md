**Projeto**

Este repositório é o site da marca Line Rios Crochê — uma loja focada em conversão via WhatsApp com ênfase em performance, design moderno e experiência móvel.

**Objetivo**

- Criar uma vitrine e fluxo de compra que leve o visitante a iniciar contato no WhatsApp com o pedido já pré-formatado.
- Priorizar velocidade, usabilidade e conversão (mobile-first).

**Stack e decisões técnicas**

- Next.js (App Router) + TypeScript
- Tailwind CSS para estilo utilitário e responsividade
- Componentes React com partes server/client onde necessário
- Integração de mensagens via links do WhatsApp gerados dinamicamente

**O que está sendo feito / implementado**

- Páginas: Home, Loja (grade de produtos), Produto (rotas dinâmicas por slug).
- Componentes principais: `Navbar`, `Hero`, `ProductCard`, `ProductDetail`, `FloatingWhatsApp`, `Customization`, `SocialProof`, `Footer`.
- Produto dinâmico com seletores (tamanho, cor) e campo de observação que é incluído na mensagem ao WhatsApp.
- Link de WhatsApp centralizado em `utils/whatsapp.ts` com número de contato e formatação da mensagem.
- Otimizações: fontes via `next/font`, Tailwind configurado para tema da marca.

**Status atual**

- Estrutura do site implementada, páginas e componentes principais criados.
- Fluxo de produto e geração de mensagem WhatsApp funcionando (cliente).
- Ajustes de responsividade aplicados em componentes principais.
- Avisos resolvidos: warning de tipo de módulo do Tailwind (ajustado via `package.json`) e recomendação do Next.js sobre `scroll-behavior` tratada no layout.

**Avisos e notas de implementação**

- O projeto usa um arquivo `tailwind.config.ts`; para evitar warning no Node sinalizando tipo de módulo, o `package.json` foi definido com `"type": "module"`. Se preferir não alterar o `package.json`, podemos migrar o `tailwind.config` para um arquivo CommonJS (`.cjs`).
- O layout agora inclui `data-scroll-behavior="smooth"` no elemento `<html>` para manter comportamento visual consistente durante transições de rota.

**Próximos passos (planejados)**

- Implementar barra de compra fixa em mobile (sticky buy bar) com resumo das seleções.
- Persistir seleções entre páginas (ex.: via URL ou estado local) para melhorar experiência de compra.
- Testes de usabilidade e ajustes de microcopy para maximizar conversões por WhatsApp.

**Notas finais**

Este `README` foi escrito para documentar o propósito, decisões e progressos do projeto — não contém instruções de instalação para terceiros. Se quiser que eu adicione um histórico de commits, roteiro de releases ou um changelog, me diga e eu incluo.
