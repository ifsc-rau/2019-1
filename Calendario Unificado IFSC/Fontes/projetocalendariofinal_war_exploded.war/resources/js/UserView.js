$(document).ready(function () {
    const btnEditUser = $(".btnEditUser");

    btnEditUser.on("click", (event) => {
        event.preventDefault();

        $("#modal-alerta").modal();

    });
});