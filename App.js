

const reactElement = React.createElement("h1", { id: "text" }, "Namaste React 🚀");
const reactElement2 = React.createElement("h1", { id: "text" }, "React Element 2");

const parent = React.createElement("div", { id: "parent" }, [
    reactElement,
    reactElement2
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

