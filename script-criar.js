let streetValue = "";
        let numberValue = "";
        let complementValue = "";

        function showModal(event) {
            event.preventDefault(); 

            const modal = document.getElementById("myModal");
            modal.style.display = "block"; 
        }

        function closeModal() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none"; 
            document.querySelector("#eventForm").reset(); 
            document.querySelector(".sub-fields").style.display = "none"; 
        }

        
        function formatCurrency(input) {
            let value = input.value.replace(/\D/g, ''); 
            if (value.length === 0) {
                input.value = '';
                return;
            }
            value = (value / 100).toFixed(2).replace('.', ','); 
            input.value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); 
        }

        // Mostra subcampos ao clicar no campo "Local do Evento"
        function toggleSubFields() {
            const subFields = document.querySelector(".sub-fields");
            if (subFields.style.display === "none" || subFields.style.display === "") {
                document.getElementById("eventStreet").value = streetValue;
                document.getElementById("eventNumber").value = numberValue;
                document.getElementById("eventComplement").value = complementValue;
                subFields.style.display = "block"; 
            } else {
                subFields.style.display = "none"; 
            }
        }

        // Armazena valores dos campos de subcampos
        function storeSubFieldValues() {
            streetValue = document.getElementById("eventStreet").value;
            numberValue = document.getElementById("eventNumber").value;
            complementValue = document.getElementById("eventComplement").value;
        }

        // Fecha os subcampos ao clicar fora dos campos de subcampos
        function hideSubFields(event) {
            const subFields = document.querySelector(".sub-fields");
            const isClickInside = subFields.contains(event.target) || event.target.id === "eventLocation";
            if (!isClickInside && subFields.style.display === "block") {
                storeSubFieldValues();
                subFields.style.display = "none"; 
            }
        }

        // Inicializa o flatpickr
        document.addEventListener('DOMContentLoaded', function() {
            flatpickr("#eventTime", {
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true, 
                minuteIncrement: 1
            });
        });

 // Função para salvar o evento no localStorage
 function saveEvent() {
            const eventName = document.getElementById("eventName").value;
            const eventProducer = document.getElementById("eventProducer").value;
            const eventLocation = document.getElementById("eventStreet").value + ', ' + document.getElementById("eventNumber").value;
            const eventDate = document.getElementById("eventDate").value;
            const eventTime = document.getElementById("eventTime").value;
            const eventRegistrationFee = document.getElementById("eventRegistrationFee").value;
            const eventDescription = document.getElementById("eventDescription").value;

            // Criação de um objeto de evento
            const event = {
                name: eventName,
                producer: eventProducer,
                location: eventLocation,
                date: eventDate,
                preview: eventName,
                time: eventTime,
                fee: eventRegistrationFee,
                description: eventDescription
            };

            // Verificar se há eventos salvos no localStorage
            let events = JSON.parse(localStorage.getItem("events")) || {};

            // Armazenar o evento na data correta
            if (!events[eventDate]) {
                events = [];
            }
            events.push(event);
            console.log(events)

            // Atualizar o localStorage com o novo evento
            localStorage.setItem("events", JSON.stringify(events));
            console.log(localStorage.length)

            // Exibir o modal de sucesso
            document.getElementById('myModal').style.display = 'flex';
        }

        // Função para fechar o modal e redirecionar para o calendário
        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
            window.location.href = 'eventos.html';
        }

        // Fecha o modal ao clicar fora dele
        window.onclick = function(event) {
            const modal = document.getElementById('myModal');
            if (event.target === modal) {
                closeModal();
            }
        }
    