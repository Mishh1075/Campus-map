const campusData = {
    buildings: [
        {
            id: 'mainBuilding',
            name: 'Main Building',
            coordinates: [19.045983, 72.871216],
            description: 'The Main Building is the central hub of the institute, featuring administrative offices, lecture halls, and common areas.',
            floors: 9,
            classroomsPerFloor: 12,
            totalClassrooms: 108,
            facilities: ['Administrative Offices', 'Lecture Halls', 'Auditorium', 'Cafeteria'],
            floorData: [
                { floor: "Ground Floor", classrooms: ["Medical Room", "Workshop", "Chemistry Lab", "Staircase 01", "Administrative Office", "Staircase 02", "CR01", "Canteen", "IT Entrance", "Staircase 03",  "Stationary and Xerox"], facilities: ["Medical Room", "Administrative Office", "Cafeteria", "Workshop", "Chemistry Lab"] },
                { floor: "1st Floor", classrooms: ["Auditorium", "Library", "Examination Cell"], facilities: ["Auditorium", "Library", "Examination Cell"] },
                { floor: "2nd Floor", classrooms: ["203", "202", "cr1", "204", "205A", "205B", "206", "207"], facilities: ["BEE lab"] },
                { floor: "3rd Floor", classrooms: ["303", "302A", "302B", "301A", "cr4", "cr5", "cr6" ], facilities: ["Lecture Halls", "Research Lab"] },
                { floor: "4th Floor", classrooms: ["403", "402B", "402A", "401A", "401B", "cr7", "cr8", "cr9" ], facilities: ["Lecture Halls", "Department Library"] },
                { floor: "5th Floor", classrooms: ["503", "502A", "502B", "501A", "501B", "CR10", "cr11", "cr12" ], facilities: ["Lecture Halls", "Conference Room"] },
                { floor: "6th Floor", classrooms: ["603", "602", "601", "604A", "604B", "605A", "6O5B", "606", "607"], facilities: ["Lecture Halls", "Student Lounge"] },
                { floor: "7th Floor", classrooms: ["703", "cr13", "701", "cr14", "706", "cr15", "cr16", ], facilities: ["Auditorium", "Event Space"] }
            ]
        },
        {
            id: 'itBuilding',
            name: 'IT Building',
            coordinates: [19.045813, 72.871016],
            description: 'The IT Building houses computer labs, classrooms, and faculty offices for the Information Technology department.',
            floors: 1,
            classrooms: 11,
            facilities: ['Computer Labs', 'Seminar Hall', 'HOD Cabin', 'RiddL Workplace'],
            floorData: [
                { floor: "Ground Floor", labs: ["L01", "L02", "L03", "L04", "HOD Cabin", "L05", "L06", "L07", "L08",  "Riddl Workplace", "Seminar Hall", "Boys Common Room", "Girls Common Room"], facilities: ["Computer Labs","Riddl Workplace","Seminar Hall","Boy's Common Room","Girl's Common Room","HOD Cabin"] }
            ]
        }
    ],
    grounds: [
        {
            id: 'footballGround',
            name: 'Football Ground',
            coordinates: [19.047023, 72.871843],
            description: 'A large open ground used for football and other sports activities.',
            facilities: ['Football Field', 'Running Track']
        },
        {
            id: 'turfCricketGround',
            name: 'Turf & Cricket Ground',
            coordinates: [19.046283, 72.871908],
            description: 'A well-maintained turf ground used for cricket and other sports.',
            facilities: ['Cricket Pitch', 'Turf Field']
        }
    ]
};

