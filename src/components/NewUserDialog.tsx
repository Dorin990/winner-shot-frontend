import Dialog from "./Dialog";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { useState } from "react";
import {
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useSecureFetch } from "../utils/hooks";
import { setUser } from "../state/user";
import { useAuth0 } from "@auth0/auth0-react";

export default function NewUserDialog() {
  const { found } = useAppSelector((state) => state.user);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const createNewUser = useSecureFetch("users", "POST", { name });
  const dispatch = useAppDispatch();
  const { user } = useAuth0();

  const onSendClick = async () => {
    try {
      const newUser = await createNewUser();
      dispatch(
        setUser({
          id: newUser.id,
          name: newUser.name,
          imageUrl: user?.picture ?? "",
        })
      );
    } catch (error) {
      setError(true);
    }
  };

  const onNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
    setError(false);
  };

  return (
    <Dialog
      open={!found}
      title="ברוך הבא"
      actions={
        <DialogActions>
          <Button onClick={onSendClick} color="primary" variant="contained">
            שלח
          </Button>
        </DialogActions>
      }
    >
      <DialogContentText>
        היי, רגע לפני שמתחילים, איך תרצה שנקרא לך?
      </DialogContentText>
      <TextField
        helperText={error ? "אתה בטוח שזה השם שלך?" : null}
        error={error}
        value={name}
        onChange={onNameChange}
        autoFocus
        margin="dense"
        label="שם מלא"
        fullWidth
      />
    </Dialog>
  );
}
