document.getElementById('uploadBtn').addEventListener('change', handleImageUpload);

        function handleImageUpload(event) {
            const fileInput = event.target;
            const files = fileInput.files;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const imageUrl = e.target.result;
                    appendImageToGallery(imageUrl);
                };

                reader.readAsDataURL(file);
            }

            fileInput.value = '';
        }

        function appendImageToGallery(imageUrl) {
            const gallery = document.getElementById('gallery');
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const image = document.createElement('img');
            image.src = imageUrl;

            image.addEventListener('click', function () {
                openModal(imageUrl);
            });

            galleryItem.appendChild(image);
            gallery.appendChild(galleryItem);
        }

        function openModal(imageUrl) {
            const modal = document.getElementById('imageModal');
            const modalContent = document.getElementById('modalContent');
            const modalImage = document.getElementById('modalImage');

            modalImage.src = imageUrl;
            modal.style.display = 'flex';

            const closeModal = document.getElementById('closeModal');
            closeModal.addEventListener('click', closeModalFunction);

            window.addEventListener('click', function (event) {
                if (event.target === modalContent) {
                    closeModalFunction();
                }
            });
        }

        function closeModalFunction() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
        }