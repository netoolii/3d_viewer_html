# 3D Viewer (HTML) — README

Visão geral
- Projeto leve para visualização 3D no navegador usando tecnologias web (HTML, CSS, JavaScript).
- Suporta carregamento de modelos (ex.: glTF, OBJ, STL), manipulação da câmera, iluminação básica e controle de cena.

Principais funcionalidades
- Renderização em tempo real no navegador.
- Suporte a formatos comuns de modelos 3D.
- Controles de órbita/zoom/pan.
- Carregamento dinâmico de assets (modelos, texturas).
- Layout adaptado para desktop e mobile.

Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari recente).
- Servidor HTTP local para evitar problemas com CORS (não abrir diretamente pelo file://).

Instalação e execução rápida
1. Navegue até a pasta do projeto:
2. Inicie um servidor local simples:
    - Com Python 3:
      ```
      python -m http.server 8000
      ```
    - Ou com Node (serve, http-server, Live Server):
      ```
      npx http-server -p 8000
      ```
3. Abra no navegador:
    ```
    http://localhost:8000
    ```

OU

- Instale a extensão "Live Server" no Visual Studio Code.
- Abra a pasta do projeto no VS Code (File > Open Folder...).
- Abra o arquivo `index.html` e clique em "Go Live" no canto inferior direito da janela ou clique com o botão direito em `index.html` > "Open with Live Server".
- O Live Server irá hospedar o site localmente — a URL padrão costuma ser:
    ```
    http://127.0.0.1:5500
    ```
    ou
    ```
    http://localhost:5500
    ```
    Verifique a barra de status do VS Code ou a saída da extensão para a porta exata.
- Observação: o Live Server evita problemas de CORS e permite recarregamento automático; a porta pode ser alterada nas configurações da extensão, se necessário.


Como usar (no app)
- Carregue um modelo pela interface ou arraste e solte na área de visualização.
- Use mouse/gestos:
  - Arrastar: rotacionar a cena.
  - Scroll/pinch: zoom.
  - Shift + arrastar: pan (se implementado).
- Ajuste iluminação, materiais e escala via painel de propriedades (se existir).

Dicas de desenvolvimento
- Prefira glTF 2.0 para melhor compatibilidade e desempenho.
- Teste modelos com e sem texturas para isolar problemas de material.
- Use ferramentas de compressão de meshes e texturas para otimizar carregamento.
- Habilite o console do navegador para rastrear erros de carregamento e CORS.

Personalização rápida
- Para trocar a câmera, edite o script que cria a instância de PerspectiveCamera.
- Para ajustar luzes, modifique parâmetros de intensidade, cor e tipo (direcional, pontual, ambiente).
- Para adicionar controles, integre OrbitControls ou similar.

Debug e resolução de problemas
- Erro de CORS: verifique se está usando servidor HTTP.
- Modelos sem texturas: confirme caminhos em assets/ e nomes corretos.
- FPS baixo: re/duza resolução de render, desative sombras ou simplifique geometria.
