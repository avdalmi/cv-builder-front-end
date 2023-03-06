import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Rating,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";

// Text fields
export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: "5px 0",
  minHeight: "50px",
  // backgroundColor: "thistle",
}));

export const CharTextStyled = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const TitleTextStyled = styled(Box)(({ theme }) => ({
  textAlign: "center",
  lineHeight: 0.3,
}));

// select fields
export const SelectFieldStyled = styled(Select)(({ theme }) => ({
  // backgroundColor: "thistle",
  // height: "50px",
  // margin: "5px 0",
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  // backgroundColor: "pink",
  margin: "7px 0",
}));

// radio groups
export const RadioGroupStyled = styled(RadioGroup)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
}));
export const RadioFormLabelStyled = styled(FormLabel)(({ theme }) => ({
  width: "50%",
  // backgroundColor: "lavender",
  display: "flex",
  alignItems: "center",
}));

export const RadioBoxStyled = styled(Box)(({ theme }) => ({
  // backgroundColor: "lavender",
  display: "flex",
  height: "50px",
}));

export const RatingStyled = styled(Rating)(({ theme }) => ({
  // backgroundColor: "lavender",
  margin: "5px 0",
}));

//buttons
export const AddButtonStyled = styled(Button)(({ theme }) => ({
  margin: "5px 0",
}));

export const DeleteButtonStyled = styled(Button)(({ theme }) => ({
  // textAlign: "center",
  // justifyContent: "center",
}));

export const DeleteButtonContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

// skills section
export const SkillsContainer = styled(Box)(({ theme }) => ({
  width: 500,
  margin: "0 auto",
  // backgroundColor: "lightgrey",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// work section
export const WorkContainer = styled(Box)(({ theme }) => ({
  width: 500,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const WorkFormControl = styled(FormControl)(({ theme }) => ({
  // backgroundColor: "lavender",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const SectionContainer = styled(Box)({
  width: 500,
  margin: "0 auto",
  // backgroundColor: "lightgrey"
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
