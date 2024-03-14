import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function UserInfoForm() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement your form submission logic here (e.g., send data to server)
    // For example, a basic validation:
    if (
      name === "" ||
      job === "" ||
      age === "" ||
      city === "" ||
      salary === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const formInput = {
      'name': name,
      'age': age,
      'city': city,
      'job': job,
      'salary': salary
    }

    const response = await fetch(
      "https://react-http-c5a48-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json", {
        method: 'POST',
        body: JSON.stringify(formInput)
      }
    );
    const result = await response.json();
    // if(!result.ok) {
    //   throw Error('Error sending data')
    // }
    // console.log("Name:", name);
    // console.log("Job:", job);
    // console.log("Age:", age);
    // console.log("City:", city);
    // console.log("Salary:", salary);

    // Reset form fields
    setName("");
    setJob("");
    setAge("");
    setCity("");
    setSalary("");
    navigate("/table")
  };

  return (
    <form>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">User Information</Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            value={job}
            onChange={(event) => setJob(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="Age"
            variant="outlined"
            type="number"
            fullWidth
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="Salary"
            variant="outlined"
            type="number"
            fullWidth
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UserInfoForm;
