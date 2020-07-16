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
Run command:
```
npm install
```
*Note: this requires Node installation **https://nodejs.org/en/download/***


3. **Bundle the application**
Run command:
```
npm run build
```

4. **Build the MacOS application**
Run command:
```
npm run dist
```

5. **Add application to 'Applications'**
Run command:
```
open dist
```
This will open Finder into the 'dist' folder inside the repository. There you should find the Mac application bundle *Electron Splitter 1.0.0.dmg*. You can double click this which will open a dialog. Drag the icon into the 'Applications' folder. You will now be able to find the working Electron Splitter in your Applications folder!