import { displayUserName } from "./displayUserName";
import { User } from "../interfaces/user.interface";

describe("displayUserName", () => {
  it("should correctly concatenate first name and last name", () => {
    const user: User = {
      firstName: "John",
      lastName: "Doe",
    };
    expect(displayUserName(user)).toBe("John Doe");
  });

  it("should handle empty strings", () => {
    const user: User = {
      firstName: "",
      lastName: "",
    };
    expect(displayUserName(user)).toBe(" ");
  });

  it("should handle single name", () => {
    const user: User = {
      firstName: "John",
      lastName: "",
    };
    expect(displayUserName(user)).toBe("John ");
  });

  it("should maintain spacing with multiple spaces in names", () => {
    const user: User = {
      firstName: "Mary Jane",
      lastName: "Watson Parker",
    };
    expect(displayUserName(user)).toBe("Mary Jane Watson Parker");
  });
});
