import {addHeadboard, addFooter} from "./components/Headboard.js"

export const app = () => {
    return `${addFooter()} ${addHeadboard()}`;
}