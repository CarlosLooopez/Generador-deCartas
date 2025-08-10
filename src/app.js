 let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let palos = ['♠', '♥', '♦', '♣'];

        // Generar carta aleatoria
        function generarCarta() {
            let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
            let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
            
            // Determinar color
            let color = (paloAleatorio === '♥' || paloAleatorio === '♦') ? 'red' : 'black';
            
            // Mostrar en las tres posiciones
            document.getElementById('topLeft').innerHTML = valorAleatorio + '<br>' + paloAleatorio;
            document.getElementById('center').textContent = paloAleatorio;
            document.getElementById('bottomRight').innerHTML = valorAleatorio + '<br>' + paloAleatorio;
            
            // Aplicar color
            document.getElementById('topLeft').style.color = color;
            document.getElementById('center').style.color = color;
            document.getElementById('bottomRight').style.color = color;
        }

        // Generar carta al cargar la página
        generarCarta();