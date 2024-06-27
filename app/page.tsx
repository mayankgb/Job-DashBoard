import Image from "next/image";
import Navbar from "./components/Navbar";
import LineTabs from "./components/Tabs";
import { redirect } from "next/navigation";

export default function Home() {
    redirect('/jobpreview')
}
