## Excel Splitter

#### Build and Install from Source Code (MacOS)

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