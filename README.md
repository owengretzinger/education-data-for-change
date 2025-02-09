<div align="center">
  <a href="https://ow
<div align="center">
  <a href="https://owengretzinger.github.io/education-data-for-change/">
    <img src="https://github.com/user-attachments/assets/ea619616-cb99-4ecf-bf97-d6c2eaebf663" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Education Data for Change</h3>

  <p align="center">
    Visualizing Ontario education data to promote informed decisions and equitable resource allocation.
    <br />
     <a href="https://owengretzinger.github.io/education-data-for-change/">owengretzinger.github.io/education-data-for-change</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

Education Data for Change is a web application designed to visualize and analyze education data from Ontario schools. The project aims to provide insights into school performance, demographics, and suspension rates, enabling users to make informed decisions and advocate for equitable resource allocation. The data is sourced from data.ontario.ca.

### Key Features

- **School Search:** Allows users to search for specific schools and view relevant data.
- **Data Visualization:** Presents school and city-level statistics through radial progress charts.
- **Interactive Map:** Integrates a Google Maps embed to visualize school locations.
- **Suspension Rate Analysis:** Provides historical suspension data for school boards.
- **EQAO Performance:** Displays school and city averages for EQAO scores.
- **Income Level Analysis:** Shows the percentage of students from low-income households.
- **Gifted Student Identification:** Highlights schools with a high percentage of gifted students.
- **Graphs:** Displays relevant graphs about EQAO scores, income, gifted percentages, and suspension rates.

## Architecture

- **Frontend:**
  - HTML, CSS, and JavaScript for the user interface.
  - Tailwind CSS and DaisyUI for styling.
  - Fuse.js for school search functionality.
  - Google Maps Embed API for interactive map.
- **Backend:**
  - Python scripts (SQLite-queries.py, plot.py) for data processing and analysis (though not actively used for serving data in the current implementation).
  - CSV files (scores.csv, suspensions.csv) store the education data.
- **Data Storage:**
  - CSV files for storing school information, demographics, and suspension data.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed.
- DaisyUI and Tailwind CSS installed (if not already present).

### Installation

1.  Clone the repository:
   ```sh
   git clone https://github.com/owengretzinger/education-data-for-change.git
   ```
2.  Navigate to the project directory:
   ```sh
   cd education-data-for-change
   ```
3.  Install the dependencies:
   ```sh
   npm install
   ```
4.  Run the project (you may need a live server):
   ```sh
   serve .
   ```
   or
   ```sh
   npm run tailwindcss:build
   ```
   then open index.html in your browser.

## Acknowledgments

- This README was generated with [README Generator](https://github.com/owengretzinger/readme-generator) — an AI tool that understands your entire codebase.
- Data sourced from [data.ontario.ca](https://data.ontario.ca/en/dataset/school-information-and-student-demographics).
- Developed for [DeltaHacks IX](https://deltahacks.com/).
