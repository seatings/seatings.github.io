// Создаю websocket-соеденеие со стороны Web
const ioWebSeatmap = io.connect('http://api.evenz.co/client-api/web/seatmap');

// Принимаю данные для запроса к Ticketevolution со стороны Сервера
ioWebSeatmap.on("event-data-from-server", function(data) {

    // Список белетов получинный из api Ticketevolution
    /*const ticketList = [
        { ticket: 1 },
        { ticket: 2 },
        { ticket: 3 }
    ];*/

    const ticketList = "Hello from seatmap.evenz.co";

    // Отправляю полученный список белетов из Web на Cервер 
    ioWebSeatmap.emit("tickets-list-from-web", ticketList);
});