const baseStyles = ["color: #fff", "padding: 2px 4px", "border-radius: 2px"];

const styles = {
  success: [...baseStyles, "background-color: green"],
  warning: [...baseStyles, "background-color: orange"],
  danger: [...baseStyles, "background-color: red"],
  info: [...baseStyles, "background-color: blue"],
};

export function log(string, modifier = "info") {
  console.log(`%c${string}`, styles[modifier].join(";"));
}
