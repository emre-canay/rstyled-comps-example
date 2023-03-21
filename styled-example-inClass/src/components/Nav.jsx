import Button from "./styled/Button";
import NavStyled from "./styled/NavStyled";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src="./images/canay.jpeg" width={"100px"} alt="logo" />
      </div>

      <div>
        <Button color="#3a42af">Apply Courses</Button>
        <Button bg="#3a42af">Talk To Adviser</Button>
      </div>
    </NavStyled>
  );
};

export default Nav;
