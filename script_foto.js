var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
   
           if (loggedInUser) {
               document.getElementById("profileName").textContent = loggedInUser.nome;
               document.getElementById("Publicador").value = loggedInUser.nome; // Define o valor do input
               // Corrigindo o caminho da imagem para buscar da pasta "fotos"
               document.getElementById("profileImage").src = "fotos/" + loggedInUser.imagem;
           } else {
               alert("Nenhum usuário logado. Faça login primeiro.");
               window.location.href = "login.html";
           }