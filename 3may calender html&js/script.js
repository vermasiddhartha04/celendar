document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById('calendar-container');
    const monthYearElement = document.getElementById('month-year');
    
    // Initial date (May 2024)
    let currentYear = 2024;
    let currentMonth = 4; // 0-indexed (0 for January, 1 for February, etc.)

    // Function to generate the calendar
    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // Clear previous calendar
        calendarContainer.innerHTML = '';

        // Display month and year
        const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month));
        monthYearElement.textContent = `${monthName} ${year}`;

        // Create table
        const table = document.createElement('table');
        const tr = document.createElement('tr');

        // Create table headers (days of the week)
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        daysOfWeek.forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            tr.appendChild(th);
        });
        table.appendChild(tr);

        // Create calendar days
        let date = 1;
        for (let i = 0; i < 6; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const td = document.createElement('td');
                if (i === 0 && j < firstDayOfMonth) {
                    // Empty cells before the first day of the month
                    td.textContent = '';
                } else if (date > daysInMonth) {
                    // No more days in the month
                    break;
                } else {
                    // Display the date
                    td.textContent = date;
                    date++;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        // Append table to calendar container
        calendarContainer.appendChild(table);
    }

    // Initial calendar generation
    generateCalendar(currentYear, currentMonth);
});
