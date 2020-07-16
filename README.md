# Excel Splitter

## What does it do?
This program will allow you to split an XLSX file into multiple CSV files according to a row count provided by the user.

## Build and Install from Source Code (MacOS)

1. **Clone the repository onto your machine** 

From the terminal, run the command:
```
git clone https://github.com/rory-roccio/excel-splitter-electron.git
```
This will download the source files onto your local machine.

2. **Install dependencies**

Navigate into the root folder of the clone repository.
```
cd excel-splitter-electron
```
From the root folder, run command:
```
npm install
```
This command will install external javascript libraries which the source code relies on.
*Note: this requires Node installation **https://nodejs.org/en/download/***


3. **Bundle the application**

From the root folder, run command:

```
npm run build
```
This will bundle the React application and source files into one vanilla javascript file which will be used to create the MacOS application.

4. **Build the MacOS application**

From the root folder, run command:

```
npm run dist
```
This will compile the source code into a bundle that can be run on MacOS. New files will be added to the 'dist' folder in the root directory.

5. **Add application to 'Applications'**

From the root folder, run command:

```
open dist
```
This will open Finder into the 'dist' folder inside the repository. There you should find the Mac application bundle *Electron Splitter 1.0.0.dmg*. You can double click this which will open a dialog. Drag the icon into the 'Applications' folder. You will now be able to find the working Electron Splitter in your Applications folder!

*Note: Feel free to delete the repository after copying Electron Splitter 1.0.0.dmg to another location.*


## Using Excel Splitter

When you open the application, you will be met with a simple user interface. First, you should select the top icon which will open the file dialog. Here you can select an XLSX file which you would like to process. Next, enter a row count between 1 and 300. This will determine the number of rows to enter into each resulting CSV file. Finally, click the bottom icon to select a directory in which to place the resulting folder containing your new CSV files. Once you have valid entries for these three inputs, the 'CONVERT' button should become active. Click it to split the XLSX file into CSV files. You will be able to find the resulting CSV files in the target directory you selected.

*Note: Currently there is no feedback as to whether the operation was successful or not, but rest assured your files will be there after one click! If not, please raise the issue with **rory-roccio**.*

*Note: Excel Splitter will not delete or in any way alter the target XLSX file.*