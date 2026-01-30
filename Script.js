const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const articleDiv= document.querySelector('.article-div');
const urlDiv = document.querySelector('.url-div');

// 👌
function toggleContent(num){
    if(num==1){
      urlDiv.style.display='none';
      articleDiv.style.display='block';
    }else{
      articleDiv.style.display='none';
      urlDiv.style.display='block';
    }
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

/////////////////////////////////////////////////////////////////////////////////////////
// get the 2 text input that are available
const predictionTEXT = document.querySelector("#prediction-text")
const predictionURL = document.querySelector("#prediction-url")
const predictTEXT = document.querySelector("#predict-text")
const predictURL = document.querySelector("#predict-url")

predictURL.addEventListener("click", async (e) => {
    e.preventDefault()
    predictURL.innerHTML = "<h5>Loading...</h5>"
     predictTEXT.setAttribute('disable', 'true')

    const newsText = predictionURL.value;
    
    window.location.href = "./fake-news-detector.html"

    // when completed !!
    predictURL.innerHTML = "<h5>Predict</h5>"
     predictTEXT.setAttribute('disable', 'false')
})

// Second button |||||||||||||||||||||||||||||||||||| SECOND BUTTON
predictTEXT.addEventListener("click", async (e) => {
    e.preventDefault()
    predictTEXT.innerHTML = "<h5>Loading...</h5>"
    predictTEXT.setAttribute('disable', 'true')

    const newsText = predictionTEXT.value;
    
    window.location.href = "./fake-news-detector.html"

    // when completed !!
    predictTEXT.innerHTML = "<h5>Predict</h5>"
    predictTEXT.setAttribute('disable', 'false')
})
