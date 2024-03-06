const { DateTime } = require("luxon");

const jsonData = {
  "id": 1,
  "name": "Business TEST",
  "shops": [
    {
      "id": 1,
      "schedules": [
        {
          "openFrom": "12:00",
          "openTo": "14:54"
        },
        {
          "openFrom": "10:00",
          "openTo": "11:32"
        },
        {
          "openFrom": "12:41",
          "openTo": "13:00"
        },
        {
          "openFrom": "16:00",
          "openTo": "20:30"
        }
      ]
    },
    {
      "id": 2,
      "schedules": [
        {
          "openFrom": "11:58",
          "openTo": "13:54"
        },
        {
          "openFrom": "09:20",
          "openTo": "10:25"
        },
        {
          "openFrom": "16:30",
          "openTo": "21:30"
        }
      ]
    },
    {
      "id": 3,
      "schedules": [
        {
          "openFrom": "21:31",
          "openTo": "23:12"
        },
        {
          "openFrom": "10:30",
          "openTo": "10:40"
        },
        {
          "openFrom": "13:58",
          "openTo": "16:00"
        }
      ]
    }
  ]
};

function encontramosHorarios(data) {
  // Creamos una constante para guardar los horarios
  const allSchedules = [];

  for (const shop of data.shops) {
    for (const schedule of shop.schedules) {
      //Convertimos las cadenas de tiempo en objetos DateTime
      const openFrom = DateTime.fromFormat(schedule.openFrom, "HH:mm");
      const openTo = DateTime.fromFormat(schedule.openTo, "HH:mm");

      // Guadamos los datos, indicando si es del grupo "openFrom" o "openTo" en la constante creada anteriormente
      allSchedules.push({ time: openFrom, type: "open" });
      allSchedules.push({ time: openTo, type: "close" });
    }
  }

  // Ordenamos los valores de forma ascendente 
  allSchedules.sort((a, b) => a.time - b.time);

  // Creamos una constante para almacenar el resultado
  const encontramosHorarios = [];
  // Definimos inicialmente una variable en valor negativo para indicar que no hay ninguna apertura de tienda
  let currentOpenFrom = null;
  // Definimos un contador
  let openCount = 0;

  /**
   * Este apartado, sirve para ir recorriendo el JSON y en el momento que encontramos un evento de apertura, miramos si es el primer evento de apertura en un nuevo intervalo.
   * Si es así, establecemos el tiempo de apertura actual. Cuando encontramos un evento de cierre, decrementamos el contador y, si volvemos a cero, agregamos el intervalo en encontramosHorarios
   */
  for (const schedule of allSchedules) {
    if (schedule.type === "open") {
      if (openCount === 0) {
        currentOpenFrom = schedule.time;
      }
      openCount++;
    } else {
      openCount--;
      if (openCount === 0) {
        encontramosHorarios.push({
          openFrom: currentOpenFrom.toFormat("HH:mm"),
          openTo: schedule.time.toFormat("HH:mm"),
        });
        currentOpenFrom = null;
      }
    }
  }

  return encontramosHorarios;
}

// Implementamos la función con el JSON y mostramos el resultado
const resultado = encontramosHorarios(jsonData);
console.log(resultado);
