document
  .getElementById('urlForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const urls = [
      document.getElementById('repo1').value,
      document.getElementById('repo2').value,
      document.getElementById('repo3').value,
      document.getElementById('repo4').value,
    ];

    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous iframes

    urls.forEach((url) => {
      fetch(url, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = '400';
            iframe.height = '400';
            iframe.style.overflow = 'hidden';
            iframe.style.border = 'none';
            iframe.style.width = '400px';
            iframe.style.height = '400px';
            iframe.style.overflow = 'hidden';
            iframe.style.msOverflowStyle = 'none'; // IE and Edge
            iframe.style.scrollbarWidth = 'none'; // Firefox
            iframe.style.webkitOverflowScrolling = 'touch'; // iOS
            gridContainer.appendChild(iframe);
          } else {
            const errorDiv = document.createElement('div');
            errorDiv.textContent = `Error: ${url} is not reachable.`;
            errorDiv.style.color = 'red';
            gridContainer.appendChild(errorDiv);
          }
        })
        .catch(() => {
          const errorDiv = document.createElement('div');
          errorDiv.textContent = `Error: ${url} is not reachable.`;
          errorDiv.style.color = 'red';
          gridContainer.appendChild(errorDiv);
        });
    });

    // Fetch and execute JavaScript from an online text file
    const scriptUrl = 'https://example.com/path/to/your/script.txt';
    fetch(scriptUrl)
      .then((response) => response.text())
      .then((scriptContent) => {
        eval(scriptContent);
      })
      .catch((error) => {
        console.error('Error fetching or executing script:', error);
      });
  });
