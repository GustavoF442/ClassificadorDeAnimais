# 🐾 Classificador de Animais com Rede Neural Artificial

Este projeto é uma aplicação prática de redes neurais artificiais treinadas com imagens reais de animais, utilizando a webcam para identificar com alta confiança uma das três classes: **Baleia**, **Leão** e **Galinha**.

---

## 📌 Objetivo

Utilizar uma rede neural artificial treinada para realizar **classificação de imagens em tempo real** diretamente no navegador, com base em um modelo treinado via [Teachable Machine](https://teachablemachine.withgoogle.com/).

---

## 🧠 Modelo Treinado

O modelo foi criado com 3 classes:

- 🐋 Baleia
- 🦁 Leão
- 🐔 Galinha

### Arquivos do modelo (pasta `/my_model`):

| Arquivo         | Função                                                             |
|------------------|---------------------------------------------------------------------|
| `model.json`     | Estrutura da rede (camadas, tipos, referências de pesos)           |
| `metadata.json`  | Informações das classes (rótulos, versões, número de classes)      |
| `weights.bin`    | Pesos aprendidos durante o treinamento                             |

---

## ⚙️ Como Funciona

1. O usuário clica em **Iniciar Classificação**.
2. A webcam é ativada.
3. Cada frame da câmera é analisado pelo modelo.
4. Quando a confiança atinge **99% ou mais**, o sistema:
   - Interrompe a detecção
   - Exibe a **imagem do animal identificado**
   - Carrega uma ficha com informações completas (HTML)

---

## 🗂️ Estrutura do Projeto

```
📁 my_model/            → Modelo treinado (.json, .bin)
📁 imagens/             → Imagens ilustrativas dos animais
📁 fichas/              → Fichas HTML com dados completos de cada animal
📄 index.html           → Página principal do sistema
🎨 style.css            → Estilos e layout da aplicação
🧠 script.js            → Lógica da aplicação (JS + TensorFlow.js)
```

---

## 🌐 Tecnologias Utilizadas

- **Teachable Machine** (Google)
- **TensorFlow.js**
- **HTML5 / CSS3 / JavaScript**
- **Webcam API**

---

## ✅ Requisitos Atendidos

- [x] Rede Neural Artificial treinada com 3 classes
- [x] Aplicação funcional em um cenário real (classificação por webcam)
- [x] Apresentação dinâmica de dados e imagens
- [x] Integração com HTML e carregamento dinâmico de conteúdo
- [x] Explicações técnicas e documentação inclusas

---

## 👨‍💻 Equipe

- Gustavo Fraga  
- Carlos Gatis  
- João Sestrem  
- Jeferson Vasselai  

**Faculdade:** UNIFEBE  
**Disciplina:** Redes Neurais Artificiais  
**Data de entrega:** 11/06

---
