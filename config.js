var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoiam1hcnRpbnRyYWlub3IiLCJhIjoiY2x2bXliYWhvMDducjJsbnh1dWh0YnJqbiJ9.fsYJqNlqMq492wAcRCTxMg',
    showMarkers: true,
    markerColor: '#000000',
    inset: true,
    theme: 'light',
    use3dTerrain: false, 
    auto: false,
    title: 'The Caitlin Clark Effect',
    subtitle: 'Caitlin Clark and the rest of her team have changed the game, with that impact being seen across the Big Ten.',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'iowa',
            alignment: 'left',
            hidden: false,
            title: 'Iowa as a hub for immigration',
            description: 'With the emergence of Caitlin Clark and the Iowa women&#39;s basketball team, viewership and attendance records were smashed by the Hawkeyes. When on the road, whether it be as close as Minnesota or as far as Maryland, attendance rates skyrocketed anywhere from 50 to 400 percent compared to the stadium average for women&#39;s basketball games. Carver&#45;Hawkeye Arena was sold out for every single game this academic year. Explore the impact the Iowa Hawkeyes had on the road for the 2023&#45;24 season. Photo&#58 Emily Nyberg&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-93.49766, 42.09320],
                zoom: 6.69,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'liberia',
            alignment: 'left',
            hidden: false,
            title: 'University of Northern Iowa',
            description: 'Iowa played the University of Northern Iowa Panthers early in the season on Nov. 12, beating them 94&#45;53. Around an hour and a half drive away, attendance increased by 62 percent compared to the home game’s average with 6,790 fans in the stadium. This was also the game where Clark broke the University of Iowa’s all&#45;time scoring record, previously held by Megan Gustafson. Photo&#58 University of Northern Iowa Athletics',
            location: {
                center: [-9.29426, 6.43569],
                zoom: 7.10,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'togo',
            alignment: 'left',
            hidden: false,
            title: 'Iowa State University',
            description: 'Iowa’s game at Iowa State on Dec. 6 led to the lowest increase compared to average attendance at 38 percent, with a staggering 14,267 fans in attendance. Iowa State also had the highest average attendance of Iowa&#39;s regular opponents for the 2023&#45;24 season with 10,323 fans filling the stadium. Iowa managed a win against Iowa State with a final score of 67&#45;58. Photo&#58 Ayrton Breckenridge&#47;<em>The Daily Iowan</em>',
            location: {
                center: [1.03541, 8.74474],
                zoom: 6.55,
                pitch: 45.00,
                bearing: -40.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'the democratic republic of the congo',
            alignment: 'left',
            hidden: false,
            title: 'University of Wisconsin',
            description: 'Wisconsin marked Iowa’s first conference away game for the Big Ten on Dec. 10, with the Hawkeyes traveling around 150 miles away to beat Wisconsin 87&#45;65. Iowa&#39;s appearance in Madison, Wisconsin, cased the Badger&#39;s attendance to increase by 239 percent from the school&#39;s average attendance for women&#39;s basketball games with 14,252 in attendance. Photo&#58 Grace Smith&#47;<em>The Daily Iowan</em>',
            location: {
                center: [22.95954, -1.12716],
                zoom: 5.12,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
}