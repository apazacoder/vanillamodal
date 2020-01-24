c = window.console.log;
window.addEventListener("load", function () {
    c('load!!!');
    let modal = document.querySelector(".modal")
    let btnCloseModal = document.querySelector(".btn-close-modal");
    let btnOpenModal = document.querySelector(".btn-open-modal");
    let modalWrapper = document.querySelector('.modal-wrapper');

    btnCloseModal.addEventListener("click", function () {
        c("tried to close");
        modal.classList.add("is-closed");

    });
    btnOpenModal.addEventListener("click", function () {
        c("tried to open");
        modal.classList.remove("is-closed");
    });

    modal.addEventListener("click", function () {
        c("outer clicked");
        modal.classList.add("is-closed");
    });

    modalWrapper.addEventListener("click", function (e) {
       c("propagation stopped");
       e.stopPropagation();
    });
});
