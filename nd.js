let servicios = [
    {nombre: "Atención", calificaciones: []},
    {nombre: "Comida", calificaciones: []},
    {nombre: "Bebidas", calificaciones: []},
    {nombre: "Precios", calificaciones: []}
];

// Mostrar servicios disponibles y pedir selección
function seleccionarServicio() {
    let mensaje = "Seleccione el servicio a calificar:\n";
    servicios.forEach((servicio, index) => {
        mensaje += `${index + 1}. ${servicio.nombre}\n`;
    });
    let opcion = parseInt(prompt(mensaje));
    if (isNaN(opcion) || opcion < 1 || opcion > servicios.length) {
        alert("Opción inválida.");
        return null;
    }
    return servicios[opcion - 1];
}

// 1. Registrar una calificación (1-5)
function registrarCalificacion() {
    let servicio = seleccionarServicio();
    if (!servicio) return;

    let calificacion = parseInt(prompt(`Ingrese calificación para ${servicio.nombre} (1-5):`));
    if (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
        alert("Calificación inválida. Debe estar entre 1 y 5.");
        return;
    }
    servicio.calificaciones.push(calificacion);
    alert(`Calificación registrada para ${servicio.nombre}.`);
}

// 2. Mostrar cantidad de votos por categoría
function mostrarCantidadVotos() {
    servicios.forEach(servicio => {
        if (servicio.calificaciones.length === 0) {
            alert($`{servicio.nombre}: No hay calificaciones registradas.`);
        } else {
            let conteo = [0, 0, 0, 0, 0]; // 1 a 5
            servicio.calificaciones.forEach(c => {
                conteo[c - 1]++;
            });
            let mensaje = `Votos para ${servicio.nombre}:\n;`
            conteo.forEach((cantidad, index) => {
                mensaje += `${index + 1} estrella(s): ${cantidad} voto(s)\n`;
            });
            alert(mensaje);
        }
    });
}

// 3. Mostrar promedio de calificaciones
function mostrarPromedio() {
    let mensaje = "Promedio de calificaciones por servicio:\n\n";

    servicios.forEach(servicio => {
        if (servicio.calificaciones.length === 0) {
            mensaje += `${servicio.nombre}: No hay calificaciones registradas.\n`;
        } else {
            let suma = servicio.calificaciones.reduce((acc, val) => acc + val, 0);
            let promedio = suma / servicio.calificaciones.length;
            mensaje += `${servicio.nombre}:  Promedio de calificación = ${promedio.toFixed(2)}\n`;
        }
    });

    alert(mensaje);
}


// 4. Eliminar último voto registrado
function eliminarUltimoVoto() {
    let servicio = seleccionarServicio();
    if (!servicio) return;

    if (servicio.calificaciones.length === 0) {
        alert(`No hay votos para eliminar en ${servicio.nombre}.`);
        return;
    }
    let eliminado = servicio.calificaciones.pop();
    alert(`Se eliminó el último voto (${eliminado}) de ${servicio.nombre}.`);
}

// 5. Salir
function menu() {
    let opcion;
    do {
        opcion = prompt(`Encuesta de Satisfacción\n
1. Registrar una calificación (1-5)
2. Mostrar cantidad de votos por categoría
3. Mostrar promedio de calificaciones
4. Eliminar último voto registrado
5. Salir\n
Seleccione una opción:`);

        switch(opcion) {
            case "1":
                registrarCalificacion();
                break;
            case "2":
                mostrarCantidadVotos();
                break;
            case "3":
                mostrarPromedio();
                break;
            case "4":
                eliminarUltimoVoto();
                break;
            case "5":
                alert("Gracias por participar en la encuesta.");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    } while (opcion !== "5");
}

menu();