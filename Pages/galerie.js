const deleteModal = document.getElementById("DeletePhotoModal");
const previewImg = document.getElementById("deletePhotoPreview");

if (deleteModal && previewImg) {
  deleteModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    if (!button) {
      return;
    }

    const card = button.closest(".image-card");
    const img = card ? card.querySelector("img") : null;

    if (!img) {
      previewImg.removeAttribute("src");
      previewImg.alt = "Aperçu de la photo à supprimer";
      previewImg.classList.add("d-none");
      return;
    }

    previewImg.src = img.getAttribute("src") || "";
    previewImg.alt = img.getAttribute("alt") || "Aperçu de la photo à supprimer";
    previewImg.classList.remove("d-none");
  });
}
