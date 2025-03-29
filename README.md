# 🦜 Parrot Card Game - Documentação

## Deploy
O projeto está disponível em: [Link do Deploy]([https://zap-recall-azure.vercel.app](https://parrot-card-game-khaki.vercel.app))

## Visão Geral
O Parrot Card Game é um jogo da memória implementado com JavaScript puro, seguindo uma arquitetura modular com funções bem definidas para cada responsabilidade do jogo. A aplicação é totalmente responsiva e utiliza animações CSS para proporcionar uma experiência interativa.

## Lógica do Jogo

### Gerenciamento de Estado
O jogo mantém seu estado através de variáveis globais que controlam:
- Cartas selecionadas (firstCard, secondCard)
- Estado do tabuleiro (lockBoard)
- Contagem de jogadas (moves)
- Pares encontrados (matchedPairs)
- Total de pares necessários (totalPairs)

### Inicialização do Jogo
A função `iniciarJogo()` gerencia:
- Validação da entrada do usuário (4-14 cartas, apenas números pares)
- Seleção aleatória dos pares de cartas
- Distribuição das cartas no tabuleiro

### Criação e Manipulação das Cartas
A função `criarCarta()` implementa:
- Criação dinâmica dos elementos DOM
- Configuração dos listeners de eventos
- Estruturação do HTML das cartas

### Sistema de Verificação
O jogo implementa três estados possíveis para as cartas:
1. Fechada (estado inicial)
2. Aberta temporariamente (durante verificação)
3. Aberta permanentemente (par encontrado)


### Feedback Visual
O sistema proporciona feedback através de:
- Animações 3D na virada das cartas
- Tempo de espera para cartas não correspondentes
- Alerta de vitória com contagem de jogadas

## Estilização e Responsividade

### Tema Visual
- Cores:
  - Fundo: #EEF9BF
  - Cartas: #A7E9AF
  - Borda das cartas: #99CEA8
  - Título: #75B79E
- Fonte: Roboto
- Animações suaves de transição

### Layout Responsivo
O design se adapta automaticamente:
- Desktop: Grid flexível com múltiplas colunas
- Mobile: Coluna única com cards centralizados

## Fluxo de Jogo

1. **Início**
   - Solicitação do número de cartas
   - Validação da entrada
   - Distribuição aleatória

2. **Durante o Jogo**
   - Seleção da primeira carta
   - Seleção da segunda carta
   - Verificação de correspondência
   - Contagem de jogadas

3. **Fim de Jogo**
   - Exibição do total de jogadas
   - Opção de reinício
   - Embaralhamento das cartas

## Funções Auxiliares

### Embaralhamento
Utiliza o algoritmo Fisher-Yates modificado através da função `comparador()`.

### Reinicialização
A função `reiniciarJogo()` gerencia:
- Limpeza do tabuleiro
- Reset das variáveis de estado
- Início de nova partida

## Considerações Técnicas

### Performance
- Uso de `transform` para animações suaves
- Manipulação eficiente do DOM
- Debounce nas interações do usuário

### Acessibilidade
- Semântica HTML apropriada
- Alt text nas imagens
- Feedback visual claro

### Compatibilidade
- Funciona em todos navegadores modernos
- Não requer bibliotecas externas
- JavaScript vanilla puro







