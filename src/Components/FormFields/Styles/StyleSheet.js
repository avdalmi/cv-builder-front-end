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
}));

export const CharTextStyled = styled(Typography)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
}));

export const TitleTextStyled = styled(Box)(({ theme }) => ({
    textAlign: "center",
    lineHeight: 0.3,
}));

export const SpanTitle = styled(Box)({
    backgroundColor: "#e6e6e6",
    boxShadow: "white 11px 0px 0px, white -13px, 0px, 0px",
    padding: "0 10px",
});

// select fields
export const SelectFieldStyled = styled(Select)(({ theme }) => ({
    // backgroundColor: "thistle",
    // height: "50px",
    // margin: "5px 0",
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
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
    display: "flex",
    alignItems: "center",
}));

export const RadioBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "50px",
}));

export const RatingStyled = styled(Rating)(({ theme }) => ({
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem"
}));

// work section
export const WorkContainer = styled(Box)(({ theme }) => ({
    width: "80vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const WorkFormControl = styled(FormControl)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}));

export const SectionContainer = styled(Box)({
    width: "80vw",
    margin: "0 auto",
    padding: "2rem"
});

export const SectionSubContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    border: "1px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));