const directionsDatabase = {
    'mainBuilding': {
        'Auditorium': {
            'Staircase1': [
                { step: 1, instruction: "Locate Stircase no:01" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Auditorium is on the left" }
            ],
            'Staircase2': [
                { step: 1, instruction: "Locate Stircase no:02" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "You will enter the Auditorium" }
            ],
            'Staircase3': [
                { step: 1, instruction: "Locate Stircase no:03" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Auditorium is on the right" }
            ]
        },
        'Library': {
            'Staircase1': [
                { step: 1, instruction: "Locate Stircase no:01" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Take a long right" },
                { step: 4, instruction: "Library Entrance is on your right"}
            ],
            'Staircase2': [
                { step: 1, instruction: "Locate Stircase no:02" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "You will enter the Auditorium" },
                { step: 4, instruction: "Take a left and walk out through the Auditorium"},
                { step: 5, instruction: "Take right at extreme end you enter the Library"}
            ],
            'Staircase3': [
                { step: 1, instruction: "Locate Stircase no:03" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Take a right and walk out through the Auditorium" },
                { step: 4, instruction: "Take a right at extreme end you enter the Library"}
            ]
        },
        'Examination Cell': {
            'Staircase1': [
                { step: 1, instruction: "Locate Staircase no: 01" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Take a short right and enter through the door" },
                { step: 4, instruction: "Take a right and you reached the office"}
            ],
            'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "You will enter the Auditorium" },
                { step: 4, instruction: "Take a left and walk out through the Auditorium"},
                { step: 5, instruction: "You will see the entrance to Examination cell"}
            ],
            'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 1st floor" },
                { step: 3, instruction: "Take a right and walk out through the Auditorium" },
                { step: 4, instruction: "You will see the entrance to Examination cell"}
            ]
        },
    },
     '2nd floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 2nd floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "207,206,205A,205B,206,207 will be on your right" }  
],
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 2nd floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "204,205A,203,202,cr1 will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "205B,206,207 will be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 2nd floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will 203,202,cr1"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will 204,205A,205B,206,207"}
    '3rd floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 3rd floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "cr7,cr8,cr9 will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 3rd floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "303,302A,301A will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "cr4,cr5,cr6 will be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 3rd floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will 303,302A,302B,301A"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will cr4,cr5,c6"}
           
        ]
    '4th floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 4th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "cr7,cr8,cr9 will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 4th floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "403,402A,402B,401A,401B,cr7 will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "cr8,cr9 will be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 4th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will see 403,402A,402B,401A,401B"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will cr7,cr8,cr9"}
    
    '5th floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 5th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "cr10,cr11,cr12 will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 5th floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "503,502b,502a,501a,501b,CR1O will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "cr11,cr12 will be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 5th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will see 503,502A,502B,501A,501B"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will see cr10,cr11,cr12"}

  '6th floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 6th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "604A,604B,605A,605B,606,607 will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 6th floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "603,602,603,604A,604B will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "605A,605B,606,607 be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 6th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will see 603,602,603"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will see 604A,604B,605A,605B,606,607"}
    '7th floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 7th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "703,cr13,701 will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 7th floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "hod cabin,cr14,706,cr15,cr16 will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "cr14,cr15,cr16,706 be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 7th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will see 703,cr13,701"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will see hod cabin,cr14,706,cr15,cr16"}
     '8th floor': {
            'Staircase1': [
                { step: 1, instruction: "locate staircase no:1" },
                { step: 2, instruction: "climb upto 8th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "808,807,nli lab,806,805,physics lab will be on your right" }  
               
                'Staircase2': [
                { step: 1, instruction: "Locate Staircase no: 02" },
                { step: 2, instruction: "Climb up to 8th floor" },
                { step: 3, instruction: "take a left towards the end" },
                { step: 4, instruction: "803,802,801,scilab,physics lab,806 will be on your left"}
                { step: 5, instruction: "take a right towards end"}
                { step: 6, instruction: "nli lab,807,808 be on your right"}
               
        ],
                'Staircase3': [
                { step: 1, instruction: "Locate Staircase no: 03" },
                { step: 2, instruction: "Climb up to 8th floor" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "You will see 803,802,801,scilab"}
                { step: 5, instruction: "Take a left towards the end" },
                { step: 6, instruction: "You will see physics lab,806,nli lab,807,808"}
            
     'itBuilding': { 
        'L01': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L01 is the first lab on your left" }
            ]
        },
        'L02': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L02 is the second lab on your left" }
            ]
        },
        'L03': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L03 is the third lab on your left" }
            ]
        },
        'L04': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L04 is the fourth lab on your left" }
            ]
        },
        'L05': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L05 is the fifth lab on your left" }
            ]
        },
        'L06': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L06 is the sixth lab on your left" }
            ]
        },
        'L07': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "L07 is the seventh lab on your left" }
            ]
        },
        'Riddl Workplace': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "Riddl Workplace will be on your left" }
            ]
        },
        'Seminar Hall': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "Seminar Hall will be on your right" }
            ]
        },
        'Boys Common Room': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "Boys Common Room will be on your right" }
            ]
        },
        'Girls Common Room': {
            'MainEntrance': [
                { step: 1, instruction: "Enter IT Department through the main entrance" },
                { step: 2, instruction: "Walk straight ahead" },
                { step: 3, instruction: "Take a right towards the end" },
                { step: 4, instruction: "Girls Common Room will be on your right" }
            ]
        },
    }
};

const defaultDirections = {
    'mainGate': [
        { step: 1, instruction: "Enter through the main gate" },
        { step: 2, instruction: "Head towards the respective building" },
        { step: 3, instruction: "Find the correct floor" },
        { step: 4, instruction: "Look for room signs and follow them to your destination" }
    ],
};
