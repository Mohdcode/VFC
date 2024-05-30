document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.qr-code-section .btn-pink');
    const qrImage = document.querySelector('.qr-code-section .qr-code');
  
    downloadButton.addEventListener('click', () => {
      const imageUrl = qrImage.src;
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'qr-code.jpeg'; // You can customize the file name here
  
      // Append to the DOM to trigger the download
      document.body.appendChild(link);
      link.click();
  
      // Clean up and remove the link
      document.body.removeChild(link);
    });
  });
  