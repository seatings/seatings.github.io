// Создаю websocket-соеденеие со стороны Web
const ioWebSeatmap = io.connect('http://api.evenz.co/client-api/web/seatmap');

// Принимаю данные для запроса к Ticketevolution со стороны Сервера
ioWebSeatmap.on("event-data-from-server", function(data) {

    // Список белетов получинный из api Ticketevolution
    const ticketList = [
        {
            "id": "1858306",
            "price": "72.0",
            "section": "PR15",
            "row": "5",
            "avail": "2",
            "qty": "5",
            "notes": "rien"
        },
        {
            "id": "1858307",
            "price": "62.0",
            "section": "PR15",
            "row": "6",
            "avail": "2",
            "qty": "2",
            "notes": "rien"
        },
        {
            "id": "1858307",
            "price": "82.0",
            "section": "PR15",
            "row": "4",
            "avail": "1",
            "qty": "4",
            "notes": "rien"
        },
    ];

    // Отправляю полученный список белетов из Web на Cервер 
    ioWebSeatmap.emit("tickets-list-from-web", ticketList);
});