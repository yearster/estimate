import TextField from '@mui/material/TextField';
import './basicinfo.styles.scss';
import { Stack } from '@mui/material';
const BasicInfo = () => {

    return (
      <>
      {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center"></Stack> */}
        <Stack spacing={32}>
            <div className="test">
                <p >What year were you born</p>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </Stack>
      </>
    )
  }

export default BasicInfo;