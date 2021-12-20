

  
const options = {
    version: 1,
    alpha: 0.25,
    topk: 3,
    learningRate: 0.0001,
    hiddenUnits: 100,
    epochs: 300,
    numLabels: 7,
    batchSize: 0.4,
};

const featureExtractor = ml5.featureExtractor('MobileNet', options, function (argument) {
    console.log('MODEL READY');
    //on attend que le model soit chargé avant de faire quoi que ce soit sur la page
    load("../model/model.json")
    document.body.style.display = "block";

});

const classifier = featureExtractor.classification();

function init(model) {
    featureExtractor
}

init();

function classify(imageData) {
    classifier.classify(imageData, (err, result) => {
        console.log(result);

        document.querySelector('.result').value = result[0].label;

    });
}




function addAndTest(imgElement, dessin) {
    dessin.save(imgElement, ()=>{
        classify(imgElement);
    });

}





function load(filename) {
    classifier.load(filename, function () {
        console.log('MODEL LOADED FROM FILE');
    });
};

