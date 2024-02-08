// Logement.jsx

import { useParams } from "react-router-dom";
import data from "../../data/data.json";

export default function Logement() {
    const { id } = useParams();
    const logement = data.find((logement) => logement.id === id);}