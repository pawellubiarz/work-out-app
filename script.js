// Load exercises from JSON
fetch('exercises.json')
  .then(response => response.json())
  .then(exercises => {
    function generateWorkoutRoutine(exercises, fitnessLevel, goals, equipment) {
      // Implement your filtering logic here
      // This example filters based on equipment only
      return exercises.filter(exercise => {
        const exerciseEquipment = exercise.equipment.split(', ').map(e => e.trim());
        return equipment.some(e => exerciseEquipment.includes(e));
      });
    }
document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-form');
    const exercisesList = document.getElementById('exercises-list');

    workoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Fetch form values
        const fitnessLevel = document.getElementById('fitnessLevel').value;
        const goals = Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(el => el.value);
        const equipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);

        // Fetch exercises data from JSON file
        fetch('exercises.json') // Ensure this path is correct
            .then(response => response.json())
            .then(exercises => {
                // Filter exercises based on user selections
                const routine = generateWorkoutRoutine(exercises, fitnessLevel, goals, equipment);

                // Display the generated routine
                displayRoutine(routine);
            })
            .catch(error => {
                console.error('Error loading exercises:', error);
                // Display an error message to the user here
            });
    });
});    
    function displayRoutine(routine) {
      exercisesList.innerHTML = ''; // Clear existing list
      routine.forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise.name; // Display the exercise name
        exercisesList.appendChild(li);
      });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      const workoutForm = document.getElementById('workout-form');
      const exercisesList = document.getElementById('exercises-list');
    
      workoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
    
        // Fetch form values
        const fitnessLevel = document.getElementById('fitnessLevel').value;
        const goals = Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(el => el.value);
        const equipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);
    
        // Fetch exercises data from JSON file
        fetch('path/to/your/exercises.json')
          .then(response => response.json())
          .then(exercises => {
            // Filter exercises based on user selections
            const routine = generateWorkoutRoutine(exercises, fitnessLevel, goals, equipment);
    
            // Display the generated routine
            displayRoutine(routine);
          });
      });
    });

    const workoutForm = document.getElementById('workout-form');

    workoutForm.addEventListener('submit', (event) => {
      event.preventDefault(); 

      // Get form values (ensuring proper handling of multiple checkboxes)
      const fitnessLevel = document.getElementById('fitnessLevel').value;
      const goals = Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(el => el.value);
      const equipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);

      // Filter and generate routine
      const filteredExercises = filterExercises(exercises, fitnessLevel, goals, equipment);
      const routine = generateRoutine(filteredExercises);

      // Display routine with error handling
      displayRoutine(routine);
    });
  })
  .catch(error => {
    console.error('Error loading exercises:', error);
    // You might want to display an error message to the user here
  });
