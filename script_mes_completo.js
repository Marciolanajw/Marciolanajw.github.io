var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

                    if (loggedInUser) {
                        document.getElementById("profileName").textContent = loggedInUser.nome;
                        document.getElementById("Publicador").value = loggedInUser.nome;
                        var monthName = new Date().toLocaleString('default', { month: 'long' }); // Obtém o nome completo do mês
                        var capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1); // Capitaliza a primeira letra do mês
                        document.getElementById("currentMonth").textContent = capitalizedMonth;
                        document.getElementById("currentMonthInput").value = capitalizedMonth; // Define o valor do campo de input
                        document.getElementById("profileImage").src = "fotos/" + loggedInUser.imagem;
                    } else {
                        alert("Nenhum usuário logado. Faça login primeiro.");
                        window.location.href = "login.html";
                    }