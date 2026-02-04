
  const plusBtn = document.getElementById('plusBtn');
  const formModal = document.getElementById('formModal');
    const saveBtn = document.getElementById('saveBtn');
const cardsContainer = document.getElementById("cardsContainer");
const annuler=document.getElementById("closeBtn");
    plusBtn.addEventListener('click', () => {
      formModal.classList.remove('hidden');
    });
 annuler.addEventListener('click', () => {
      formModal.classList.add('hidden');
    });
    saveBtn.addEventListener('click', () => {
      
      const title=document.getElementById("title").value;
      const auteur=document.getElementById("auteur").value;
      const urlimage=document.getElementById("urlimage").value;
      const destination=document.getElementById("destination").value;
      const categorie=document.getElementById("categorie").value;
    

  const cardHTML = `
  <div class="hover:cursor-pointer bg-white rounded-3xl shadow-md overflow-hidden 
              flex flex-col lg:flex-row">

    <div class="relative w-full lg:w-64 h-56 lg:h-40 flex-shrink-0 overflow-hidden">
      <a href="description.html">
        <img src="${urlimage}" 
             class=" w-full  object-cover h-full">
        <img src="images/insigne-damour.png"
             class="absolute top-4 right-4 w-10 h-10">
      </a>
    </div>

    <div class="p-4 flex flex-col justify-between gap-4">
      <div>
        <h2 class="font-bold text-lg">${title}</h2>
        <h3 class="text-sm text-gray-600">by${auteur} </h3>
      </div>

      <div class="flex gap-6 text-gray-500 text-sm">
        <span class="flex items-center gap-1">
          <img src="images/endroit.png" class="w-4 h-4"> ${destination}
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
});