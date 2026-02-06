const cardsData = [];
const plusBtn = document.getElementById('plusBtn');
const formModal = document.getElementById('formModal');
const closeBtn=document.getElementById('closeBtn');
const supprimer=document.querySelectorAll('.supprimer')//icon supprimer
const editer=document.querySelectorAll('.editer')
const card1=document.querySelectorAll('.card1')
const container = document.getElementById('cardsContainer');
let currentCard = null; // هنا غادي نخزنو الكارد اللي ضغطنا عليها



container.addEventListener('click', (e) => {
  if (e.target.classList.contains('supprimer')) {
    e.target.closest('.card1').classList.add('hidden');
  }
});

plusBtn.addEventListener('click', () => {
  formModal.classList.remove('hidden'); // retirer la classe hidden
});
closeBtn.addEventListener('click', () => {
  formModal.classList.add('hidden'); //retirer la classe hidden
});
editer.forEach(btn => {
  btn.addEventListener("click", () => {
    formModal.classList.remove("hidden");
  });
});
// supprimer.addEventListener('click',()=>{
//   card1.classList.add('hidden')
// })
supprimer.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.closest('.card1').classList.add('hidden');
  });
})
container.addEventListener('click', (e) => {
  // شوف واش الكليك كان على icon editer
  if (e.target.id === 'editer') {
    currentCard = e.target.closest('.card1'); // هادي الكارد اللي ضغطنا عليها
    formModal.classList.remove('hidden');     // فتح الفورم
  }
});

saveBtn.addEventListener('click', () => {
  const title = document.getElementById("title").value;
  const auteur = document.getElementById("auteur").value;
  const urlimage = document.getElementById("urlimage").value;
  const destination = document.getElementById("destination").value;
  const categorie = document.getElementById("categorie").value;

    if (!title || !auteur || !urlimage || !destination || !categorie) {
    alert("Veuillez remplir tous les champs avant de sauvegarder !");
    return; //si les chapms sont vides
  }
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
  <div class="card1 hover:cursor-pointer bg-white rounded-3xl shadow-md overflow-hidden 
              flex flex-col lg:flex-row  relative">
              <img src="images/editer.png" alt="" loading="lazy" class="absolute top-2 right-2 w-4 h-4">
  <img src="images/x.png" alt="" loading="lazy" class="supprimer absolute top-10 right-2 w-4 h-4">
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

  cardsContainer.insertAdjacentHTML("beforeend", cardHTML);//ajouter cardhtml f la fin du cardcontainer

  //  vider le formulaire après ajout
  document.getElementById("title").value = "";
  document.getElementById("auteur").value = "";
  document.getElementById("urlimage").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("categorie").value = "";

  // hidden pour le formulaire
  formModal.classList.add('hidden');


});
