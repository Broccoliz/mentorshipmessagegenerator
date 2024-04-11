document.getElementById("copyButton").addEventListener("click", function() {
    var outputMessage = document.getElementById("outputMessage");
  
    // Create a temporary textarea to hold the text content
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = outputMessage.innerText;
    document.body.appendChild(tempTextarea);
  
    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  
    // Provide visual feedback or alert to indicate copy success
    alert("LF Mentor Text copied to clipboard!");
  });

  document.getElementById("copyIntroButton").addEventListener("click", function() {
    var introMessage = document.getElementById("introMessage");
  
    // Create a temporary textarea to hold the text content
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = introMessage.innerText;
    document.body.appendChild(tempTextarea);
  
    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  
    // Provide visual feedback or alert to indicate copy success
    alert("Intro Text copied to clipboard!");
  });