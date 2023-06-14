import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === "Home" && "#3333d4",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === "Home" ? "white" : "#3333d4",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === "Home" ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
