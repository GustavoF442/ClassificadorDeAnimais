const URL = "./my_model/";
let model, webcam, labelContainer, maxPredictions, predictionLoop;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(400, 400, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update();
    await predict();
    predictionLoop = window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    labelContainer.innerHTML = ""; 

    for (let i = 0; i < maxPredictions; i++) {
        const p = prediction[i];

        const label = document.createElement("div");
        label.style.fontWeight = "bold";
        label.style.marginBottom = "4px";
        label.textContent = p.className;

        const barContainer = document.createElement("div");
        barContainer.style.background = "#eee";
        barContainer.style.borderRadius = "10px";
        barContainer.style.overflow = "hidden";
        barContainer.style.marginBottom = "10px";
        barContainer.style.height = "20px";

        const bar = document.createElement("div");
        bar.style.height = "100%";
        bar.style.width = `${(p.probability * 100).toFixed(2)}%`;
        bar.style.background = "#4CAF50"; 
        bar.style.transition = "width 0.3s";

        barContainer.appendChild(bar);
        labelContainer.appendChild(label);
        labelContainer.appendChild(barContainer);

        
        if (p.probability >= 0.99) {
            stopPrediction(p.className);
            break;
        }
    }
}


function stopPrediction(animalClass) {
    window.cancelAnimationFrame(predictionLoop);
    webcam.stop();

    const imgElement = document.createElement("img");
    imgElement.src = `imagens/${animalClass.toLowerCase()}.jpg`;
    imgElement.alt = animalClass;
    imgElement.style.width = "100%";
    imgElement.style.borderRadius = "8px";
    imgElement.style.maxHeight = "250px";
    imgElement.style.objectFit = "cover";

    const imageContainer = document.getElementById("animal-image");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(imgElement);

    
    const sanitizedName = animalClass
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/[^a-z0-9]/g, "-"); 

    fetch(`fichas/${sanitizedName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("animal-description").innerHTML = data;
            document.getElementById("result-container").classList.remove("hidden");
        })
        .catch(error => {
            document.getElementById("animal-description").innerHTML = `<p style="color:red;">Ficha não encontrada para "${animalClass}"</p>`;
            document.getElementById("result-container").classList.remove("hidden");
        });
}
