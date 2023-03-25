export class Flight {
    date: string = '';
    timeOfArrival: string = '';
    timeOfDeparture: string = '';
    placeOfArrival: string = '';
    placeOfDeparture: string = '';
    planeCapacity: number = 0;
    ticketPriceInEuros: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.date = obj.date;
            this.timeOfArrival = obj.timeOfArrival;
            this.timeOfDeparture = obj.timeOfDeparture; 
            this.placeOfArrival = obj.placeOfArrival;
            this.placeOfDeparture = obj.placeOfDeparture;
            this.planeCapacity = obj.planeCapacity;   
            this.ticketPriceInEuros = obj.ticketPriceInEuros;            
        }
    }
}