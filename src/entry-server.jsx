import { renderToString } from "react-dom/server";
import RoutePath from "./Routes";

export function render() {
    return renderToString(<RoutePath />);

}