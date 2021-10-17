
var table = $('#tBody');
var form = $('#loadRace');
var season = $("#season");
var round = $('#round');

form.on('submit', function (e) {
    e.preventDefault();


    axios.get(`https://ergast.com/api/f1/${season.val()}/${round.val()}/driverStandings.json`)
        .then(function (res) {
            var axios = res.data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
            // console.log( res.data['MRData']['StandingsTable']['StandingsLists'][0]['season'] ) 
            console.log('Works');
            table.html('')
            for (const data of axios) {
                // console.log(data.Constructors[0].constructorId)
                var node = $(`
                <tr>
                    <th scope="row">${data.position}</th>
                    <td>${data.Driver.givenName} ${data.Driver.familyName}</td>
                    <td>${data.Driver.nationality}</td>
                    <td>${data.Constructors[0].name}</td>
                    <td>${data.points}</td>
                </tr>
            ` )
                table.append(node)

            }

        })

});

