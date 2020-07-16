import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import xlsx from 'xlsx';

const useStyles = makeStyles({
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#3f51b5'
  },
});

export default ({ target, destination, rowCount, error }) => {

  // State management
  const readyToConvert = () => {
    return target.length > 0 && destination.length > 0 && !error;
  };
  const [ status, setStatus ] = useState('WAITING');
  const classes = useStyles({ status });

  // Break up XLSX and write CSV
  const convert = () => {

    const wb = xlsx.readFile(target);
    const ws = wb.Sheets[Object.keys(wb.Sheets)[0]];

    // convert the sheet to json for splitting
    const json = xlsx.utils.sheet_to_json(ws);

    // split json into chunks according to user inputted length
    const chunks = [];
    while(json.length > 0) {
      chunks.push(json.splice(0, rowCount));
    }

    // extract headers
    const headersList = Object.keys(chunks[0][0]);

    // convert json to csv strings
    const allRecordsAsCSV = chunks.map(chunk => {
      let string = `${headersList.join(',')}\n`;
      for (let row of chunk) {
        string += Object.keys(row).map(key => row[key]).join(',');
        string += '\n';
      }
      return string;
    });
    
    // write each chunk to a csv file
    const baseName = path.parse(target).name;
    const newDirectory = `${destination}/${baseName}`;
    fs.mkdirSync(newDirectory);
    allRecordsAsCSV.forEach((chunk, i) => {
      fs.writeFileSync(`${newDirectory}/${baseName}.${i}.csv`, chunk);
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" disabled={!readyToConvert()} onClick={convert} className={classes.button}>
        CONVERT
      </Button>
    </div>
  );
};

