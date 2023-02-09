import { calc } from "../main";

test("Deve fazer uma corrida em um dia de semana e em horário normal", function(){
    const segments = [
        { dist: 10, ds: new Date("2021-03-10T10:00:00") }
    ];
   const fare = calc(segments);
   expect(fare).toBe(21)
});

test("Deve fazer uma corrida em um dia de semana e em horário normal", function(){
    const segments = [
        { dist: 10, ds: new Date("2021-03-10T23:00:00") }
    ];
   const fare = calc(segments);
   expect(fare).toBe(39)
});