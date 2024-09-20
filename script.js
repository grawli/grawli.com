document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-btn');
    const noteContent = document.getElementById('note-content');
  
    saveButton.addEventListener('click', () => {
      const text = noteContent.value;
      const blob = new Blob([text], { type: 'text/plain' });
      const anchor = document.createElement('a');
  
      anchor.download = 'note.txt';
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target = '_blank';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
  
      document.body.removeChild(anchor);
    });
  });