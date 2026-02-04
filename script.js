const cardsData = [];
const plusBtn = document.getElementById('plusBtn');
const formModal = document.getElementById('formModal');
const closeBtn=document.getElementById('closeBtn')

plusBtn.addEventListener('click', () => {
  formModal.classList.remove('hidden'); // ça doit retirer la classe hidden
});
closeBtn.addEventListener('click', () => {
  formModal.classList.add('hidden'); // ça doit retirer la classe hidden
});
saveBtn.addEventListener('click', () => {
  const title = document.getElementById("title").value;
  const auteur = document.getElementById("auteur").value;
  const urlimage = document.getElementById("urlimage").value;
  const destination = document.getElementById("destination").value;
  const categorie = document.getElementById("categorie").value;

    if (!title || !auteur || !urlimage || !destination || !categorie) {
    alert("Veuillez remplir tous les champs avant de sauvegarder !");
    return; // stoppe la fonction
  }
  // créer un objet avec les données du formulaire
  const cardObj = {
    title: title,
    auteur: auteur,
    urlimage: urlimage,
    destination: destination,
    categorie: categorie
  };

  // ajouter l'objet au tableau
  cardsData.push(cardObj);

  // maintenant tu peux générer la carte à partir de l'objet
  const cardHTML = `
  <div class="hover:cursor-pointer bg-white rounded-3xl shadow-md overflow-hidden 
              flex flex-col lg:flex-row">
    <div class="relative w-full lg:w-64 h-56 lg:h-40 flex-shrink-0 overflow-hidden">
      <a href="description.html">
        <img src="${cardObj.urlimage}" class="w-full object-cover h-full">
        <img src="images/insigne-damour.png" class="absolute top-4 right-4 w-10 h-10">
      </a>
    </div>
    <div class="p-4 flex flex-col justify-between gap-4">
      <div>
        <h2 class="font-bold text-lg">${cardObj.title}</h2>
        <h3 class="text-sm text-gray-600">by ${cardObj.auteur}</h3>
      </div>
      <div class="flex gap-6 text-gray-500 text-sm">
        <span class="flex items-center gap-1">
          <img src="images/endroit.png" class="w-4 h-4"> ${cardObj.destination}
        </span>
        <span class="flex items-center gap-2">
          <img src="images/time-and-date.png" class="w-4 h-4"> 5m
        </span>
        <span class="flex items-center gap-2">
          <img src="images/oeil.png" class="w-5 h-5"> 0
        </span>
      </div>
    </div>
  </div>
  `;

  cardsContainer.insertAdjacentHTML("beforeend", cardHTML);

  // optionnel : vider le formulaire après ajout
  document.getElementById("title").value = "";
  document.getElementById("auteur").value = "";
  document.getElementById("urlimage").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("categorie").value = "";

  // cacher le formulaire
  formModal.classList.add('hidden');

  console.log(cardsData); // tu peux vérifier le tableau dans la console
});
