## GitHub repository link: https://github.com/EcoSenseTeam/ecosense 

# Description of folder heirarchy:
- ### Diagrams: (all .png files)
  - "block_architecture_layer_diagram" = architecture of the overall application
  - "carbon_calculator_sequence_diagram" = sequence diagram for the carbon footprint calculator feature
  - "info_sequence_diagram" = sequence diagram for the information/home page feature
  - "waste_sorting_quiz_sequence_diagram" = sequence diagram for the waste sorting quiz feature
  - "features_class_diagram" = class diagram of class interactions for all 3 features, pages, etc.

- ### Requirements: (.pdf file)
  - "CS160_EcoSense_requirements_documentation" = requirements document outlining intro + features

- ### Slides: (1 .pdf file, 1 .mov file)
  - "CS160_EcoSense_full_demo" = screen recording backup of entire application, features, & functionality
    - Might be too large, download raw file to view
  - "CS160_final_presentation_slide_deck" = downloaded version of presentation slide deck

- ### Source Code: (all development files)
  - Client subfolder (frontend)
    - public subfolder = piechart.png
    - src subfolder = tests, app.js, 5 component .js files
   


# Instructions for project setup and initiation:
1. Type the command "git clone https://github.com/EcoSenseTeam/ecosense.git"
  - If you already have the repo locally, use "git pull origin main"
2. Move into project directory with command "cd ecosense"
3. Run "npm install" in both the client and server folders
  - cd into each subdirectory: "source code" -> client and "source code" -> server
  - This installs all dependencies listed in the package.json files
4. Run "npm start" to initiate the project
  - First run in the server subfolder, and then in client
  - Server will run on port 5001, client on localhost:3000
5. A browser window will open the web application, and the application is running!
