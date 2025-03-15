document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([19.046283, 72.871908], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const buildingLayer = L.layerGroup().addTo(map);
    const groundLayer = L.layerGroup().addTo(map);

    const buildingIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div class='poi-icon'>B</div>",
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    const groundIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div class='poi-icon'>G</div>",
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    campusData.buildings.forEach(building => {
        const marker = L.marker(building.coordinates, { icon: buildingIcon }).addTo(buildingLayer);
        
        let popupContent = `
            <div>
                <div class="popup-content">
                    <h3 class="font-bold">${building.name}</h3>
                    <p class="text-sm text-gray-600">${building.description}</p>
                    <div class="mt-2 text-sm">
                        <p>Floors: ${building.floors}</p>
                        <p>Total Classrooms: ${building.totalClassrooms || building.classrooms}</p>
                        <p>Facilities: ${building.facilities.join(', ')}</p>
                    </div>
                    <div class="mt-2 flex space-x-2">
                        <button class="flex-1 py-1 px-2 bg-blue-600 text-white text-xs rounded view-inside-btn" data-building-id="${building.id}">View Inside</button>
                    </div>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        building.marker = marker;
    });

    campusData.grounds.forEach(ground => {
        const marker = L.marker(ground.coordinates, { icon: groundIcon }).addTo(groundLayer);
        marker.bindPopup(`
            <div>
                <div class="popup-content">
                    <h3 class="font-bold">${ground.name}</h3>
                    <p class="text-sm text-gray-600">${ground.description}</p>
                    <div class="mt-2 text-sm">
                        <p>Facilities: ${ground.facilities.join(', ')}</p>
                    </div>
                </div>
            </div>
        `);
        ground.marker = marker;
    });

    const buildingView = document.getElementById('buildingView');
    const buildingTitle = document.getElementById('buildingTitle');
    const closeBuilding = document.getElementById('closeBuilding');
    const floorButtons = document.getElementById('floorButtons');
    const facilitiesList = document.getElementById('facilitiesList');
    const roomsList = document.getElementById('roomsList');
    const roomsTitle = document.getElementById('roomsTitle');
    
    const directionsPanel = document.getElementById('directionsPanel');
    const destinationTitle = document.getElementById('destinationTitle');
    const closeDirections = document.getElementById('closeDirections');
    const originButtons = document.getElementById('originButtons');
    const directionsList = document.getElementById('directionsList');

    let currentBuilding = null;
    let currentFloor = null;
    let currentRoom = null;
    let currentOrigin = 'MainEntrance'; // Default origin for IT Building

    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('view-inside-btn')) {
            const buildingId = e.target.getAttribute('data-building-id');
            const building = campusData.buildings.find(b => b.id === buildingId);
            
            if (building) {
                showBuildingInside(building);
                map.closePopup();
            }
        }
    });
    
    closeBuilding.addEventListener('click', function() {
        buildingView.classList.remove('active');
        currentBuilding = null;
        currentFloor = null;
    });
    
    closeDirections.addEventListener('click', function() {
        directionsPanel.classList.remove('active');
        currentRoom = null;
    });
    
    // Set up origin buttons dynamically based on the building
    function setupOriginButtons(buildingId) {
        originButtons.innerHTML = ''; // Clear previous buttons

        if (buildingId === 'itBuilding') {
            // Only show "Main Entrance" for IT Building
            const button = document.createElement('button');
            button.classList.add('px-3', 'py-1', 'text-sm', 'rounded', 'border', 'border-gray-300', 'dark:border-gray-600');
            button.textContent = 'Main Entrance';
            button.dataset.origin = 'MainEntrance';
            button.addEventListener('click', function() {
                currentOrigin = 'MainEntrance';
                updateActiveOriginButton(button);
                if (currentRoom && currentBuilding) {
                    showDirections(currentBuilding.id, currentRoom, currentOrigin);
                }
            });
            originButtons.appendChild(button);
        } else {
            // Show staircases for other buildings
            const origins = ['Staircase1', 'Staircase2', 'Staircase3'];
            origins.forEach(origin => {
                const button = document.createElement('button');
                button.classList.add('px-3', 'py-1', 'text-sm', 'rounded', 'border', 'border-gray-300', 'dark:border-gray-600');
                button.textContent = origin;
                button.dataset.origin = origin;
                button.addEventListener('click', function() {
                    currentOrigin = origin;
                    updateActiveOriginButton(button);
                    if (currentRoom && currentBuilding) {
                        showDirections(currentBuilding.id, currentRoom, currentOrigin);
                    }
                });
                originButtons.appendChild(button);
            });
        }

        // Set the first button as active by default
        const firstButton = originButtons.querySelector('button');
        if (firstButton) {
            firstButton.classList.add('active');
            currentOrigin = firstButton.dataset.origin;
        }
    }

    function updateActiveOriginButton(activeButton) {
        originButtons.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    function showBuildingInside(building) {
        currentBuilding = building;
        buildingTitle.textContent = building.name;
        
        floorButtons.innerHTML = '';
        building.floorData.forEach((floor, index) => {
            const button = document.createElement('button');
            button.classList.add('px-3', 'py-1', 'text-sm', 'rounded', 'border', 'border-gray-300', 'dark:border-gray-600');
            button.textContent = floor.floor;
            button.dataset.floorIndex = index;
            
            button.addEventListener('click', function() {
                showFloorDetails(building, index);
                
                document.querySelectorAll('#floorButtons button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
            
            floorButtons.appendChild(button);
        });
        
        if (building.floorData.length > 0) {
            showFloorDetails(building, 0);
            floorButtons.querySelector('button').classList.add('active');
        }
        
        // Set up origin buttons based on the building
        setupOriginButtons(building.id);
        
        buildingView.classList.add('active');
        directionsPanel.classList.remove('active');
    }
    
    function showFloorDetails(building, floorIndex) {
        currentFloor = floorIndex;
        const floorData = building.floorData[floorIndex];
        
        facilitiesList.textContent = floorData.facilities.join(', ');
        roomsList.innerHTML = '';
        
        if (floorData.labs) {
            roomsTitle.textContent = 'Labs:';
            floorData.labs.forEach(lab => {
                const labElement = document.createElement('div');
                labElement.classList.add('lab', 'text-sm', 'mb-2');
                labElement.textContent = lab;
                labElement.dataset.room = lab;
                labElement.dataset.building = building.id;
                
                labElement.addEventListener('click', function() {
                    const roomId = this.dataset.room;
                    const buildingId = this.dataset.building;
                    showDirectionsPanel(buildingId, roomId);
                });
                
                roomsList.appendChild(labElement);
            });
        } else {
            roomsTitle.textContent = 'Classrooms:';
            floorData.classrooms.forEach(classroom => {
                const classroomElement = document.createElement('div');
                classroomElement.classList.add('classroom', 'text-sm', 'mb-2');
                classroomElement.textContent = classroom;
                classroomElement.dataset.room = classroom;
                classroomElement.dataset.building = building.id;
                
                classroomElement.addEventListener('click', function() {
                    const roomId = this.dataset.room;
                    const buildingId = this.dataset.building;
                    showDirectionsPanel(buildingId, roomId);
                });
                
                roomsList.appendChild(classroomElement);
            });
        }
    }
    
    function showDirectionsPanel(buildingId, roomId) {
        currentRoom = roomId;
        
        const building = campusData.buildings.find(b => b.id === buildingId);
        destinationTitle.textContent = `Directions to ${roomId} in ${building.name}`;
        
        // Update active origin button
        const activeButton = originButtons.querySelector(`button[data-origin="${currentOrigin}"]`);
        if (activeButton) {
            updateActiveOriginButton(activeButton);
        }
        
        showDirections(buildingId, roomId, currentOrigin);
        directionsPanel.classList.add('active');
        buildingView.classList.remove('active');
    }
    
    function showDirections(buildingId, roomId, origin) {
        directionsList.innerHTML = '';
        
        let directions;
        
        if (directionsDatabase[buildingId] && 
            directionsDatabase[buildingId][roomId] && 
            directionsDatabase[buildingId][roomId][origin]) {
            directions = directionsDatabase[buildingId][roomId][origin];
        } else {
            directions = defaultDirections[origin];
        }
        
        directions.forEach(direction => {
            const directionCard = document.createElement('div');
            directionCard.classList.add('direction-card', 'p-3', 'bg-white', 'dark:bg-gray-700', 'rounded', 'shadow-sm');
            directionCard.innerHTML = `
                <div class="flex items-start">
                    <div class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                        ${direction.step}
                    </div>
                    <p>${direction.instruction}</p>
                </div>
            `;
            directionsList.appendChild(directionCard);
        });
    }
});