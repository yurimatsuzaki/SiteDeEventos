// Dados simulados de eventos para todos os meses
const eventDetails = {
    // Janeiro
    "2024-01-01": { title: "Ano Novo", preview: "Festa de Ano Novo", description: "Celebração do Ano Novo.", poster: "" },
    // Fevereiro
    "2024-02-14": { title: "Carnaval", preview: "Carnaval", description: "Dia de curtir.", poster: "" },
    // Março
    "2024-03-31": { title: "Páscoa", preview: "Festa da páscoa", description: "Celebração dos Ovos.", poster: "" },
    // Abril
    "2024-04-01": { title: "Show de Abril", preview: "Um grande show", description: "Um espetáculo imperdível.", poster: "" },
    // Maio
    "2024-05-12": { title: "Festa das Mães", preview: "Comemoração do Dia das Mães", description: "Celebração do Dia das Mães.", poster: "" },
    // Junho
    "2024-06-12": { title: "Dia dos Namorados", preview: "Dia dos namorados", description: "Celebração do amor", poster: "" },
    // Julho
    "2024-07-01": { title: "Férias escolares", preview: "Férias escolares", description: "Fériaaaaaasss", poster: "" },
    // Agosto
    "2024-08-25": { title: "Dia do Soldado", preview: "Dia do Soldado", description: "Celebração do Dia do Soldado.", poster: "" },
    // Setembro
    "2024-09-07": { title: "Independência do Brasil", preview: "Celebração da independência", description: "Comemoração do Dia da Independência.", poster: "" },
    // Outubro
    "2024-10-12": { title: "Dia das Crianças", preview: "Celebração das Crianças", description: "Um dia especial para as crianças.", poster: "r" },
    // Novembro
    "2024-11-20": { title: "Festa da Consciência Negra", preview: "Celebração da cultura afro-brasileira", description: "Um evento cultural importante.", poster: "" },
    // Dezembro
    "2024-12-25": { title: "Natal", preview: "Celebração do Natal", description: "Comemoração do Natal.", poster: "" },
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

