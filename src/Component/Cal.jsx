import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // List of holidays (example dates)
  const holidays = [
    { day: 25, month: 11, year: 2024 }, // Example: Christmas on Dec 25, 2024
    { day: 1, month: 0, year: 2024 },  // Example: New Year's Day on Jan 1, 2024
  ];

  const isHoliday = (day, month, year) =>
    holidays.some(
      (holiday) =>
        holiday.day === day && holiday.month === month && holiday.year === year
    );

  // Function to get the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    const date = new Date(year, month, 1);
    return date.getDay(); // Returns the index of the first day (0-6)
  };

  // Function to get the number of days in the month
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month + 1, 0); // Get last day of the month
    return date.getDate(); // Returns the number of days
  };

  // Generate the days array for the current month
  const generateCalendarDays = (year, month) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    // Create an array for the calendar
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null); // Empty spaces for the days before the first day of the month
    }

    // Add the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Handle month navigation
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const days = generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth());

  // Get the month and year to display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Calendar Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Button onClick={goToPreviousMonth} variant="outlined">
          Prev
        </Button>
        <Typography variant="h5">{`${monthName} ${year}`}</Typography>
        <Button onClick={goToNextMonth} variant="outlined">
          Next
        </Button>
      </Box>

      {/* Calendar Days */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        gridAutoRows="minmax(5px, 1fr)"
        gap={1}
        sx={{
          width: "100%",
          height: "calc(100% - 70px)", // Adjust for header height
        }}
      >
        {/* Weekdays Header */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              fontWeight: "bold",
              color: day === "Sun" || day === "Sat" ? "orange" : "black",
            }}
          >
            {day}
          </Box>
        ))}

        {/* Calendar Days */}
        {days.map((day, index) => {
          const isWeekend =
            (index % 7 === 0) || // Sundays
            ((index + 1) % 7 === 0); // Saturdays
          return (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                bgcolor: day
                  ? isHoliday(day, currentDate.getMonth(), currentDate.getFullYear())
                    ? "#ffcccc"
                    : isWeekend
                    ? "#ffe4b3"
                    : "#f5f5f5"
                  : "transparent",
                borderRadius: "4px",
                boxShadow: day ? "0 0 5px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {day ? (
                <Button
                  variant="text"
                  onClick={() =>
                    alert(
                      isHoliday(day, currentDate.getMonth(), currentDate.getFullYear())
                        ? `Holiday on ${day}`
                        : `You clicked on ${day}`
                    )
                  }
                  style={{
                    color: isHoliday(day, currentDate.getMonth(), currentDate.getFullYear())
                      ? "red"
                      : "black",
                  }}
                >
                  {day}
                </Button>
              ) : (
                <Box />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Calendar;
