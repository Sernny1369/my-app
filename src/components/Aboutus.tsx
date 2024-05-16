import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import Activite from "./aboutus/activite";
import Target from "./aboutus/target";
import Flag from "./aboutus/flag";
import structure1 from "my-app\public\aboutus.png";

const inter = Inter({ subsets: ["latin"] });

export default function Aboutus() {
    return (
        <div>
            <div>
                <Activite />
            </div>
            <div>
                <Target/>
            </div>
            <div>
                <Flag />
            </div>
  
        </div>
    );
  }