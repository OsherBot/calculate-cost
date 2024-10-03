const boys = [];

const addToGroupBtn = document.querySelector('.js-add-to-group');

const nameInput = document.querySelector('.js-name');

const costInput = document.querySelector('.js-cost');

const sharedCostInput = document.querySelector('.js-shared-cost');

const theBoysList = document.querySelector('.js-the-boys-list');


addToGroupBtn.addEventListener('click', () => {
  addBoy();
  updateAllboyCost();
  displayBoysOnPage();
});

function addBoy () {
  if (nameInput.value && costInput.value) {
    boys.push({
      name: nameInput.value,
      baseCost: Number(costInput.value)
    });
  
    nameInput.value = '';
    costInput.value = '';
  };
}

function updateAllboyCost () {
  const sharedCost = Number(sharedCostInput.value) || 0; 
  const totalBoys = boys.length;

  boys.forEach((boy) => {
    const sharedCostPerBoy = sharedCost / totalBoys;

    boy.cost = boy.baseCost + sharedCostPerBoy; 
  });
}

function displayBoysOnPage () {
  let summeryHTML = '';

  let boyNumber = 0;

  boys.forEach((boy) => {
    boyNumber ++;

    html = `
      <p class="boy"> boy ${boyNumber}: ${boy.name}, 
        cost: ${Math.ceil(boy.cost)}
      </p>
    `;

    summeryHTML += html;

    console.log(summeryHTML);

    theBoysList.innerHTML = summeryHTML;
  });
}






