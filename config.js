var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoiam1hcnRpbnRyYWlub3IiLCJhIjoiY2x2bXliYWhvMDducjJsbnh1dWh0YnJqbiJ9.fsYJqNlqMq492wAcRCTxMg',
    showMarkers: true,
    markerColor: '#FFCD00',
    inset: true,
    theme: 'light',
    use3dTerrain: false, 
    auto: false,
    title: 'The Caitlin Clark Effect',
    subtitle: 'Caitlin Clark and the rest of her team have changed the game, with that impact being seen across the Big Ten.',
    byline: 'By Jami Martin-Trainor',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'iowa',
            alignment: 'left',
            hidden: false,
            title: 'The University of Iowa',
            image: 'img/university-of-iowa.jpg',
            description: 'With the emergence of Caitlin Clark and the Iowa women&#39;s basketball team, viewership and attendance records were smashed by the Hawkeyes. When on the road, whether it be as close as Minnesota or as far as Maryland, attendance rates skyrocketed anywhere from 50 to 400 percent compared to the stadium average for women&#39;s basketball games. Carver&#45;Hawkeye Arena was sold out for every single game this academic year. Explore the impact the Iowa Hawkeyes had on the road for the 2023&#45;24 season. Photo&#58 Emily Nyberg&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-91.55452, 41.66370],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'northern-iowa',
            alignment: 'left',
            hidden: false,
            title: 'University of Northern Iowa',
            image: 'img/northern-iowa.jpg',
            description: 'Iowa played the University of Northern Iowa Panthers early in the season on Nov. 12, beating them 94&#45;53. Around an hour and a half drive away, attendance increased by 62 percent compared to the home game’s average with 6,790 fans in the stadium. This was also the game where Clark broke the University of Iowa’s all&#45;time scoring record, previously held by Megan Gustafson. Photo&#58 University of Northern Iowa Athletics',
            location: {
                center: [-92.46733, 42.51433],
                zoom: 15.68,
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
            id: 'iowa-state',
            alignment: 'left',
            hidden: false,
            title: 'Iowa State University',
            image: 'img/iowa-state.JPG',
            description: 'Iowa’s game at Iowa State on Dec. 6 led to the lowest increase compared to average attendance at 38 percent, with a staggering 14,267 fans in attendance. Iowa State also had the highest average attendance of Iowa&#39;s regular opponents for the 2023&#45;24 season with 10,323 fans filling the stadium. Iowa managed a win against Iowa State with a final score of 67&#45;58. Photo&#58 Ayrton Breckenridge&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-93.63475, 42.02098],
                zoom: 15.69,
                pitch: 45.00,
                bearing: -40.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wisconsin',
            alignment: 'left',
            hidden: false,
            title: 'University of Wisconsin',
            image: 'img/wisconsin.jpg',
            description: 'Wisconsin marked Iowa’s first conference away game for the Big Ten on Dec. 10, with the Hawkeyes traveling around 150 miles away to beat Wisconsin 87&#45;65. Iowa&#39;s appearance in Madison, Wisconsin, cased the Badger&#39;s attendance to increase by 239 percent from the school&#39;s average attendance for women&#39;s basketball games with 14,252 in attendance. Photo&#58 Grace Smith&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-89.39681, 43.06942],
                zoom: 15.86,
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
            id: 'rutgers',
            alignment: 'left',
            hidden: false,
            title: 'Rutgers University',
            image: 'img/rutgers.jpg',
            description: 'Iowa&#39;s first away game of the new year on Jan. 5 against Rutgers was an absolute blowout, with Iowa winning 103&#45;69. Clark Clark notched her 14th&#45;career triple&#45;double this game with 29 points, 10 rebounds, and 10 assists. Game attendance increased, compared to the stadium average, by over 5,000 attendees which totals a 185 percent increase. Photo&#58 Cody Blissett&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-74.44130, 40.52527],
                zoom: 16.00,
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
            id: 'purdue',
            alignment: 'left',
            hidden: false,
            title: 'Purdue University',
            image: 'img/purdue.jpg',
            description: 'Hawkeye fans traveled to Indiana to watch Iowa beat Purdue 96&#45;71 on Jan. 10. Fan attendance once again dramatically increased by 148 percent, with 14,876 individuals in attendance. Prior to this game, the Purdue Boilermakers were undefeated at home, proving to be a tough environment for the Hawkeyes.Photo&#58 Ayrton Breckenridge&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-86.91611, 40.43328],
                zoom: 16.00,
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
            id: 'ohio-state',
            alignment: 'left',
            hidden: false,
            title: 'Ohio State University',
            image: 'img/ohio-state.jpg',
            description: 'Ohio State marked the Iowa Hawkeye&#39;s first loss in the conference, falling to the Buckeye&#39;s 92&#45;100. Fans of the Ohio State women&#39;s basketball team showed up and out, providing a difficult mental game for the Hawkeye&#39;s. Attendance at this game increased by 147 percent, with nearly 20,000 people packed in the stadium. Photo&#58 Ayrton Breckenridge&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-83.02517, 40.00764],
                zoom: 15.99,
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
            id: 'northwestern',
            alignment: 'left',
            hidden: false,
            title: 'Northwestern University',
            image: 'img/northwestern.jpg',
            description: 'Iowa bounced back after their loss against Ohio State with a game against Nebraska at home, then continued that with a road win against Northwestern. The Hawkeyes beat the Wildcats 110&#45;74 on Jan. 31 with the most dramatic increase in attendance the Hawkeyes saw all season. With a measly average attendance of 1,320, the Hawkeyes caused a 433 percent increase. Photo&#58 Grace Smith&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-87.69256, 42.06539],
                zoom: 15.17,
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
            id: 'maryland',
            alignment: 'left',
            hidden: false,
            title: 'University of Maryland',
            image: 'img/maryland.JPG',
            description: 'The Iowa Hawkeyes traveled all the way to the east coast to secure a win against Maryland, beating the team 93&#45;85 on Feb. 3 Clark scored an astounding 38 points and 12 assists, carrying the Hawkeyes to victory. The Hawkeyes caused attendance to increase by over 10,000, 152 percent above the average. Photo&#58 Cody Blissett&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-76.94126, 38.99557],
                zoom: 15.83,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
        },
        {
            id: 'nebraska',
            alignment: 'left',
            hidden: false,
            title: 'University of Nebraska',
            image: 'img/nebraska.jpg',
            description: 'Iowa fell to Nebraska 79&#45;82 in Lincoln on Feb. 11, marking the second conference loss for the Hawkeyes. Attendance once again soared from the average by nearly 10,000 individuals, increasing by 197 percent. By the end of this game, Clark was a mere 8 points away from breaking the all&#45;time scoring record for NCAA women&#39;s basketball. Photo&#58 Grace Smith&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-96.71248, 40.81799],
                zoom: 15.56,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
        },
        {
            id: 'indiana',
            alignment: 'left',
            hidden: false,
            title: 'Indiana State University',
            image: 'img/indiana.JPG',
            description: 'Indiana got its revenge against an earlier loss to the Hawkeye&#39;s, beating Iowa 69&#45;86. The rowdy environment the Hoosiers brought with a 112 percent increase in attendance once again impacted the Hawkeyes, marking Iowa&#39;s third and last conference loss of the season. Photo&#58 Ayrton Breckenridge&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-86.52225, 39.18086],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
        },
        {
            id: 'minnesota',
            alignment: 'left',
            hidden: false,
            title: 'University of Minnesota',
            image: 'img/minnesota.jpg',
            description: 'Iowa’s final away game of the regular season ended with a win for the Hawkeyes, blowing out the Minnesota Gophers 108&#45;60. Attendance once again increased by a staggering 346 percent, with around 15,000 fans in the stadium. After this game, the Hawkeyes went undefeated until the NCAA championship final, where the team lost to undefeated South Carolina. Photo&#58 Emily Nyberg&#47;<em>The Daily Iowan</em>',
            location: {
                center: [-93.22821, 44.97697],
                zoom: 15.97,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'The Future',
            image: 'img/caitlin-clark.jpg',
            description: 'While Clark is no longer a student at the University of Iowa, this newfound era and energy surrounding women&#39;s basketball is not over. Viewership rates have already skyrocketed for the WNBA draft alone with Clark as the number one pick for the Indiana Fever. Several accomplished players have also already committed to the University of Iowa women&#39;s basketball team, demonstrating that growth of the sport in the state shows no sign of stopping. The Iowa Hawkeyes have changed the game of women&#39;s basketball, and it doesn&#39;t seem to be reverting any time soon.',
            location: {
                center: [-97.69209, 39.49374],
                zoom: 4.05,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
