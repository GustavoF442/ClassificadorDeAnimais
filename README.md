# 🐾 Classificador de Animais com Rede Neural Artificial

Este projeto é uma aplicação prática de redes neurais artificiais treinadas com imagens reais de animais, utilizando a webcam para identificar com alta confiança **uma entre 7 classes** diretamente no navegador.

---

## 📌 Objetivo

Utilizar uma rede neural artificial treinada com imagens reais para realizar **classificação de animais em tempo real**, por meio da câmera do usuário, de forma 100% local (sem servidor), com modelo treinado via [Teachable Machine](https://teachablemachine.withgoogle.com/).

---

## 🧠 Modelo Treinado

O modelo contém 7 classes distintas:

- 🐁 Rato  
- 🐋 Baleia  
- 🦁 Leão  
- 🐸 Sapo  
- 🐒 Macaco  
- 🐔 Galinha  
- 🐜 Tamanduá-bandeira

### 📁 Arquivos do modelo (`/my_model`)

| Arquivo         | Função                                                             |
|----------------|---------------------------------------------------------------------|
| `model.json`     | Estrutura da rede (camadas, referências, configurações)           |
| `metadata.json`  | Informações das classes (rótulos, total de classes, versão)       |
| `weights.bin`    | Pesos aprendidos durante o treinamento com as imagens             |

---

## ⚙️ Como Funciona

1. O usuário clica em **Iniciar Classificação**.
2. A webcam é ativada.
3. A cada frame, o modelo analisa a imagem em tempo real.
4. O sistema exibe **barras de progresso coloridas** com a porcentagem de confiança de cada classe.
5. Quando alguma classe atinge **99% de certeza**:
   - O loop de predição é interrompido.
   - A webcam é desligada.
   - É exibida a **imagem do animal identificado**.
   - É carregada dinamicamente uma **ficha HTML completa com dados científicos e curiosidades** sobre o animal.

---

## 🗂️ Estrutura do Projeto

📁 my_model/ → Modelo treinado (Teachable Machine exportado)
📁 imagens/ → Imagens ilustrativas de cada animal identificado
📁 fichas/ → Fichas HTML detalhadas (1 por animal)
📄 index.html → Página principal (layout e containers)
🎨 style.css → Estilização completa e responsiva
🧠 script.js → Lógica do sistema e integração com TensorFlow.js


---

## 🌐 Tecnologias Utilizadas

- [Teachable Machine (Google)](https://teachablemachine.withgoogle.com/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- HTML5, CSS3, JavaScript
- API de Webcam via `tmImage.Webcam`

---

## 🧪 Detalhes Técnicos

- O modelo foi treinado com exemplos reais via Teachable Machine.
- A classificação é realizada com redes neurais convolucionais (CNN).
- Todo o processamento ocorre **no navegador do usuário** (offline e seguro).
- A cada frame da webcam:
  - A imagem é convertida em uma matriz de pixels.
  - O modelo aplica filtros convolucionais e classifica com base nos padrões aprendidos.
  - A saída é processada via Softmax e retornada como porcentagens por classe.
- O conteúdo da ficha do animal identificado é carregado automaticamente via `fetch()` a partir da pasta `/fichas/`.

---

## ✅ Requisitos Atendidos

- [x] Rede Neural Artificial com 7 classes visuais distintas
- [x] Predição em tempo real diretamente do navegador
- [x] Reconhecimento com base em webcam
- [x] Exibição dinâmica de barras de confiança
- [x] Informações detalhadas e organizadas sobre cada animal
- [x] Integração com HTML dinâmico e feedback visual
- [x] Arquitetura 100% web, sem necessidade de backend
- [x] Documentação e apresentação completa do funcionamento

---

## 👨‍💻 Equipe

- Gustavo Fraga  
- Carlos Gatis  
- João Sestrem  
- Jeferson Vasselai  

**Faculdade:** UNIFEBE  
**Disciplina:** Redes Neurais Artificiais  
**Docente** Jonathan Nau

---
