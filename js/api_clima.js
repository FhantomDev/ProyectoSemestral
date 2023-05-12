window.addEventListener('load', () => {
    let lon
    let lat

    let temperatura = document.getElementById('temperatura')
    let descripcion = document.getElementById('descripcion')
    let lugar = document.getElementById('lugar')
    let humedad = document.getElementById('humedad')
    let pais = document.getElementById('pais')
    let verIcono = document.getElementById('icono')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(ubicacion => {

            lon = ubicacion.coords.longitude
            lat = ubicacion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3ae80e82c01ac76584b76e5b7ed603ec&lang=es&units=metric`

            fetch(url)
                .then(response => { return response.json() })
                .then(datos => {

                    console.log(datos)
                    temperatura.textContent = 'Temp. ' + datos.main.temp + ' °C'
                    let desc = datos.weather[0].description
                    descripcion.textContent = desc.toUpperCase()
                    lugar.textContent = datos.name
                    humedad.textContent = `Humedad ${datos.main.humidity} %`
                    pais.textContent = datos.sys.country
                    let icono = datos.weather[0].icon
                    const urlIcono = `https://openweathermap.org/img/wn/${icono}.png`
                    verIcono.src= urlIcono

                })
                .catch(error => {
                    console.log(error)


                })
        })
    }
})
