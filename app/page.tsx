import Image from "next/image";
import Link from "next/link";
import ContactUs from "./contactUs/page";
import { routeModule } from "next/dist/build/templates/app-page";
// import ContactCard from "./components/ContactCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      <h1>Premier Relocation Management</h1>
      <p>Licensed•Bonded•Insured</p>
      <p>Serving the Pensacola Metropolitan Area!</p>
      <p>
        Moving You with Care,
        Every Step of the Way
        We are a team with heart. We will handle all of your relocation needs with empathy and compassion.
      </p>
      <h2>FREE CONSULTATION</h2>
      <p>
        During our initial meeting, we will discuss your relocation needs, as well as the timeline and cost for services.
      </p>
      <h2>Our comprehensive relocation services include:</h2>
      <ul>
        <li> - Reviewing the floor plan and room dimensions of your new home to determine which items can be accommodated (including furniture, books, artwork & photos)</li>
        <li> - Organizing items in your current home to increase move efficiency (designate items to be kept, sold, donated, etc.)</li>
        <li> - Making arrangements for items to be sold, donated, stored, moved, etc. (including moving supplies purchases)</li>
        <li> - Conducting a careful inventory, then supervising the packing and labeling of all items to be moved to your new home*Special Handling for fragile and/or sentimental items</li>
        <li> - Packing an “overnight“ bag with essentials</li>
        <li> - Supervising furniture and box placement in your new home</li>
        <li> - Unpacking boxes and placing items in your new home (prioritizing frequently used items)</li>
        <li> - Handling Utility transfers or terminations</li>
        <li> - Coordinating address change notifications (postal service, banks, subscriptions, etc.)</li>
      </ul>


      <Link href='/contactUs'><button className='btn btn-primary'>Contact Us!</button></Link>
      


<p>-----------------------------------</p>


    </main>
  );
}
