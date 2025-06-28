fetch('gallery.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.querySelector('.gallery-grid');
    images.forEach(img => {
      const container = document.createElement('div');
      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.title;
      const caption = document.createElement('p');
      caption.textContent = img.title;
      container.appendChild(image);
      container.appendChild(caption);
      gallery.appendChild(container);
    });
  });

