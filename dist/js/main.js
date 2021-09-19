// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// // Events 
// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)

//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   const pageBody = document.querySelector('body')
//   pageBody.innerHTML +=
//     `<div class="modal" id="modal">
//   <div class="modal-header">
//     <div class="title">Example Modal</div>
//     <button data-close-button class="close-button">&times;</button>
//   </div>
//   <div class="modal-body">
//     Πχ ο Fighter έχει 1d10 στο πρώτο level, 2d10 στο δεύτερο κτλπ. Όταν ένας χαρακτήρας κάνει short rest μπορεί να
//     ξοδέψει HD για να πάρει πίσω χαμένα HP αλλά όχι περισσότερα από το Max HP. Παίρνει πίσω τα μισά HD από το σύνολο
//     που έχει διαθέσιμα στο level του μετά από ένα long rest, πχ αν είναι 8ο level μπορεί να πάρει πίσω 4 HD.
//   </div>
// </div>
// <div id="overlay"></div>`
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }











