window.addEventListener('load', () => {

    let form = document.querySelector('form');

    form.addEventListener('submit', (e) => {

        let testName = document.querySelector('input[name="testName"]');
        let testDate = document.querySelector('input[name="testDate"]');
        let rocketType = document.querySelector('select');
        let boosterCount = document.querySelector('input[name="boosterCount"]');
        let windRatings = document.querySelectorAll('input[name="windRating"]');
        let productionServers = document.querySelector('input[name="productionServers"]');
        
        
       if (testName.value === '' || testDate.value === '' || rocketType.value === '' || boosterCount.value === '' || productionServers.checked === false) {

            alert('Please fill in all fields');
            e.preventDefault();

        } else if (windRatings[0].checked === false && windRatings[1].checked === false && windRatings[2].checked === false) {

            alert('Please fill in all fields');
            e.preventDefault();

        }

    });

});