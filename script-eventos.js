// Dados simulados de eventos para todos os meses
let img = document.getElementById('imgPoster')
const eventDetails = {
    "2024-10-08": { title: "Festa 1", preview: "Festa 1", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post1.jpg" },

    "2024-10-12": { title: "Festa 2", preview: "Festa 2", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post3.jpeg" },

    "2024-10-17": { title: "Festa 3", preview: "Festa 3", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post3.jpg" },

    "2024-10-28": { title: "Festa 4", preview: "Festa 4", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post4.webp" },

    "2024-10-30": { title: "Carabao em sip", preview: "Carabao em sip", description: "Muita festa e alegria para o povo de sip", poster: "imagens/circuito-furioso.png" },

    "2024-11-05": { title: "Carabao em sip", preview: "Carabao em sip", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post5.jpg" },

    "2024-11-13": { title: "festa6", preview: "festa6", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post6.jpeg" },

    "2024-11-22": { title: "festa6", preview: "festa6", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post7.jpg" },

    "2024-11-25": { title: "festa6", preview: "festa6", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post8.jpeg" },

    "2024-11-29": { title: "festa6", preview: "festa6", description: "Muita festa e alegria para o povo de sip", poster: "imagens/post9.jpeg" },
};

const calendarElement = document.getElementById('event-calendar');
const monthDisplay = document.getElementById('month-display');
const eventDetailsElement = document.getElementById('event-details');
const eventInfoElement = document.getElementById('event-info');

function generateCalendar(month) {
    const year = 2024; 
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // Limpar o calendário anterior
    calendarElement.innerHTML = '';

    // Adicionar dias do mês
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarElement.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');
        calendarDay.textContent = day;

        // Adicionar evento se existir
        if (eventDetails[dateString]) {
            const event = eventDetails[dateString];
            calendarDay.classList.add('has-event');
            calendarDay.innerHTML += `<div class="event-preview">${event.preview}</div>`;
            calendarDay.onclick = () => showEventDetails(dateString);
        } else {
            calendarDay.onclick = () => showNoEventsMessage(dateString);
        }

        calendarElement.appendChild(calendarDay);
    }
}
function showEventDetails(date) {
    const event = eventDetails[date];
    if (event) {
        eventInfoElement.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;
        
        // Atualize a área do pôster com a imagem ou texto padrão
        const posterElement = document.querySelector('.poster');
        if (event.poster) {
            posterElement.innerHTML = `<img src="${event.poster}" alt="Poster do Evento" style="width: 100%; height: 100%; border-radius: 8px;">`;
        } else {
            posterElement.textContent = "Poster"; // Texto padrão se não houver imagem
        }
        
        eventDetailsElement.style.display = 'block'; 
    }
}

function showNoEventsMessage(date) {
    eventInfoElement.innerHTML = `<p>Não há eventos programados para ${date}.</p>`;
    eventDetailsElement.style.display = 'block'; 
}

function changeMonth() {
    const monthSelector = document.getElementById('month-selector');
    const selectedMonth = parseInt(monthSelector.value);
    monthDisplay.textContent = monthSelector.options[monthSelector.selectedIndex].text;
    generateCalendar(selectedMonth);
}

function loadCalendarByCity() {
    // Carregamento baseado na cidade selecionada 
    const selectedCity = document.getElementById('city-selector').value;
    console.log(`Carregando eventos para a cidade: ${selectedCity}`);
    generateCalendar(10); 
}

function loadStoredEvents() {
// Carregar eventos do localStorage e adicioná-los ao calendário
for (let i = 1; i <= 12; i++) { // Para cada mês
const daysInMonth = new Date(2024, i, 0).getDate(); // Total de dias do mês
for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `2024-${(i).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const storedEvent = localStorage.getItem(dateString);
    if (storedEvent) {
        eventDetails[dateString] = JSON.parse(storedEvent); // Adiciona o evento ao objeto de detalhes
    }
}
}
}

function initializeCalendar() {
loadStoredEvents(); // Carrega os eventos ao iniciar
generateCalendar(10); // Gera o calendário para novembro
}

// Inicializa o calendário ao carregar a página
window.onload = initializeCalendar;

